import { gql } from '@/generated';

export const CreatedUserOnMessage = gql(/*GraphQL*/ `
    fragment CreatedUserOnMessage on User {
        __typename
        firstName
        lastName
        email
        profile {
            ...CreatedUserOnMessageProfile
        }
    }
`);

export const CreatedUserOnMessageProfile = gql(/*GraphQL*/ `
    fragment CreatedUserOnMessageProfile on UserProfile {
        __typename
        acronym
        avatar
    }
`);

export const MessageTypeOnMessage = gql(/*GraphQL*/ `
    fragment MessageTypeOnMessage on MessageType {
        __typename
        name
        color
    }
`);

export const GetAllMessagesQuery = gql(/*GraphQL*/ `
    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {
        messages(where: $where, orderBy: $orderBy) {
            __typename
            id
            prefix
            status
            title
            messageType {
                ...MessageTypeOnMessage
            }
            messageTypeId
            createdUser {
                ...CreatedUserOnMessage
            }
            createdUserId
            createdAt
        }
    }
`);