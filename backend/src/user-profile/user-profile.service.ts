import { Injectable } from '@nestjs/common';
import {
    CreateOneUserProfileArgs,
    FindUniqueUserProfileArgs,
    UpdateOneUserProfileArgs,
    UserProfile,
} from '../@generated/user-profile';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserProfileService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
    }

    async create(createOneUserProfileArgs: CreateOneUserProfileArgs): Promise<UserProfile> {
        return this.prismaService.userProfile.create({
            ...createOneUserProfileArgs,
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
