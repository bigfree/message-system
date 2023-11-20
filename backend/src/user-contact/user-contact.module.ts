import { Module } from '@nestjs/common';
import { UserContactService } from './user-contact.service';
import { UserContactResolver } from './user-contact.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    providers: [
        UserContactResolver,
        UserContactService,
        PrismaService],
})
export class UserContactModule {
}
