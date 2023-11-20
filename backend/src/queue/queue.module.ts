import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueResolver } from './queue.resolver';
import { PubSubModule } from '../pubsub/pubsub.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    imports: [
        PubSubModule,
    ],
    providers: [
        QueueResolver,
        QueueService,
        PrismaService,
    ],
})
export class QueueModule {
}
