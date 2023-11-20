/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AssignUserGroupOnMessage = {
  __typename?: 'AssignUserGroupOnMessage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  message: Message;
  messageId: Scalars['String']['output'];
  userGroup: UserGroup;
  userGroupId: Scalars['String']['output'];
};

export type AssignUserGroupOnMessageCreateManyMessageInput = {
  userGroupId: Scalars['String']['input'];
};

export type AssignUserGroupOnMessageCreateManyMessageInputEnvelope = {
  data: Array<AssignUserGroupOnMessageCreateManyMessageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput = {
  connect?: InputMaybe<Array<AssignUserGroupOnMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<AssignUserGroupOnMessageCreateWithoutMessageInput>>;
  createMany?: InputMaybe<AssignUserGroupOnMessageCreateManyMessageInputEnvelope>;
};

export type AssignUserGroupOnMessageCreateOrConnectWithoutMessageInput = {
  create: AssignUserGroupOnMessageCreateWithoutMessageInput;
  where: AssignUserGroupOnMessageWhereUniqueInput;
};

export type AssignUserGroupOnMessageCreateWithoutMessageInput = {
  userGroup: UserGroupCreateNestedOneWithoutAssignMessagesInput;
};

export type AssignUserGroupOnMessageListRelationFilter = {
  every?: InputMaybe<AssignUserGroupOnMessageWhereInput>;
  none?: InputMaybe<AssignUserGroupOnMessageWhereInput>;
  some?: InputMaybe<AssignUserGroupOnMessageWhereInput>;
};

export type AssignUserGroupOnMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AssignUserGroupOnMessageUserGroupIdMessageIdCompoundUniqueInput = {
  messageId: Scalars['String']['input'];
  userGroupId: Scalars['String']['input'];
};

export type AssignUserGroupOnMessageWhereInput = {
  AND?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  NOT?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  OR?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<StringFilter>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  userGroupId?: InputMaybe<StringFilter>;
};

export type AssignUserGroupOnMessageWhereUniqueInput = {
  AND?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  NOT?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  OR?: InputMaybe<Array<AssignUserGroupOnMessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<StringFilter>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  userGroupId?: InputMaybe<StringFilter>;
  userGroupId_messageId?: InputMaybe<AssignUserGroupOnMessageUserGroupIdMessageIdCompoundUniqueInput>;
};

export type AssignUsersOnMessage = {
  __typename?: 'AssignUsersOnMessage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  message: Message;
  messageId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AssignUsersOnMessageCountAggregate = {
  __typename?: 'AssignUsersOnMessageCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  messageId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AssignUsersOnMessageCreateManyMessageInput = {
  userId: Scalars['String']['input'];
};

export type AssignUsersOnMessageCreateManyMessageInputEnvelope = {
  data: Array<AssignUsersOnMessageCreateManyMessageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssignUsersOnMessageCreateNestedManyWithoutMessageInput = {
  connect?: InputMaybe<Array<AssignUsersOnMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignUsersOnMessageCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<AssignUsersOnMessageCreateWithoutMessageInput>>;
  createMany?: InputMaybe<AssignUsersOnMessageCreateManyMessageInputEnvelope>;
};

export type AssignUsersOnMessageCreateOrConnectWithoutMessageInput = {
  create: AssignUsersOnMessageCreateWithoutMessageInput;
  where: AssignUsersOnMessageWhereUniqueInput;
};

export type AssignUsersOnMessageCreateWithoutMessageInput = {
  user: UserCreateNestedOneWithoutAssignMessagesInput;
};

export type AssignUsersOnMessageListRelationFilter = {
  every?: InputMaybe<AssignUsersOnMessageWhereInput>;
  none?: InputMaybe<AssignUsersOnMessageWhereInput>;
  some?: InputMaybe<AssignUsersOnMessageWhereInput>;
};

export type AssignUsersOnMessageMaxAggregate = {
  __typename?: 'AssignUsersOnMessageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  messageId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AssignUsersOnMessageMinAggregate = {
  __typename?: 'AssignUsersOnMessageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  messageId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AssignUsersOnMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AssignUsersOnMessageUserIdMessageIdCompoundUniqueInput = {
  messageId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AssignUsersOnMessageWhereInput = {
  AND?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  NOT?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  OR?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AssignUsersOnMessageWhereUniqueInput = {
  AND?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  NOT?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  OR?: InputMaybe<Array<AssignUsersOnMessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_messageId?: InputMaybe<AssignUsersOnMessageUserIdMessageIdCompoundUniqueInput>;
};

export type Auth = {
  __typename?: 'Auth';
  /** Jwt token */
  token: Scalars['String']['output'];
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumMessageStatusNullableFilter = {
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusNullableFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type EnumUserContactStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserContactStatus>;
};

export type EnumUserContactStatusFilter = {
  equals?: InputMaybe<UserContactStatus>;
  in?: InputMaybe<Array<UserContactStatus>>;
  not?: InputMaybe<NestedEnumUserContactStatusFilter>;
  notIn?: InputMaybe<Array<UserContactStatus>>;
};

export type EnumUserContactTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<UserContactType>;
};

export type EnumUserContactTypeFilter = {
  equals?: InputMaybe<UserContactType>;
  in?: InputMaybe<Array<UserContactType>>;
  not?: InputMaybe<NestedEnumUserContactTypeFilter>;
  notIn?: InputMaybe<Array<UserContactType>>;
};

export type EnumUserGroupStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserGroupStatus>;
};

export type EnumUserGroupStatusFilter = {
  equals?: InputMaybe<UserGroupStatus>;
  in?: InputMaybe<Array<UserGroupStatus>>;
  not?: InputMaybe<NestedEnumUserGroupStatusFilter>;
  notIn?: InputMaybe<Array<UserGroupStatus>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Logs = {
  __typename?: 'Logs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type LogsCountAggregate = {
  __typename?: 'LogsCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type LogsCreateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  type: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutLogsInput;
};

export type LogsListRelationFilter = {
  every?: InputMaybe<LogsWhereInput>;
  none?: InputMaybe<LogsWhereInput>;
  some?: InputMaybe<LogsWhereInput>;
};

export type LogsMaxAggregate = {
  __typename?: 'LogsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LogsMinAggregate = {
  __typename?: 'LogsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LogsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LogsOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum LogsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  Type = 'type',
  UserId = 'userId'
}

export type LogsWhereInput = {
  AND?: InputMaybe<Array<LogsWhereInput>>;
  NOT?: InputMaybe<Array<LogsWhereInput>>;
  OR?: InputMaybe<Array<LogsWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LogsWhereUniqueInput = {
  AND?: InputMaybe<Array<LogsWhereInput>>;
  NOT?: InputMaybe<Array<LogsWhereInput>>;
  OR?: InputMaybe<Array<LogsWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Message = {
  __typename?: 'Message';
  _count: MessageCount;
  assignGroups?: Maybe<Array<AssignUserGroupOnMessage>>;
  assignUsers?: Maybe<Array<AssignUsersOnMessage>>;
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUser: User;
  createdUserId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messageType: MessageType;
  messageTypeId: Scalars['String']['output'];
  prefix?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MessageStatus>;
  title: Scalars['String']['output'];
};

export type MessageCount = {
  __typename?: 'MessageCount';
  assignGroups: Scalars['Int']['output'];
  assignUsers: Scalars['Int']['output'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int']['output'];
  body: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdUserId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  messageTypeId: Scalars['Int']['output'];
  prefix: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type MessageCreateInput = {
  assignGroups?: InputMaybe<AssignUserGroupOnMessageCreateNestedManyWithoutMessageInput>;
  assignUsers?: InputMaybe<AssignUsersOnMessageCreateNestedManyWithoutMessageInput>;
  body: Scalars['String']['input'];
  createdUser: UserCreateNestedOneWithoutCreatedMessagesInput;
  messageType: MessageTypeCreateNestedOneWithoutMessageInput;
  prefix?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MessageStatus>;
  title: Scalars['String']['input'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  messageTypeId?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MessageStatus>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  messageTypeId?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MessageStatus>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  assignGroups?: InputMaybe<AssignUserGroupOnMessageOrderByRelationAggregateInput>;
  assignUsers?: InputMaybe<AssignUsersOnMessageOrderByRelationAggregateInput>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdUser?: InputMaybe<UserOrderByWithRelationInput>;
  createdUserId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messageType?: InputMaybe<MessageTypeOrderByWithRelationInput>;
  messageTypeId?: InputMaybe<SortOrder>;
  prefix?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
};

export type MessageRelationFilter = {
  is?: InputMaybe<MessageWhereInput>;
  isNot?: InputMaybe<MessageWhereInput>;
};

export enum MessageScalarFieldEnum {
  Body = 'body',
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Id = 'id',
  MessageTypeId = 'messageTypeId',
  Prefix = 'prefix',
  Status = 'status',
  Title = 'title'
}

export enum MessageStatus {
  Created = 'CREATED',
  Done = 'DONE',
  Process = 'PROCESS'
}

export type MessageType = {
  __typename?: 'MessageType';
  _count: MessageTypeCount;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUser: User;
  createdUserId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Array<Message>>;
  name: Scalars['String']['output'];
};

export type MessageTypeCount = {
  __typename?: 'MessageTypeCount';
  message: Scalars['Int']['output'];
};

export type MessageTypeCountAggregate = {
  __typename?: 'MessageTypeCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdUserId: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type MessageTypeCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdUser: UserCreateNestedOneWithoutCreatedMessagesTypeInput;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MessageTypeCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<MessageTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessageTypeCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<MessageTypeCreateWithoutMessageInput>;
};

export type MessageTypeCreateOrConnectWithoutMessageInput = {
  create: MessageTypeCreateWithoutMessageInput;
  where: MessageTypeWhereUniqueInput;
};

export type MessageTypeCreateWithoutMessageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdUser: UserCreateNestedOneWithoutCreatedMessagesTypeInput;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MessageTypeListRelationFilter = {
  every?: InputMaybe<MessageTypeWhereInput>;
  none?: InputMaybe<MessageTypeWhereInput>;
  some?: InputMaybe<MessageTypeWhereInput>;
};

export type MessageTypeMaxAggregate = {
  __typename?: 'MessageTypeMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MessageTypeMinAggregate = {
  __typename?: 'MessageTypeMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdUserId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MessageTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageTypeOrderByWithRelationInput = {
  color?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdUser?: InputMaybe<UserOrderByWithRelationInput>;
  createdUserId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<MessageOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type MessageTypeRelationFilter = {
  is?: InputMaybe<MessageTypeWhereInput>;
  isNot?: InputMaybe<MessageTypeWhereInput>;
};

export enum MessageTypeScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  CreatedUserId = 'createdUserId',
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type MessageTypeUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMessagesTypeNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageTypeWhereInput = {
  AND?: InputMaybe<Array<MessageTypeWhereInput>>;
  NOT?: InputMaybe<Array<MessageTypeWhereInput>>;
  OR?: InputMaybe<Array<MessageTypeWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MessageTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<MessageTypeWhereInput>>;
  NOT?: InputMaybe<Array<MessageTypeWhereInput>>;
  OR?: InputMaybe<Array<MessageTypeWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  assignGroups?: InputMaybe<AssignUserGroupOnMessageListRelationFilter>;
  assignUsers?: InputMaybe<AssignUsersOnMessageListRelationFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messageType?: InputMaybe<MessageTypeRelationFilter>;
  messageTypeId?: InputMaybe<StringFilter>;
  prefix?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageStatusNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  assignGroups?: InputMaybe<AssignUserGroupOnMessageListRelationFilter>;
  assignUsers?: InputMaybe<AssignUsersOnMessageListRelationFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdUser?: InputMaybe<UserRelationFilter>;
  createdUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<MessageTypeRelationFilter>;
  messageTypeId?: InputMaybe<StringFilter>;
  prefix?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageStatusNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLog: Logs;
  createMessage: Message;
  createMessageType: MessageType;
  createUser: User;
  createUserContact: UserContact;
  createUserGroup: UserGroup;
  createUserProfile: UserProfile;
  login: Auth;
  signUp: Auth;
  updateMessageType: MessageType;
  updateUser: User;
  updateUserContact: UserContact;
  updateUserGroup: UserGroup;
  updateUserProfile: UserProfile;
};


export type MutationCreateLogArgs = {
  data: LogsCreateInput;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateMessageTypeArgs = {
  data: MessageTypeCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserContactArgs = {
  data: UserContactCreateInput;
};


export type MutationCreateUserGroupArgs = {
  data: UserGroupCreateInput;
};


export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput;
};


export type MutationLoginArgs = {
  loginDto: LoginDto;
};


export type MutationSignUpArgs = {
  data: UserCreateInput;
};


export type MutationUpdateMessageTypeArgs = {
  data: MessageTypeUpdateInput;
  where: MessageTypeWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserContactArgs = {
  data: UserContactUpdateInput;
  where: UserContactWhereUniqueInput;
};


export type MutationUpdateUserGroupArgs = {
  data: UserGroupUpdateInput;
  where: UserGroupWhereUniqueInput;
};


export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput;
  where: UserProfileWhereUniqueInput;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumMessageStatusNullableFilter = {
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusNullableFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type NestedEnumUserContactStatusFilter = {
  equals?: InputMaybe<UserContactStatus>;
  in?: InputMaybe<Array<UserContactStatus>>;
  not?: InputMaybe<NestedEnumUserContactStatusFilter>;
  notIn?: InputMaybe<Array<UserContactStatus>>;
};

export type NestedEnumUserContactTypeFilter = {
  equals?: InputMaybe<UserContactType>;
  in?: InputMaybe<Array<UserContactType>>;
  not?: InputMaybe<NestedEnumUserContactTypeFilter>;
  notIn?: InputMaybe<Array<UserContactType>>;
};

export type NestedEnumUserGroupStatusFilter = {
  equals?: InputMaybe<UserGroupStatus>;
  in?: InputMaybe<Array<UserGroupStatus>>;
  not?: InputMaybe<NestedEnumUserGroupStatusFilter>;
  notIn?: InputMaybe<Array<UserGroupStatus>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  assignUsersOnMessage: AssignUsersOnMessage;
  log: Logs;
  logs: Array<Logs>;
  me: User;
  message: Message;
  messageType: MessageType;
  messageTypes: Array<MessageType>;
  messages: Array<Message>;
  queue: Queue;
  queues: Array<Queue>;
  user: User;
  userContact: UserContact;
  userContacts: Array<UserContact>;
  userGroup: UserGroup;
  userGroups: Array<UserGroup>;
  userProfile: UserProfile;
  users: Array<User>;
};


export type QueryAssignUsersOnMessageArgs = {
  where: AssignUsersOnMessageWhereUniqueInput;
};


export type QueryLogArgs = {
  where: LogsWhereUniqueInput;
};


export type QueryLogsArgs = {
  cursor?: InputMaybe<LogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogsWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessageTypeArgs = {
  where: MessageTypeWhereUniqueInput;
};


export type QueryMessageTypesArgs = {
  cursor?: InputMaybe<MessageTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageTypeWhereInput>;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryQueueArgs = {
  where: QueueWhereUniqueInput;
};


export type QueryQueuesArgs = {
  cursor?: InputMaybe<QueueWhereUniqueInput>;
  distinct?: InputMaybe<Array<QueueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QueueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueueWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserContactArgs = {
  where: UserContactWhereUniqueInput;
};


export type QueryUserContactsArgs = {
  cursor?: InputMaybe<UserContactWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserContactScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserContactWhereInput>;
};


export type QueryUserGroupArgs = {
  where: UserGroupWhereUniqueInput;
};


export type QueryUserGroupsArgs = {
  cursor?: InputMaybe<UserGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserGroupWhereInput>;
};


export type QueryUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Queue = {
  __typename?: 'Queue';
  attempt?: Maybe<Scalars['Int']['output']>;
  enqueueAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  jobId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user: User;
  userContact: UserContact;
  userContactId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type QueueAvgAggregate = {
  __typename?: 'QueueAvgAggregate';
  attempt?: Maybe<Scalars['Float']['output']>;
  jobId?: Maybe<Scalars['Float']['output']>;
};

export type QueueCountAggregate = {
  __typename?: 'QueueCountAggregate';
  _all: Scalars['Int']['output'];
  attempt: Scalars['Int']['output'];
  enqueueAt: Scalars['Int']['output'];
  failedReason: Scalars['Int']['output'];
  finishedAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  jobId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  userContactId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type QueueListRelationFilter = {
  every?: InputMaybe<QueueWhereInput>;
  none?: InputMaybe<QueueWhereInput>;
  some?: InputMaybe<QueueWhereInput>;
};

export type QueueMaxAggregate = {
  __typename?: 'QueueMaxAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  enqueueAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userContactId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type QueueMinAggregate = {
  __typename?: 'QueueMinAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  enqueueAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userContactId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type QueueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QueueOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userContact?: InputMaybe<UserContactOrderByWithRelationInput>;
  userContactId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum QueueScalarFieldEnum {
  Attempt = 'attempt',
  EnqueueAt = 'enqueueAt',
  FailedReason = 'failedReason',
  FinishedAt = 'finishedAt',
  Id = 'id',
  JobId = 'jobId',
  Status = 'status',
  UserContactId = 'userContactId',
  UserId = 'userId'
}

export type QueueSumAggregate = {
  __typename?: 'QueueSumAggregate';
  attempt?: Maybe<Scalars['Int']['output']>;
  jobId?: Maybe<Scalars['Int']['output']>;
};

export type QueueWhereInput = {
  AND?: InputMaybe<Array<QueueWhereInput>>;
  NOT?: InputMaybe<Array<QueueWhereInput>>;
  OR?: InputMaybe<Array<QueueWhereInput>>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userContact?: InputMaybe<UserContactRelationFilter>;
  userContactId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type QueueWhereUniqueInput = {
  AND?: InputMaybe<Array<QueueWhereInput>>;
  NOT?: InputMaybe<Array<QueueWhereInput>>;
  OR?: InputMaybe<Array<QueueWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userContact?: InputMaybe<UserContactRelationFilter>;
  userContactId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  jobSendMessageStatus: Queue;
  messageCreated: Message;
  messageTypeCreated: MessageType;
  messageTypeUpdated: MessageType;
  userCreated: User;
  userGroupCreated: UserGroup;
  userGroupUpdated: UserGroup;
  userUpdated: User;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  assignMessages?: Maybe<Array<AssignUsersOnMessage>>;
  belongGroups?: Maybe<Array<UserGroup>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdMessages?: Maybe<Array<Message>>;
  createdMessagesType?: Maybe<Array<MessageType>>;
  createdUserGroup?: Maybe<Array<UserGroup>>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  logs?: Maybe<Array<Logs>>;
  profile?: Maybe<UserProfile>;
  queue?: Maybe<Array<Queue>>;
  userContacts?: Maybe<Array<UserContact>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserContact = {
  __typename?: 'UserContact';
  _count: UserContactCount;
  contactType: UserContactType;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  queue?: Maybe<Array<Queue>>;
  status: UserContactStatus;
  user: User;
  userId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type UserContactCount = {
  __typename?: 'UserContactCount';
  queue: Scalars['Int']['output'];
};

export type UserContactCountAggregate = {
  __typename?: 'UserContactCountAggregate';
  _all: Scalars['Int']['output'];
  contactType: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type UserContactCreateInput = {
  contactType: UserContactType;
  status?: InputMaybe<UserContactStatus>;
  user: UserCreateNestedOneWithoutUserContactsInput;
  value: Scalars['String']['input'];
};

export type UserContactCreateManyUserInput = {
  contactType: UserContactType;
  status?: InputMaybe<UserContactStatus>;
  value: Scalars['String']['input'];
};

export type UserContactCreateManyUserInputEnvelope = {
  data: Array<UserContactCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserContactCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserContactCreateManyUserInputEnvelope>;
};

export type UserContactCreateOrConnectWithoutUserInput = {
  create: UserContactCreateWithoutUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactCreateWithoutUserInput = {
  contactType: UserContactType;
  status?: InputMaybe<UserContactStatus>;
  value: Scalars['String']['input'];
};

export type UserContactListRelationFilter = {
  every?: InputMaybe<UserContactWhereInput>;
  none?: InputMaybe<UserContactWhereInput>;
  some?: InputMaybe<UserContactWhereInput>;
};

export type UserContactMaxAggregate = {
  __typename?: 'UserContactMaxAggregate';
  contactType?: Maybe<UserContactType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserContactStatus>;
  userId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserContactMinAggregate = {
  __typename?: 'UserContactMinAggregate';
  contactType?: Maybe<UserContactType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserContactStatus>;
  userId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserContactOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserContactOrderByWithRelationInput = {
  contactType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  queue?: InputMaybe<QueueOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type UserContactRelationFilter = {
  is?: InputMaybe<UserContactWhereInput>;
  isNot?: InputMaybe<UserContactWhereInput>;
};

export enum UserContactScalarFieldEnum {
  ContactType = 'contactType',
  CreatedAt = 'createdAt',
  Id = 'id',
  Status = 'status',
  UserId = 'userId',
  Value = 'value'
}

export type UserContactScalarWhereInput = {
  AND?: InputMaybe<Array<UserContactScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserContactScalarWhereInput>>;
  OR?: InputMaybe<Array<UserContactScalarWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export enum UserContactStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Pending = 'PENDING',
  Unactive = 'UNACTIVE'
}

export enum UserContactType {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type UserContactUpdateInput = {
  contactType?: InputMaybe<EnumUserContactTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserContactStatusFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserContactsNestedInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserContactUpdateManyMutationInput = {
  contactType?: InputMaybe<EnumUserContactTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserContactStatusFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserContactUpdateManyWithWhereWithoutUserInput = {
  data: UserContactUpdateManyMutationInput;
  where: UserContactScalarWhereInput;
};

export type UserContactUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserContactCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserContactScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  set?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  update?: InputMaybe<Array<UserContactUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserContactUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserContactUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserContactUpdateWithWhereUniqueWithoutUserInput = {
  data: UserContactUpdateWithoutUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactUpdateWithoutUserInput = {
  contactType?: InputMaybe<EnumUserContactTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserContactStatusFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserContactUpsertWithWhereUniqueWithoutUserInput = {
  create: UserContactCreateWithoutUserInput;
  update: UserContactUpdateWithoutUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactWhereInput = {
  AND?: InputMaybe<Array<UserContactWhereInput>>;
  NOT?: InputMaybe<Array<UserContactWhereInput>>;
  OR?: InputMaybe<Array<UserContactWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  queue?: InputMaybe<QueueListRelationFilter>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type UserContactWhereUniqueInput = {
  AND?: InputMaybe<Array<UserContactWhereInput>>;
  NOT?: InputMaybe<Array<UserContactWhereInput>>;
  OR?: InputMaybe<Array<UserContactWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  queue?: InputMaybe<QueueListRelationFilter>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assignMessages: Scalars['Int']['output'];
  belongGroups: Scalars['Int']['output'];
  createdMessages: Scalars['Int']['output'];
  createdMessagesType: Scalars['Int']['output'];
  createdUserGroup: Scalars['Int']['output'];
  logs: Scalars['Int']['output'];
  queue: Scalars['Int']['output'];
  userContacts: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedManyWithoutBelongGroupsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutBelongGroupsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutBelongGroupsInput>>;
};

export type UserCreateNestedOneWithoutAssignMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignMessagesInput>;
  create?: InputMaybe<UserCreateWithoutAssignMessagesInput>;
};

export type UserCreateNestedOneWithoutCreatedMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMessagesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMessagesInput>;
};

export type UserCreateNestedOneWithoutCreatedMessagesTypeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMessagesTypeInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMessagesTypeInput>;
};

export type UserCreateNestedOneWithoutCreatedUserGroupInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserGroupInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserGroupInput>;
};

export type UserCreateNestedOneWithoutLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<UserCreateWithoutLogsInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
};

export type UserCreateNestedOneWithoutUserContactsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserContactsInput>;
  create?: InputMaybe<UserCreateWithoutUserContactsInput>;
};

export type UserCreateOrConnectWithoutAssignMessagesInput = {
  create: UserCreateWithoutAssignMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBelongGroupsInput = {
  create: UserCreateWithoutBelongGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMessagesInput = {
  create: UserCreateWithoutCreatedMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMessagesTypeInput = {
  create: UserCreateWithoutCreatedMessagesTypeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedUserGroupInput = {
  create: UserCreateWithoutCreatedUserGroupInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLogsInput = {
  create: UserCreateWithoutLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserContactsInput = {
  create: UserCreateWithoutUserContactsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssignMessagesInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutBelongGroupsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedMessagesInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedMessagesTypeInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedUserGroupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutLogsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutProfileInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userContacts?: InputMaybe<UserContactCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutUserContactsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  _count: UserGroupCount;
  assignMessages?: Maybe<Array<AssignUserGroupOnMessage>>;
  assignUsers?: Maybe<Array<User>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy: User;
  createdById: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: UserGroupStatus;
  userGroupContact?: Maybe<Array<UserGroupContact>>;
  userGroupSettings?: Maybe<UserGroupSettings>;
};

export type UserGroupContact = {
  __typename?: 'UserGroupContact';
  contactType: UserContactType;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  status: UserContactStatus;
  uerGroupId: Scalars['String']['output'];
  userGroup: UserGroup;
  value: Scalars['String']['output'];
};

export type UserGroupContactCreateManyUserGroupInput = {
  contactType: UserContactType;
  status: UserContactStatus;
  value: Scalars['String']['input'];
};

export type UserGroupContactCreateManyUserGroupInputEnvelope = {
  data: Array<UserGroupContactCreateManyUserGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserGroupContactCreateNestedManyWithoutUserGroupInput = {
  connect?: InputMaybe<Array<UserGroupContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>>;
  create?: InputMaybe<Array<UserGroupContactCreateWithoutUserGroupInput>>;
  createMany?: InputMaybe<UserGroupContactCreateManyUserGroupInputEnvelope>;
};

export type UserGroupContactCreateOrConnectWithoutUserGroupInput = {
  create: UserGroupContactCreateWithoutUserGroupInput;
  where: UserGroupContactWhereUniqueInput;
};

export type UserGroupContactCreateWithoutUserGroupInput = {
  contactType: UserContactType;
  status: UserContactStatus;
  value: Scalars['String']['input'];
};

export type UserGroupContactListRelationFilter = {
  every?: InputMaybe<UserGroupContactWhereInput>;
  none?: InputMaybe<UserGroupContactWhereInput>;
  some?: InputMaybe<UserGroupContactWhereInput>;
};

export type UserGroupContactOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserGroupContactScalarWhereInput = {
  AND?: InputMaybe<Array<UserGroupContactScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupContactScalarWhereInput>>;
  OR?: InputMaybe<Array<UserGroupContactScalarWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  uerGroupId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type UserGroupContactUpdateManyMutationInput = {
  contactType?: InputMaybe<EnumUserContactTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserContactStatusFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserGroupContactUpdateManyWithWhereWithoutUserGroupInput = {
  data: UserGroupContactUpdateManyMutationInput;
  where: UserGroupContactScalarWhereInput;
};

export type UserGroupContactUpdateManyWithoutUserGroupNestedInput = {
  connect?: InputMaybe<Array<UserGroupContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserGroupContactCreateOrConnectWithoutUserGroupInput>>;
  create?: InputMaybe<Array<UserGroupContactCreateWithoutUserGroupInput>>;
  createMany?: InputMaybe<UserGroupContactCreateManyUserGroupInputEnvelope>;
  delete?: InputMaybe<Array<UserGroupContactWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserGroupContactScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserGroupContactWhereUniqueInput>>;
  set?: InputMaybe<Array<UserGroupContactWhereUniqueInput>>;
  update?: InputMaybe<Array<UserGroupContactUpdateWithWhereUniqueWithoutUserGroupInput>>;
  updateMany?: InputMaybe<Array<UserGroupContactUpdateManyWithWhereWithoutUserGroupInput>>;
  upsert?: InputMaybe<Array<UserGroupContactUpsertWithWhereUniqueWithoutUserGroupInput>>;
};

export type UserGroupContactUpdateWithWhereUniqueWithoutUserGroupInput = {
  data: UserGroupContactUpdateWithoutUserGroupInput;
  where: UserGroupContactWhereUniqueInput;
};

export type UserGroupContactUpdateWithoutUserGroupInput = {
  contactType?: InputMaybe<EnumUserContactTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserContactStatusFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserGroupContactUpsertWithWhereUniqueWithoutUserGroupInput = {
  create: UserGroupContactCreateWithoutUserGroupInput;
  update: UserGroupContactUpdateWithoutUserGroupInput;
  where: UserGroupContactWhereUniqueInput;
};

export type UserGroupContactWhereInput = {
  AND?: InputMaybe<Array<UserGroupContactWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupContactWhereInput>>;
  OR?: InputMaybe<Array<UserGroupContactWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  uerGroupId?: InputMaybe<StringFilter>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  value?: InputMaybe<StringFilter>;
};

export type UserGroupContactWhereUniqueInput = {
  AND?: InputMaybe<Array<UserGroupContactWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupContactWhereInput>>;
  OR?: InputMaybe<Array<UserGroupContactWhereInput>>;
  contactType?: InputMaybe<EnumUserContactTypeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumUserContactStatusFilter>;
  uerGroupId?: InputMaybe<StringFilter>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupCount = {
  __typename?: 'UserGroupCount';
  assignMessages: Scalars['Int']['output'];
  assignUsers: Scalars['Int']['output'];
  userGroupContact: Scalars['Int']['output'];
};

export type UserGroupCountAggregate = {
  __typename?: 'UserGroupCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
};

export type UserGroupCreateInput = {
  assignUsers?: InputMaybe<UserCreateNestedManyWithoutBelongGroupsInput>;
  createdBy: UserCreateNestedOneWithoutCreatedUserGroupInput;
  name: Scalars['String']['input'];
  status?: InputMaybe<UserGroupStatus>;
  userGroupContact?: InputMaybe<UserGroupContactCreateNestedManyWithoutUserGroupInput>;
  userGroupSettings?: InputMaybe<UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
};

export type UserGroupCreateNestedOneWithoutAssignMessagesInput = {
  connect?: InputMaybe<UserGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserGroupCreateOrConnectWithoutAssignMessagesInput>;
  create?: InputMaybe<UserGroupCreateWithoutAssignMessagesInput>;
};

export type UserGroupCreateOrConnectWithoutAssignMessagesInput = {
  create: UserGroupCreateWithoutAssignMessagesInput;
  where: UserGroupWhereUniqueInput;
};

export type UserGroupCreateWithoutAssignMessagesInput = {
  assignUsers?: InputMaybe<UserCreateNestedManyWithoutBelongGroupsInput>;
  createdBy: UserCreateNestedOneWithoutCreatedUserGroupInput;
  name: Scalars['String']['input'];
  status?: InputMaybe<UserGroupStatus>;
  userGroupContact?: InputMaybe<UserGroupContactCreateNestedManyWithoutUserGroupInput>;
  userGroupSettings?: InputMaybe<UserGroupSettingsCreateNestedOneWithoutUserGroupInput>;
};

export type UserGroupListRelationFilter = {
  every?: InputMaybe<UserGroupWhereInput>;
  none?: InputMaybe<UserGroupWhereInput>;
  some?: InputMaybe<UserGroupWhereInput>;
};

export type UserGroupMaxAggregate = {
  __typename?: 'UserGroupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserGroupStatus>;
};

export type UserGroupMinAggregate = {
  __typename?: 'UserGroupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserGroupStatus>;
};

export type UserGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserGroupOrderByWithRelationInput = {
  assignMessages?: InputMaybe<AssignUserGroupOnMessageOrderByRelationAggregateInput>;
  assignUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  userGroupContact?: InputMaybe<UserGroupContactOrderByRelationAggregateInput>;
  userGroupSettings?: InputMaybe<UserGroupSettingsOrderByWithRelationInput>;
};

export type UserGroupRelationFilter = {
  is?: InputMaybe<UserGroupWhereInput>;
  isNot?: InputMaybe<UserGroupWhereInput>;
};

export enum UserGroupScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  Id = 'id',
  Name = 'name',
  Status = 'status'
}

export type UserGroupSettings = {
  __typename?: 'UserGroupSettings';
  avatar?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  userGroup: UserGroup;
  userGroupId: Scalars['String']['output'];
};

export type UserGroupSettingsCreateNestedOneWithoutUserGroupInput = {
  connect?: InputMaybe<UserGroupSettingsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
  create?: InputMaybe<UserGroupSettingsCreateWithoutUserGroupInput>;
};

export type UserGroupSettingsCreateOrConnectWithoutUserGroupInput = {
  create: UserGroupSettingsCreateWithoutUserGroupInput;
  where: UserGroupSettingsWhereUniqueInput;
};

export type UserGroupSettingsCreateWithoutUserGroupInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupSettingsNullableRelationFilter = {
  is?: InputMaybe<UserGroupSettingsWhereInput>;
  isNot?: InputMaybe<UserGroupSettingsWhereInput>;
};

export type UserGroupSettingsOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrderInput>;
  color?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  userGroup?: InputMaybe<UserGroupOrderByWithRelationInput>;
  userGroupId?: InputMaybe<SortOrder>;
};

export type UserGroupSettingsUpdateOneWithoutUserGroupNestedInput = {
  connect?: InputMaybe<UserGroupSettingsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserGroupSettingsCreateOrConnectWithoutUserGroupInput>;
  create?: InputMaybe<UserGroupSettingsCreateWithoutUserGroupInput>;
  delete?: InputMaybe<UserGroupSettingsWhereInput>;
  disconnect?: InputMaybe<UserGroupSettingsWhereInput>;
  update?: InputMaybe<UserGroupSettingsUpdateToOneWithWhereWithoutUserGroupInput>;
  upsert?: InputMaybe<UserGroupSettingsUpsertWithoutUserGroupInput>;
};

export type UserGroupSettingsUpdateToOneWithWhereWithoutUserGroupInput = {
  data: UserGroupSettingsUpdateWithoutUserGroupInput;
  where?: InputMaybe<UserGroupSettingsWhereInput>;
};

export type UserGroupSettingsUpdateWithoutUserGroupInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserGroupSettingsUpsertWithoutUserGroupInput = {
  create: UserGroupSettingsCreateWithoutUserGroupInput;
  update: UserGroupSettingsUpdateWithoutUserGroupInput;
  where?: InputMaybe<UserGroupSettingsWhereInput>;
};

export type UserGroupSettingsWhereInput = {
  AND?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  OR?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  userGroupId?: InputMaybe<StringFilter>;
};

export type UserGroupSettingsWhereUniqueInput = {
  AND?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  OR?: InputMaybe<Array<UserGroupSettingsWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  userGroup?: InputMaybe<UserGroupRelationFilter>;
  userGroupId?: InputMaybe<Scalars['String']['input']>;
};

export enum UserGroupStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Pending = 'PENDING',
  Unactive = 'UNACTIVE'
}

export type UserGroupUpdateInput = {
  assignUsers?: InputMaybe<UserUpdateManyWithoutBelongGroupsNestedInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserGroupStatusFieldUpdateOperationsInput>;
  userGroupContact?: InputMaybe<UserGroupContactUpdateManyWithoutUserGroupNestedInput>;
  userGroupSettings?: InputMaybe<UserGroupSettingsUpdateOneWithoutUserGroupNestedInput>;
};

export type UserGroupWhereInput = {
  AND?: InputMaybe<Array<UserGroupWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupWhereInput>>;
  OR?: InputMaybe<Array<UserGroupWhereInput>>;
  assignMessages?: InputMaybe<AssignUserGroupOnMessageListRelationFilter>;
  assignUsers?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserGroupStatusFilter>;
  userGroupContact?: InputMaybe<UserGroupContactListRelationFilter>;
  userGroupSettings?: InputMaybe<UserGroupSettingsNullableRelationFilter>;
};

export type UserGroupWhereUniqueInput = {
  AND?: InputMaybe<Array<UserGroupWhereInput>>;
  NOT?: InputMaybe<Array<UserGroupWhereInput>>;
  OR?: InputMaybe<Array<UserGroupWhereInput>>;
  assignMessages?: InputMaybe<AssignUserGroupOnMessageListRelationFilter>;
  assignUsers?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumUserGroupStatusFilter>;
  userGroupContact?: InputMaybe<UserGroupContactListRelationFilter>;
  userGroupSettings?: InputMaybe<UserGroupSettingsNullableRelationFilter>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  assignMessages?: InputMaybe<AssignUsersOnMessageOrderByRelationAggregateInput>;
  belongGroups?: InputMaybe<UserGroupOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  createdMessages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  createdMessagesType?: InputMaybe<MessageTypeOrderByRelationAggregateInput>;
  createdUserGroup?: InputMaybe<UserGroupOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  logs?: InputMaybe<LogsOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  profile?: InputMaybe<UserProfileOrderByWithRelationInput>;
  queue?: InputMaybe<QueueOrderByRelationAggregateInput>;
  userContacts?: InputMaybe<UserContactOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserProfileCountAggregate = {
  __typename?: 'UserProfileCountAggregate';
  _all: Scalars['Int']['output'];
  acronym: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserProfileCreateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutProfileInput;
};

export type UserProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserProfileCreateWithoutUserInput>;
};

export type UserProfileCreateOrConnectWithoutUserInput = {
  create: UserProfileCreateWithoutUserInput;
  where: UserProfileWhereUniqueInput;
};

export type UserProfileCreateWithoutUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfileMaxAggregate = {
  __typename?: 'UserProfileMaxAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserProfileMinAggregate = {
  __typename?: 'UserProfileMinAggregate';
  acronym?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserProfileNullableRelationFilter = {
  is?: InputMaybe<UserProfileWhereInput>;
  isNot?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserProfileUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProfileNestedInput>;
};

export type UserProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserProfileCreateWithoutUserInput>;
  delete?: InputMaybe<UserProfileWhereInput>;
  disconnect?: InputMaybe<UserProfileWhereInput>;
  update?: InputMaybe<UserProfileUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserProfileUpsertWithoutUserInput>;
};

export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
  data: UserProfileUpdateWithoutUserInput;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileUpdateWithoutUserInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserProfileUpsertWithoutUserInput = {
  create: UserProfileCreateWithoutUserInput;
  update: UserProfileUpdateWithoutUserInput;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileWhereInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserProfileWhereUniqueInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  userContacts?: InputMaybe<UserContactUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutBelongGroupsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutBelongGroupsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutBelongGroupsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutBelongGroupsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutBelongGroupsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutBelongGroupsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutBelongGroupsInput>>;
};

export type UserUpdateOneRequiredWithoutCreatedMessagesTypeNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMessagesTypeInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMessagesTypeInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedMessagesTypeInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedMessagesTypeInput>;
};

export type UserUpdateOneRequiredWithoutCreatedUserGroupNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserGroupInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserGroupInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedUserGroupInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedUserGroupInput>;
};

export type UserUpdateOneRequiredWithoutProfileNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProfileInput>;
  upsert?: InputMaybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneRequiredWithoutUserContactsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserContactsInput>;
  create?: InputMaybe<UserCreateWithoutUserContactsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserContactsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserContactsInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedMessagesTypeInput = {
  data: UserUpdateWithoutCreatedMessagesTypeInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedUserGroupInput = {
  data: UserUpdateWithoutCreatedUserGroupInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutProfileInput = {
  data: UserUpdateWithoutProfileInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserContactsInput = {
  data: UserUpdateWithoutUserContactsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutBelongGroupsInput = {
  data: UserUpdateWithoutBelongGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutBelongGroupsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  userContacts?: InputMaybe<UserContactUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedMessagesTypeInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  userContacts?: InputMaybe<UserContactUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedUserGroupInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  userContacts?: InputMaybe<UserContactUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  userContacts?: InputMaybe<UserContactUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserContactsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutBelongGroupsInput = {
  create: UserCreateWithoutBelongGroupsInput;
  update: UserUpdateWithoutBelongGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCreatedMessagesTypeInput = {
  create: UserCreateWithoutCreatedMessagesTypeInput;
  update: UserUpdateWithoutCreatedMessagesTypeInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedUserGroupInput = {
  create: UserCreateWithoutCreatedUserGroupInput;
  update: UserUpdateWithoutCreatedUserGroupInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  update: UserUpdateWithoutProfileInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUserContactsInput = {
  create: UserCreateWithoutUserContactsInput;
  update: UserUpdateWithoutUserContactsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignMessages?: InputMaybe<AssignUsersOnMessageListRelationFilter>;
  belongGroups?: InputMaybe<UserGroupListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdMessages?: InputMaybe<MessageListRelationFilter>;
  createdMessagesType?: InputMaybe<MessageTypeListRelationFilter>;
  createdUserGroup?: InputMaybe<UserGroupListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  logs?: InputMaybe<LogsListRelationFilter>;
  profile?: InputMaybe<UserProfileNullableRelationFilter>;
  queue?: InputMaybe<QueueListRelationFilter>;
  userContacts?: InputMaybe<UserContactListRelationFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignMessages?: InputMaybe<AssignUsersOnMessageListRelationFilter>;
  belongGroups?: InputMaybe<UserGroupListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdMessages?: InputMaybe<MessageListRelationFilter>;
  createdMessagesType?: InputMaybe<MessageTypeListRelationFilter>;
  createdUserGroup?: InputMaybe<UserGroupListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringFilter>;
  logs?: InputMaybe<LogsListRelationFilter>;
  profile?: InputMaybe<UserProfileNullableRelationFilter>;
  queue?: InputMaybe<QueueListRelationFilter>;
  userContacts?: InputMaybe<UserContactListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type LoginMutationVariables = Exact<{
  loginDto: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string } };

export type CreatedUserOnMessageFragment = { __typename: 'User', firstName: string, lastName: string, email: string, profile?: { __typename: 'UserProfile', acronym?: string | null, avatar?: string | null } | null };

export type CreatedUserOnMessageProfileFragment = { __typename: 'UserProfile', acronym?: string | null, avatar?: string | null };

export type MessageTypeOnMessageFragment = { __typename: 'MessageType', name: string, color?: string | null };

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename: 'Message', id: string, prefix?: string | null, status?: MessageStatus | null, title: string, messageTypeId: string, createdUserId: string, createdAt?: any | null, messageType: { __typename: 'MessageType', name: string, color?: string | null }, createdUser: { __typename: 'User', firstName: string, lastName: string, email: string, profile?: { __typename: 'UserProfile', acronym?: string | null, avatar?: string | null } | null } }> };

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename: 'User', id: string, email: string }> };

export type UserProfileOnMeFragment = { __typename: 'UserProfile', acronym?: string | null, avatar?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename: 'User', id: string, firstName: string, lastName: string, email: string, profile?: { __typename: 'UserProfile', acronym?: string | null, avatar?: string | null } | null } };

export const CreatedUserOnMessageProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreatedUserOnMessageProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<CreatedUserOnMessageProfileFragment, unknown>;
export const CreatedUserOnMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreatedUserOnMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreatedUserOnMessageProfile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreatedUserOnMessageProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<CreatedUserOnMessageFragment, unknown>;
export const MessageTypeOnMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MessageTypeOnMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MessageType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<MessageTypeOnMessageFragment, unknown>;
export const UserProfileOnMeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserProfileOnMe"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<UserProfileOnMeFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Messages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MessageTypeOnMessage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messageTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"createdUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreatedUserOnMessage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdUserId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreatedUserOnMessageProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MessageTypeOnMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MessageType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreatedUserOnMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreatedUserOnMessageProfile"}}]}}]}}]} as unknown as DocumentNode<MessagesQuery, MessagesQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserProfileOnMe"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserProfileOnMe"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;