import { OnQueueCompleted, OnQueueError, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { PrismaService } from '../../prisma/prisma.service';
import { Job } from 'bull';
import { PubSub } from 'graphql-subscriptions';
import { $Enums, Prisma } from '@prisma/client';
import { MailerService } from '@nestjs-modules/mailer';
import { Logger } from '@nestjs/common';
import { MessagesTemplateService } from '../../messages-template/messages-template.service';
import { PublishStateEnum } from '../../enums/publish-state.enum';
import { Queue } from '../../@generated/prisma-nestjs-graphql';

export type JobDataType = {
    messageId: string;
    assignUserId: string;
    userContactId: string;
    contactValue: string;
    queueId?: string;
    failedReason?: string;
}

@Processor('message-queue')
export class MessageProcessor {
    /**
     * @param prismaService
     * @param mailerService
     * @param pubSub
     * @param logger
     * @param messagesTemplateService
     */
    constructor(
        private readonly prismaService: PrismaService,
        private readonly mailerService: MailerService,
        private readonly pubSub: PubSub,
        private readonly logger: Logger,
        private readonly messagesTemplateService: MessagesTemplateService,
    ) {
    }

    /**
     * Process queue
     * @param job
     */
    @Process($Enums.UserContactType.EMAIL)
    async handleEmailSend(job: Job<JobDataType>) {
        this.logger.debug(`job ${job.id} email process`);

        // TODO: UPRAVIT!

        /**
         * Update data when process start
         */
        await this.updateDataOnStartProcess(job);

        /**
         * Get message data
         */
        const message: Prisma.MessageGetPayload<{
            include: {
                createdUser: true,
                messageType: true,
            }
        }> | null = await this.prismaService.message.findUnique({
            include: {
                createdUser: true,
                messageType: true,
            },
            where: {
                id: job.data.messageId,
            },
        });

        /**
         * If message doesn't exist
         * Go to failed
         */
        if (null === message) {
            await job.update({
                ...job.data,
                failedReason: `Message doesn't exist!`,
            });
            await job.retry();

            return;
        }

        // Generate email subject
        const getSubject = this.getEmailSubject(message);

        // Set email context
        this.messagesTemplateService.context = {
            calculateSubject: getSubject,
            message: message,
            messageType: message.messageType,
            createdUser: message.createdUser,
        }

        // https://github.com/nest-modules/mailer
        await this.mailerService.sendMail({
            to: job.data.contactValue,
            subject: getSubject,
            text: message.body,
            html: this.messagesTemplateService.getMessageOutput().html,
            // template: 'email',
            // context: {
            //     body: message.body,
            // },
        });
        this.logger.log(`${job.data.contactValue} email send`);
    }

    @Process($Enums.UserContactType.SMS)
    async handleSmsSend(job: Job<JobDataType>) {
        this.logger.debug(`job ${job.id} sms process`);

        /**
         * Update data when process start
         */
        await this.updateDataOnStartProcess(job);

        this.logger.log(`Send sms to ${job.data.contactValue}`);
    }

    /**
     * Queue error
     * @param error
     */
    @OnQueueError()
    async handleOnQueueError(error: Error) {
        this.logger.error(`job failed with message: ${error.message}`, error.stack);
    }

    /**
     * Job is failed
     * @param job
     */
    @OnQueueFailed()
    async handleOnQueueFailed(job: Job<JobDataType>) {
        this.logger.warn(`job ${job.id} failed`);
        this.logger.error(job.failedReason);

        const queue: Queue = await this.queueUpdatedFromEvent(job, {
            attempt: job.attemptsMade,
            failedReason: job.failedReason,
            status: (await job.getState()).toString(),
        });

        await this.publishChanges(PublishStateEnum.JOB_MESSAGE_STATUS, queue);
    }

    /**
     * Job is completed
     * @param job
     */
    @OnQueueCompleted()
    async handleOnQueueCompleted(job: Job<JobDataType>) {
        this.logger.log(`job ${job.id} completed`);

        const queue: Queue = await this.queueUpdatedFromEvent(job, {
            attempt: job.attemptsMade,
            failedReason: null,
            status: (await job.getState()).toString(),
            finishedAt: new Date(),
        });

        await this.publishChanges(PublishStateEnum.JOB_MESSAGE_STATUS, queue);
    }

    /**
     * Generate email subject
     * @param message
     * @private
     */
    private getEmailSubject(message: Prisma.MessageGetPayload<{
        include: {
            createdUser: true;
            messageType: true
        }
    }>): string {
        return `[${message.messageType.name}] ${message?.prefix ? `${message.prefix}: ` : ''}${message.title}`;
    }

    /**
     * Update assignUsersOnMessage by queue process
     * @param job
     * @param data
     * @private
     */
    private async queueUpdatedFromEvent(job: Job<JobDataType>, data: Prisma.QueueUpdateInput): Promise<Queue> {
        return this.prismaService.queue.update({
            include: {
                user: true,
                userContact: true,
            },
            data: data,
            where: {
                id: job.data.queueId ?? undefined,
                jobId: Number(job.id),
            },
        });
    }

    /**
     * Upsert data on start process
     * @param job
     * @private
     */
    private async updateDataOnStartProcess(job: Job<JobDataType>) {
        const jobId: number = Number(job.id);

        if (job.data.queueId) {
            await this.prismaService.queue.update({
                data: {
                    jobId: jobId,
                    status: (await job.getState()).toString(),
                    attempt: job.attemptsMade,
                },
                where: {
                    id: job.data.queueId,
                },
            });
        } else {
            const upsertQueue = await this.prismaService.queue.create({
                data: {
                    userId: job.data.assignUserId,
                    jobId: jobId,
                    userContactId: job.data.userContactId,
                    status: (await job.getState()).toString(),
                    enqueueAt: new Date(),
                    attempt: job.attemptsMade,
                },
            });

            await job.update({
                ...job.data,
                queueId: upsertQueue.id,
            });
        }
    }

    /**
     * Publish changes
     * @param changesName
     * @param data
     * @private
     */
    private async publishChanges(changesName: string, data: Queue) {
        await this.pubSub.publish(changesName, {
            [changesName]: data,
        });
    }
}