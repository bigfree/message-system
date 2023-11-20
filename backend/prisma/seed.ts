import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prismaClient = new PrismaClient();

async function main() {
    const adam = await prismaClient.user.upsert({
        where: {
            email: 'okukster@gmail.com',
        },
        update: {},
        create: {
            email: 'okukster@gmail.com',
            password: await hash('123123', 10),
            firstName: 'Adam',
            lastName: 'Mikó',
            profile: {
                create: {
                    acronym: 'AM',
                },
            },
            userContacts: {
                create: [{
                    contactType: 'EMAIL',
                    value: 'okukster@gmail.com',
                    status: 'ACTIVE',
                }, {
                    contactType: 'SMS',
                    value: '123123123',
                    status: 'ACTIVE',
                }],
            },
        },
    });

    const alice = await prismaClient.user.upsert({
        where: {
            email: 'alice@test.sk',
        },
        update: {},
        create: {
            email: 'alice@test.sk',
            password: await hash('123123', 10),
            firstName: 'Alice',
            lastName: 'Test',
            profile: {
                create: {
                    acronym: 'AT',
                },
            },
            userContacts: {
                create: [{
                    contactType: 'EMAIL',
                    value: 'alice@test.sk',
                    status: 'ACTIVE',
                }, {
                    contactType: 'SMS',
                    value: '321654876',
                    status: 'ACTIVE',
                }],
            },
        },
    });

    const newMessageGroup = await prismaClient.userGroup.upsert({
        where: {
            name: 'Test user group',
        },
        update: {},
        create: {
            name: 'Test user group',
            status: 'ACTIVE',
            createdById: adam.id,
            userGroupSettings: {
                create: {
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Proin in tellus sit amet nibh dignissim sagittis.',
                    color: '#D01818',
                },
            },
            assignUsers: {
                connect: [{
                    id: adam.id,
                }, {
                    id: alice.id,
                }],
            },
        },
    });

    const newMessageType = await prismaClient.messageType.upsert({
        where: {
            name: 'Test message type',
        },
        update: {},
        create: {
            name: 'Test message type',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Proin in tellus sit amet nibh dignissim sagittis.',
            color: '#d01818',
            createdUserId: adam.id,
        },
    });

    console.log({
        adam,
        alice,
        newMessageGroup,
        newMessageType,
    });
}

main()
.then(async () => {
    await prismaClient.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
});