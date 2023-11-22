import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { QueueService } from './queue.service';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { PublishStateEnum } from '../enums/publish-state.enum';
import { FindManyQueueArgs, FindUniqueQueueArgs, Queue } from '../@generated/prisma-nestjs-graphql';

@Resolver(() => Queue)
export class QueueResolver {
    constructor(
        private readonly queueService: QueueService,
        private readonly pubSub: PubSub,
    ) {
    }

    // @Mutation(() => Queue)
    // createQueue(@Args('createQueueInput') createQueueInput: CreateQueueInput) {
    //   return this.queueService.create(createQueueInput);
    // }

    @Query(() => [Queue], {name: 'queues'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyQueueArgs: FindManyQueueArgs,
    ): Promise<Queue[]> {
        return this.queueService.findAll(findManyQueueArgs);
    }

    @Query(() => Queue, {name: 'queue'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueQueueArgs: FindUniqueQueueArgs,
    ): Promise<Queue | null> {
        return this.queueService.findOne(findUniqueQueueArgs);
    }

    @Subscription(() => Queue, {name: PublishStateEnum.JOB_MESSAGE_STATUS})
    async queueMessageStatus(): Promise<AsyncIterator<Queue>> {
        return this.pubSub.asyncIterator(PublishStateEnum.JOB_MESSAGE_STATUS);
    }

    // @Mutation(() => Queue)
    // updateQueue(@Args('updateQueueInput') updateQueueInput: UpdateQueueInput) {
    //   return this.queueService.update(updateQueueInput.id, updateQueueInput);
    // }
    //
    // @Mutation(() => Queue)
    // removeQueue(@Args('id', { type: () => Int }) id: number) {
    //   return this.queueService.remove(id);
    // }
}
