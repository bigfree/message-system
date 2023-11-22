import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    AssignUsersOnMessage,
    FindUniqueAssignUsersOnMessageArgs,
} from '../@generated/prisma-nestjs-graphql';

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
