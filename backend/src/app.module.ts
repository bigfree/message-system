import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { MessageModule } from './message/message.module';
import { PrismaService } from './prisma/prisma.service';
import { BullModule } from '@nestjs/bull';
import { PubSubModule } from './pubsub/pubsub.module';
import { UserModule } from './user/user.module';
import { UserContactModule } from './user-contact/user-contact.module';
import { MessageTypeModule } from './message-type/message-type.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AssignUsersOnMessageModule } from './assign-users-on-message/assign-users-on-message.module';
import { QueueModule } from './queue/queue.module';
import { UserGroupModule } from './user-group/user-group.module';
import { MessagesTemplateService } from './messages-template/messages-template.service';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LogModule } from './log/log.module';
import * as process from 'process';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            playground: false,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault(),
            ],
            subscriptions: {
                'graphql-ws': {
                    path: '/graphql',
                    onConnect: () => {
                        console.log('connect ws');
                    },
                },
            },
        }),
        BullModule.forRoot({
            defaultJobOptions: {
                attempts: Number(process.env.BULL_ATTEMPTS ?? 10),
                backoff: {
                    type: process.env.BULL_BACKOFF_TYPE ?? 'exponential',
                    delay: Number(process.env.BULL_BACKOFF_DELAY ?? 1000),
                },
            },
            redis: {
                host: process.env.REDIS_HOST ?? 'redis_ms',
                port: Number(process.env.REDIS_PORT) ?? 6379,
            },
        }),
        MailerModule.forRoot({
            transport: {
                ...('dev' === process.env.ENVIROMENT ? {
                    host: process.env.MAILHOG_HOST,
                    port: Number(process.env.MAILHOG_PORT),
                } : {
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT),
                    tls: {
                        ciphers: process.env.SMTP_ENCRYPTION,
                        rejectUnauthorized: false,
                    },
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASSWORD,
                    },
                }),
            },
            defaults: {
                from: `"messages-system" <okukster@gmail.com>`,
            },
            template: {
                dir: join(__dirname, 'templates'),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        PubSubModule,
        AuthModule,
        MessageModule,
        UserModule,
        UserContactModule,
        MessageTypeModule,
        AssignUsersOnMessageModule,
        QueueModule,
        UserGroupModule,
        UserProfileModule,
        LogModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        PrismaService,
        MessagesTemplateService,
    ],
})
export class AppModule {
}
