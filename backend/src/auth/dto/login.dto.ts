import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginDto {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    password: string;
}
