import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: 'SECRED TEXT',
            signOptions: {
                expiresIn: '7d',
            },
        }),
    ],
    providers: [
        AuthResolver,
        AuthService,
        PrismaService,
        UserService,
        JwtStrategy
    ],
    exports: [
        AuthService,
    ],
})
export class AuthModule {
}
