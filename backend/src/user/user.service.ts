import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateOneUserArgs,
    FindManyUserArgs,
    FindUniqueUserArgs,
    UpdateOneUserArgs,
    User,
} from '../@generated/user';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {
    }

    /**
     * Create user
     * @param createOneUserArgs
     */
    async create(createOneUserArgs: CreateOneUserArgs): Promise<User> {
        const passwordHash: string = await hash(createOneUserArgs.data.password, 10);
        const acronym: string = this.generateAcronym(createOneUserArgs.data.firstName, createOneUserArgs.data.lastName);

        return this.prismaService.user.create({
            data: {
                ...createOneUserArgs.data,
                password: passwordHash,
                profile: {
                    create: {
                        acronym
                    }
                }
            }
        });
    }

    /**
     * Find all users
     * @param findManyUserArgs
     */
    async findAll(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
        return this.prismaService.user.findMany({
            ...findManyUserArgs,
            include: {
                _count: {
                    select: {
                        userContacts: true,
                        queue: true,
                        assignMessages: true,
                        createdMessagesType: true,
                        belongGroups: true,
                        createdUserGroup: true,
                        createdMessages: true,
                    }
                },
                createdUserGroup: true,
                belongGroups: true,
                queue: true,
                userContacts: true,
                assignMessages: true,
                createdMessages: true,
                createdMessagesType: true,
                profile: true,
                logs: true,
            }
        });
    }

    /**
     * Find one user
     * @param findUniqueUserInput
     */
    async findOne(findUniqueUserInput: FindUniqueUserArgs): Promise<User | null> {
        return this.prismaService.user.findUnique({
            ...findUniqueUserInput,
            include: {
                _count: {
                    select: {
                        userContacts: true,
                        queue: true,
                        assignMessages: true,
                        createdMessagesType: true,
                        belongGroups: true,
                        createdUserGroup: true,
                        createdMessages: true,
                    }
                },
                createdUserGroup: true,
                belongGroups: true,
                queue: true,
                userContacts: true,
                assignMessages: true,
                createdMessages: true,
                createdMessagesType: true,
                profile: true,
                logs: true,
            }
        });
    }

    /**
     * Update one user
     * @param updateOneUserArgs
     */
    async updateOne(updateOneUserArgs: UpdateOneUserArgs): Promise<User> {
        return this.prismaService.user.update({
            ...updateOneUserArgs,
            include: {
                _count: {
                    select: {
                        userContacts: true,
                        queue: true,
                        assignMessages: true,
                        createdMessagesType: true,
                        belongGroups: true,
                        createdUserGroup: true,
                        createdMessages: true
                    }
                },
                createdUserGroup: true,
                belongGroups: true,
                queue: true,
                userContacts: true,
                assignMessages: true,
                createdMessages: true,
                createdMessagesType: true,
                profile: true
            }
        });
    }

    /**
     * Generate user acronym from firstName and lastName
     * Example: AM
     * @param firstName
     * @param lastName
     * @private
     */
    private generateAcronym(firstName: string, lastName: string): string {
        return `${firstName[0]}${lastName[0]}`.toUpperCase();
    }

    // remove(id: number) {
    //   return `This action removes a #${id} user`;
    // }
}
