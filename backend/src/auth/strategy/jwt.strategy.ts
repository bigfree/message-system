import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '@prisma/client';

export type JwtPayloadUser = {
    email: string;
    sub: Omit<User, 'password'>;
}

export type JwtPayload = JwtPayloadUser & {
    exp: number;
    iat: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRED TEXT'
        });
    }

    async validate(payload: JwtPayload) {
        return {
            email: payload.email,
            user: payload.sub,
        }
    }
}