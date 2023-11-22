import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { LogService } from '../log/log.service';
import { CurrentUser } from '../decorators/current-user.decorator';
import { Prisma } from '@prisma/client';
import { IpUser } from '../decorators/ip-user.decorator';
import { LogActionStateEnum } from '../enums/log-action-state.enum';
import { PublishStateEnum } from '../enums/publish-state.enum';
import { toLong } from 'ip';
import { CreateOneMessageArgs, FindManyMessageArgs, FindUniqueMessageArgs, Message } from '../@generated/prisma-nestjs-graphql';

@Resolver(() => Message)
export class MessageResolver {
    constructor(
        private readonly messageService: MessageService,
        private readonly logService: LogService,
        private pubSub: PubSub,
    ) {
    }

    @Mutation(() => Message)
    @UseGuards(JwtAuthGuard)
    async createMessage(
        @Args() createOneMessageArgs: CreateOneMessageArgs,
        @CurrentUser() currentUser: CurrentUser,
        @IpUser() ipUser: string,
    ): Promise<Message> {
        const newMessage: Message = await this.messageService.create(createOneMessageArgs);


        // Create log on create message
        const json = {
            message: {
                id: newMessage.id,
                title: newMessage.title,
            },
            userIp: toLong(ipUser),
        } as Prisma.JsonObject;

        await this.logService.createInternal(
            currentUser.user.id,
            LogActionStateEnum.CREATE_MESSAGE,
            json
        );

        // Publish new message
        await this.pubSub.publish(PublishStateEnum.MESSAGE_CREATED, {
            [PublishStateEnum.MESSAGE_CREATED]: newMessage,
        });

        return newMessage;
    }

    @Query(() => [Message], {name: 'messages'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyMessageArgs: FindManyMessageArgs,
    ): Promise<Message[]> {
        return this.messageService.findAll(findManyMessageArgs);
    }

    @Query(() => Message, {name: 'message'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueMessageArgs: FindUniqueMessageArgs,
    ): Promise<Message | null> {
        return this.messageService.findOne(findUniqueMessageArgs);
    }

    @Subscription(() => Message, {name: PublishStateEnum.MESSAGE_CREATED})
    async messageCreated(): Promise<AsyncIterator<Message>> {
        return this.pubSub.asyncIterator(PublishStateEnum.MESSAGE_CREATED);
    }
}
