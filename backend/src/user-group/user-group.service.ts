import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateOneUserGroupArgs,
    FindManyUserGroupArgs,
    FindUniqueUserGroupArgs,
    UpdateOneUserGroupArgs,
    UserGroup,
} from '../@generated/user-group';

@Injectable()
export class UserGroupService {
    constructor(private readonly prismaService: PrismaService) {
    }

    /**
     * Create user group
     * @param createOneUserGroupArgs
     */
    async create(createOneUserGroupArgs: CreateOneUserGroupArgs): Promise<UserGroup> {
        return this.prismaService.userGroup.create({
            ...createOneUserGroupArgs,
            include: {
                _count: {
                    select: {
                        userGroupContact: true,
                        assignUsers: true,
                        assignMessages: true,
                    },
                },
                createdBy: true,
                assignUsers: true,
                userGroupContact: true,
                assignMessages: true,
                userGroupSettings: true,
            },
        });
    }

    /**
     * Find all user group
     * @param findManyUserGroupArgs
     */
    async findAll(findManyUserGroupArgs: FindManyUserGroupArgs): Promise<UserGroup[]> {
        return this.prismaService.userGroup.findMany({
            ...findManyUserGroupArgs,
            include: {
                _count: {
                    select: {
                        userGroupContact: true,
                        assignUsers: true,
                        assignMessages: true,
                    },
                },
                createdBy: true,
                assignUsers: true,
                userGroupContact: true,
                assignMessages: true,
                userGroupSettings: true,
            },
        });
    }

    /**
     * Find one user group
     * @param findUniqueUserGroupArgs
     */
    findOne(findUniqueUserGroupArgs: FindUniqueUserGroupArgs): Promise<UserGroup | null> {
        return this.prismaService.userGroup.findUnique({
            ...findUniqueUserGroupArgs,
            include: {
                _count: {
                    select: {
                        userGroupContact: true,
                        assignUsers: true,
                        assignMessages: true,
                    },
                },
                createdBy: true,
                assignUsers: true,
                userGroupContact: true,
                assignMessages: true,
                userGroupSettings: true,
            },
        });
    }

    /**
     * Update user group
     * @param updateOneUserGroupArgs
     */
    update(updateOneUserGroupArgs: UpdateOneUserGroupArgs): Promise<UserGroup> {
        return this.prismaService.userGroup.update({
            ...updateOneUserGroupArgs,
            include: {
                _count: {
                    select: {
                        userGroupContact: true,
                        assignUsers: true,
                        assignMessages: true,
                    },
                },
                createdBy: true,
                assignUsers: true,
                userGroupContact: true,
                assignMessages: true,
                userGroupSettings: true,
            },
        });
    }

    //
    // remove(id: number) {
    //     return `This action removes a #${id} userGroup`;
    // }
}
