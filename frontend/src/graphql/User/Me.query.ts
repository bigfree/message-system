import { gql } from '@/generated';

export const UserProfileOnMe = gql(/*GraphQL*/ `
    fragment UserProfileOnMe on UserProfile {
        __typename
        acronym
        avatar
    }
`);

export const MeQuery = gql(/*GraphQL*/ `
    query Me {
        me {
            __typename
            id
            firstName
            lastName
            email
            profile {
                ...UserProfileOnMe
            }
        }
    }
`);