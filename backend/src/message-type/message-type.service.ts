import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateOneMessageTypeArgs,
    FindManyMessageTypeArgs,
    FindUniqueMessageTypeArgs,
    MessageType,
    MessageTypeCreateInput, UpdateOneMessageTypeArgs,
} from '../@generated/prisma-nestjs-graphql';

@Injectable()
export class MessageTypeService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
    }

    /**
     * Create messageType
     * @param createOneMessageTypeArgs
     */
    async create(createOneMessageTypeArgs: CreateOneMessageTypeArgs): Promise<MessageType> {
        return this.prismaService.messageType.create({
            data: createOneMessageTypeArgs.data as MessageTypeCreateInput
        });
    }

    /**
     * Find many messageType
     * @param findManyMessageTypeArgs
     */
    async findAll(findManyMessageTypeArgs: FindManyMessageTypeArgs): Promise<MessageType[]> {
        return this.prismaService.messageType.findMany({
            ...findManyMessageTypeArgs,
            include: {
                message: true,
                createdUser: true,
            },
        });
    }

    /**
     * Find one messageType
     * @param findUniqueMessageTypeArgs
     */
    async findOne(findUniqueMessageTypeArgs: FindUniqueMessageTypeArgs): Promise<MessageType | null> {
        return this.prismaService.messageType.findUnique({
            ...findUniqueMessageTypeArgs,
            include: {
                message: true,
                createdUser: true,
            },
        });
    }

    /**
     * Update messageType
     * @param updateOneMessageTypeArgs
     */
    async update(updateOneMessageTypeArgs: UpdateOneMessageTypeArgs): Promise<MessageType> {
        return this.prismaService.messageType.update({
            ...updateOneMessageTypeArgs,
            include: {
                message: true,
                createdUser: true,
            },
        });
    }

    // remove(id: number) {
    //     return `This action removes a #${id} messageType`;
    // }
}
