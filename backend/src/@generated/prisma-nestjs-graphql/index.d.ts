import { Prisma } from '@prisma/client';
export declare enum UserProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    avatar = "avatar",
    acronym = "acronym",
    createdAt = "createdAt"
}
export declare enum UserGroupSettingsScalarFieldEnum {
    id = "id",
    userGroupId = "userGroupId",
    description = "description",
    color = "color",
    avatar = "avatar"
}
export declare enum UserGroupContactScalarFieldEnum {
    id = "id",
    contactType = "contactType",
    value = "value",
    status = "status",
    uerGroupId = "uerGroupId",
    createdAt = "createdAt"
}
export declare enum UserGroupScalarFieldEnum {
    id = "id",
    name = "name",
    status = "status",
    createdById = "createdById",
    createdAt = "createdAt"
}
export declare enum UserContactScalarFieldEnum {
    id = "id",
    contactType = "contactType",
    value = "value",
    status = "status",
    userId = "userId",
    createdAt = "createdAt"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    username = "username",
    email = "email",
    password = "password",
    createdAt = "createdAt"
}
export declare enum QueueScalarFieldEnum {
    id = "id",
    userId = "userId",
    userContactId = "userContactId",
    jobId = "jobId",
    status = "status",
    failedReason = "failedReason",
    enqueueAt = "enqueueAt",
    attempt = "attempt",
    finishedAt = "finishedAt"
}
export declare enum UserGroupStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    UNACTIVE = "UNACTIVE",
    DELETED = "DELETED"
}
export declare enum UserContactType {
    SMS = "SMS",
    EMAIL = "EMAIL"
}
export declare enum UserContactStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    UNACTIVE = "UNACTIVE",
    DELETED = "DELETED"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum NullableJsonNullValueInput {
    DbNull = "DbNull",
    JsonNull = "JsonNull"
}
export declare enum MessageStatus {
    CREATED = "CREATED",
    PROCESS = "PROCESS",
    DONE = "DONE"
}
export declare enum JsonNullValueFilter {
    DbNull = "DbNull",
    JsonNull = "JsonNull",
    AnyNull = "AnyNull"
}
export declare enum MessageTypeScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    color = "color",
    createdUserId = "createdUserId",
    createdAt = "createdAt"
}
export declare enum MessageScalarFieldEnum {
    id = "id",
    prefix = "prefix",
    title = "title",
    body = "body",
    createdUserId = "createdUserId",
    messageTypeId = "messageTypeId",
    status = "status",
    createdAt = "createdAt"
}
export declare enum LogsScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    data = "data",
    createdAt = "createdAt"
}
export declare enum AssignUsersOnMessageScalarFieldEnum {
    userId = "userId",
    messageId = "messageId",
    createdAt = "createdAt"
}
export declare enum AssignUserGroupOnMessageScalarFieldEnum {
    userGroupId = "userGroupId",
    messageId = "messageId",
    createdAt = "createdAt"
}
export declare class AggregateAssignUserGroupOnMessage {
    _count?: InstanceType<typeof AssignUserGroupOnMessageCountAggregate>;
    _min?: InstanceType<typeof AssignUserGroupOnMessageMinAggregate>;
    _max?: InstanceType<typeof AssignUserGroupOnMessageMaxAggregate>;
}
export declare class AssignUserGroupOnMessageAggregateArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    orderBy?: Array<AssignUserGroupOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AssignUserGroupOnMessageCountAggregateInput>;
    _min?: InstanceType<typeof AssignUserGroupOnMessageMinAggregateInput>;
    _max?: InstanceType<typeof AssignUserGroupOnMessageMaxAggregateInput>;
}
export declare class AssignUserGroupOnMessageCountAggregateInput {
    userGroupId?: true;
    messageId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class AssignUserGroupOnMessageCountAggregate {
    userGroupId: number;
    messageId: number;
    createdAt: number;
    _all: number;
}
export declare class AssignUserGroupOnMessageCountOrderByAggregateInput {
    userGroupId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUserGroupOnMessageCreateManyMessageInputEnvelope {
    data: Array<AssignUserGroupOnMessageCreateManyMessageInput>;
    skipDuplicates?: boolean;
}
export declare class AssignUserGroupOnMessageCreateManyMessageInput {
    userGroupId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageCreateManyUserGroupInputEnvelope {
    data: Array<AssignUserGroupOnMessageCreateManyUserGroupInput>;
    skipDuplicates?: boolean;
}
export declare class AssignUserGroupOnMessageCreateManyUserGroupInput {
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageCreateManyInput {
    userGroupId: string;
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyMessageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
}
export declare class AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutUserGroupInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyUserGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
}
export declare class AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    create: InstanceType<typeof AssignUserGroupOnMessageCreateWithoutMessageInput>;
}
export declare class AssignUserGroupOnMessageCreateOrConnectWithoutUserGroupInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    create: InstanceType<typeof AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
}
export declare class AssignUserGroupOnMessageCreateWithoutMessageInput {
    createdAt?: Date | string;
    userGroup: InstanceType<typeof UserGroupCreateNestedOneWithoutAssignMessagesInput>;
}
export declare class AssignUserGroupOnMessageCreateWithoutUserGroupInput {
    createdAt?: Date | string;
    message: InstanceType<typeof MessageCreateNestedOneWithoutAssignGroupsInput>;
}
export declare class AssignUserGroupOnMessageCreateInput {
    createdAt?: Date | string;
    userGroup: InstanceType<typeof UserGroupCreateNestedOneWithoutAssignMessagesInput>;
    message: InstanceType<typeof MessageCreateNestedOneWithoutAssignGroupsInput>;
}
export declare class AssignUserGroupOnMessageGroupByArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    orderBy?: Array<AssignUserGroupOnMessageOrderByWithAggregationInput>;
    by: Array<keyof typeof AssignUserGroupOnMessageScalarFieldEnum>;
    having?: InstanceType<typeof AssignUserGroupOnMessageScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AssignUserGroupOnMessageCountAggregateInput>;
    _min?: InstanceType<typeof AssignUserGroupOnMessageMinAggregateInput>;
    _max?: InstanceType<typeof AssignUserGroupOnMessageMaxAggregateInput>;
}
export declare class AssignUserGroupOnMessageGroupBy {
    userGroupId: string;
    messageId: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof AssignUserGroupOnMessageCountAggregate>;
    _min?: InstanceType<typeof AssignUserGroupOnMessageMinAggregate>;
    _max?: InstanceType<typeof AssignUserGroupOnMessageMaxAggregate>;
}
export declare class AssignUserGroupOnMessageListRelationFilter {
    every?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    some?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    none?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
}
export declare class AssignUserGroupOnMessageMaxAggregateInput {
    userGroupId?: true;
    messageId?: true;
    createdAt?: true;
}
export declare class AssignUserGroupOnMessageMaxAggregate {
    userGroupId?: string;
    messageId?: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageMaxOrderByAggregateInput {
    userGroupId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUserGroupOnMessageMinAggregateInput {
    userGroupId?: true;
    messageId?: true;
    createdAt?: true;
}
export declare class AssignUserGroupOnMessageMinAggregate {
    userGroupId?: string;
    messageId?: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageMinOrderByAggregateInput {
    userGroupId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUserGroupOnMessageOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AssignUserGroupOnMessageOrderByWithAggregationInput {
    userGroupId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof AssignUserGroupOnMessageCountOrderByAggregateInput>;
    _max?: InstanceType<typeof AssignUserGroupOnMessageMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AssignUserGroupOnMessageMinOrderByAggregateInput>;
}
export declare class AssignUserGroupOnMessageOrderByWithRelationInput {
    userGroupId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    userGroup?: InstanceType<typeof UserGroupOrderByWithRelationInput>;
    message?: InstanceType<typeof MessageOrderByWithRelationInput>;
}
export declare class AssignUserGroupOnMessageScalarWhereWithAggregatesInput {
    AND?: Array<AssignUserGroupOnMessageScalarWhereWithAggregatesInput>;
    OR?: Array<AssignUserGroupOnMessageScalarWhereWithAggregatesInput>;
    NOT?: Array<AssignUserGroupOnMessageScalarWhereWithAggregatesInput>;
    userGroupId?: InstanceType<typeof StringWithAggregatesFilter>;
    messageId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class AssignUserGroupOnMessageScalarWhereInput {
    AND?: Array<AssignUserGroupOnMessageScalarWhereInput>;
    OR?: Array<AssignUserGroupOnMessageScalarWhereInput>;
    NOT?: Array<AssignUserGroupOnMessageScalarWhereInput>;
    userGroupId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutMessageInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyMessageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
}
export declare class AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutUserGroupInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyUserGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
}
export declare class AssignUserGroupOnMessageUncheckedCreateWithoutMessageInput {
    userGroupId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageUncheckedCreateWithoutUserGroupInput {
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageUncheckedCreateInput {
    userGroupId: string;
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageNestedInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput>;
    upsert?: Array<AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyMessageInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    update?: Array<AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutMessageInput>;
    updateMany?: Array<AssignUserGroupOnMessageUpdateManyWithWhereWithoutMessageInput>;
    deleteMany?: Array<AssignUserGroupOnMessageScalarWhereInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageInput {
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutUserGroupInput>;
    upsert?: Array<AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutUserGroupInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyUserGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    update?: Array<AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutUserGroupInput>;
    updateMany?: Array<AssignUserGroupOnMessageUpdateManyWithWhereWithoutUserGroupInput>;
    deleteMany?: Array<AssignUserGroupOnMessageScalarWhereInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupInput {
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateManyInput {
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateWithoutMessageInput {
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateWithoutUserGroupInput {
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUncheckedUpdateInput {
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUpdateManyMutationInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUserGroupOnMessageUpdateManyWithWhereWithoutMessageInput {
    where: InstanceType<typeof AssignUserGroupOnMessageScalarWhereInput>;
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateManyMutationInput>;
}
export declare class AssignUserGroupOnMessageUpdateManyWithWhereWithoutUserGroupInput {
    where: InstanceType<typeof AssignUserGroupOnMessageScalarWhereInput>;
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateManyMutationInput>;
}
export declare class AssignUserGroupOnMessageUpdateManyWithoutMessageNestedInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput>;
    upsert?: Array<AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyMessageInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    update?: Array<AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutMessageInput>;
    updateMany?: Array<AssignUserGroupOnMessageUpdateManyWithWhereWithoutMessageInput>;
    deleteMany?: Array<AssignUserGroupOnMessageScalarWhereInput>;
}
export declare class AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput {
    create?: Array<AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<AssignUserGroupOnMessageCreateOrConnectWithoutUserGroupInput>;
    upsert?: Array<AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutUserGroupInput>;
    createMany?: InstanceType<typeof AssignUserGroupOnMessageCreateManyUserGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>>;
    update?: Array<AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutUserGroupInput>;
    updateMany?: Array<AssignUserGroupOnMessageUpdateManyWithWhereWithoutUserGroupInput>;
    deleteMany?: Array<AssignUserGroupOnMessageScalarWhereInput>;
}
export declare class AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutMessageInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateWithoutMessageInput>;
}
export declare class AssignUserGroupOnMessageUpdateWithWhereUniqueWithoutUserGroupInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateWithoutUserGroupInput>;
}
export declare class AssignUserGroupOnMessageUpdateWithoutMessageInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroup?: InstanceType<typeof UserGroupUpdateOneRequiredWithoutAssignMessagesNestedInput>;
}
export declare class AssignUserGroupOnMessageUpdateWithoutUserGroupInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    message?: InstanceType<typeof MessageUpdateOneRequiredWithoutAssignGroupsNestedInput>;
}
export declare class AssignUserGroupOnMessageUpdateInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroup?: InstanceType<typeof UserGroupUpdateOneRequiredWithoutAssignMessagesNestedInput>;
    message?: InstanceType<typeof MessageUpdateOneRequiredWithoutAssignGroupsNestedInput>;
}
export declare class AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutMessageInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    update: InstanceType<typeof AssignUserGroupOnMessageUpdateWithoutMessageInput>;
    create: InstanceType<typeof AssignUserGroupOnMessageCreateWithoutMessageInput>;
}
export declare class AssignUserGroupOnMessageUpsertWithWhereUniqueWithoutUserGroupInput {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    update: InstanceType<typeof AssignUserGroupOnMessageUpdateWithoutUserGroupInput>;
    create: InstanceType<typeof AssignUserGroupOnMessageCreateWithoutUserGroupInput>;
}
export declare class AssignUserGroupOnMessageUserGroupIdMessageIdCompoundUniqueInput {
    userGroupId: string;
    messageId: string;
}
export declare class AssignUserGroupOnMessageWhereUniqueInput {
    userGroupId_messageId?: InstanceType<typeof AssignUserGroupOnMessageUserGroupIdMessageIdCompoundUniqueInput>;
    AND?: Array<AssignUserGroupOnMessageWhereInput>;
    OR?: Array<AssignUserGroupOnMessageWhereInput>;
    NOT?: Array<AssignUserGroupOnMessageWhereInput>;
    userGroupId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
    message?: InstanceType<typeof MessageRelationFilter>;
}
export declare class AssignUserGroupOnMessageWhereInput {
    AND?: Array<AssignUserGroupOnMessageWhereInput>;
    OR?: Array<AssignUserGroupOnMessageWhereInput>;
    NOT?: Array<AssignUserGroupOnMessageWhereInput>;
    userGroupId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
    message?: InstanceType<typeof MessageRelationFilter>;
}
export declare class AssignUserGroupOnMessage {
    userGroupId: string;
    messageId: string;
    createdAt: Date | null;
    userGroup?: InstanceType<typeof UserGroup>;
    message?: InstanceType<typeof Message>;
}
export declare class CreateManyAssignUserGroupOnMessageArgs {
    data: Array<AssignUserGroupOnMessageCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAssignUserGroupOnMessageArgs {
    data: InstanceType<typeof AssignUserGroupOnMessageCreateInput>;
}
export declare class DeleteManyAssignUserGroupOnMessageArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
}
export declare class DeleteOneAssignUserGroupOnMessageArgs {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
}
export declare class FindFirstAssignUserGroupOnMessageOrThrowArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    orderBy?: Array<AssignUserGroupOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUserGroupOnMessageScalarFieldEnum>;
}
export declare class FindFirstAssignUserGroupOnMessageArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    orderBy?: Array<AssignUserGroupOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUserGroupOnMessageScalarFieldEnum>;
}
export declare class FindManyAssignUserGroupOnMessageArgs {
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
    orderBy?: Array<AssignUserGroupOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUserGroupOnMessageScalarFieldEnum>;
}
export declare class FindUniqueAssignUserGroupOnMessageOrThrowArgs {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
}
export declare class FindUniqueAssignUserGroupOnMessageArgs {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
}
export declare class UpdateManyAssignUserGroupOnMessageArgs {
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateManyMutationInput>;
    where?: InstanceType<typeof AssignUserGroupOnMessageWhereInput>;
}
export declare class UpdateOneAssignUserGroupOnMessageArgs {
    data: InstanceType<typeof AssignUserGroupOnMessageUpdateInput>;
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
}
export declare class UpsertOneAssignUserGroupOnMessageArgs {
    where: Prisma.AtLeast<AssignUserGroupOnMessageWhereUniqueInput, 'userGroupId_messageId'>;
    create: InstanceType<typeof AssignUserGroupOnMessageCreateInput>;
    update: InstanceType<typeof AssignUserGroupOnMessageUpdateInput>;
}
export declare class AggregateAssignUsersOnMessage {
    _count?: InstanceType<typeof AssignUsersOnMessageCountAggregate>;
    _min?: InstanceType<typeof AssignUsersOnMessageMinAggregate>;
    _max?: InstanceType<typeof AssignUsersOnMessageMaxAggregate>;
}
export declare class AssignUsersOnMessageAggregateArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    orderBy?: Array<AssignUsersOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AssignUsersOnMessageCountAggregateInput>;
    _min?: InstanceType<typeof AssignUsersOnMessageMinAggregateInput>;
    _max?: InstanceType<typeof AssignUsersOnMessageMaxAggregateInput>;
}
export declare class AssignUsersOnMessageCountAggregateInput {
    userId?: true;
    messageId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class AssignUsersOnMessageCountAggregate {
    userId: number;
    messageId: number;
    createdAt: number;
    _all: number;
}
export declare class AssignUsersOnMessageCountOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUsersOnMessageCreateManyMessageInputEnvelope {
    data: Array<AssignUsersOnMessageCreateManyMessageInput>;
    skipDuplicates?: boolean;
}
export declare class AssignUsersOnMessageCreateManyMessageInput {
    userId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageCreateManyUserInputEnvelope {
    data: Array<AssignUsersOnMessageCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class AssignUsersOnMessageCreateManyUserInput {
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageCreateManyInput {
    userId: string;
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageCreateNestedManyWithoutMessageInput {
    create?: Array<AssignUsersOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyMessageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
}
export declare class AssignUsersOnMessageCreateNestedManyWithoutUserInput {
    create?: Array<AssignUsersOnMessageCreateWithoutUserInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
}
export declare class AssignUsersOnMessageCreateOrConnectWithoutMessageInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    create: InstanceType<typeof AssignUsersOnMessageCreateWithoutMessageInput>;
}
export declare class AssignUsersOnMessageCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    create: InstanceType<typeof AssignUsersOnMessageCreateWithoutUserInput>;
}
export declare class AssignUsersOnMessageCreateWithoutMessageInput {
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutAssignMessagesInput>;
}
export declare class AssignUsersOnMessageCreateWithoutUserInput {
    createdAt?: Date | string;
    message: InstanceType<typeof MessageCreateNestedOneWithoutAssignUsersInput>;
}
export declare class AssignUsersOnMessageCreateInput {
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutAssignMessagesInput>;
    message: InstanceType<typeof MessageCreateNestedOneWithoutAssignUsersInput>;
}
export declare class AssignUsersOnMessageGroupByArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    orderBy?: Array<AssignUsersOnMessageOrderByWithAggregationInput>;
    by: Array<keyof typeof AssignUsersOnMessageScalarFieldEnum>;
    having?: InstanceType<typeof AssignUsersOnMessageScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AssignUsersOnMessageCountAggregateInput>;
    _min?: InstanceType<typeof AssignUsersOnMessageMinAggregateInput>;
    _max?: InstanceType<typeof AssignUsersOnMessageMaxAggregateInput>;
}
export declare class AssignUsersOnMessageGroupBy {
    userId: string;
    messageId: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof AssignUsersOnMessageCountAggregate>;
    _min?: InstanceType<typeof AssignUsersOnMessageMinAggregate>;
    _max?: InstanceType<typeof AssignUsersOnMessageMaxAggregate>;
}
export declare class AssignUsersOnMessageListRelationFilter {
    every?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    some?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    none?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
}
export declare class AssignUsersOnMessageMaxAggregateInput {
    userId?: true;
    messageId?: true;
    createdAt?: true;
}
export declare class AssignUsersOnMessageMaxAggregate {
    userId?: string;
    messageId?: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageMaxOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUsersOnMessageMinAggregateInput {
    userId?: true;
    messageId?: true;
    createdAt?: true;
}
export declare class AssignUsersOnMessageMinAggregate {
    userId?: string;
    messageId?: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageMinOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class AssignUsersOnMessageOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AssignUsersOnMessageOrderByWithAggregationInput {
    userId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof AssignUsersOnMessageCountOrderByAggregateInput>;
    _max?: InstanceType<typeof AssignUsersOnMessageMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AssignUsersOnMessageMinOrderByAggregateInput>;
}
export declare class AssignUsersOnMessageOrderByWithRelationInput {
    userId?: keyof typeof SortOrder;
    messageId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    message?: InstanceType<typeof MessageOrderByWithRelationInput>;
}
export declare class AssignUsersOnMessageScalarWhereWithAggregatesInput {
    AND?: Array<AssignUsersOnMessageScalarWhereWithAggregatesInput>;
    OR?: Array<AssignUsersOnMessageScalarWhereWithAggregatesInput>;
    NOT?: Array<AssignUsersOnMessageScalarWhereWithAggregatesInput>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    messageId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class AssignUsersOnMessageScalarWhereInput {
    AND?: Array<AssignUsersOnMessageScalarWhereInput>;
    OR?: Array<AssignUsersOnMessageScalarWhereInput>;
    NOT?: Array<AssignUsersOnMessageScalarWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class AssignUsersOnMessageUncheckedCreateNestedManyWithoutMessageInput {
    create?: Array<AssignUsersOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyMessageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
}
export declare class AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<AssignUsersOnMessageCreateWithoutUserInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
}
export declare class AssignUsersOnMessageUncheckedCreateWithoutMessageInput {
    userId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageUncheckedCreateWithoutUserInput {
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageUncheckedCreateInput {
    userId: string;
    messageId: string;
    createdAt?: Date | string;
}
export declare class AssignUsersOnMessageUncheckedUpdateManyWithoutMessageNestedInput {
    create?: Array<AssignUsersOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutMessageInput>;
    upsert?: Array<AssignUsersOnMessageUpsertWithWhereUniqueWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyMessageInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    update?: Array<AssignUsersOnMessageUpdateWithWhereUniqueWithoutMessageInput>;
    updateMany?: Array<AssignUsersOnMessageUpdateManyWithWhereWithoutMessageInput>;
    deleteMany?: Array<AssignUsersOnMessageScalarWhereInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateManyWithoutMessageInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<AssignUsersOnMessageCreateWithoutUserInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutUserInput>;
    upsert?: Array<AssignUsersOnMessageUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    update?: Array<AssignUsersOnMessageUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AssignUsersOnMessageUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AssignUsersOnMessageScalarWhereInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateManyWithoutUserInput {
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateManyInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateWithoutMessageInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateWithoutUserInput {
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUncheckedUpdateInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUpdateManyMutationInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AssignUsersOnMessageUpdateManyWithWhereWithoutMessageInput {
    where: InstanceType<typeof AssignUsersOnMessageScalarWhereInput>;
    data: InstanceType<typeof AssignUsersOnMessageUpdateManyMutationInput>;
}
export declare class AssignUsersOnMessageUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof AssignUsersOnMessageScalarWhereInput>;
    data: InstanceType<typeof AssignUsersOnMessageUpdateManyMutationInput>;
}
export declare class AssignUsersOnMessageUpdateManyWithoutMessageNestedInput {
    create?: Array<AssignUsersOnMessageCreateWithoutMessageInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutMessageInput>;
    upsert?: Array<AssignUsersOnMessageUpsertWithWhereUniqueWithoutMessageInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyMessageInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    update?: Array<AssignUsersOnMessageUpdateWithWhereUniqueWithoutMessageInput>;
    updateMany?: Array<AssignUsersOnMessageUpdateManyWithWhereWithoutMessageInput>;
    deleteMany?: Array<AssignUsersOnMessageScalarWhereInput>;
}
export declare class AssignUsersOnMessageUpdateManyWithoutUserNestedInput {
    create?: Array<AssignUsersOnMessageCreateWithoutUserInput>;
    connectOrCreate?: Array<AssignUsersOnMessageCreateOrConnectWithoutUserInput>;
    upsert?: Array<AssignUsersOnMessageUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AssignUsersOnMessageCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    disconnect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    delete?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    connect?: Array<Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>>;
    update?: Array<AssignUsersOnMessageUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AssignUsersOnMessageUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AssignUsersOnMessageScalarWhereInput>;
}
export declare class AssignUsersOnMessageUpdateWithWhereUniqueWithoutMessageInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    data: InstanceType<typeof AssignUsersOnMessageUpdateWithoutMessageInput>;
}
export declare class AssignUsersOnMessageUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    data: InstanceType<typeof AssignUsersOnMessageUpdateWithoutUserInput>;
}
export declare class AssignUsersOnMessageUpdateWithoutMessageInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAssignMessagesNestedInput>;
}
export declare class AssignUsersOnMessageUpdateWithoutUserInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    message?: InstanceType<typeof MessageUpdateOneRequiredWithoutAssignUsersNestedInput>;
}
export declare class AssignUsersOnMessageUpdateInput {
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAssignMessagesNestedInput>;
    message?: InstanceType<typeof MessageUpdateOneRequiredWithoutAssignUsersNestedInput>;
}
export declare class AssignUsersOnMessageUpsertWithWhereUniqueWithoutMessageInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    update: InstanceType<typeof AssignUsersOnMessageUpdateWithoutMessageInput>;
    create: InstanceType<typeof AssignUsersOnMessageCreateWithoutMessageInput>;
}
export declare class AssignUsersOnMessageUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    update: InstanceType<typeof AssignUsersOnMessageUpdateWithoutUserInput>;
    create: InstanceType<typeof AssignUsersOnMessageCreateWithoutUserInput>;
}
export declare class AssignUsersOnMessageUserIdMessageIdCompoundUniqueInput {
    userId: string;
    messageId: string;
}
export declare class AssignUsersOnMessageWhereUniqueInput {
    userId_messageId?: InstanceType<typeof AssignUsersOnMessageUserIdMessageIdCompoundUniqueInput>;
    AND?: Array<AssignUsersOnMessageWhereInput>;
    OR?: Array<AssignUsersOnMessageWhereInput>;
    NOT?: Array<AssignUsersOnMessageWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    message?: InstanceType<typeof MessageRelationFilter>;
}
export declare class AssignUsersOnMessageWhereInput {
    AND?: Array<AssignUsersOnMessageWhereInput>;
    OR?: Array<AssignUsersOnMessageWhereInput>;
    NOT?: Array<AssignUsersOnMessageWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    messageId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    message?: InstanceType<typeof MessageRelationFilter>;
}
export declare class AssignUsersOnMessage {
    userId: string;
    messageId: string;
    createdAt: Date | null;
    user?: InstanceType<typeof User>;
    message?: InstanceType<typeof Message>;
}
export declare class CreateManyAssignUsersOnMessageArgs {
    data: Array<AssignUsersOnMessageCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAssignUsersOnMessageArgs {
    data: InstanceType<typeof AssignUsersOnMessageCreateInput>;
}
export declare class DeleteManyAssignUsersOnMessageArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
}
export declare class DeleteOneAssignUsersOnMessageArgs {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
}
export declare class FindFirstAssignUsersOnMessageOrThrowArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    orderBy?: Array<AssignUsersOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUsersOnMessageScalarFieldEnum>;
}
export declare class FindFirstAssignUsersOnMessageArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    orderBy?: Array<AssignUsersOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUsersOnMessageScalarFieldEnum>;
}
export declare class FindManyAssignUsersOnMessageArgs {
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
    orderBy?: Array<AssignUsersOnMessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AssignUsersOnMessageScalarFieldEnum>;
}
export declare class FindUniqueAssignUsersOnMessageOrThrowArgs {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
}
export declare class FindUniqueAssignUsersOnMessageArgs {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
}
export declare class UpdateManyAssignUsersOnMessageArgs {
    data: InstanceType<typeof AssignUsersOnMessageUpdateManyMutationInput>;
    where?: InstanceType<typeof AssignUsersOnMessageWhereInput>;
}
export declare class UpdateOneAssignUsersOnMessageArgs {
    data: InstanceType<typeof AssignUsersOnMessageUpdateInput>;
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
}
export declare class UpsertOneAssignUsersOnMessageArgs {
    where: Prisma.AtLeast<AssignUsersOnMessageWhereUniqueInput, 'userId_messageId'>;
    create: InstanceType<typeof AssignUsersOnMessageCreateInput>;
    update: InstanceType<typeof AssignUsersOnMessageUpdateInput>;
}
export declare class AggregateLogs {
    _count?: InstanceType<typeof LogsCountAggregate>;
    _min?: InstanceType<typeof LogsMinAggregate>;
    _max?: InstanceType<typeof LogsMaxAggregate>;
}
export declare class CreateManyLogsArgs {
    data: Array<LogsCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneLogsArgs {
    data: InstanceType<typeof LogsCreateInput>;
}
export declare class DeleteManyLogsArgs {
    where?: InstanceType<typeof LogsWhereInput>;
}
export declare class DeleteOneLogsArgs {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
}
export declare class FindFirstLogsOrThrowArgs {
    where?: InstanceType<typeof LogsWhereInput>;
    orderBy?: Array<LogsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LogsScalarFieldEnum>;
}
export declare class FindFirstLogsArgs {
    where?: InstanceType<typeof LogsWhereInput>;
    orderBy?: Array<LogsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LogsScalarFieldEnum>;
}
export declare class FindManyLogsArgs {
    where?: InstanceType<typeof LogsWhereInput>;
    orderBy?: Array<LogsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LogsScalarFieldEnum>;
}
export declare class FindUniqueLogsOrThrowArgs {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
}
export declare class FindUniqueLogsArgs {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
}
export declare class LogsAggregateArgs {
    where?: InstanceType<typeof LogsWhereInput>;
    orderBy?: Array<LogsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof LogsCountAggregateInput>;
    _min?: InstanceType<typeof LogsMinAggregateInput>;
    _max?: InstanceType<typeof LogsMaxAggregateInput>;
}
export declare class LogsCountAggregateInput {
    id?: true;
    userId?: true;
    type?: true;
    data?: true;
    createdAt?: true;
    _all?: true;
}
export declare class LogsCountAggregate {
    id: number;
    userId: number;
    type: number;
    data: number;
    createdAt: number;
    _all: number;
}
export declare class LogsCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    data?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class LogsCreateManyUserInputEnvelope {
    data: Array<LogsCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class LogsCreateManyUserInput {
    id?: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
}
export declare class LogsCreateManyInput {
    id?: string;
    userId: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
}
export declare class LogsCreateNestedManyWithoutUserInput {
    create?: Array<LogsCreateWithoutUserInput>;
    connectOrCreate?: Array<LogsCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof LogsCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
}
export declare class LogsCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    create: InstanceType<typeof LogsCreateWithoutUserInput>;
}
export declare class LogsCreateWithoutUserInput {
    id?: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
}
export declare class LogsCreateInput {
    id?: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutLogsInput>;
}
export declare class LogsGroupByArgs {
    where?: InstanceType<typeof LogsWhereInput>;
    orderBy?: Array<LogsOrderByWithAggregationInput>;
    by: Array<keyof typeof LogsScalarFieldEnum>;
    having?: InstanceType<typeof LogsScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof LogsCountAggregateInput>;
    _min?: InstanceType<typeof LogsMinAggregateInput>;
    _max?: InstanceType<typeof LogsMaxAggregateInput>;
}
export declare class LogsGroupBy {
    id: string;
    userId: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
    _count?: InstanceType<typeof LogsCountAggregate>;
    _min?: InstanceType<typeof LogsMinAggregate>;
    _max?: InstanceType<typeof LogsMaxAggregate>;
}
export declare class LogsListRelationFilter {
    every?: InstanceType<typeof LogsWhereInput>;
    some?: InstanceType<typeof LogsWhereInput>;
    none?: InstanceType<typeof LogsWhereInput>;
}
export declare class LogsMaxAggregateInput {
    id?: true;
    userId?: true;
    type?: true;
    createdAt?: true;
}
export declare class LogsMaxAggregate {
    id?: string;
    userId?: string;
    type?: string;
    createdAt?: Date | string;
}
export declare class LogsMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class LogsMinAggregateInput {
    id?: true;
    userId?: true;
    type?: true;
    createdAt?: true;
}
export declare class LogsMinAggregate {
    id?: string;
    userId?: string;
    type?: string;
    createdAt?: Date | string;
}
export declare class LogsMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class LogsOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class LogsOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    data?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof LogsCountOrderByAggregateInput>;
    _max?: InstanceType<typeof LogsMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof LogsMinOrderByAggregateInput>;
}
export declare class LogsOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    data?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class LogsScalarWhereWithAggregatesInput {
    AND?: Array<LogsScalarWhereWithAggregatesInput>;
    OR?: Array<LogsScalarWhereWithAggregatesInput>;
    NOT?: Array<LogsScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    type?: InstanceType<typeof StringWithAggregatesFilter>;
    data?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class LogsScalarWhereInput {
    AND?: Array<LogsScalarWhereInput>;
    OR?: Array<LogsScalarWhereInput>;
    NOT?: Array<LogsScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof StringFilter>;
    data?: InstanceType<typeof JsonNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class LogsUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<LogsCreateWithoutUserInput>;
    connectOrCreate?: Array<LogsCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof LogsCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
}
export declare class LogsUncheckedCreateWithoutUserInput {
    id?: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
}
export declare class LogsUncheckedCreateInput {
    id?: string;
    userId: string;
    type: string;
    data?: any;
    createdAt?: Date | string;
}
export declare class LogsUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<LogsCreateWithoutUserInput>;
    connectOrCreate?: Array<LogsCreateOrConnectWithoutUserInput>;
    upsert?: Array<LogsUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof LogsCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    update?: Array<LogsUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LogsUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LogsScalarWhereInput>;
}
export declare class LogsUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof LogsScalarWhereInput>;
    data: InstanceType<typeof LogsUpdateManyMutationInput>;
}
export declare class LogsUpdateManyWithoutUserNestedInput {
    create?: Array<LogsCreateWithoutUserInput>;
    connectOrCreate?: Array<LogsCreateOrConnectWithoutUserInput>;
    upsert?: Array<LogsUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof LogsCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogsWhereUniqueInput, 'id'>>;
    update?: Array<LogsUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LogsUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LogsScalarWhereInput>;
}
export declare class LogsUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    data: InstanceType<typeof LogsUpdateWithoutUserInput>;
}
export declare class LogsUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class LogsUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    data?: any;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutLogsNestedInput>;
}
export declare class LogsUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    update: InstanceType<typeof LogsUpdateWithoutUserInput>;
    create: InstanceType<typeof LogsCreateWithoutUserInput>;
}
export declare class LogsWhereUniqueInput {
    id?: string;
    AND?: Array<LogsWhereInput>;
    OR?: Array<LogsWhereInput>;
    NOT?: Array<LogsWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof StringFilter>;
    data?: InstanceType<typeof JsonNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class LogsWhereInput {
    AND?: Array<LogsWhereInput>;
    OR?: Array<LogsWhereInput>;
    NOT?: Array<LogsWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof StringFilter>;
    data?: InstanceType<typeof JsonNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class Logs {
    id: string;
    userId: string;
    type: string;
    data: any | null;
    createdAt: Date | null;
    user?: InstanceType<typeof User>;
}
export declare class UpdateManyLogsArgs {
    data: InstanceType<typeof LogsUpdateManyMutationInput>;
    where?: InstanceType<typeof LogsWhereInput>;
}
export declare class UpdateOneLogsArgs {
    data: InstanceType<typeof LogsUpdateInput>;
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
}
export declare class UpsertOneLogsArgs {
    where: Prisma.AtLeast<LogsWhereUniqueInput, 'id'>;
    create: InstanceType<typeof LogsCreateInput>;
    update: InstanceType<typeof LogsUpdateInput>;
}
export declare class AggregateMessage {
    _count?: InstanceType<typeof MessageCountAggregate>;
    _min?: InstanceType<typeof MessageMinAggregate>;
    _max?: InstanceType<typeof MessageMaxAggregate>;
}
export declare class CreateManyMessageArgs {
    data: Array<MessageCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneMessageArgs {
    data: InstanceType<typeof MessageCreateInput>;
}
export declare class DeleteManyMessageArgs {
    where?: InstanceType<typeof MessageWhereInput>;
}
export declare class DeleteOneMessageArgs {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class FindFirstMessageOrThrowArgs {
    where?: InstanceType<typeof MessageWhereInput>;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
export declare class FindFirstMessageArgs {
    where?: InstanceType<typeof MessageWhereInput>;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
export declare class FindManyMessageArgs {
    where?: InstanceType<typeof MessageWhereInput>;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
export declare class FindUniqueMessageOrThrowArgs {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class FindUniqueMessageArgs {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class MessageAggregateArgs {
    where?: InstanceType<typeof MessageWhereInput>;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof MessageCountAggregateInput>;
    _min?: InstanceType<typeof MessageMinAggregateInput>;
    _max?: InstanceType<typeof MessageMaxAggregateInput>;
}
export declare class MessageCountAggregateInput {
    id?: true;
    prefix?: true;
    title?: true;
    body?: true;
    createdUserId?: true;
    messageTypeId?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
}
export declare class MessageCountAggregate {
    id: number;
    prefix: number;
    title: number;
    body: number;
    createdUserId: number;
    messageTypeId: number;
    status: number;
    createdAt: number;
    _all: number;
}
export declare class MessageCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    prefix?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    messageTypeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageCount {
    assignUsers?: number;
    assignGroups?: number;
}
export declare class MessageCreateManyCreatedUserInputEnvelope {
    data: Array<MessageCreateManyCreatedUserInput>;
    skipDuplicates?: boolean;
}
export declare class MessageCreateManyCreatedUserInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
}
export declare class MessageCreateManyMessageTypeInputEnvelope {
    data: Array<MessageCreateManyMessageTypeInput>;
    skipDuplicates?: boolean;
}
export declare class MessageCreateManyMessageTypeInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
}
export declare class MessageCreateManyInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
}
export declare class MessageCreateNestedManyWithoutCreatedUserInput {
    create?: Array<MessageCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageCreateManyCreatedUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
}
export declare class MessageCreateNestedManyWithoutMessageTypeInput {
    create?: Array<MessageCreateWithoutMessageTypeInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageTypeInput>;
    createMany?: InstanceType<typeof MessageCreateManyMessageTypeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
}
export declare class MessageCreateNestedOneWithoutAssignGroupsInput {
    create?: InstanceType<typeof MessageCreateWithoutAssignGroupsInput>;
    connectOrCreate?: InstanceType<typeof MessageCreateOrConnectWithoutAssignGroupsInput>;
    connect?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class MessageCreateNestedOneWithoutAssignUsersInput {
    create?: InstanceType<typeof MessageCreateWithoutAssignUsersInput>;
    connectOrCreate?: InstanceType<typeof MessageCreateOrConnectWithoutAssignUsersInput>;
    connect?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class MessageCreateOrConnectWithoutAssignGroupsInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    create: InstanceType<typeof MessageCreateWithoutAssignGroupsInput>;
}
export declare class MessageCreateOrConnectWithoutAssignUsersInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    create: InstanceType<typeof MessageCreateWithoutAssignUsersInput>;
}
export declare class MessageCreateOrConnectWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    create: InstanceType<typeof MessageCreateWithoutCreatedUserInput>;
}
export declare class MessageCreateOrConnectWithoutMessageTypeInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    create: InstanceType<typeof MessageCreateWithoutMessageTypeInput>;
}
export declare class MessageCreateWithoutAssignGroupsInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutMessageInput>;
    messageType: InstanceType<typeof MessageTypeCreateNestedOneWithoutMessageInput>;
}
export declare class MessageCreateWithoutAssignUsersInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput>;
    messageType: InstanceType<typeof MessageTypeCreateNestedOneWithoutMessageInput>;
}
export declare class MessageCreateWithoutCreatedUserInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput>;
    messageType: InstanceType<typeof MessageTypeCreateNestedOneWithoutMessageInput>;
}
export declare class MessageCreateWithoutMessageTypeInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput>;
}
export declare class MessageCreateInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput>;
    messageType: InstanceType<typeof MessageTypeCreateNestedOneWithoutMessageInput>;
}
export declare class MessageGroupByArgs {
    where?: InstanceType<typeof MessageWhereInput>;
    orderBy?: Array<MessageOrderByWithAggregationInput>;
    by: Array<keyof typeof MessageScalarFieldEnum>;
    having?: InstanceType<typeof MessageScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof MessageCountAggregateInput>;
    _min?: InstanceType<typeof MessageMinAggregateInput>;
    _max?: InstanceType<typeof MessageMaxAggregateInput>;
}
export declare class MessageGroupBy {
    id: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    _count?: InstanceType<typeof MessageCountAggregate>;
    _min?: InstanceType<typeof MessageMinAggregate>;
    _max?: InstanceType<typeof MessageMaxAggregate>;
}
export declare class MessageListRelationFilter {
    every?: InstanceType<typeof MessageWhereInput>;
    some?: InstanceType<typeof MessageWhereInput>;
    none?: InstanceType<typeof MessageWhereInput>;
}
export declare class MessageMaxAggregateInput {
    id?: true;
    prefix?: true;
    title?: true;
    body?: true;
    createdUserId?: true;
    messageTypeId?: true;
    status?: true;
    createdAt?: true;
}
export declare class MessageMaxAggregate {
    id?: string;
    prefix?: string;
    title?: string;
    body?: string;
    createdUserId?: string;
    messageTypeId?: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
}
export declare class MessageMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    prefix?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    messageTypeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageMinAggregateInput {
    id?: true;
    prefix?: true;
    title?: true;
    body?: true;
    createdUserId?: true;
    messageTypeId?: true;
    status?: true;
    createdAt?: true;
}
export declare class MessageMinAggregate {
    id?: string;
    prefix?: string;
    title?: string;
    body?: string;
    createdUserId?: string;
    messageTypeId?: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
}
export declare class MessageMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    prefix?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    messageTypeId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class MessageOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    prefix?: InstanceType<typeof SortOrderInput>;
    title?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    messageTypeId?: keyof typeof SortOrder;
    status?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof MessageCountOrderByAggregateInput>;
    _max?: InstanceType<typeof MessageMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof MessageMinOrderByAggregateInput>;
}
export declare class MessageOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    prefix?: InstanceType<typeof SortOrderInput>;
    title?: keyof typeof SortOrder;
    body?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    messageTypeId?: keyof typeof SortOrder;
    status?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    createdUser?: InstanceType<typeof UserOrderByWithRelationInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageOrderByRelationAggregateInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageOrderByRelationAggregateInput>;
    messageType?: InstanceType<typeof MessageTypeOrderByWithRelationInput>;
}
export declare class MessageRelationFilter {
    is?: InstanceType<typeof MessageWhereInput>;
    isNot?: InstanceType<typeof MessageWhereInput>;
}
export declare class MessageScalarWhereWithAggregatesInput {
    AND?: Array<MessageScalarWhereWithAggregatesInput>;
    OR?: Array<MessageScalarWhereWithAggregatesInput>;
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    prefix?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    body?: InstanceType<typeof StringWithAggregatesFilter>;
    createdUserId?: InstanceType<typeof StringWithAggregatesFilter>;
    messageTypeId?: InstanceType<typeof StringWithAggregatesFilter>;
    status?: InstanceType<typeof EnumMessageStatusNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class MessageScalarWhereInput {
    AND?: Array<MessageScalarWhereInput>;
    OR?: Array<MessageScalarWhereInput>;
    NOT?: Array<MessageScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    prefix?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
    body?: InstanceType<typeof StringFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    messageTypeId?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumMessageStatusNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class MessageUncheckedCreateNestedManyWithoutCreatedUserInput {
    create?: Array<MessageCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageCreateManyCreatedUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
}
export declare class MessageUncheckedCreateNestedManyWithoutMessageTypeInput {
    create?: Array<MessageCreateWithoutMessageTypeInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageTypeInput>;
    createMany?: InstanceType<typeof MessageCreateManyMessageTypeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
}
export declare class MessageUncheckedCreateWithoutAssignGroupsInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
}
export declare class MessageUncheckedCreateWithoutAssignUsersInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
}
export declare class MessageUncheckedCreateWithoutCreatedUserInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
}
export declare class MessageUncheckedCreateWithoutMessageTypeInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
}
export declare class MessageUncheckedCreateInput {
    id?: string;
    prefix?: string;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status?: keyof typeof MessageStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutMessageInput>;
}
export declare class MessageUncheckedUpdateManyWithoutCreatedUserNestedInput {
    create?: Array<MessageCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCreatedUserInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageCreateManyCreatedUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutCreatedUserInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutCreatedUserInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
export declare class MessageUncheckedUpdateManyWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageUncheckedUpdateManyWithoutMessageTypeNestedInput {
    create?: Array<MessageCreateWithoutMessageTypeInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageTypeInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutMessageTypeInput>;
    createMany?: InstanceType<typeof MessageCreateManyMessageTypeInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutMessageTypeInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutMessageTypeInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
export declare class MessageUncheckedUpdateManyWithoutMessageTypeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageUncheckedUpdateWithoutAssignGroupsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUncheckedUpdateWithoutAssignUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUncheckedUpdateWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUncheckedUpdateWithoutMessageTypeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    messageTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageUpdateManyWithWhereWithoutCreatedUserInput {
    where: InstanceType<typeof MessageScalarWhereInput>;
    data: InstanceType<typeof MessageUpdateManyMutationInput>;
}
export declare class MessageUpdateManyWithWhereWithoutMessageTypeInput {
    where: InstanceType<typeof MessageScalarWhereInput>;
    data: InstanceType<typeof MessageUpdateManyMutationInput>;
}
export declare class MessageUpdateManyWithoutCreatedUserNestedInput {
    create?: Array<MessageCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCreatedUserInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageCreateManyCreatedUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutCreatedUserInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutCreatedUserInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
export declare class MessageUpdateManyWithoutMessageTypeNestedInput {
    create?: Array<MessageCreateWithoutMessageTypeInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageTypeInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutMessageTypeInput>;
    createMany?: InstanceType<typeof MessageCreateManyMessageTypeInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutMessageTypeInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutMessageTypeInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
export declare class MessageUpdateOneRequiredWithoutAssignGroupsNestedInput {
    create?: InstanceType<typeof MessageCreateWithoutAssignGroupsInput>;
    connectOrCreate?: InstanceType<typeof MessageCreateOrConnectWithoutAssignGroupsInput>;
    upsert?: InstanceType<typeof MessageUpsertWithoutAssignGroupsInput>;
    connect?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof MessageUpdateToOneWithWhereWithoutAssignGroupsInput>;
}
export declare class MessageUpdateOneRequiredWithoutAssignUsersNestedInput {
    create?: InstanceType<typeof MessageCreateWithoutAssignUsersInput>;
    connectOrCreate?: InstanceType<typeof MessageCreateOrConnectWithoutAssignUsersInput>;
    upsert?: InstanceType<typeof MessageUpsertWithoutAssignUsersInput>;
    connect?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof MessageUpdateToOneWithWhereWithoutAssignUsersInput>;
}
export declare class MessageUpdateToOneWithWhereWithoutAssignGroupsInput {
    where?: InstanceType<typeof MessageWhereInput>;
    data: InstanceType<typeof MessageUpdateWithoutAssignGroupsInput>;
}
export declare class MessageUpdateToOneWithWhereWithoutAssignUsersInput {
    where?: InstanceType<typeof MessageWhereInput>;
    data: InstanceType<typeof MessageUpdateWithoutAssignUsersInput>;
}
export declare class MessageUpdateWithWhereUniqueWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    data: InstanceType<typeof MessageUpdateWithoutCreatedUserInput>;
}
export declare class MessageUpdateWithWhereUniqueWithoutMessageTypeInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    data: InstanceType<typeof MessageUpdateWithoutMessageTypeInput>;
}
export declare class MessageUpdateWithoutAssignGroupsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesNestedInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutMessageNestedInput>;
    messageType?: InstanceType<typeof MessageTypeUpdateOneRequiredWithoutMessageNestedInput>;
}
export declare class MessageUpdateWithoutAssignUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutMessageNestedInput>;
    messageType?: InstanceType<typeof MessageTypeUpdateOneRequiredWithoutMessageNestedInput>;
}
export declare class MessageUpdateWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutMessageNestedInput>;
    messageType?: InstanceType<typeof MessageTypeUpdateOneRequiredWithoutMessageNestedInput>;
}
export declare class MessageUpdateWithoutMessageTypeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesNestedInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutMessageNestedInput>;
}
export declare class MessageUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    prefix?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    body?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableEnumMessageStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesNestedInput>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutMessageNestedInput>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutMessageNestedInput>;
    messageType?: InstanceType<typeof MessageTypeUpdateOneRequiredWithoutMessageNestedInput>;
}
export declare class MessageUpsertWithWhereUniqueWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    update: InstanceType<typeof MessageUpdateWithoutCreatedUserInput>;
    create: InstanceType<typeof MessageCreateWithoutCreatedUserInput>;
}
export declare class MessageUpsertWithWhereUniqueWithoutMessageTypeInput {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    update: InstanceType<typeof MessageUpdateWithoutMessageTypeInput>;
    create: InstanceType<typeof MessageCreateWithoutMessageTypeInput>;
}
export declare class MessageUpsertWithoutAssignGroupsInput {
    update: InstanceType<typeof MessageUpdateWithoutAssignGroupsInput>;
    create: InstanceType<typeof MessageCreateWithoutAssignGroupsInput>;
    where?: InstanceType<typeof MessageWhereInput>;
}
export declare class MessageUpsertWithoutAssignUsersInput {
    update: InstanceType<typeof MessageUpdateWithoutAssignUsersInput>;
    create: InstanceType<typeof MessageCreateWithoutAssignUsersInput>;
    where?: InstanceType<typeof MessageWhereInput>;
}
export declare class MessageWhereUniqueInput {
    id?: string;
    AND?: Array<MessageWhereInput>;
    OR?: Array<MessageWhereInput>;
    NOT?: Array<MessageWhereInput>;
    prefix?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
    body?: InstanceType<typeof StringFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    messageTypeId?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumMessageStatusNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdUser?: InstanceType<typeof UserRelationFilter>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageListRelationFilter>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageListRelationFilter>;
    messageType?: InstanceType<typeof MessageTypeRelationFilter>;
}
export declare class MessageWhereInput {
    AND?: Array<MessageWhereInput>;
    OR?: Array<MessageWhereInput>;
    NOT?: Array<MessageWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    prefix?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
    body?: InstanceType<typeof StringFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    messageTypeId?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumMessageStatusNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdUser?: InstanceType<typeof UserRelationFilter>;
    assignUsers?: InstanceType<typeof AssignUsersOnMessageListRelationFilter>;
    assignGroups?: InstanceType<typeof AssignUserGroupOnMessageListRelationFilter>;
    messageType?: InstanceType<typeof MessageTypeRelationFilter>;
}
export declare class Message {
    id: string;
    prefix: string | null;
    title: string;
    body: string;
    createdUserId: string;
    messageTypeId: string;
    status: keyof typeof MessageStatus | null;
    createdAt: Date | null;
    createdUser?: InstanceType<typeof User>;
    assignUsers?: Array<AssignUsersOnMessage>;
    assignGroups?: Array<AssignUserGroupOnMessage>;
    messageType?: InstanceType<typeof MessageType>;
    _count?: InstanceType<typeof MessageCount>;
}
export declare class UpdateManyMessageArgs {
    data: InstanceType<typeof MessageUpdateManyMutationInput>;
    where?: InstanceType<typeof MessageWhereInput>;
}
export declare class UpdateOneMessageArgs {
    data: InstanceType<typeof MessageUpdateInput>;
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
}
export declare class UpsertOneMessageArgs {
    where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;
    create: InstanceType<typeof MessageCreateInput>;
    update: InstanceType<typeof MessageUpdateInput>;
}
export declare class AggregateMessageType {
    _count?: InstanceType<typeof MessageTypeCountAggregate>;
    _min?: InstanceType<typeof MessageTypeMinAggregate>;
    _max?: InstanceType<typeof MessageTypeMaxAggregate>;
}
export declare class CreateManyMessageTypeArgs {
    data: Array<MessageTypeCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneMessageTypeArgs {
    data: InstanceType<typeof MessageTypeCreateInput>;
}
export declare class DeleteManyMessageTypeArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
}
export declare class DeleteOneMessageTypeArgs {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindFirstMessageTypeOrThrowArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    orderBy?: Array<MessageTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageTypeScalarFieldEnum>;
}
export declare class FindFirstMessageTypeArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    orderBy?: Array<MessageTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageTypeScalarFieldEnum>;
}
export declare class FindManyMessageTypeArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    orderBy?: Array<MessageTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageTypeScalarFieldEnum>;
}
export declare class FindUniqueMessageTypeOrThrowArgs {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindUniqueMessageTypeArgs {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
}
export declare class MessageTypeAggregateArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    orderBy?: Array<MessageTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof MessageTypeCountAggregateInput>;
    _min?: InstanceType<typeof MessageTypeMinAggregateInput>;
    _max?: InstanceType<typeof MessageTypeMaxAggregateInput>;
}
export declare class MessageTypeCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    createdUserId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class MessageTypeCountAggregate {
    id: number;
    name: number;
    description: number;
    color: number;
    createdUserId: number;
    createdAt: number;
    _all: number;
}
export declare class MessageTypeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageTypeCount {
    message?: number;
}
export declare class MessageTypeCreateManyCreatedUserInputEnvelope {
    data: Array<MessageTypeCreateManyCreatedUserInput>;
    skipDuplicates?: boolean;
}
export declare class MessageTypeCreateManyCreatedUserInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdAt?: Date | string;
}
export declare class MessageTypeCreateManyInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdUserId: string;
    createdAt?: Date | string;
}
export declare class MessageTypeCreateNestedManyWithoutCreatedUserInput {
    create?: Array<MessageTypeCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageTypeCreateOrConnectWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageTypeCreateManyCreatedUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
}
export declare class MessageTypeCreateNestedOneWithoutMessageInput {
    create?: InstanceType<typeof MessageTypeCreateWithoutMessageInput>;
    connectOrCreate?: InstanceType<typeof MessageTypeCreateOrConnectWithoutMessageInput>;
    connect?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
}
export declare class MessageTypeCreateOrConnectWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof MessageTypeCreateWithoutCreatedUserInput>;
}
export declare class MessageTypeCreateOrConnectWithoutMessageInput {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof MessageTypeCreateWithoutMessageInput>;
}
export declare class MessageTypeCreateWithoutCreatedUserInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdAt?: Date | string;
    message?: InstanceType<typeof MessageCreateNestedManyWithoutMessageTypeInput>;
}
export declare class MessageTypeCreateWithoutMessageInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesTypeInput>;
}
export declare class MessageTypeCreateInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdAt?: Date | string;
    createdUser: InstanceType<typeof UserCreateNestedOneWithoutCreatedMessagesTypeInput>;
    message?: InstanceType<typeof MessageCreateNestedManyWithoutMessageTypeInput>;
}
export declare class MessageTypeGroupByArgs {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    orderBy?: Array<MessageTypeOrderByWithAggregationInput>;
    by: Array<keyof typeof MessageTypeScalarFieldEnum>;
    having?: InstanceType<typeof MessageTypeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof MessageTypeCountAggregateInput>;
    _min?: InstanceType<typeof MessageTypeMinAggregateInput>;
    _max?: InstanceType<typeof MessageTypeMaxAggregateInput>;
}
export declare class MessageTypeGroupBy {
    id: string;
    name: string;
    description?: string;
    color?: string;
    createdUserId: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof MessageTypeCountAggregate>;
    _min?: InstanceType<typeof MessageTypeMinAggregate>;
    _max?: InstanceType<typeof MessageTypeMaxAggregate>;
}
export declare class MessageTypeListRelationFilter {
    every?: InstanceType<typeof MessageTypeWhereInput>;
    some?: InstanceType<typeof MessageTypeWhereInput>;
    none?: InstanceType<typeof MessageTypeWhereInput>;
}
export declare class MessageTypeMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    createdUserId?: true;
    createdAt?: true;
}
export declare class MessageTypeMaxAggregate {
    id?: string;
    name?: string;
    description?: string;
    color?: string;
    createdUserId?: string;
    createdAt?: Date | string;
}
export declare class MessageTypeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageTypeMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    createdUserId?: true;
    createdAt?: true;
}
export declare class MessageTypeMinAggregate {
    id?: string;
    name?: string;
    description?: string;
    color?: string;
    createdUserId?: string;
    createdAt?: Date | string;
}
export declare class MessageTypeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    createdUserId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class MessageTypeOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class MessageTypeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    color?: InstanceType<typeof SortOrderInput>;
    createdUserId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof MessageTypeCountOrderByAggregateInput>;
    _max?: InstanceType<typeof MessageTypeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof MessageTypeMinOrderByAggregateInput>;
}
export declare class MessageTypeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    color?: InstanceType<typeof SortOrderInput>;
    createdUserId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    createdUser?: InstanceType<typeof UserOrderByWithRelationInput>;
    message?: InstanceType<typeof MessageOrderByRelationAggregateInput>;
}
export declare class MessageTypeRelationFilter {
    is?: InstanceType<typeof MessageTypeWhereInput>;
    isNot?: InstanceType<typeof MessageTypeWhereInput>;
}
export declare class MessageTypeScalarWhereWithAggregatesInput {
    AND?: Array<MessageTypeScalarWhereWithAggregatesInput>;
    OR?: Array<MessageTypeScalarWhereWithAggregatesInput>;
    NOT?: Array<MessageTypeScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    color?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdUserId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class MessageTypeScalarWhereInput {
    AND?: Array<MessageTypeScalarWhereInput>;
    OR?: Array<MessageTypeScalarWhereInput>;
    NOT?: Array<MessageTypeScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    color?: InstanceType<typeof StringNullableFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput {
    create?: Array<MessageTypeCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageTypeCreateOrConnectWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageTypeCreateManyCreatedUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
}
export declare class MessageTypeUncheckedCreateWithoutCreatedUserInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdAt?: Date | string;
    message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutMessageTypeInput>;
}
export declare class MessageTypeUncheckedCreateWithoutMessageInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdUserId: string;
    createdAt?: Date | string;
}
export declare class MessageTypeUncheckedCreateInput {
    id?: string;
    name: string;
    description?: string;
    color?: string;
    createdUserId: string;
    createdAt?: Date | string;
    message?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutMessageTypeInput>;
}
export declare class MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput {
    create?: Array<MessageTypeCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageTypeCreateOrConnectWithoutCreatedUserInput>;
    upsert?: Array<MessageTypeUpsertWithWhereUniqueWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageTypeCreateManyCreatedUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<MessageTypeUpdateWithWhereUniqueWithoutCreatedUserInput>;
    updateMany?: Array<MessageTypeUpdateManyWithWhereWithoutCreatedUserInput>;
    deleteMany?: Array<MessageTypeScalarWhereInput>;
}
export declare class MessageTypeUncheckedUpdateManyWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageTypeUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageTypeUncheckedUpdateWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutMessageTypeNestedInput>;
}
export declare class MessageTypeUncheckedUpdateWithoutMessageInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageTypeUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdUserId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    message?: InstanceType<typeof MessageUncheckedUpdateManyWithoutMessageTypeNestedInput>;
}
export declare class MessageTypeUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class MessageTypeUpdateManyWithWhereWithoutCreatedUserInput {
    where: InstanceType<typeof MessageTypeScalarWhereInput>;
    data: InstanceType<typeof MessageTypeUpdateManyMutationInput>;
}
export declare class MessageTypeUpdateManyWithoutCreatedUserNestedInput {
    create?: Array<MessageTypeCreateWithoutCreatedUserInput>;
    connectOrCreate?: Array<MessageTypeCreateOrConnectWithoutCreatedUserInput>;
    upsert?: Array<MessageTypeUpsertWithWhereUniqueWithoutCreatedUserInput>;
    createMany?: InstanceType<typeof MessageTypeCreateManyCreatedUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<MessageTypeUpdateWithWhereUniqueWithoutCreatedUserInput>;
    updateMany?: Array<MessageTypeUpdateManyWithWhereWithoutCreatedUserInput>;
    deleteMany?: Array<MessageTypeScalarWhereInput>;
}
export declare class MessageTypeUpdateOneRequiredWithoutMessageNestedInput {
    create?: InstanceType<typeof MessageTypeCreateWithoutMessageInput>;
    connectOrCreate?: InstanceType<typeof MessageTypeCreateOrConnectWithoutMessageInput>;
    upsert?: InstanceType<typeof MessageTypeUpsertWithoutMessageInput>;
    connect?: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof MessageTypeUpdateToOneWithWhereWithoutMessageInput>;
}
export declare class MessageTypeUpdateToOneWithWhereWithoutMessageInput {
    where?: InstanceType<typeof MessageTypeWhereInput>;
    data: InstanceType<typeof MessageTypeUpdateWithoutMessageInput>;
}
export declare class MessageTypeUpdateWithWhereUniqueWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    data: InstanceType<typeof MessageTypeUpdateWithoutCreatedUserInput>;
}
export declare class MessageTypeUpdateWithoutCreatedUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    message?: InstanceType<typeof MessageUpdateManyWithoutMessageTypeNestedInput>;
}
export declare class MessageTypeUpdateWithoutMessageInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesTypeNestedInput>;
}
export declare class MessageTypeUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdUser?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedMessagesTypeNestedInput>;
    message?: InstanceType<typeof MessageUpdateManyWithoutMessageTypeNestedInput>;
}
export declare class MessageTypeUpsertWithWhereUniqueWithoutCreatedUserInput {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    update: InstanceType<typeof MessageTypeUpdateWithoutCreatedUserInput>;
    create: InstanceType<typeof MessageTypeCreateWithoutCreatedUserInput>;
}
export declare class MessageTypeUpsertWithoutMessageInput {
    update: InstanceType<typeof MessageTypeUpdateWithoutMessageInput>;
    create: InstanceType<typeof MessageTypeCreateWithoutMessageInput>;
    where?: InstanceType<typeof MessageTypeWhereInput>;
}
export declare class MessageTypeWhereUniqueInput {
    id?: string;
    name?: string;
    AND?: Array<MessageTypeWhereInput>;
    OR?: Array<MessageTypeWhereInput>;
    NOT?: Array<MessageTypeWhereInput>;
    description?: InstanceType<typeof StringNullableFilter>;
    color?: InstanceType<typeof StringNullableFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdUser?: InstanceType<typeof UserRelationFilter>;
    message?: InstanceType<typeof MessageListRelationFilter>;
}
export declare class MessageTypeWhereInput {
    AND?: Array<MessageTypeWhereInput>;
    OR?: Array<MessageTypeWhereInput>;
    NOT?: Array<MessageTypeWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    color?: InstanceType<typeof StringNullableFilter>;
    createdUserId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdUser?: InstanceType<typeof UserRelationFilter>;
    message?: InstanceType<typeof MessageListRelationFilter>;
}
export declare class MessageType {
    id: string;
    name: string;
    description: string | null;
    color: string | null;
    createdUserId: string;
    createdAt: Date | null;
    createdUser?: InstanceType<typeof User>;
    message?: Array<Message>;
    _count?: InstanceType<typeof MessageTypeCount>;
}
export declare class UpdateManyMessageTypeArgs {
    data: InstanceType<typeof MessageTypeUpdateManyMutationInput>;
    where?: InstanceType<typeof MessageTypeWhereInput>;
}
export declare class UpdateOneMessageTypeArgs {
    data: InstanceType<typeof MessageTypeUpdateInput>;
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpsertOneMessageTypeArgs {
    where: Prisma.AtLeast<MessageTypeWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof MessageTypeCreateInput>;
    update: InstanceType<typeof MessageTypeUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class EnumMessageStatusNullableFilter {
    equals?: keyof typeof MessageStatus;
    in?: Array<keyof typeof MessageStatus>;
    notIn?: Array<keyof typeof MessageStatus>;
    not?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
}
export declare class EnumMessageStatusNullableWithAggregatesFilter {
    equals?: keyof typeof MessageStatus;
    in?: Array<keyof typeof MessageStatus>;
    notIn?: Array<keyof typeof MessageStatus>;
    not?: InstanceType<typeof NestedEnumMessageStatusNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
    _max?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
}
export declare class EnumUserContactStatusFieldUpdateOperationsInput {
    set?: keyof typeof UserContactStatus;
}
export declare class EnumUserContactStatusFilter {
    equals?: keyof typeof UserContactStatus;
    in?: Array<keyof typeof UserContactStatus>;
    notIn?: Array<keyof typeof UserContactStatus>;
    not?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
}
export declare class EnumUserContactStatusWithAggregatesFilter {
    equals?: keyof typeof UserContactStatus;
    in?: Array<keyof typeof UserContactStatus>;
    notIn?: Array<keyof typeof UserContactStatus>;
    not?: InstanceType<typeof NestedEnumUserContactStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
}
export declare class EnumUserContactTypeFieldUpdateOperationsInput {
    set?: keyof typeof UserContactType;
}
export declare class EnumUserContactTypeFilter {
    equals?: keyof typeof UserContactType;
    in?: Array<keyof typeof UserContactType>;
    notIn?: Array<keyof typeof UserContactType>;
    not?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
}
export declare class EnumUserContactTypeWithAggregatesFilter {
    equals?: keyof typeof UserContactType;
    in?: Array<keyof typeof UserContactType>;
    notIn?: Array<keyof typeof UserContactType>;
    not?: InstanceType<typeof NestedEnumUserContactTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
}
export declare class EnumUserGroupStatusFieldUpdateOperationsInput {
    set?: keyof typeof UserGroupStatus;
}
export declare class EnumUserGroupStatusFilter {
    equals?: keyof typeof UserGroupStatus;
    in?: Array<keyof typeof UserGroupStatus>;
    notIn?: Array<keyof typeof UserGroupStatus>;
    not?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
}
export declare class EnumUserGroupStatusWithAggregatesFilter {
    equals?: keyof typeof UserGroupStatus;
    in?: Array<keyof typeof UserGroupStatus>;
    notIn?: Array<keyof typeof UserGroupStatus>;
    not?: InstanceType<typeof NestedEnumUserGroupStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class JsonNullableFilter {
    equals?: any;
    path?: Array<string>;
    string_contains?: string;
    string_starts_with?: string;
    string_ends_with?: string;
    array_contains?: any;
    array_starts_with?: any;
    array_ends_with?: any;
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
    not?: any;
}
export declare class JsonNullableWithAggregatesFilter {
    equals?: any;
    path?: Array<string>;
    string_contains?: string;
    string_starts_with?: string;
    string_ends_with?: string;
    array_contains?: any;
    array_starts_with?: any;
    array_ends_with?: any;
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
    not?: any;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedJsonNullableFilter>;
    _max?: InstanceType<typeof NestedJsonNullableFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedEnumMessageStatusNullableFilter {
    equals?: keyof typeof MessageStatus;
    in?: Array<keyof typeof MessageStatus>;
    notIn?: Array<keyof typeof MessageStatus>;
    not?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
}
export declare class NestedEnumMessageStatusNullableWithAggregatesFilter {
    equals?: keyof typeof MessageStatus;
    in?: Array<keyof typeof MessageStatus>;
    notIn?: Array<keyof typeof MessageStatus>;
    not?: InstanceType<typeof NestedEnumMessageStatusNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
    _max?: InstanceType<typeof NestedEnumMessageStatusNullableFilter>;
}
export declare class NestedEnumUserContactStatusFilter {
    equals?: keyof typeof UserContactStatus;
    in?: Array<keyof typeof UserContactStatus>;
    notIn?: Array<keyof typeof UserContactStatus>;
    not?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
}
export declare class NestedEnumUserContactStatusWithAggregatesFilter {
    equals?: keyof typeof UserContactStatus;
    in?: Array<keyof typeof UserContactStatus>;
    notIn?: Array<keyof typeof UserContactStatus>;
    not?: InstanceType<typeof NestedEnumUserContactStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserContactStatusFilter>;
}
export declare class NestedEnumUserContactTypeFilter {
    equals?: keyof typeof UserContactType;
    in?: Array<keyof typeof UserContactType>;
    notIn?: Array<keyof typeof UserContactType>;
    not?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
}
export declare class NestedEnumUserContactTypeWithAggregatesFilter {
    equals?: keyof typeof UserContactType;
    in?: Array<keyof typeof UserContactType>;
    notIn?: Array<keyof typeof UserContactType>;
    not?: InstanceType<typeof NestedEnumUserContactTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserContactTypeFilter>;
}
export declare class NestedEnumUserGroupStatusFilter {
    equals?: keyof typeof UserGroupStatus;
    in?: Array<keyof typeof UserGroupStatus>;
    notIn?: Array<keyof typeof UserGroupStatus>;
    not?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
}
export declare class NestedEnumUserGroupStatusWithAggregatesFilter {
    equals?: keyof typeof UserGroupStatus;
    in?: Array<keyof typeof UserGroupStatus>;
    notIn?: Array<keyof typeof UserGroupStatus>;
    not?: InstanceType<typeof NestedEnumUserGroupStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserGroupStatusFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedJsonNullableFilter {
    equals?: any;
    path?: Array<string>;
    string_contains?: string;
    string_starts_with?: string;
    string_ends_with?: string;
    array_contains?: any;
    array_starts_with?: any;
    array_ends_with?: any;
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
    not?: any;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableEnumMessageStatusFieldUpdateOperationsInput {
    set?: keyof typeof MessageStatus;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateQueue {
    _count?: InstanceType<typeof QueueCountAggregate>;
    _avg?: InstanceType<typeof QueueAvgAggregate>;
    _sum?: InstanceType<typeof QueueSumAggregate>;
    _min?: InstanceType<typeof QueueMinAggregate>;
    _max?: InstanceType<typeof QueueMaxAggregate>;
}
export declare class CreateManyQueueArgs {
    data: Array<QueueCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneQueueArgs {
    data: InstanceType<typeof QueueCreateInput>;
}
export declare class DeleteManyQueueArgs {
    where?: InstanceType<typeof QueueWhereInput>;
}
export declare class DeleteOneQueueArgs {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
}
export declare class FindFirstQueueOrThrowArgs {
    where?: InstanceType<typeof QueueWhereInput>;
    orderBy?: Array<QueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QueueScalarFieldEnum>;
}
export declare class FindFirstQueueArgs {
    where?: InstanceType<typeof QueueWhereInput>;
    orderBy?: Array<QueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QueueScalarFieldEnum>;
}
export declare class FindManyQueueArgs {
    where?: InstanceType<typeof QueueWhereInput>;
    orderBy?: Array<QueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QueueScalarFieldEnum>;
}
export declare class FindUniqueQueueOrThrowArgs {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
}
export declare class FindUniqueQueueArgs {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
}
export declare class QueueAggregateArgs {
    where?: InstanceType<typeof QueueWhereInput>;
    orderBy?: Array<QueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QueueCountAggregateInput>;
    _avg?: InstanceType<typeof QueueAvgAggregateInput>;
    _sum?: InstanceType<typeof QueueSumAggregateInput>;
    _min?: InstanceType<typeof QueueMinAggregateInput>;
    _max?: InstanceType<typeof QueueMaxAggregateInput>;
}
export declare class QueueAvgAggregateInput {
    jobId?: true;
    attempt?: true;
}
export declare class QueueAvgAggregate {
    jobId?: number;
    attempt?: number;
}
export declare class QueueAvgOrderByAggregateInput {
    jobId?: keyof typeof SortOrder;
    attempt?: keyof typeof SortOrder;
}
export declare class QueueCountAggregateInput {
    id?: true;
    userId?: true;
    userContactId?: true;
    jobId?: true;
    status?: true;
    failedReason?: true;
    enqueueAt?: true;
    attempt?: true;
    finishedAt?: true;
    _all?: true;
}
export declare class QueueCountAggregate {
    id: number;
    userId: number;
    userContactId: number;
    jobId: number;
    status: number;
    failedReason: number;
    enqueueAt: number;
    attempt: number;
    finishedAt: number;
    _all: number;
}
export declare class QueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    userContactId?: keyof typeof SortOrder;
    jobId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    failedReason?: keyof typeof SortOrder;
    enqueueAt?: keyof typeof SortOrder;
    attempt?: keyof typeof SortOrder;
    finishedAt?: keyof typeof SortOrder;
}
export declare class QueueCreateManyUserContactInputEnvelope {
    data: Array<QueueCreateManyUserContactInput>;
    skipDuplicates?: boolean;
}
export declare class QueueCreateManyUserContactInput {
    id?: string;
    userId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueCreateManyUserInputEnvelope {
    data: Array<QueueCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class QueueCreateManyUserInput {
    id?: string;
    userContactId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueCreateManyInput {
    id?: string;
    userId: string;
    userContactId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueCreateNestedManyWithoutUserContactInput {
    create?: Array<QueueCreateWithoutUserContactInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserContactInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserContactInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
}
export declare class QueueCreateNestedManyWithoutUserInput {
    create?: Array<QueueCreateWithoutUserInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
}
export declare class QueueCreateOrConnectWithoutUserContactInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof QueueCreateWithoutUserContactInput>;
}
export declare class QueueCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof QueueCreateWithoutUserInput>;
}
export declare class QueueCreateWithoutUserContactInput {
    id?: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutQueueInput>;
}
export declare class QueueCreateWithoutUserInput {
    id?: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
    userContact: InstanceType<typeof UserContactCreateNestedOneWithoutQueueInput>;
}
export declare class QueueCreateInput {
    id?: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutQueueInput>;
    userContact: InstanceType<typeof UserContactCreateNestedOneWithoutQueueInput>;
}
export declare class QueueGroupByArgs {
    where?: InstanceType<typeof QueueWhereInput>;
    orderBy?: Array<QueueOrderByWithAggregationInput>;
    by: Array<keyof typeof QueueScalarFieldEnum>;
    having?: InstanceType<typeof QueueScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QueueCountAggregateInput>;
    _avg?: InstanceType<typeof QueueAvgAggregateInput>;
    _sum?: InstanceType<typeof QueueSumAggregateInput>;
    _min?: InstanceType<typeof QueueMinAggregateInput>;
    _max?: InstanceType<typeof QueueMaxAggregateInput>;
}
export declare class QueueGroupBy {
    id: string;
    userId: string;
    userContactId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
    _count?: InstanceType<typeof QueueCountAggregate>;
    _avg?: InstanceType<typeof QueueAvgAggregate>;
    _sum?: InstanceType<typeof QueueSumAggregate>;
    _min?: InstanceType<typeof QueueMinAggregate>;
    _max?: InstanceType<typeof QueueMaxAggregate>;
}
export declare class QueueListRelationFilter {
    every?: InstanceType<typeof QueueWhereInput>;
    some?: InstanceType<typeof QueueWhereInput>;
    none?: InstanceType<typeof QueueWhereInput>;
}
export declare class QueueMaxAggregateInput {
    id?: true;
    userId?: true;
    userContactId?: true;
    jobId?: true;
    status?: true;
    failedReason?: true;
    enqueueAt?: true;
    attempt?: true;
    finishedAt?: true;
}
export declare class QueueMaxAggregate {
    id?: string;
    userId?: string;
    userContactId?: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    userContactId?: keyof typeof SortOrder;
    jobId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    failedReason?: keyof typeof SortOrder;
    enqueueAt?: keyof typeof SortOrder;
    attempt?: keyof typeof SortOrder;
    finishedAt?: keyof typeof SortOrder;
}
export declare class QueueMinAggregateInput {
    id?: true;
    userId?: true;
    userContactId?: true;
    jobId?: true;
    status?: true;
    failedReason?: true;
    enqueueAt?: true;
    attempt?: true;
    finishedAt?: true;
}
export declare class QueueMinAggregate {
    id?: string;
    userId?: string;
    userContactId?: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    userContactId?: keyof typeof SortOrder;
    jobId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    failedReason?: keyof typeof SortOrder;
    enqueueAt?: keyof typeof SortOrder;
    attempt?: keyof typeof SortOrder;
    finishedAt?: keyof typeof SortOrder;
}
export declare class QueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class QueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    userContactId?: keyof typeof SortOrder;
    jobId?: InstanceType<typeof SortOrderInput>;
    status?: InstanceType<typeof SortOrderInput>;
    failedReason?: InstanceType<typeof SortOrderInput>;
    enqueueAt?: InstanceType<typeof SortOrderInput>;
    attempt?: InstanceType<typeof SortOrderInput>;
    finishedAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof QueueCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof QueueAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof QueueMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof QueueMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof QueueSumOrderByAggregateInput>;
}
export declare class QueueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    userContactId?: keyof typeof SortOrder;
    jobId?: InstanceType<typeof SortOrderInput>;
    status?: InstanceType<typeof SortOrderInput>;
    failedReason?: InstanceType<typeof SortOrderInput>;
    enqueueAt?: InstanceType<typeof SortOrderInput>;
    attempt?: InstanceType<typeof SortOrderInput>;
    finishedAt?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    userContact?: InstanceType<typeof UserContactOrderByWithRelationInput>;
}
export declare class QueueScalarWhereWithAggregatesInput {
    AND?: Array<QueueScalarWhereWithAggregatesInput>;
    OR?: Array<QueueScalarWhereWithAggregatesInput>;
    NOT?: Array<QueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    userContactId?: InstanceType<typeof StringWithAggregatesFilter>;
    jobId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    status?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    failedReason?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    enqueueAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    attempt?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    finishedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class QueueScalarWhereInput {
    AND?: Array<QueueScalarWhereInput>;
    OR?: Array<QueueScalarWhereInput>;
    NOT?: Array<QueueScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    userContactId?: InstanceType<typeof StringFilter>;
    jobId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof StringNullableFilter>;
    failedReason?: InstanceType<typeof StringNullableFilter>;
    enqueueAt?: InstanceType<typeof DateTimeNullableFilter>;
    attempt?: InstanceType<typeof IntNullableFilter>;
    finishedAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class QueueSumAggregateInput {
    jobId?: true;
    attempt?: true;
}
export declare class QueueSumAggregate {
    jobId?: number;
    attempt?: number;
}
export declare class QueueSumOrderByAggregateInput {
    jobId?: keyof typeof SortOrder;
    attempt?: keyof typeof SortOrder;
}
export declare class QueueUncheckedCreateNestedManyWithoutUserContactInput {
    create?: Array<QueueCreateWithoutUserContactInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserContactInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserContactInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
}
export declare class QueueUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<QueueCreateWithoutUserInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
}
export declare class QueueUncheckedCreateWithoutUserContactInput {
    id?: string;
    userId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueUncheckedCreateWithoutUserInput {
    id?: string;
    userContactId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueUncheckedCreateInput {
    id?: string;
    userId: string;
    userContactId: string;
    jobId?: number;
    status?: string;
    failedReason?: string;
    enqueueAt?: Date | string;
    attempt?: number;
    finishedAt?: Date | string;
}
export declare class QueueUncheckedUpdateManyWithoutUserContactNestedInput {
    create?: Array<QueueCreateWithoutUserContactInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserContactInput>;
    upsert?: Array<QueueUpsertWithWhereUniqueWithoutUserContactInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserContactInputEnvelope>;
    set?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    update?: Array<QueueUpdateWithWhereUniqueWithoutUserContactInput>;
    updateMany?: Array<QueueUpdateManyWithWhereWithoutUserContactInput>;
    deleteMany?: Array<QueueScalarWhereInput>;
}
export declare class QueueUncheckedUpdateManyWithoutUserContactInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<QueueCreateWithoutUserInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserInput>;
    upsert?: Array<QueueUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    update?: Array<QueueUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<QueueUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<QueueScalarWhereInput>;
}
export declare class QueueUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userContactId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userContactId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUncheckedUpdateWithoutUserContactInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userContactId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userContactId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class QueueUpdateManyWithWhereWithoutUserContactInput {
    where: InstanceType<typeof QueueScalarWhereInput>;
    data: InstanceType<typeof QueueUpdateManyMutationInput>;
}
export declare class QueueUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof QueueScalarWhereInput>;
    data: InstanceType<typeof QueueUpdateManyMutationInput>;
}
export declare class QueueUpdateManyWithoutUserContactNestedInput {
    create?: Array<QueueCreateWithoutUserContactInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserContactInput>;
    upsert?: Array<QueueUpsertWithWhereUniqueWithoutUserContactInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserContactInputEnvelope>;
    set?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    update?: Array<QueueUpdateWithWhereUniqueWithoutUserContactInput>;
    updateMany?: Array<QueueUpdateManyWithWhereWithoutUserContactInput>;
    deleteMany?: Array<QueueScalarWhereInput>;
}
export declare class QueueUpdateManyWithoutUserNestedInput {
    create?: Array<QueueCreateWithoutUserInput>;
    connectOrCreate?: Array<QueueCreateOrConnectWithoutUserInput>;
    upsert?: Array<QueueUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof QueueCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<QueueWhereUniqueInput, 'id'>>;
    update?: Array<QueueUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<QueueUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<QueueScalarWhereInput>;
}
export declare class QueueUpdateWithWhereUniqueWithoutUserContactInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof QueueUpdateWithoutUserContactInput>;
}
export declare class QueueUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof QueueUpdateWithoutUserInput>;
}
export declare class QueueUpdateWithoutUserContactInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutQueueNestedInput>;
}
export declare class QueueUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContact?: InstanceType<typeof UserContactUpdateOneRequiredWithoutQueueNestedInput>;
}
export declare class QueueUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jobId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    failedReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    enqueueAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    attempt?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    finishedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutQueueNestedInput>;
    userContact?: InstanceType<typeof UserContactUpdateOneRequiredWithoutQueueNestedInput>;
}
export declare class QueueUpsertWithWhereUniqueWithoutUserContactInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof QueueUpdateWithoutUserContactInput>;
    create: InstanceType<typeof QueueCreateWithoutUserContactInput>;
}
export declare class QueueUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof QueueUpdateWithoutUserInput>;
    create: InstanceType<typeof QueueCreateWithoutUserInput>;
}
export declare class QueueWhereUniqueInput {
    id?: string;
    AND?: Array<QueueWhereInput>;
    OR?: Array<QueueWhereInput>;
    NOT?: Array<QueueWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    userContactId?: InstanceType<typeof StringFilter>;
    jobId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof StringNullableFilter>;
    failedReason?: InstanceType<typeof StringNullableFilter>;
    enqueueAt?: InstanceType<typeof DateTimeNullableFilter>;
    attempt?: InstanceType<typeof IntNullableFilter>;
    finishedAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    userContact?: InstanceType<typeof UserContactRelationFilter>;
}
export declare class QueueWhereInput {
    AND?: Array<QueueWhereInput>;
    OR?: Array<QueueWhereInput>;
    NOT?: Array<QueueWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    userContactId?: InstanceType<typeof StringFilter>;
    jobId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof StringNullableFilter>;
    failedReason?: InstanceType<typeof StringNullableFilter>;
    enqueueAt?: InstanceType<typeof DateTimeNullableFilter>;
    attempt?: InstanceType<typeof IntNullableFilter>;
    finishedAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    userContact?: InstanceType<typeof UserContactRelationFilter>;
}
export declare class Queue {
    id: string;
    userId: string;
    userContactId: string;
    jobId: number | null;
    status: string | null;
    failedReason: string | null;
    enqueueAt: Date | null;
    attempt: number | null;
    finishedAt: Date | null;
    user?: InstanceType<typeof User>;
    userContact?: InstanceType<typeof UserContact>;
}
export declare class UpdateManyQueueArgs {
    data: InstanceType<typeof QueueUpdateManyMutationInput>;
    where?: InstanceType<typeof QueueWhereInput>;
}
export declare class UpdateOneQueueArgs {
    data: InstanceType<typeof QueueUpdateInput>;
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
}
export declare class UpsertOneQueueArgs {
    where: Prisma.AtLeast<QueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof QueueCreateInput>;
    update: InstanceType<typeof QueueUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    firstName: number;
    lastName: number;
    username: number;
    email: number;
    password: number;
    createdAt: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserCount {
    userContacts?: number;
    createdMessages?: number;
    createdMessagesType?: number;
    createdUserGroup?: number;
    assignMessages?: number;
    queue?: number;
    belongGroups?: number;
    logs?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
}
export declare class UserCreateNestedManyWithoutBelongGroupsInput {
    create?: Array<UserCreateWithoutBelongGroupsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBelongGroupsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
export declare class UserCreateNestedOneWithoutAssignMessagesInput {
    create?: InstanceType<typeof UserCreateWithoutAssignMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAssignMessagesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutCreatedMessagesTypeInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedMessagesTypeInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedMessagesTypeInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutCreatedMessagesInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedMessagesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutCreatedUserGroupInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedUserGroupInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutLogsInput {
    create?: InstanceType<typeof UserCreateWithoutLogsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLogsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutProfileInput {
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutQueueInput {
    create?: InstanceType<typeof UserCreateWithoutQueueInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutQueueInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateNestedOneWithoutUserContactsInput {
    create?: InstanceType<typeof UserCreateWithoutUserContactsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserContactsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateOrConnectWithoutAssignMessagesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutAssignMessagesInput>;
}
export declare class UserCreateOrConnectWithoutBelongGroupsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutBelongGroupsInput>;
}
export declare class UserCreateOrConnectWithoutCreatedMessagesTypeInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutCreatedMessagesTypeInput>;
}
export declare class UserCreateOrConnectWithoutCreatedMessagesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutCreatedMessagesInput>;
}
export declare class UserCreateOrConnectWithoutCreatedUserGroupInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutCreatedUserGroupInput>;
}
export declare class UserCreateOrConnectWithoutLogsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutLogsInput>;
}
export declare class UserCreateOrConnectWithoutProfileInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutProfileInput>;
}
export declare class UserCreateOrConnectWithoutQueueInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutQueueInput>;
}
export declare class UserCreateOrConnectWithoutUserContactsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutUserContactsInput>;
}
export declare class UserCreateWithoutAssignMessagesInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutBelongGroupsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutCreatedMessagesTypeInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutCreatedMessagesInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutCreatedUserGroupInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutLogsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
}
export declare class UserCreateWithoutProfileInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutQueueInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutUserContactsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsCreateNestedManyWithoutUserInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserListRelationFilter {
    every?: InstanceType<typeof UserWhereInput>;
    some?: InstanceType<typeof UserWhereInput>;
    none?: InstanceType<typeof UserWhereInput>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    password?: true;
    createdAt?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    password?: true;
    createdAt?: true;
}
export declare class UserMinAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    username?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    username?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    userContacts?: InstanceType<typeof UserContactOrderByRelationAggregateInput>;
    createdMessages?: InstanceType<typeof MessageOrderByRelationAggregateInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeOrderByRelationAggregateInput>;
    createdUserGroup?: InstanceType<typeof UserGroupOrderByRelationAggregateInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageOrderByRelationAggregateInput>;
    queue?: InstanceType<typeof QueueOrderByRelationAggregateInput>;
    belongGroups?: InstanceType<typeof UserGroupOrderByRelationAggregateInput>;
    profile?: InstanceType<typeof UserProfileOrderByWithRelationInput>;
    logs?: InstanceType<typeof LogsOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    username?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    username?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class UserUncheckedCreateNestedManyWithoutBelongGroupsInput {
    create?: Array<UserCreateWithoutBelongGroupsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBelongGroupsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
export declare class UserUncheckedCreateWithoutAssignMessagesInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutBelongGroupsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutCreatedMessagesTypeInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutCreatedMessagesInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutCreatedUserGroupInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutLogsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutProfileInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutQueueInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutUserContactsInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    userContacts?: InstanceType<typeof UserContactUncheckedCreateNestedManyWithoutUserInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedCreateNestedManyWithoutCreatedUserInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutCreatedByInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedCreateNestedManyWithoutUserInput>;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput>;
    profile?: InstanceType<typeof UserProfileUncheckedCreateNestedOneWithoutUserInput>;
    logs?: InstanceType<typeof LogsUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyWithoutBelongGroupsNestedInput {
    create?: Array<UserCreateWithoutBelongGroupsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBelongGroupsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBelongGroupsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBelongGroupsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBelongGroupsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutBelongGroupsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutAssignMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutBelongGroupsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCreatedMessagesTypeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCreatedMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCreatedUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutLogsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProfileInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutQueueInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutUserContactsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUncheckedUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUncheckedUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUncheckedUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUncheckedUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutBelongGroupsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithoutBelongGroupsNestedInput {
    create?: Array<UserCreateWithoutBelongGroupsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBelongGroupsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBelongGroupsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBelongGroupsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBelongGroupsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateOneRequiredWithoutAssignMessagesNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAssignMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAssignMessagesInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAssignMessagesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAssignMessagesInput>;
}
export declare class UserUpdateOneRequiredWithoutCreatedMessagesNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedMessagesInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCreatedMessagesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCreatedMessagesInput>;
}
export declare class UserUpdateOneRequiredWithoutCreatedMessagesTypeNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedMessagesTypeInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedMessagesTypeInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCreatedMessagesTypeInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCreatedMessagesTypeInput>;
}
export declare class UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCreatedUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCreatedUserGroupInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCreatedUserGroupInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCreatedUserGroupInput>;
}
export declare class UserUpdateOneRequiredWithoutLogsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutLogsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLogsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutLogsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutLogsInput>;
}
export declare class UserUpdateOneRequiredWithoutProfileNestedInput {
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutProfileInput>;
}
export declare class UserUpdateOneRequiredWithoutQueueNestedInput {
    create?: InstanceType<typeof UserCreateWithoutQueueInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutQueueInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutQueueInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutQueueInput>;
}
export declare class UserUpdateOneRequiredWithoutUserContactsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserContactsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserContactsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserContactsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserContactsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAssignMessagesInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAssignMessagesInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCreatedMessagesTypeInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCreatedMessagesTypeInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCreatedMessagesInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCreatedMessagesInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCreatedUserGroupInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCreatedUserGroupInput>;
}
export declare class UserUpdateToOneWithWhereWithoutLogsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutLogsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutProfileInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutProfileInput>;
}
export declare class UserUpdateToOneWithWhereWithoutQueueInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutQueueInput>;
}
export declare class UserUpdateToOneWithWhereWithoutUserContactsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutUserContactsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutBelongGroupsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    data: InstanceType<typeof UserUpdateWithoutBelongGroupsInput>;
}
export declare class UserUpdateWithoutAssignMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutBelongGroupsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutCreatedMessagesTypeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutCreatedMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutCreatedUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutLogsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutProfileInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutQueueInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutUserContactsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userContacts?: InstanceType<typeof UserContactUpdateManyWithoutUserNestedInput>;
    createdMessages?: InstanceType<typeof MessageUpdateManyWithoutCreatedUserNestedInput>;
    createdMessagesType?: InstanceType<typeof MessageTypeUpdateManyWithoutCreatedUserNestedInput>;
    createdUserGroup?: InstanceType<typeof UserGroupUpdateManyWithoutCreatedByNestedInput>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageUpdateManyWithoutUserNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserNestedInput>;
    belongGroups?: InstanceType<typeof UserGroupUpdateManyWithoutAssignUsersNestedInput>;
    profile?: InstanceType<typeof UserProfileUpdateOneWithoutUserNestedInput>;
    logs?: InstanceType<typeof LogsUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutBelongGroupsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update: InstanceType<typeof UserUpdateWithoutBelongGroupsInput>;
    create: InstanceType<typeof UserCreateWithoutBelongGroupsInput>;
}
export declare class UserUpsertWithoutAssignMessagesInput {
    update: InstanceType<typeof UserUpdateWithoutAssignMessagesInput>;
    create: InstanceType<typeof UserCreateWithoutAssignMessagesInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCreatedMessagesTypeInput {
    update: InstanceType<typeof UserUpdateWithoutCreatedMessagesTypeInput>;
    create: InstanceType<typeof UserCreateWithoutCreatedMessagesTypeInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCreatedMessagesInput {
    update: InstanceType<typeof UserUpdateWithoutCreatedMessagesInput>;
    create: InstanceType<typeof UserCreateWithoutCreatedMessagesInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCreatedUserGroupInput {
    update: InstanceType<typeof UserUpdateWithoutCreatedUserGroupInput>;
    create: InstanceType<typeof UserCreateWithoutCreatedUserGroupInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutLogsInput {
    update: InstanceType<typeof UserUpdateWithoutLogsInput>;
    create: InstanceType<typeof UserCreateWithoutLogsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutProfileInput {
    update: InstanceType<typeof UserUpdateWithoutProfileInput>;
    create: InstanceType<typeof UserCreateWithoutProfileInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutQueueInput {
    update: InstanceType<typeof UserUpdateWithoutQueueInput>;
    create: InstanceType<typeof UserCreateWithoutQueueInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutUserContactsInput {
    update: InstanceType<typeof UserUpdateWithoutUserContactsInput>;
    create: InstanceType<typeof UserCreateWithoutUserContactsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    username?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userContacts?: InstanceType<typeof UserContactListRelationFilter>;
    createdMessages?: InstanceType<typeof MessageListRelationFilter>;
    createdMessagesType?: InstanceType<typeof MessageTypeListRelationFilter>;
    createdUserGroup?: InstanceType<typeof UserGroupListRelationFilter>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageListRelationFilter>;
    queue?: InstanceType<typeof QueueListRelationFilter>;
    belongGroups?: InstanceType<typeof UserGroupListRelationFilter>;
    profile?: InstanceType<typeof UserProfileNullableRelationFilter>;
    logs?: InstanceType<typeof LogsListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    username?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userContacts?: InstanceType<typeof UserContactListRelationFilter>;
    createdMessages?: InstanceType<typeof MessageListRelationFilter>;
    createdMessagesType?: InstanceType<typeof MessageTypeListRelationFilter>;
    createdUserGroup?: InstanceType<typeof UserGroupListRelationFilter>;
    assignMessages?: InstanceType<typeof AssignUsersOnMessageListRelationFilter>;
    queue?: InstanceType<typeof QueueListRelationFilter>;
    belongGroups?: InstanceType<typeof UserGroupListRelationFilter>;
    profile?: InstanceType<typeof UserProfileNullableRelationFilter>;
    logs?: InstanceType<typeof LogsListRelationFilter>;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    username: string | null;
    email: string;
    password: string;
    createdAt: Date | null;
    userContacts?: Array<UserContact>;
    createdMessages?: Array<Message>;
    createdMessagesType?: Array<MessageType>;
    createdUserGroup?: Array<UserGroup>;
    assignMessages?: Array<AssignUsersOnMessage>;
    queue?: Array<Queue>;
    belongGroups?: Array<UserGroup>;
    profile?: InstanceType<typeof UserProfile> | null;
    logs?: Array<Logs>;
    _count?: InstanceType<typeof UserCount>;
}
export declare class AggregateUserContact {
    _count?: InstanceType<typeof UserContactCountAggregate>;
    _min?: InstanceType<typeof UserContactMinAggregate>;
    _max?: InstanceType<typeof UserContactMaxAggregate>;
}
export declare class CreateManyUserContactArgs {
    data: Array<UserContactCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserContactArgs {
    data: InstanceType<typeof UserContactCreateInput>;
}
export declare class DeleteManyUserContactArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
}
export declare class DeleteOneUserContactArgs {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class FindFirstUserContactOrThrowArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
    orderBy?: Array<UserContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserContactScalarFieldEnum>;
}
export declare class FindFirstUserContactArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
    orderBy?: Array<UserContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserContactScalarFieldEnum>;
}
export declare class FindManyUserContactArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
    orderBy?: Array<UserContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserContactScalarFieldEnum>;
}
export declare class FindUniqueUserContactOrThrowArgs {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class FindUniqueUserContactArgs {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class UpdateManyUserContactArgs {
    data: InstanceType<typeof UserContactUpdateManyMutationInput>;
    where?: InstanceType<typeof UserContactWhereInput>;
}
export declare class UpdateOneUserContactArgs {
    data: InstanceType<typeof UserContactUpdateInput>;
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class UpsertOneUserContactArgs {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    create: InstanceType<typeof UserContactCreateInput>;
    update: InstanceType<typeof UserContactUpdateInput>;
}
export declare class UserContactAggregateArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
    orderBy?: Array<UserContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserContactCountAggregateInput>;
    _min?: InstanceType<typeof UserContactMinAggregateInput>;
    _max?: InstanceType<typeof UserContactMaxAggregateInput>;
}
export declare class UserContactCountAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class UserContactCountAggregate {
    id: number;
    contactType: number;
    value: number;
    status: number;
    userId: number;
    createdAt: number;
    _all: number;
}
export declare class UserContactCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserContactCount {
    queue?: number;
}
export declare class UserContactCreateManyUserInputEnvelope {
    data: Array<UserContactCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class UserContactCreateManyUserInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    createdAt?: Date | string;
}
export declare class UserContactCreateManyInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    userId: string;
    createdAt?: Date | string;
}
export declare class UserContactCreateNestedManyWithoutUserInput {
    create?: Array<UserContactCreateWithoutUserInput>;
    connectOrCreate?: Array<UserContactCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserContactCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
}
export declare class UserContactCreateNestedOneWithoutQueueInput {
    create?: InstanceType<typeof UserContactCreateWithoutQueueInput>;
    connectOrCreate?: InstanceType<typeof UserContactCreateOrConnectWithoutQueueInput>;
    connect?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class UserContactCreateOrConnectWithoutQueueInput {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    create: InstanceType<typeof UserContactCreateWithoutQueueInput>;
}
export declare class UserContactCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    create: InstanceType<typeof UserContactCreateWithoutUserInput>;
}
export declare class UserContactCreateWithoutQueueInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserContactsInput>;
}
export declare class UserContactCreateWithoutUserInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    createdAt?: Date | string;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserContactInput>;
}
export declare class UserContactCreateInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserContactsInput>;
    queue?: InstanceType<typeof QueueCreateNestedManyWithoutUserContactInput>;
}
export declare class UserContactGroupByArgs {
    where?: InstanceType<typeof UserContactWhereInput>;
    orderBy?: Array<UserContactOrderByWithAggregationInput>;
    by: Array<keyof typeof UserContactScalarFieldEnum>;
    having?: InstanceType<typeof UserContactScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserContactCountAggregateInput>;
    _min?: InstanceType<typeof UserContactMinAggregateInput>;
    _max?: InstanceType<typeof UserContactMaxAggregateInput>;
}
export declare class UserContactGroupBy {
    id: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    userId: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof UserContactCountAggregate>;
    _min?: InstanceType<typeof UserContactMinAggregate>;
    _max?: InstanceType<typeof UserContactMaxAggregate>;
}
export declare class UserContactListRelationFilter {
    every?: InstanceType<typeof UserContactWhereInput>;
    some?: InstanceType<typeof UserContactWhereInput>;
    none?: InstanceType<typeof UserContactWhereInput>;
}
export declare class UserContactMaxAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    userId?: true;
    createdAt?: true;
}
export declare class UserContactMaxAggregate {
    id?: string;
    contactType?: keyof typeof UserContactType;
    value?: string;
    status?: keyof typeof UserContactStatus;
    userId?: string;
    createdAt?: Date | string;
}
export declare class UserContactMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserContactMinAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    userId?: true;
    createdAt?: true;
}
export declare class UserContactMinAggregate {
    id?: string;
    contactType?: keyof typeof UserContactType;
    value?: string;
    status?: keyof typeof UserContactStatus;
    userId?: string;
    createdAt?: Date | string;
}
export declare class UserContactMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserContactOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserContactOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserContactCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserContactMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserContactMinOrderByAggregateInput>;
}
export declare class UserContactOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    queue?: InstanceType<typeof QueueOrderByRelationAggregateInput>;
}
export declare class UserContactRelationFilter {
    is?: InstanceType<typeof UserContactWhereInput>;
    isNot?: InstanceType<typeof UserContactWhereInput>;
}
export declare class UserContactScalarWhereWithAggregatesInput {
    AND?: Array<UserContactScalarWhereWithAggregatesInput>;
    OR?: Array<UserContactScalarWhereWithAggregatesInput>;
    NOT?: Array<UserContactScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeWithAggregatesFilter>;
    value?: InstanceType<typeof StringWithAggregatesFilter>;
    status?: InstanceType<typeof EnumUserContactStatusWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserContactScalarWhereInput {
    AND?: Array<UserContactScalarWhereInput>;
    OR?: Array<UserContactScalarWhereInput>;
    NOT?: Array<UserContactScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    value?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class UserContactUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<UserContactCreateWithoutUserInput>;
    connectOrCreate?: Array<UserContactCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserContactCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
}
export declare class UserContactUncheckedCreateWithoutQueueInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    userId: string;
    createdAt?: Date | string;
}
export declare class UserContactUncheckedCreateWithoutUserInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    createdAt?: Date | string;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserContactInput>;
}
export declare class UserContactUncheckedCreateInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status?: keyof typeof UserContactStatus;
    userId: string;
    createdAt?: Date | string;
    queue?: InstanceType<typeof QueueUncheckedCreateNestedManyWithoutUserContactInput>;
}
export declare class UserContactUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserContactCreateWithoutUserInput>;
    connectOrCreate?: Array<UserContactCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserContactUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserContactCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    disconnect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    delete?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    connect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    update?: Array<UserContactUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserContactUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserContactScalarWhereInput>;
}
export declare class UserContactUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserContactUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserContactUncheckedUpdateWithoutQueueInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserContactUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserContactNestedInput>;
}
export declare class UserContactUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    queue?: InstanceType<typeof QueueUncheckedUpdateManyWithoutUserContactNestedInput>;
}
export declare class UserContactUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserContactUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof UserContactScalarWhereInput>;
    data: InstanceType<typeof UserContactUpdateManyMutationInput>;
}
export declare class UserContactUpdateManyWithoutUserNestedInput {
    create?: Array<UserContactCreateWithoutUserInput>;
    connectOrCreate?: Array<UserContactCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserContactUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserContactCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    disconnect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    delete?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    connect?: Array<Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>>;
    update?: Array<UserContactUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserContactUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserContactScalarWhereInput>;
}
export declare class UserContactUpdateOneRequiredWithoutQueueNestedInput {
    create?: InstanceType<typeof UserContactCreateWithoutQueueInput>;
    connectOrCreate?: InstanceType<typeof UserContactCreateOrConnectWithoutQueueInput>;
    upsert?: InstanceType<typeof UserContactUpsertWithoutQueueInput>;
    connect?: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    update?: InstanceType<typeof UserContactUpdateToOneWithWhereWithoutQueueInput>;
}
export declare class UserContactUpdateToOneWithWhereWithoutQueueInput {
    where?: InstanceType<typeof UserContactWhereInput>;
    data: InstanceType<typeof UserContactUpdateWithoutQueueInput>;
}
export declare class UserContactUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    data: InstanceType<typeof UserContactUpdateWithoutUserInput>;
}
export declare class UserContactUpdateWithoutQueueInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserContactsNestedInput>;
}
export declare class UserContactUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserContactNestedInput>;
}
export declare class UserContactUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserContactsNestedInput>;
    queue?: InstanceType<typeof QueueUpdateManyWithoutUserContactNestedInput>;
}
export declare class UserContactUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserContactWhereUniqueInput, 'id' | 'value'>;
    update: InstanceType<typeof UserContactUpdateWithoutUserInput>;
    create: InstanceType<typeof UserContactCreateWithoutUserInput>;
}
export declare class UserContactUpsertWithoutQueueInput {
    update: InstanceType<typeof UserContactUpdateWithoutQueueInput>;
    create: InstanceType<typeof UserContactCreateWithoutQueueInput>;
    where?: InstanceType<typeof UserContactWhereInput>;
}
export declare class UserContactWhereUniqueInput {
    id?: string;
    value?: string;
    AND?: Array<UserContactWhereInput>;
    OR?: Array<UserContactWhereInput>;
    NOT?: Array<UserContactWhereInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    queue?: InstanceType<typeof QueueListRelationFilter>;
}
export declare class UserContactWhereInput {
    AND?: Array<UserContactWhereInput>;
    OR?: Array<UserContactWhereInput>;
    NOT?: Array<UserContactWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    value?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    queue?: InstanceType<typeof QueueListRelationFilter>;
}
export declare class UserContact {
    id: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    userId: string;
    createdAt: Date | null;
    user?: InstanceType<typeof User>;
    queue?: Array<Queue>;
    _count?: InstanceType<typeof UserContactCount>;
}
export declare class AggregateUserGroup {
    _count?: InstanceType<typeof UserGroupCountAggregate>;
    _min?: InstanceType<typeof UserGroupMinAggregate>;
    _max?: InstanceType<typeof UserGroupMaxAggregate>;
}
export declare class CreateManyUserGroupArgs {
    data: Array<UserGroupCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserGroupArgs {
    data: InstanceType<typeof UserGroupCreateInput>;
}
export declare class DeleteManyUserGroupArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class DeleteOneUserGroupArgs {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindFirstUserGroupOrThrowArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
    orderBy?: Array<UserGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupScalarFieldEnum>;
}
export declare class FindFirstUserGroupArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
    orderBy?: Array<UserGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupScalarFieldEnum>;
}
export declare class FindManyUserGroupArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
    orderBy?: Array<UserGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupScalarFieldEnum>;
}
export declare class FindUniqueUserGroupOrThrowArgs {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindUniqueUserGroupArgs {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpdateManyUserGroupArgs {
    data: InstanceType<typeof UserGroupUpdateManyMutationInput>;
    where?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UpdateOneUserGroupArgs {
    data: InstanceType<typeof UserGroupUpdateInput>;
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpsertOneUserGroupArgs {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateInput>;
    update: InstanceType<typeof UserGroupUpdateInput>;
}
export declare class UserGroupAggregateArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
    orderBy?: Array<UserGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupMaxAggregateInput>;
}
export declare class UserGroupCountAggregateInput {
    id?: true;
    name?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
}
export declare class UserGroupCountAggregate {
    id: number;
    name: number;
    status: number;
    createdById: number;
    createdAt: number;
    _all: number;
}
export declare class UserGroupCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupCount {
    assignUsers?: number;
    userGroupContact?: number;
    assignMessages?: number;
}
export declare class UserGroupCreateManyCreatedByInputEnvelope {
    data: Array<UserGroupCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class UserGroupCreateManyCreatedByInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
}
export declare class UserGroupCreateManyInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
}
export declare class UserGroupCreateNestedManyWithoutAssignUsersInput {
    create?: Array<UserGroupCreateWithoutAssignUsersInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutAssignUsersInput>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
}
export declare class UserGroupCreateNestedManyWithoutCreatedByInput {
    create?: Array<UserGroupCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof UserGroupCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
}
export declare class UserGroupCreateNestedOneWithoutAssignMessagesInput {
    create?: InstanceType<typeof UserGroupCreateWithoutAssignMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutAssignMessagesInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class UserGroupCreateNestedOneWithoutUserGroupContactInput {
    create?: InstanceType<typeof UserGroupCreateWithoutUserGroupContactInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutUserGroupContactInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class UserGroupCreateNestedOneWithoutUserGroupSettingsInput {
    create?: InstanceType<typeof UserGroupCreateWithoutUserGroupSettingsInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutUserGroupSettingsInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
}
export declare class UserGroupCreateOrConnectWithoutAssignMessagesInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateWithoutAssignMessagesInput>;
}
export declare class UserGroupCreateOrConnectWithoutAssignUsersInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateWithoutAssignUsersInput>;
}
export declare class UserGroupCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateWithoutCreatedByInput>;
}
export declare class UserGroupCreateOrConnectWithoutUserGroupContactInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateWithoutUserGroupContactInput>;
}
export declare class UserGroupCreateOrConnectWithoutUserGroupSettingsInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof UserGroupCreateWithoutUserGroupSettingsInput>;
}
export declare class UserGroupCreateWithoutAssignMessagesInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactCreateNestedManyWithoutUserGroupInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutCreatedUserGroupInput>;
}
export declare class UserGroupCreateWithoutAssignUsersInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutCreatedUserGroupInput>;
}
export declare class UserGroupCreateWithoutCreatedByInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupCreateWithoutUserGroupContactInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserCreateNestedManyWithoutBelongGroupsInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutCreatedUserGroupInput>;
}
export declare class UserGroupCreateWithoutUserGroupSettingsInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof UserCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutCreatedUserGroupInput>;
}
export declare class UserGroupCreateInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageCreateNestedManyWithoutUserGroupInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutCreatedUserGroupInput>;
}
export declare class UserGroupGroupByArgs {
    where?: InstanceType<typeof UserGroupWhereInput>;
    orderBy?: Array<UserGroupOrderByWithAggregationInput>;
    by: Array<keyof typeof UserGroupScalarFieldEnum>;
    having?: InstanceType<typeof UserGroupScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupMaxAggregateInput>;
}
export declare class UserGroupGroupBy {
    id: string;
    name: string;
    status: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof UserGroupCountAggregate>;
    _min?: InstanceType<typeof UserGroupMinAggregate>;
    _max?: InstanceType<typeof UserGroupMaxAggregate>;
}
export declare class UserGroupListRelationFilter {
    every?: InstanceType<typeof UserGroupWhereInput>;
    some?: InstanceType<typeof UserGroupWhereInput>;
    none?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UserGroupMaxAggregateInput {
    id?: true;
    name?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
}
export declare class UserGroupMaxAggregate {
    id?: string;
    name?: string;
    status?: keyof typeof UserGroupStatus;
    createdById?: string;
    createdAt?: Date | string;
}
export declare class UserGroupMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupMinAggregateInput {
    id?: true;
    name?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
}
export declare class UserGroupMinAggregate {
    id?: string;
    name?: string;
    status?: keyof typeof UserGroupStatus;
    createdById?: string;
    createdAt?: Date | string;
}
export declare class UserGroupMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserGroupOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserGroupCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserGroupMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserGroupMinOrderByAggregateInput>;
}
export declare class UserGroupOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsOrderByWithRelationInput>;
    assignUsers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactOrderByRelationAggregateInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageOrderByRelationAggregateInput>;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserGroupRelationFilter {
    is?: InstanceType<typeof UserGroupWhereInput>;
    isNot?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UserGroupScalarWhereWithAggregatesInput {
    AND?: Array<UserGroupScalarWhereWithAggregatesInput>;
    OR?: Array<UserGroupScalarWhereWithAggregatesInput>;
    NOT?: Array<UserGroupScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    status?: InstanceType<typeof EnumUserGroupStatusWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserGroupScalarWhereInput {
    AND?: Array<UserGroupScalarWhereInput>;
    OR?: Array<UserGroupScalarWhereInput>;
    NOT?: Array<UserGroupScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserGroupStatusFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class UserGroupUncheckedCreateNestedManyWithoutAssignUsersInput {
    create?: Array<UserGroupCreateWithoutAssignUsersInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutAssignUsersInput>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
}
export declare class UserGroupUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<UserGroupCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof UserGroupCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
}
export declare class UserGroupUncheckedCreateWithoutAssignMessagesInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedCreateWithoutAssignUsersInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedCreateWithoutCreatedByInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedCreateWithoutUserGroupContactInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBelongGroupsInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedCreateWithoutUserGroupSettingsInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    assignUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedCreateInput {
    id?: string;
    name: string;
    status?: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt?: Date | string;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput>;
    assignUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBelongGroupsInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedCreateNestedManyWithoutUserGroupInput>;
}
export declare class UserGroupUncheckedUpdateManyWithoutAssignUsersNestedInput {
    create?: Array<UserGroupCreateWithoutAssignUsersInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutAssignUsersInput>;
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutAssignUsersInput>;
    set?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutAssignUsersInput>;
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutAssignUsersInput>;
    deleteMany?: Array<UserGroupScalarWhereInput>;
}
export declare class UserGroupUncheckedUpdateManyWithoutAssignUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<UserGroupCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof UserGroupCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<UserGroupScalarWhereInput>;
}
export declare class UserGroupUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupUncheckedUpdateWithoutAssignMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUncheckedUpdateWithoutAssignUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUncheckedUpdateWithoutUserGroupContactInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutBelongGroupsNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUncheckedUpdateWithoutUserGroupSettingsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUncheckedUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupUpdateManyWithWhereWithoutAssignUsersInput {
    where: InstanceType<typeof UserGroupScalarWhereInput>;
    data: InstanceType<typeof UserGroupUpdateManyMutationInput>;
}
export declare class UserGroupUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof UserGroupScalarWhereInput>;
    data: InstanceType<typeof UserGroupUpdateManyMutationInput>;
}
export declare class UserGroupUpdateManyWithoutAssignUsersNestedInput {
    create?: Array<UserGroupCreateWithoutAssignUsersInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutAssignUsersInput>;
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutAssignUsersInput>;
    set?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutAssignUsersInput>;
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutAssignUsersInput>;
    deleteMany?: Array<UserGroupScalarWhereInput>;
}
export declare class UserGroupUpdateManyWithoutCreatedByNestedInput {
    create?: Array<UserGroupCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<UserGroupCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<UserGroupUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof UserGroupCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<UserGroupUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<UserGroupUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<UserGroupScalarWhereInput>;
}
export declare class UserGroupUpdateOneRequiredWithoutAssignMessagesNestedInput {
    create?: InstanceType<typeof UserGroupCreateWithoutAssignMessagesInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutAssignMessagesInput>;
    upsert?: InstanceType<typeof UserGroupUpsertWithoutAssignMessagesInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof UserGroupUpdateToOneWithWhereWithoutAssignMessagesInput>;
}
export declare class UserGroupUpdateOneRequiredWithoutUserGroupContactNestedInput {
    create?: InstanceType<typeof UserGroupCreateWithoutUserGroupContactInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutUserGroupContactInput>;
    upsert?: InstanceType<typeof UserGroupUpsertWithoutUserGroupContactInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof UserGroupUpdateToOneWithWhereWithoutUserGroupContactInput>;
}
export declare class UserGroupUpdateOneRequiredWithoutUserGroupSettingsNestedInput {
    create?: InstanceType<typeof UserGroupCreateWithoutUserGroupSettingsInput>;
    connectOrCreate?: InstanceType<typeof UserGroupCreateOrConnectWithoutUserGroupSettingsInput>;
    upsert?: InstanceType<typeof UserGroupUpsertWithoutUserGroupSettingsInput>;
    connect?: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof UserGroupUpdateToOneWithWhereWithoutUserGroupSettingsInput>;
}
export declare class UserGroupUpdateToOneWithWhereWithoutAssignMessagesInput {
    where?: InstanceType<typeof UserGroupWhereInput>;
    data: InstanceType<typeof UserGroupUpdateWithoutAssignMessagesInput>;
}
export declare class UserGroupUpdateToOneWithWhereWithoutUserGroupContactInput {
    where?: InstanceType<typeof UserGroupWhereInput>;
    data: InstanceType<typeof UserGroupUpdateWithoutUserGroupContactInput>;
}
export declare class UserGroupUpdateToOneWithWhereWithoutUserGroupSettingsInput {
    where?: InstanceType<typeof UserGroupWhereInput>;
    data: InstanceType<typeof UserGroupUpdateWithoutUserGroupSettingsInput>;
}
export declare class UserGroupUpdateWithWhereUniqueWithoutAssignUsersInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    data: InstanceType<typeof UserGroupUpdateWithoutAssignUsersInput>;
}
export declare class UserGroupUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    data: InstanceType<typeof UserGroupUpdateWithoutCreatedByInput>;
}
export declare class UserGroupUpdateWithoutAssignMessagesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
}
export declare class UserGroupUpdateWithoutAssignUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
}
export declare class UserGroupUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput>;
}
export declare class UserGroupUpdateWithoutUserGroupContactInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUpdateManyWithoutBelongGroupsNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
}
export declare class UserGroupUpdateWithoutUserGroupSettingsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    assignUsers?: InstanceType<typeof UserUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
}
export declare class UserGroupUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
    assignUsers?: InstanceType<typeof UserUpdateManyWithoutBelongGroupsNestedInput>;
    userGroupContact?: InstanceType<typeof UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageUpdateManyWithoutUserGroupNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
}
export declare class UserGroupUpsertWithWhereUniqueWithoutAssignUsersInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    update: InstanceType<typeof UserGroupUpdateWithoutAssignUsersInput>;
    create: InstanceType<typeof UserGroupCreateWithoutAssignUsersInput>;
}
export declare class UserGroupUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<UserGroupWhereUniqueInput, 'id' | 'name'>;
    update: InstanceType<typeof UserGroupUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof UserGroupCreateWithoutCreatedByInput>;
}
export declare class UserGroupUpsertWithoutAssignMessagesInput {
    update: InstanceType<typeof UserGroupUpdateWithoutAssignMessagesInput>;
    create: InstanceType<typeof UserGroupCreateWithoutAssignMessagesInput>;
    where?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UserGroupUpsertWithoutUserGroupContactInput {
    update: InstanceType<typeof UserGroupUpdateWithoutUserGroupContactInput>;
    create: InstanceType<typeof UserGroupCreateWithoutUserGroupContactInput>;
    where?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UserGroupUpsertWithoutUserGroupSettingsInput {
    update: InstanceType<typeof UserGroupUpdateWithoutUserGroupSettingsInput>;
    create: InstanceType<typeof UserGroupCreateWithoutUserGroupSettingsInput>;
    where?: InstanceType<typeof UserGroupWhereInput>;
}
export declare class UserGroupWhereUniqueInput {
    id?: string;
    name?: string;
    AND?: Array<UserGroupWhereInput>;
    OR?: Array<UserGroupWhereInput>;
    NOT?: Array<UserGroupWhereInput>;
    status?: InstanceType<typeof EnumUserGroupStatusFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsNullableRelationFilter>;
    assignUsers?: InstanceType<typeof UserListRelationFilter>;
    userGroupContact?: InstanceType<typeof UserGroupContactListRelationFilter>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserGroupWhereInput {
    AND?: Array<UserGroupWhereInput>;
    OR?: Array<UserGroupWhereInput>;
    NOT?: Array<UserGroupWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserGroupStatusFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroupSettings?: InstanceType<typeof UserGroupSettingsNullableRelationFilter>;
    assignUsers?: InstanceType<typeof UserListRelationFilter>;
    userGroupContact?: InstanceType<typeof UserGroupContactListRelationFilter>;
    assignMessages?: InstanceType<typeof AssignUserGroupOnMessageListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserGroup {
    id: string;
    name: string;
    status: keyof typeof UserGroupStatus;
    createdById: string;
    createdAt: Date | null;
    userGroupSettings?: InstanceType<typeof UserGroupSettings> | null;
    assignUsers?: Array<User>;
    userGroupContact?: Array<UserGroupContact>;
    assignMessages?: Array<AssignUserGroupOnMessage>;
    createdBy?: InstanceType<typeof User>;
    _count?: InstanceType<typeof UserGroupCount>;
}
export declare class AggregateUserGroupContact {
    _count?: InstanceType<typeof UserGroupContactCountAggregate>;
    _min?: InstanceType<typeof UserGroupContactMinAggregate>;
    _max?: InstanceType<typeof UserGroupContactMaxAggregate>;
}
export declare class CreateManyUserGroupContactArgs {
    data: Array<UserGroupContactCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserGroupContactArgs {
    data: InstanceType<typeof UserGroupContactCreateInput>;
}
export declare class DeleteManyUserGroupContactArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
}
export declare class DeleteOneUserGroupContactArgs {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class FindFirstUserGroupContactOrThrowArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
    orderBy?: Array<UserGroupContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupContactScalarFieldEnum>;
}
export declare class FindFirstUserGroupContactArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
    orderBy?: Array<UserGroupContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupContactScalarFieldEnum>;
}
export declare class FindManyUserGroupContactArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
    orderBy?: Array<UserGroupContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupContactScalarFieldEnum>;
}
export declare class FindUniqueUserGroupContactOrThrowArgs {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class FindUniqueUserGroupContactArgs {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class UpdateManyUserGroupContactArgs {
    data: InstanceType<typeof UserGroupContactUpdateManyMutationInput>;
    where?: InstanceType<typeof UserGroupContactWhereInput>;
}
export declare class UpdateOneUserGroupContactArgs {
    data: InstanceType<typeof UserGroupContactUpdateInput>;
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
}
export declare class UpsertOneUserGroupContactArgs {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    create: InstanceType<typeof UserGroupContactCreateInput>;
    update: InstanceType<typeof UserGroupContactUpdateInput>;
}
export declare class UserGroupContactAggregateArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
    orderBy?: Array<UserGroupContactOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupContactCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupContactMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupContactMaxAggregateInput>;
}
export declare class UserGroupContactCountAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    uerGroupId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class UserGroupContactCountAggregate {
    id: number;
    contactType: number;
    value: number;
    status: number;
    uerGroupId: number;
    createdAt: number;
    _all: number;
}
export declare class UserGroupContactCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    uerGroupId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupContactCreateManyUserGroupInputEnvelope {
    data: Array<UserGroupContactCreateManyUserGroupInput>;
    skipDuplicates?: boolean;
}
export declare class UserGroupContactCreateManyUserGroupInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    createdAt?: Date | string;
}
export declare class UserGroupContactCreateManyInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    uerGroupId: string;
    createdAt?: Date | string;
}
export declare class UserGroupContactCreateNestedManyWithoutUserGroupInput {
    create?: Array<UserGroupContactCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>;
    createMany?: InstanceType<typeof UserGroupContactCreateManyUserGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
}
export declare class UserGroupContactCreateOrConnectWithoutUserGroupInput {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    create: InstanceType<typeof UserGroupContactCreateWithoutUserGroupInput>;
}
export declare class UserGroupContactCreateWithoutUserGroupInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    createdAt?: Date | string;
}
export declare class UserGroupContactCreateInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    createdAt?: Date | string;
    userGroup: InstanceType<typeof UserGroupCreateNestedOneWithoutUserGroupContactInput>;
}
export declare class UserGroupContactGroupByArgs {
    where?: InstanceType<typeof UserGroupContactWhereInput>;
    orderBy?: Array<UserGroupContactOrderByWithAggregationInput>;
    by: Array<keyof typeof UserGroupContactScalarFieldEnum>;
    having?: InstanceType<typeof UserGroupContactScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupContactCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupContactMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupContactMaxAggregateInput>;
}
export declare class UserGroupContactGroupBy {
    id: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    uerGroupId: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof UserGroupContactCountAggregate>;
    _min?: InstanceType<typeof UserGroupContactMinAggregate>;
    _max?: InstanceType<typeof UserGroupContactMaxAggregate>;
}
export declare class UserGroupContactListRelationFilter {
    every?: InstanceType<typeof UserGroupContactWhereInput>;
    some?: InstanceType<typeof UserGroupContactWhereInput>;
    none?: InstanceType<typeof UserGroupContactWhereInput>;
}
export declare class UserGroupContactMaxAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    uerGroupId?: true;
    createdAt?: true;
}
export declare class UserGroupContactMaxAggregate {
    id?: string;
    contactType?: keyof typeof UserContactType;
    value?: string;
    status?: keyof typeof UserContactStatus;
    uerGroupId?: string;
    createdAt?: Date | string;
}
export declare class UserGroupContactMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    uerGroupId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupContactMinAggregateInput {
    id?: true;
    contactType?: true;
    value?: true;
    status?: true;
    uerGroupId?: true;
    createdAt?: true;
}
export declare class UserGroupContactMinAggregate {
    id?: string;
    contactType?: keyof typeof UserContactType;
    value?: string;
    status?: keyof typeof UserContactStatus;
    uerGroupId?: string;
    createdAt?: Date | string;
}
export declare class UserGroupContactMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    uerGroupId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserGroupContactOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserGroupContactOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    uerGroupId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserGroupContactCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserGroupContactMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserGroupContactMinOrderByAggregateInput>;
}
export declare class UserGroupContactOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    contactType?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    uerGroupId?: keyof typeof SortOrder;
    createdAt?: InstanceType<typeof SortOrderInput>;
    userGroup?: InstanceType<typeof UserGroupOrderByWithRelationInput>;
}
export declare class UserGroupContactScalarWhereWithAggregatesInput {
    AND?: Array<UserGroupContactScalarWhereWithAggregatesInput>;
    OR?: Array<UserGroupContactScalarWhereWithAggregatesInput>;
    NOT?: Array<UserGroupContactScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeWithAggregatesFilter>;
    value?: InstanceType<typeof StringWithAggregatesFilter>;
    status?: InstanceType<typeof EnumUserContactStatusWithAggregatesFilter>;
    uerGroupId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserGroupContactScalarWhereInput {
    AND?: Array<UserGroupContactScalarWhereInput>;
    OR?: Array<UserGroupContactScalarWhereInput>;
    NOT?: Array<UserGroupContactScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    value?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    uerGroupId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class UserGroupContactUncheckedCreateNestedManyWithoutUserGroupInput {
    create?: Array<UserGroupContactCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>;
    createMany?: InstanceType<typeof UserGroupContactCreateManyUserGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
}
export declare class UserGroupContactUncheckedCreateWithoutUserGroupInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    createdAt?: Date | string;
}
export declare class UserGroupContactUncheckedCreateInput {
    id?: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    uerGroupId: string;
    createdAt?: Date | string;
}
export declare class UserGroupContactUncheckedUpdateManyWithoutUserGroupNestedInput {
    create?: Array<UserGroupContactCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>;
    upsert?: Array<UserGroupContactUpsertWithWhereUniqueWithoutUserGroupInput>;
    createMany?: InstanceType<typeof UserGroupContactCreateManyUserGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    delete?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    connect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    update?: Array<UserGroupContactUpdateWithWhereUniqueWithoutUserGroupInput>;
    updateMany?: Array<UserGroupContactUpdateManyWithWhereWithoutUserGroupInput>;
    deleteMany?: Array<UserGroupContactScalarWhereInput>;
}
export declare class UserGroupContactUncheckedUpdateManyWithoutUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    uerGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUncheckedUpdateWithoutUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    uerGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUpdateManyWithWhereWithoutUserGroupInput {
    where: InstanceType<typeof UserGroupContactScalarWhereInput>;
    data: InstanceType<typeof UserGroupContactUpdateManyMutationInput>;
}
export declare class UserGroupContactUpdateManyWithoutUserGroupNestedInput {
    create?: Array<UserGroupContactCreateWithoutUserGroupInput>;
    connectOrCreate?: Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>;
    upsert?: Array<UserGroupContactUpsertWithWhereUniqueWithoutUserGroupInput>;
    createMany?: InstanceType<typeof UserGroupContactCreateManyUserGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    disconnect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    delete?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    connect?: Array<Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>>;
    update?: Array<UserGroupContactUpdateWithWhereUniqueWithoutUserGroupInput>;
    updateMany?: Array<UserGroupContactUpdateManyWithWhereWithoutUserGroupInput>;
    deleteMany?: Array<UserGroupContactScalarWhereInput>;
}
export declare class UserGroupContactUpdateWithWhereUniqueWithoutUserGroupInput {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    data: InstanceType<typeof UserGroupContactUpdateWithoutUserGroupInput>;
}
export declare class UserGroupContactUpdateWithoutUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserGroupContactUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserContactStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    userGroup?: InstanceType<typeof UserGroupUpdateOneRequiredWithoutUserGroupContactNestedInput>;
}
export declare class UserGroupContactUpsertWithWhereUniqueWithoutUserGroupInput {
    where: Prisma.AtLeast<UserGroupContactWhereUniqueInput, 'id' | 'value'>;
    update: InstanceType<typeof UserGroupContactUpdateWithoutUserGroupInput>;
    create: InstanceType<typeof UserGroupContactCreateWithoutUserGroupInput>;
}
export declare class UserGroupContactWhereUniqueInput {
    id?: string;
    value?: string;
    AND?: Array<UserGroupContactWhereInput>;
    OR?: Array<UserGroupContactWhereInput>;
    NOT?: Array<UserGroupContactWhereInput>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    uerGroupId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
}
export declare class UserGroupContactWhereInput {
    AND?: Array<UserGroupContactWhereInput>;
    OR?: Array<UserGroupContactWhereInput>;
    NOT?: Array<UserGroupContactWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    contactType?: InstanceType<typeof EnumUserContactTypeFilter>;
    value?: InstanceType<typeof StringFilter>;
    status?: InstanceType<typeof EnumUserContactStatusFilter>;
    uerGroupId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
}
export declare class UserGroupContact {
    id: string;
    contactType: keyof typeof UserContactType;
    value: string;
    status: keyof typeof UserContactStatus;
    uerGroupId: string;
    createdAt: Date | null;
    userGroup?: InstanceType<typeof UserGroup>;
}
export declare class AggregateUserGroupSettings {
    _count?: InstanceType<typeof UserGroupSettingsCountAggregate>;
    _min?: InstanceType<typeof UserGroupSettingsMinAggregate>;
    _max?: InstanceType<typeof UserGroupSettingsMaxAggregate>;
}
export declare class CreateManyUserGroupSettingsArgs {
    data: Array<UserGroupSettingsCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserGroupSettingsArgs {
    data: InstanceType<typeof UserGroupSettingsCreateInput>;
}
export declare class DeleteManyUserGroupSettingsArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
}
export declare class DeleteOneUserGroupSettingsArgs {
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class FindFirstUserGroupSettingsOrThrowArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    orderBy?: Array<UserGroupSettingsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupSettingsScalarFieldEnum>;
}
export declare class FindFirstUserGroupSettingsArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    orderBy?: Array<UserGroupSettingsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupSettingsScalarFieldEnum>;
}
export declare class FindManyUserGroupSettingsArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    orderBy?: Array<UserGroupSettingsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserGroupSettingsScalarFieldEnum>;
}
export declare class FindUniqueUserGroupSettingsOrThrowArgs {
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class FindUniqueUserGroupSettingsArgs {
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class UpdateManyUserGroupSettingsArgs {
    data: InstanceType<typeof UserGroupSettingsUpdateManyMutationInput>;
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
}
export declare class UpdateOneUserGroupSettingsArgs {
    data: InstanceType<typeof UserGroupSettingsUpdateInput>;
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class UpsertOneUserGroupSettingsArgs {
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    create: InstanceType<typeof UserGroupSettingsCreateInput>;
    update: InstanceType<typeof UserGroupSettingsUpdateInput>;
}
export declare class UserGroupSettingsAggregateArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    orderBy?: Array<UserGroupSettingsOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupSettingsCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupSettingsMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupSettingsMaxAggregateInput>;
}
export declare class UserGroupSettingsCountAggregateInput {
    id?: true;
    userGroupId?: true;
    description?: true;
    color?: true;
    avatar?: true;
    _all?: true;
}
export declare class UserGroupSettingsCountAggregate {
    id: number;
    userGroupId: number;
    description: number;
    color: number;
    avatar: number;
    _all: number;
}
export declare class UserGroupSettingsCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userGroupId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
}
export declare class UserGroupSettingsCreateManyInput {
    id?: string;
    userGroupId: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsCreateNestedOneWithoutUserGroupInput {
    create?: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
    connect?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class UserGroupSettingsCreateOrConnectWithoutUserGroupInput {
    where: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    create: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
}
export declare class UserGroupSettingsCreateWithoutUserGroupInput {
    id?: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsCreateInput {
    id?: string;
    description?: string;
    color?: string;
    avatar?: string;
    userGroup: InstanceType<typeof UserGroupCreateNestedOneWithoutUserGroupSettingsInput>;
}
export declare class UserGroupSettingsGroupByArgs {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    orderBy?: Array<UserGroupSettingsOrderByWithAggregationInput>;
    by: Array<keyof typeof UserGroupSettingsScalarFieldEnum>;
    having?: InstanceType<typeof UserGroupSettingsScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserGroupSettingsCountAggregateInput>;
    _min?: InstanceType<typeof UserGroupSettingsMinAggregateInput>;
    _max?: InstanceType<typeof UserGroupSettingsMaxAggregateInput>;
}
export declare class UserGroupSettingsGroupBy {
    id: string;
    userGroupId: string;
    description?: string;
    color?: string;
    avatar?: string;
    _count?: InstanceType<typeof UserGroupSettingsCountAggregate>;
    _min?: InstanceType<typeof UserGroupSettingsMinAggregate>;
    _max?: InstanceType<typeof UserGroupSettingsMaxAggregate>;
}
export declare class UserGroupSettingsMaxAggregateInput {
    id?: true;
    userGroupId?: true;
    description?: true;
    color?: true;
    avatar?: true;
}
export declare class UserGroupSettingsMaxAggregate {
    id?: string;
    userGroupId?: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userGroupId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
}
export declare class UserGroupSettingsMinAggregateInput {
    id?: true;
    userGroupId?: true;
    description?: true;
    color?: true;
    avatar?: true;
}
export declare class UserGroupSettingsMinAggregate {
    id?: string;
    userGroupId?: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userGroupId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
}
export declare class UserGroupSettingsNullableRelationFilter {
    is?: InstanceType<typeof UserGroupSettingsWhereInput>;
    isNot?: InstanceType<typeof UserGroupSettingsWhereInput>;
}
export declare class UserGroupSettingsOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userGroupId?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    color?: InstanceType<typeof SortOrderInput>;
    avatar?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserGroupSettingsCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserGroupSettingsMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserGroupSettingsMinOrderByAggregateInput>;
}
export declare class UserGroupSettingsOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userGroupId?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    color?: InstanceType<typeof SortOrderInput>;
    avatar?: InstanceType<typeof SortOrderInput>;
    userGroup?: InstanceType<typeof UserGroupOrderByWithRelationInput>;
}
export declare class UserGroupSettingsScalarWhereWithAggregatesInput {
    AND?: Array<UserGroupSettingsScalarWhereWithAggregatesInput>;
    OR?: Array<UserGroupSettingsScalarWhereWithAggregatesInput>;
    NOT?: Array<UserGroupSettingsScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    userGroupId?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    color?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class UserGroupSettingsUncheckedCreateNestedOneWithoutUserGroupInput {
    create?: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
    connect?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
}
export declare class UserGroupSettingsUncheckedCreateWithoutUserGroupInput {
    id?: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsUncheckedCreateInput {
    id?: string;
    userGroupId: string;
    description?: string;
    color?: string;
    avatar?: string;
}
export declare class UserGroupSettingsUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserGroupSettingsUncheckedUpdateOneWithoutUserGroupNestedInput {
    create?: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
    upsert?: InstanceType<typeof UserGroupSettingsUpsertWithoutUserGroupInput>;
    disconnect?: InstanceType<typeof UserGroupSettingsWhereInput>;
    delete?: InstanceType<typeof UserGroupSettingsWhereInput>;
    connect?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    update?: InstanceType<typeof UserGroupSettingsUpdateToOneWithWhereWithoutUserGroupInput>;
}
export declare class UserGroupSettingsUncheckedUpdateWithoutUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserGroupSettingsUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userGroupId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserGroupSettingsUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserGroupSettingsUpdateOneWithoutUserGroupNestedInput {
    create?: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
    connectOrCreate?: InstanceType<typeof UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
    upsert?: InstanceType<typeof UserGroupSettingsUpsertWithoutUserGroupInput>;
    disconnect?: InstanceType<typeof UserGroupSettingsWhereInput>;
    delete?: InstanceType<typeof UserGroupSettingsWhereInput>;
    connect?: Prisma.AtLeast<UserGroupSettingsWhereUniqueInput, 'id' | 'userGroupId'>;
    update?: InstanceType<typeof UserGroupSettingsUpdateToOneWithWhereWithoutUserGroupInput>;
}
export declare class UserGroupSettingsUpdateToOneWithWhereWithoutUserGroupInput {
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
    data: InstanceType<typeof UserGroupSettingsUpdateWithoutUserGroupInput>;
}
export declare class UserGroupSettingsUpdateWithoutUserGroupInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserGroupSettingsUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    userGroup?: InstanceType<typeof UserGroupUpdateOneRequiredWithoutUserGroupSettingsNestedInput>;
}
export declare class UserGroupSettingsUpsertWithoutUserGroupInput {
    update: InstanceType<typeof UserGroupSettingsUpdateWithoutUserGroupInput>;
    create: InstanceType<typeof UserGroupSettingsCreateWithoutUserGroupInput>;
    where?: InstanceType<typeof UserGroupSettingsWhereInput>;
}
export declare class UserGroupSettingsWhereUniqueInput {
    id?: string;
    userGroupId?: string;
    AND?: Array<UserGroupSettingsWhereInput>;
    OR?: Array<UserGroupSettingsWhereInput>;
    NOT?: Array<UserGroupSettingsWhereInput>;
    description?: InstanceType<typeof StringNullableFilter>;
    color?: InstanceType<typeof StringNullableFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
}
export declare class UserGroupSettingsWhereInput {
    AND?: Array<UserGroupSettingsWhereInput>;
    OR?: Array<UserGroupSettingsWhereInput>;
    NOT?: Array<UserGroupSettingsWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userGroupId?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    color?: InstanceType<typeof StringNullableFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    userGroup?: InstanceType<typeof UserGroupRelationFilter>;
}
export declare class UserGroupSettings {
    id: string;
    userGroupId: string;
    description: string | null;
    color: string | null;
    avatar: string | null;
    userGroup?: InstanceType<typeof UserGroup>;
}
export declare class AggregateUserProfile {
    _count?: InstanceType<typeof UserProfileCountAggregate>;
    _min?: InstanceType<typeof UserProfileMinAggregate>;
    _max?: InstanceType<typeof UserProfileMaxAggregate>;
}
export declare class CreateManyUserProfileArgs {
    data: Array<UserProfileCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserProfileArgs {
    data: InstanceType<typeof UserProfileCreateInput>;
}
export declare class DeleteManyUserProfileArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
}
export declare class DeleteOneUserProfileArgs {
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class FindFirstUserProfileOrThrowArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}
export declare class FindFirstUserProfileArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}
export declare class FindManyUserProfileArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}
export declare class FindUniqueUserProfileOrThrowArgs {
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class FindUniqueUserProfileArgs {
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class UpdateManyUserProfileArgs {
    data: InstanceType<typeof UserProfileUpdateManyMutationInput>;
    where?: InstanceType<typeof UserProfileWhereInput>;
}
export declare class UpdateOneUserProfileArgs {
    data: InstanceType<typeof UserProfileUpdateInput>;
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class UpsertOneUserProfileArgs {
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    create: InstanceType<typeof UserProfileCreateInput>;
    update: InstanceType<typeof UserProfileUpdateInput>;
}
export declare class UserProfileAggregateArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
    orderBy?: Array<UserProfileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserProfileCountAggregateInput>;
    _min?: InstanceType<typeof UserProfileMinAggregateInput>;
    _max?: InstanceType<typeof UserProfileMaxAggregateInput>;
}
export declare class UserProfileCountAggregateInput {
    id?: true;
    userId?: true;
    avatar?: true;
    acronym?: true;
    createdAt?: true;
    _all?: true;
}
export declare class UserProfileCountAggregate {
    id: number;
    userId: number;
    avatar: number;
    acronym: number;
    createdAt: number;
    _all: number;
}
export declare class UserProfileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    acronym?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserProfileCreateManyInput {
    id?: string;
    userId: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class UserProfileCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    create: InstanceType<typeof UserProfileCreateWithoutUserInput>;
}
export declare class UserProfileCreateWithoutUserInput {
    id?: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileCreateInput {
    id?: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
}
export declare class UserProfileGroupByArgs {
    where?: InstanceType<typeof UserProfileWhereInput>;
    orderBy?: Array<UserProfileOrderByWithAggregationInput>;
    by: Array<keyof typeof UserProfileScalarFieldEnum>;
    having?: InstanceType<typeof UserProfileScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserProfileCountAggregateInput>;
    _min?: InstanceType<typeof UserProfileMinAggregateInput>;
    _max?: InstanceType<typeof UserProfileMaxAggregateInput>;
}
export declare class UserProfileGroupBy {
    id: string;
    userId: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
    _count?: InstanceType<typeof UserProfileCountAggregate>;
    _min?: InstanceType<typeof UserProfileMinAggregate>;
    _max?: InstanceType<typeof UserProfileMaxAggregate>;
}
export declare class UserProfileMaxAggregateInput {
    id?: true;
    userId?: true;
    avatar?: true;
    acronym?: true;
    createdAt?: true;
}
export declare class UserProfileMaxAggregate {
    id?: string;
    userId?: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    acronym?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserProfileMinAggregateInput {
    id?: true;
    userId?: true;
    avatar?: true;
    acronym?: true;
    createdAt?: true;
}
export declare class UserProfileMinAggregate {
    id?: string;
    userId?: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    acronym?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class UserProfileNullableRelationFilter {
    is?: InstanceType<typeof UserProfileWhereInput>;
    isNot?: InstanceType<typeof UserProfileWhereInput>;
}
export declare class UserProfileOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    acronym?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserProfileCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserProfileMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserProfileMinOrderByAggregateInput>;
}
export declare class UserProfileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    acronym?: InstanceType<typeof SortOrderInput>;
    createdAt?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserProfileScalarWhereWithAggregatesInput {
    AND?: Array<UserProfileScalarWhereWithAggregatesInput>;
    OR?: Array<UserProfileScalarWhereWithAggregatesInput>;
    NOT?: Array<UserProfileScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    acronym?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserProfileUncheckedCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
}
export declare class UserProfileUncheckedCreateWithoutUserInput {
    id?: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileUncheckedCreateInput {
    id?: string;
    userId: string;
    avatar?: string;
    acronym?: string;
    createdAt?: Date | string;
}
export declare class UserProfileUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserProfileUncheckedUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof UserProfileUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof UserProfileWhereInput>;
    delete?: InstanceType<typeof UserProfileWhereInput>;
    connect?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    update?: InstanceType<typeof UserProfileUpdateToOneWithWhereWithoutUserInput>;
}
export declare class UserProfileUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserProfileUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserProfileUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserProfileUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserProfileCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof UserProfileUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof UserProfileWhereInput>;
    delete?: InstanceType<typeof UserProfileWhereInput>;
    connect?: Prisma.AtLeast<UserProfileWhereUniqueInput, 'id' | 'userId'>;
    update?: InstanceType<typeof UserProfileUpdateToOneWithWhereWithoutUserInput>;
}
export declare class UserProfileUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof UserProfileWhereInput>;
    data: InstanceType<typeof UserProfileUpdateWithoutUserInput>;
}
export declare class UserProfileUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserProfileUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    acronym?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProfileNestedInput>;
}
export declare class UserProfileUpsertWithoutUserInput {
    update: InstanceType<typeof UserProfileUpdateWithoutUserInput>;
    create: InstanceType<typeof UserProfileCreateWithoutUserInput>;
    where?: InstanceType<typeof UserProfileWhereInput>;
}
export declare class UserProfileWhereUniqueInput {
    id?: string;
    userId?: string;
    AND?: Array<UserProfileWhereInput>;
    OR?: Array<UserProfileWhereInput>;
    NOT?: Array<UserProfileWhereInput>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    acronym?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserProfileWhereInput {
    AND?: Array<UserProfileWhereInput>;
    OR?: Array<UserProfileWhereInput>;
    NOT?: Array<UserProfileWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    acronym?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserProfile {
    id: string;
    userId: string;
    avatar: string | null;
    acronym: string | null;
    createdAt: Date | null;
    user?: InstanceType<typeof User>;
}
