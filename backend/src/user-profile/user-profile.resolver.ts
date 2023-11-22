import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserProfileService } from './user-profile.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import {
    CreateOneUserProfileArgs,
    FindUniqueUserProfileArgs,
    UpdateOneUserProfileArgs,
    UserProfile,
} from '../@generated/prisma-nestjs-graphql';

@Resolver(() => UserProfile)
export class UserProfileResolver {
    constructor(private readonly userProfileService: UserProfileService) {
    }

    @Mutation(() => UserProfile)
    @UseGuards(JwtAuthGuard)
    async createUserProfile(
        @Args() createOneUserProfileArgs: CreateOneUserProfileArgs,
    ): Promise<UserProfile> {
        return await this.userProfileService.create(createOneUserProfileArgs);
    }

    @Query(() => UserProfile, {name: 'userProfile'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueUserProfileArgs: FindUniqueUserProfileArgs,
    ): Promise<UserProfile | null> {
        return await this.userProfileService.findOne(findUniqueUserProfileArgs);
    }

    @Mutation(() => UserProfile)
    @UseGuards(JwtAuthGuard)
    async updateUserProfile(
        @Args() updateOneUserProfileArgs: UpdateOneUserProfileArgs,
    ): Promise<UserProfile> {
        return await this.userProfileService.update(updateOneUserProfileArgs);
    }

    // @Mutation(() => UserProfile)
    // removeUserProfile(@Args('id', {type: () => Int}) id: number) {
    //     return this.userProfileService.remove(id);
    // }
}
