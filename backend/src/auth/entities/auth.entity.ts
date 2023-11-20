import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
    @Field(() => String, {description: 'Jwt token'})
    token: string;
}
