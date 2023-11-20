import { Field, ObjectType } from '@nestjs/graphql';
import { JobId, JobStatus } from 'bull';
import { MessageFrontedStatusDataModel } from './MessageFrontedStatusData.model';

@ObjectType()
export class MessageFrontedStatusModel {
    @Field(() => Number)
    jobId: JobId;

    @Field(() => String)
    status: JobStatus | 'stuck';

    @Field(() => MessageFrontedStatusDataModel)
    data: MessageFrontedStatusDataModel;

    @Field(() => String, {nullable: true})
    failedReason?: string | undefined;
}