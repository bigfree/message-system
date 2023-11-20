import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserContactService } from './user-contact.service';
import {
    CreateOneUserContactArgs,
    FindManyUserContactArgs,
    FindUniqueUserContactArgs,
    UpdateOneUserContactArgs,
    UserContact,
} from '../@generated/user-contact';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Resolver(() => UserContact)
export class UserContactResolver {
    constructor(private readonly userContactService: UserContactService) {
    }

    /**
     * CreateUserContact
     * @param createOneUserContactArgs
     */
    @Mutation(() => UserContact)
    @UseGuards(JwtAuthGuard)
    async createUserContact(
        @Args() createOneUserContactArgs: CreateOneUserContactArgs,
    ): Promise<UserContact> {
        return await this.userContactService.create(createOneUserContactArgs);
    }

    /**
     * FindAll
     * @param findManyUserContactArgs
     */
    @Query(() => [UserContact], {name: 'userContacts'})
    @UseGuards(JwtAuthGuard)
    async findAll(
        @Args() findManyUserContactArgs: FindManyUserContactArgs,
    ): Promise<UserContact[]> {
        return await this.userContactService.findAll(findManyUserContactArgs);
    }

    /**
     * FindOne
     * @param findUniqueUserContactArgs
     */
    @Query(() => UserContact, {name: 'userContact'})
    @UseGuards(JwtAuthGuard)
    async findOne(
        @Args() findUniqueUserContactArgs: FindUniqueUserContactArgs,
    ): Promise<UserContact | null> {
        return await this.userContactService.findOne(findUniqueUserContactArgs);
    }

    /**
     * UpdateUserContact
     * @param updateOneUserContactArgs
     */
    @Mutation(() => UserContact)
    @UseGuards(JwtAuthGuard)
    async updateUserContact(
        @Args() updateOneUserContactArgs: UpdateOneUserContactArgs,
    ): Promise<UserContact> {
        return await this.userContactService.update(updateOneUserContactArgs);
    }

    // @Mutation(() => UserContact)
    // removeUserContact(@Args('id', {type: () => Int}) id: number) {
    //     return this.userContactService.remove(id);
    // }
}
