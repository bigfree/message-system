import { Args, Query, Resolver } from '@nestjs/graphql';
import { AssignUsersOnMessageService } from './assign-users-on-message.service';
import { AssignUsersOnMessage, FindUniqueAssignUsersOnMessageArgs } from '../@generated/assign-users-on-message';

@Resolver(() => AssignUsersOnMessage)
export class AssignUsersOnMessageResolver {
    constructor(
        private readonly assignUsersOnMessageService: AssignUsersOnMessageService,
    ) {
    }

    @Query(() => AssignUsersOnMessage, {name: 'assignUsersOnMessage'})
    async findOne(
        @Args() findUniqueAssignUsersOnMessageArgs: FindUniqueAssignUsersOnMessageArgs,
    ): Promise<AssignUsersOnMessage | null> {
        return await this.assignUsersOnMessageService.findOne(findUniqueAssignUsersOnMessageArgs);
    }
}
