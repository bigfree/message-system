import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';
import { PublishStateEnum } from '../enums/publish-state.enum';
import { CreateOneUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateOneUserArgs, User } from '../@generated/prisma-nestjs-graphql';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private pubSub: PubSub,
    ) {
    }

    @Mutation(() => User)
    @UseGuards(JwtAuthGuard)
    async createUser(
        @Args() createOneUserArgs: CreateOneUserArgs,
    ): Promise<User> {
        const newUser: User = await this.userService.create(createOneUserArgs);

        await this.pubSub.publish(PublishStateEnum.USER_CREATED, {
            [PublishStateEnum.USER_CREATED]: newUser,
        });

        return newUser;
    }

    @Query(() => [User], {name: 'users'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyUserArgs: FindManyUserArgs,
    ): Promise<User[]> {
        return await this.userService.findAll(findManyUserArgs);
    }

    @Query(() => User, {name: 'me'})
    @UseGuards(JwtAuthGuard)
    async me(
        @CurrentUser() user: User,
    ): Promise<User | null> {
        return await this.userService.findOne({
            where: {
                id: user.id,
                email: user.email,
            }
        });
    }

    @Query(() => User, {name: 'user'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueUserArgs: FindUniqueUserArgs,
    ): Promise<User | null> {
        return await this.userService.findOne(findUniqueUserArgs);
    }

    @Mutation(() => User)
    @UseGuards(JwtAuthGuard)
    async updateUser(
        @Args() updateOneUserArgs: UpdateOneUserArgs,
    ): Promise<User> {
        const updateUser: User = await this.userService.updateOne(updateOneUserArgs);

        await this.pubSub.publish(PublishStateEnum.USER_UPDATED, {
            [PublishStateEnum.USER_UPDATED]: updateUser,
        });

        return updateUser;
    }

    @Subscription(() => User, {name: PublishStateEnum.USER_CREATED})
    async userCreated(): Promise<AsyncIterator<User>> {
        return this.pubSub.asyncIterator(PublishStateEnum.USER_CREATED);
    }

    @Subscription(() => User, {name: PublishStateEnum.USER_UPDATED})
    async userUpdated(): Promise<AsyncIterator<User>> {
        return this.pubSub.asyncIterator(PublishStateEnum.USER_UPDATED);
    }

    // @Mutation(() => User)
    // removeUser(@Args('id', { type: () => Int }) id: number) {
    //   return this.userService.remove(id);
    // }
}
