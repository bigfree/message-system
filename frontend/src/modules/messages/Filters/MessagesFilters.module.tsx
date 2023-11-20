import { FC, ReactElement } from 'react';
import { messagesFiltersRoot } from '@modules/messages/Filters/MessagesFilters.css.ts';
import { useMessagesFilterFormContext } from '@/form-context/MessagesFilterForm.context.ts';
import { Input } from '@mantine/core';
import { QueryMode } from '@/generated/graphql.ts';

const MessagesFilters: FC = (): ReactElement => {
    const form = useMessagesFilterFormContext();

    return (
        <div className={messagesFiltersRoot}>
            <Input
                onChange={(event) => form.setFieldValue('title', {
                    contains: event.target.value,
                    mode: QueryMode.Insensitive
                })}
            />
        </div>
    );
};

export default MessagesFilters;