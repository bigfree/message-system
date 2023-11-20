import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogResolver } from './log.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    providers: [
        LogResolver,
        LogService,
        PrismaService,
    ],
})
export class LogModule {
}
