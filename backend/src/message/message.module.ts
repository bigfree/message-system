import { Logger, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { BullModule } from '@nestjs/bull';
import { MessageProcessor } from './processor/message.processor';
import { PubSubModule } from '../pubsub/pubsub.module';
import { MessagesTemplateService } from '../messages-template/messages-template.service';
import { LogService } from '../log/log.service';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'message-queue',
        }),
        PubSubModule,
    ],
    providers: [
        MessageResolver,
        MessageService,
        MessageProcessor,
        PrismaService,
        MessagesTemplateService,
        Logger,
        LogService,
    ],
})
export class MessageModule {
}
