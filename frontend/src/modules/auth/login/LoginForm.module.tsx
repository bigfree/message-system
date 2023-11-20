import { FC, ReactElement } from 'react';
import { useLoginFormContext } from '@/form-context/LoginForm.context.ts';
import { PasswordInput, TextInput } from '@mantine/core';

const LoginFormModule: FC = (): ReactElement => {
    const form = useLoginFormContext();

    return (
        <div>
            <TextInput
                label={'Email address:'}
                placeholder={'hello@example.com'}
                size={'md'}
                {...form.getInputProps('email')}
            />

            <PasswordInput
                label={'Password:'}
                placeholder={'Your password'}
                mt={'md'}
                size={'md'}
                {...form.getInputProps('password')}
            />
        </div>
    );
};

export default LoginFormModule;