/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation Login($loginDto: LoginDto!) {\n        login(loginDto: $loginDto) {\n            token\n        }\n    }\n": types.LoginDocument,
    "\n    fragment CreatedUserOnMessage on User {\n        __typename\n        firstName\n        lastName\n        email\n        profile {\n            ...CreatedUserOnMessageProfile\n        }\n    }\n": types.CreatedUserOnMessageFragmentDoc,
    "\n    fragment CreatedUserOnMessageProfile on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n": types.CreatedUserOnMessageProfileFragmentDoc,
    "\n    fragment MessageTypeOnMessage on MessageType {\n        __typename\n        name\n        color\n    }\n": types.MessageTypeOnMessageFragmentDoc,
    "\n    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {\n        messages(where: $where, orderBy: $orderBy) {\n            __typename\n            id\n            prefix\n            status\n            title\n            messageType {\n                ...MessageTypeOnMessage\n            }\n            messageTypeId\n            createdUser {\n                ...CreatedUserOnMessage\n            }\n            createdUserId\n            createdAt\n        }\n    }\n": types.MessagesDocument,
    "\n    query Users($where: UserWhereInput) {\n        users(where: $where) {\n            __typename\n            id\n            email\n        }\n    }\n": types.UsersDocument,
    "\n    fragment UserProfileOnMe on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n": types.UserProfileOnMeFragmentDoc,
    "\n    query Me {\n        me {\n            __typename\n            id\n            firstName\n            lastName\n            email\n            profile {\n                ...UserProfileOnMe\n            }\n        }\n    }\n": types.MeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($loginDto: LoginDto!) {\n        login(loginDto: $loginDto) {\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation Login($loginDto: LoginDto!) {\n        login(loginDto: $loginDto) {\n            token\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CreatedUserOnMessage on User {\n        __typename\n        firstName\n        lastName\n        email\n        profile {\n            ...CreatedUserOnMessageProfile\n        }\n    }\n"): (typeof documents)["\n    fragment CreatedUserOnMessage on User {\n        __typename\n        firstName\n        lastName\n        email\n        profile {\n            ...CreatedUserOnMessageProfile\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CreatedUserOnMessageProfile on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n"): (typeof documents)["\n    fragment CreatedUserOnMessageProfile on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MessageTypeOnMessage on MessageType {\n        __typename\n        name\n        color\n    }\n"): (typeof documents)["\n    fragment MessageTypeOnMessage on MessageType {\n        __typename\n        name\n        color\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {\n        messages(where: $where, orderBy: $orderBy) {\n            __typename\n            id\n            prefix\n            status\n            title\n            messageType {\n                ...MessageTypeOnMessage\n            }\n            messageTypeId\n            createdUser {\n                ...CreatedUserOnMessage\n            }\n            createdUserId\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {\n        messages(where: $where, orderBy: $orderBy) {\n            __typename\n            id\n            prefix\n            status\n            title\n            messageType {\n                ...MessageTypeOnMessage\n            }\n            messageTypeId\n            createdUser {\n                ...CreatedUserOnMessage\n            }\n            createdUserId\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Users($where: UserWhereInput) {\n        users(where: $where) {\n            __typename\n            id\n            email\n        }\n    }\n"): (typeof documents)["\n    query Users($where: UserWhereInput) {\n        users(where: $where) {\n            __typename\n            id\n            email\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment UserProfileOnMe on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n"): (typeof documents)["\n    fragment UserProfileOnMe on UserProfile {\n        __typename\n        acronym\n        avatar\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Me {\n        me {\n            __typename\n            id\n            firstName\n            lastName\n            email\n            profile {\n                ...UserProfileOnMe\n            }\n        }\n    }\n"): (typeof documents)["\n    query Me {\n        me {\n            __typename\n            id\n            firstName\n            lastName\n            email\n            profile {\n                ...UserProfileOnMe\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;