import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileResolver } from './user-profile.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    providers: [
        UserProfileResolver,
        UserProfileService,
        PrismaService,
    ],
})
export class UserProfileModule {
}
