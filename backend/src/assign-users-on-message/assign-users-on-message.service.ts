import { Injectable } from '@nestjs/common';
import { AssignUsersOnMessage, FindUniqueAssignUsersOnMessageArgs } from '../@generated/assign-users-on-message';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssignUsersOnMessageService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async findOne(findUniqueAssignUsersOnMessageArgs: FindUniqueAssignUsersOnMessageArgs): Promise<AssignUsersOnMessage | null> {
        return this.prismaService.assignUsersOnMessage.findUnique({
            ...findUniqueAssignUsersOnMessageArgs,
            include: {
                user: true,
                message: true,
            },
        });
    }
}
