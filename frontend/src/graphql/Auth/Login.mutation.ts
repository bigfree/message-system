import { gql } from '@/generated';

export const LoginMutation = gql(/* GraphQL */`
    mutation Login($loginDto: LoginDto!) {
        login(loginDto: $loginDto) {
            token
        }
    }
`);