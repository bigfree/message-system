import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';
import { UnauthorizedException } from '@nestjs/common';
import { CreateOneUserArgs } from '../@generated/user';
import { UserService } from '../user/user.service';

@Resolver(() => Auth)
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {
    }

    @Mutation(() => Auth)
    async signUp(
        @Args() createOneUserArgs: CreateOneUserArgs
    ) {
        const user = await this.userService.create(createOneUserArgs);
        return this.authService.login(user);
    }

    @Mutation(() => Auth)
    async login(
        @Args('loginDto') loginDto: LoginDto
    ): Promise<Auth> {
        const user: User | null = await this.authService.validateUser(loginDto);

        if (!user) {
            throw new UnauthorizedException();
        }

        return this.authService.login(user);
    }
}
