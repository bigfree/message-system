import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
    ) {
    }

    /**
     * Validate user
     * @param loginDto
     */
    async validateUser(loginDto: LoginDto): Promise<User | null> {
        const user: User | null = await this.prismaService.user.findUnique({
            where: {
                email: loginDto.email,
            },
        });

        const passwordMatch: boolean = await compare(loginDto.password, user?.password ?? '');

        if (!passwordMatch) {
            return null;
        }

        return user;
    }

    /**
     * Login service
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async login({password, ...result}: User): Promise<Auth> {
        return {
            token: await this.jwtService.signAsync({
                email: result.email,
                sub: result,
            }),
        };
    }
}
