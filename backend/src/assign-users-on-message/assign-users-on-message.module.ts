import { Module } from '@nestjs/common';
import { AssignUsersOnMessageService } from './assign-users-on-message.service';
import { AssignUsersOnMessageResolver } from './assign-users-on-message.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    providers: [
        AssignUsersOnMessageResolver,
        AssignUsersOnMessageService,
        PrismaService,
    ],
})
export class AssignUsersOnMessageModule {
}
