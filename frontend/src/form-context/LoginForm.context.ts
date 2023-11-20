import { LoginDto } from '@/generated/graphql.ts';
import { createFormContext } from '@mantine/form';

export type LoginFormValues = LoginDto;

export const [
    LoginFormProvider,
    useLoginFormContext,
    useLoginForm,
] = createFormContext<LoginFormValues>();