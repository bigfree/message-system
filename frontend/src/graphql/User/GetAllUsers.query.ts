import { gql } from '@/generated';

export const GetAllUsersQuery = gql(/*GraphQL*/ `
    query Users($where: UserWhereInput) {
        users(where: $where) {
            __typename
            id
            email
        }
    }
`);