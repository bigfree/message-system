import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { PubSubModule } from '../pubsub/pubsub.module';

@Module({
    imports: [
        PubSubModule,
    ],
    providers: [
        UserResolver,
        UserService,
        PrismaService,
    ],
})
export class UserModule {
}
