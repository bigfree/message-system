import { Field, ObjectType } from '@nestjs/graphql';
import { JobId, JobStatus } from 'bull';

@ObjectType()
export class MessageFrontedModel {
    @Field(() => Number)
    jobId: JobId;

    @Field(() => String)
    status: JobStatus | 'stuck';
}