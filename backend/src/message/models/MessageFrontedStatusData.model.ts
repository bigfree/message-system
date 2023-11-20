import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageFrontedStatusDataModel {
    @Field(() => String, {nullable: true})
    prefix?: string;

    @Field(() => String, {nullable: false})
    title!: string;

    @Field(() => String, {nullable: false})
    body!: string;
}