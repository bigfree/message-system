import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { MessageTypeService } from './message-type.service';
import {
    CreateOneMessageTypeArgs,
    FindManyMessageTypeArgs,
    FindUniqueMessageTypeArgs,
    MessageType,
    UpdateOneMessageTypeArgs,
} from '../@generated/message-type';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { PublishStateEnum } from '../enums/publish-state.enum';

@Resolver(() => MessageType)
export class MessageTypeResolver {
    constructor(
        private readonly messageTypeService: MessageTypeService,
        private pubSub: PubSub,
    ) {
    }

    @Mutation(() => MessageType)
    @UseGuards(JwtAuthGuard)
    async createMessageType(
        @Args() createOneMessageTypeArgs: CreateOneMessageTypeArgs,
    ): Promise<MessageType> {
        const createdMessageType: MessageType = await this.messageTypeService.create(createOneMessageTypeArgs);

        await this.pubSub.publish(PublishStateEnum.MESSAGE_TYPE_CREATED, {
            [PublishStateEnum.MESSAGE_TYPE_CREATED]: createdMessageType,
        });

        return createdMessageType;
    }

    @Query(() => [MessageType], {name: 'messageTypes'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyMessageTypeArgs: FindManyMessageTypeArgs,
    ): Promise<MessageType[]> {
        return this.messageTypeService.findAll(findManyMessageTypeArgs);
    }

    @Query(() => MessageType, {name: 'messageType'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueMessageTypeArgs: FindUniqueMessageTypeArgs,
    ): Promise<MessageType | null> {
        return this.messageTypeService.findOne(findUniqueMessageTypeArgs);
    }

    @Mutation(() => MessageType)
    @UseGuards(JwtAuthGuard)
    async updateMessageType(
        @Args() updateOneMessageTypeArgs: UpdateOneMessageTypeArgs,
    ): Promise<MessageType> {
        const updatedMessageType: MessageType = await this.messageTypeService.update(updateOneMessageTypeArgs);

        await this.pubSub.publish(PublishStateEnum.MESSAGE_TYPE_UPDATED, {
            [PublishStateEnum.MESSAGE_TYPE_UPDATED]: updatedMessageType,
        });

        return updatedMessageType;
    }

    @Subscription(() => MessageType, {name: PublishStateEnum.MESSAGE_TYPE_CREATED})
    async messageTypeCreated(): Promise<AsyncIterator<MessageType>> {
        return this.pubSub.asyncIterator(PublishStateEnum.MESSAGE_TYPE_CREATED);
    }

    @Subscription(() => MessageType, {name: PublishStateEnum.MESSAGE_TYPE_UPDATED})
    async messageTypeUpdated(): Promise<AsyncIterator<MessageType>> {
        return this.pubSub.asyncIterator(PublishStateEnum.MESSAGE_TYPE_UPDATED);
    }

    // @Mutation(() => MessageType)
    // removeMessageType(@Args('id', {type: () => Int}) id: number) {
    //     return this.messageTypeService.remove(id);
    // }
}
