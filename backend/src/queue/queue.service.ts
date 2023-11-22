import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FindManyQueueArgs, FindUniqueQueueArgs, Queue } from '../@generated/prisma-nestjs-graphql';

@Injectable()
export class QueueService {
    // create(createQueueInput: CreateQueueInput) {
    //     return 'This action adds a new queue';
    // }

    constructor(private readonly prismaService: PrismaService) {
    }

    /**
     * Find many queue
     * @param findManyQueueArgs
     */
    async findAll(findManyQueueArgs: FindManyQueueArgs): Promise<Queue[]> {
        return this.prismaService.queue.findMany({
            ...findManyQueueArgs,
            include: {
                user: true,
                userContact: true,
            },
        });
    }

    /**
     * Find unique queue
     * @param findUniqueQueueArgs
     */
    async findOne(findUniqueQueueArgs: FindUniqueQueueArgs): Promise<Queue | null> {
        return this.prismaService.queue.findUnique({
            ...findUniqueQueueArgs,
            include: {
                user: true,
                userContact: true,
            },
        });
    }

    // update(id: number, updateQueueInput: UpdateQueueInput) {
    //     return `This action updates a #${id} queue`;
    // }
    //
    // remove(id: number) {
    //     return `This action removes a #${id} queue`;
    // }
}
