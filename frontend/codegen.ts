import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    hooks: {
        afterOneFileWrite: ['eslint --fix']
    },
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/generated/': {
            preset: 'client',
            plugins: [],
            config: {
                useTypeImports: true,
            },
            presetConfig: {
                gqlTagName: 'gql',
                fragmentMasking: false,
            }
        },
    },
    ignoreNoDocuments: true,
};

export default config;