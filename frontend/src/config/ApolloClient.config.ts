import {
    ApolloClient,
    ApolloLink,
    concat,
    from,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
    split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { CachePersistor, LocalForageWrapper } from 'apollo3-cache-persist';
import * as localForage from 'localforage';
import { removeToken } from '@stores/Auth.store.ts';
import { onError } from '@apollo/client/link/error';
import { redirect } from 'react-router-dom';

const cache: InMemoryCache = new InMemoryCache({});

const store: LocalForage = localForage.createInstance({
    driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: 'message-system',
    storeName: 'query',
});

export const persistor = new CachePersistor({
    cache,
    storage: new LocalForageWrapper(store),
    maxSize: false,
    debug: true,
    trigger: 'write',
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/graphql',
    // connectionParams: {
    //     authToken: token,
    // },
}));

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = JSON.parse(localStorage.getItem('auth-store') ?? '').state.token;
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });

    return forward(operation);
});

const errorLink = onError((error) => {
    if (error.graphQLErrors) {
        error.graphQLErrors.forEach((graphQlError) => {
            if ('Unauthorized' === graphQlError.message) {
                removeToken();
                persistor.remove();
                return redirect('/login');
            }
        });
    }
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition'
            && definition.operation === 'subscription'
        );
    },
    wsLink,
    from([errorLink, concat(authMiddleware, httpLink)]),
);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: true,
    defaultOptions: {
        watchQuery: {
            notifyOnNetworkStatusChange: true,
        },
        query: {
            fetchPolicy: 'cache-first',
            errorPolicy: 'all',
            notifyOnNetworkStatusChange: true,
        },
    },
});