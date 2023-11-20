import { Module } from '@nestjs/common';
import { UserGroupService } from './user-group.service';
import { UserGroupResolver } from './user-group.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { PubSubModule } from '../pubsub/pubsub.module';

@Module({
    imports: [
      PubSubModule
    ],
    providers: [
        UserGroupResolver,
        UserGroupService,
        PrismaService,
    ],
})
export class UserGroupModule {
}
