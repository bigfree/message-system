import { Injectable } from '@nestjs/common';
import { CreateOneLogsArgs, FindManyLogsArgs, FindUniqueLogsArgs, Logs } from '../@generated/logs';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { LogActionStateEnum } from '../enums/log-action-state.enum';

@Injectable()
export class LogService {
    constructor(private readonly prismaService: PrismaService) {
    }

    /**
     * Create log
     * @param createOneLogsArgs
     */
    async create(createOneLogsArgs: CreateOneLogsArgs): Promise<Logs> {
        return this.prismaService.logs.create({
            ...createOneLogsArgs,
        });
    }

    async createInternal(userId: string, type: LogActionStateEnum, data: any): Promise<Logs> {
        const json = {
            ...data
        } as Prisma.JsonObject;

        return this.prismaService.logs.create({
            data: {
                userId,
                type,
                data: json,
            }
        })
    }

    /**
     * Find many logs
     * @param findManyLogsArgs
     */
    async findAll(findManyLogsArgs: FindManyLogsArgs): Promise<Logs[]> {
        return this.prismaService.logs.findMany({
            ...findManyLogsArgs,
        });
    }

    /**
     * Find one log
     * @param findUniqueLogsArgs
     */
    async findOne(findUniqueLogsArgs: FindUniqueLogsArgs): Promise<Logs | null> {
        return this.prismaService.logs.findUnique({
            ...findUniqueLogsArgs,
        });
    }
}
