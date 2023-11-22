import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Prisma, UserContact } from '@prisma/client';
import {
    CreateOneMessageArgs,
    FindManyMessageArgs,
    FindUniqueMessageArgs,
    Message,
    MessageCreateInput,
} from '../@generated/prisma-nestjs-graphql';

@Injectable()
export class MessageService {
    constructor(
        private readonly prismaService: PrismaService,
        @InjectQueue('message-queue')
        private readonly messageQueue: Queue,
        private logger: Logger,
    ) {
    }

    /**
     * Create message
     * @param createOneMessageArgs
     */
    async create(createOneMessageArgs: CreateOneMessageArgs): Promise<Message> {
        const newMessage: Prisma.MessageGetPayload<{
            include: {
                createdUser: true,
                messageType: true,
                assignGroups: {
                    include: {
                        userGroup: {
                            include: {
                                assignUsers: {
                                    include: {
                                        userContacts: true
                                    }
                                }
                            }
                        }
                    }
                },
                assignUsers: {
                    include: {
                        user: {
                            include: {
                                userContacts: true,
                            },
                        },
                    },
                },
            },
        }> = await this.prismaService.message.create({
            data: createOneMessageArgs.data as MessageCreateInput,
            include: { // TODO: fix errors
                createdUser: true,
                messageType: true,
                assignGroups: {
                    include: {
                        userGroup: {
                            include: {
                                assignUsers: {
                                    include: {
                                        userContacts: true,
                                    },
                                },
                            },
                        },
                    },
                },
                assignUsers: {
                    include: {
                        user: {
                            include: {
                                userContacts: true,
                            },
                        },
                    },
                },
            },
        });

        await this.enqueueUserMessage(newMessage);

        return newMessage;
    }

    /**
     * Find all messages
     * @param findManyMessageArgs
     */
    findAll(findManyMessageArgs: FindManyMessageArgs): Promise<Message[]> {
        return this.prismaService.message.findMany({
            ...findManyMessageArgs,
            include: {
                _count: {
                    select: {
                        assignUsers: true,
                    },
                },
                assignUsers: {
                    include: {
                        user: {
                            include: {
                                userContacts: true,
                            },
                        },
                        message: true,
                    },
                },
                createdUser: {
                    include: {
                        profile: true,
                    },
                },
                messageType: true,
            },
        });
    }

    // async createQueue(createOneMessageArgs: CreateOneMessageArgs): Promise<Job<MessageCreateInput>> {
    //     return await this.messageQueue.add('message', createOneMessageArgs.data, {
    //         delay: 10000
    //     });
    // }

    // async getQueueInfo(jobId: JobId): Promise<Job<MessageFrontedStatusDataModel> | null> {
    //     return await this.messageQueue.getJob(jobId);
    // }

    /**
     * Find one message
     * @param findUniqueMessageArgs
     */
    findOne(findUniqueMessageArgs: FindUniqueMessageArgs) {
        return this.prismaService.message.findUnique({
            ...findUniqueMessageArgs,
            include: {
                _count: {
                    select: {
                        assignUsers: true,
                    },
                },
                assignUsers: {
                    include: {
                        user: true,
                        message: true,
                    },
                },
                createdUser: true,
                messageType: true,
            },
        });
    }

    /**
     * Assign queue assign user on message
     * @param message
     */
    private async enqueueUserMessage(message: Prisma.MessageGetPayload<{
        include: {
            createdUser: true,
            messageType: true,
            assignGroups: {
                include: {
                    userGroup: {
                        include: {
                            assignUsers: {
                                include: {
                                    userContacts: true
                                }
                            }
                        }
                    }
                }
            },
            assignUsers: {
                include: {
                    user: {
                        include: {
                            userContacts: true,
                        },
                    },
                },
            },
        }
    }>) {
        if (!message.assignUsers?.length && !message.assignGroups?.length) {
            this.logger.warn(`Empty assign user and group on message ${message.id}. Skip send messages...`);
            return;
        }

        const contactsSet: Map<string, UserContact> = new Map([]);

        /**
         * Iterate user contact assign of assign user on message
         */
        for (const assignUsersOnMessage of message.assignUsers ?? []) {
            // Iterate user contacts
            for (const contact of assignUsersOnMessage.user?.userContacts ?? []) {
                if (!contact) {
                    continue;
                }
                contactsSet.set(contact.id, contact);
            }
        }

        /**
         * Iterate user contact of assign user group on message
         */
        for (const assignUserGroupOnMessage of message.assignGroups ?? []) {
            // Iterate users
            for (const user of assignUserGroupOnMessage.userGroup?.assignUsers ?? []) {
                // Iterate user contacts
                for (const contact of user.userContacts ?? []) {
                    if (!contact) {
                        continue;
                    }
                    contactsSet.set(contact.id, contact);
                }
            }
        }

        for (const [, contact] of contactsSet) {
            await this.messageQueue.add(contact.contactType, {
                messageId: message.id,
                assignUserId: contact.userId,
                contactValue: contact.value,
                userContactId: contact.id,
            });
        }
    }
}
