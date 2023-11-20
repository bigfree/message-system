import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UserGroupService } from './user-group.service';
import {
    CreateOneUserGroupArgs,
    FindManyUserGroupArgs,
    FindUniqueUserGroupArgs,
    UpdateOneUserGroupArgs,
    UserGroup,
} from '../@generated/user-group';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { PublishStateEnum } from '../enums/publish-state.enum';

@Resolver(() => UserGroup)
export class UserGroupResolver {
    constructor(
        private readonly userGroupService: UserGroupService,
        private readonly pubSub: PubSub,
    ) {
    }

    @Mutation(() => UserGroup)
    @UseGuards(JwtAuthGuard)
    async createUserGroup(
        @Args() createOneUserGroupArgs: CreateOneUserGroupArgs,
    ): Promise<UserGroup> {
        const newUserGroup = this.userGroupService.create(createOneUserGroupArgs);

        await this.pubSub.publish(PublishStateEnum.USER_GROUP_CREATED, {
            [PublishStateEnum.USER_GROUP_CREATED]: newUserGroup,
        });

        return newUserGroup;
    }

    @Query(() => [UserGroup], {name: 'userGroups'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyUserGroupArgs: FindManyUserGroupArgs,
    ): Promise<UserGroup[]> {
        return this.userGroupService.findAll(findManyUserGroupArgs);
    }

    @Query(() => UserGroup, {name: 'userGroup'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueUserGroupArgs: FindUniqueUserGroupArgs,
    ): Promise<UserGroup | null> {
        return this.userGroupService.findOne(findUniqueUserGroupArgs);
    }

    @Mutation(() => UserGroup)
    @UseGuards(JwtAuthGuard)
    async updateUserGroup(
        @Args() updateOneUserGroupArgs: UpdateOneUserGroupArgs,
    ): Promise<UserGroup> {
        const updatedMessage = this.userGroupService.update(updateOneUserGroupArgs);

        await this.pubSub.publish(PublishStateEnum.USER_GROUP_UPDATED, {
            [PublishStateEnum.USER_GROUP_UPDATED]: updatedMessage,
        });

        return updatedMessage;
    }

    @Subscription(() => UserGroup, {name: PublishStateEnum.USER_GROUP_CREATED})
    async userGroupCreated(): Promise<AsyncIterator<UserGroup>> {
        return this.pubSub.asyncIterator(PublishStateEnum.USER_GROUP_CREATED);
    }

    @Subscription(() => UserGroup, {name: PublishStateEnum.USER_GROUP_UPDATED})
    async userGroupUpdated(): Promise<AsyncIterator<UserGroup>> {
        return this.pubSub.asyncIterator(PublishStateEnum.USER_GROUP_UPDATED);
    }

    //
    // @Mutation(() => UserGroup)
    // removeUserGroup(@Args('id', {type: () => Int}) id: number) {
    //     return this.userGroupService.remove(id);
    // }
}
