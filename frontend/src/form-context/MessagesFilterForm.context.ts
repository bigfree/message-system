import { Maybe, MessageWhereInput } from '@/generated/graphql.ts';
import { createFormContext } from '@mantine/form';

export type MessagesFilterFormValues = Maybe<MessageWhereInput>;

export const [
    MessagesFilterFormProvider,
    useMessagesFilterFormContext,
    useMessagesFilterForm,
] = createFormContext<MessagesFilterFormValues>();