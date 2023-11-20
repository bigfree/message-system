import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LogService } from './log.service';
import { CreateOneLogsArgs, FindManyLogsArgs, FindUniqueLogsArgs, Logs } from '../@generated/logs';

@Resolver(() => Logs)
export class LogResolver {
    constructor(
        private readonly logService: LogService,
    ) {
    }

    @Mutation(() => Logs)
    async createLog(
        @Args() createOneLogsArgs: CreateOneLogsArgs,
    ): Promise<Logs> {
        return this.logService.create(createOneLogsArgs);
    }

    @Query(() => [Logs], {name: 'logs'})
    findAll(
        @Args() findManyLogsArgs: FindManyLogsArgs,
    ): Promise<Logs[]> {
        return this.logService.findAll(findManyLogsArgs);
    }

    @Query(() => Logs, {name: 'log'})
    findOne(
        @Args() findUniqueLogsArgs: FindUniqueLogsArgs,
    ): Promise<Logs | null> {
        return this.logService.findOne(findUniqueLogsArgs);
    }
}
