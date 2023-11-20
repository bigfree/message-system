import { Module } from '@nestjs/common';
import { MessageTypeService } from './message-type.service';
import { MessageTypeResolver } from './message-type.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { PubSubModule } from '../pubsub/pubsub.module';

@Module({
    imports: [
        PubSubModule,
    ],
    providers: [
        MessageTypeResolver,
        MessageTypeService,
        PrismaService,
    ],
})
export class MessageTypeModule {
}
