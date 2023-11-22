import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateOneUserContactArgs,
    FindManyUserContactArgs,
    FindUniqueUserContactArgs,
    UpdateOneUserContactArgs,
} from '../@generated/prisma-nestjs-graphql';
import { UserContact } from '@prisma/client';

@Injectable()
export class UserContactService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
    }

    async create({data}: CreateOneUserContactArgs): Promise<UserContact> {
        return this.prismaService.userContact.create({
            data,
            include: {
                user: true,
            },
        });
    }

    async findAll(findManyUserContactArgs: FindManyUserContactArgs): Promise<UserContact[]> {
        return this.prismaService.userContact.findMany(findManyUserContactArgs);
    }

    async findOne(findUniqueUserContactArgs: FindUniqueUserContactArgs): Promise<UserContact | null> {
        return this.prismaService.userContact.findUnique(findUniqueUserContactArgs);
    }

    async update(updateOneUserContactArgs: UpdateOneUserContactArgs): Promise<UserContact> {
        return this.prismaService.userContact.update(updateOneUserContactArgs);
    }

    // remove(id: number) {
    //     return `This action removes a #${id} userContact`;
    // }
}
