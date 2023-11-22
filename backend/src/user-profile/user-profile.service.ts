import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateOneUserProfileArgs,
    FindUniqueUserProfileArgs,
    UpdateOneUserProfileArgs,
    UserProfile,
} from '../@generated/prisma-nestjs-graphql';

@Injectable()
export class UserProfileService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
    }

    async create({data}: CreateOneUserProfileArgs): Promise<UserProfile> {
        return this.prismaService.userProfile.create({
            data,
        });
    }

    async findOne(findUniqueUserProfileArgs: FindUniqueUserProfileArgs): Promise<UserProfile | null> {
        return this.prismaService.userProfile.findUnique({
            ...findUniqueUserProfileArgs,
        });
    }

    async update(updateOneUserProfileArgs: UpdateOneUserProfileArgs): Promise<UserProfile> {
        return this.prismaService.userProfile.update({
            ...updateOneUserProfileArgs,
        });
    }

    // remove(id: number) {
    //     return `This action removes a #${id} userProfile`;
    // }
}
