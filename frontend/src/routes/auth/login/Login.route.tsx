import { FC, ReactElement, useCallback } from 'react';
import LoginFormModule from '@modules/auth/login/LoginForm.module.tsx';
import { LoginFormProvider, LoginFormValues, useLoginForm } from '@/form-context/LoginForm.context.ts';
import { Anchor, Button, Flex, Grid, Text, Title } from '@mantine/core';
import { container, gridContainer } from '@routes/auth/login/Login.route.css.ts';
import { useMutation } from '@apollo/client';
import { LoginMutation } from '@/graphql/Auth/Login.mutation.ts';
import useAuthStore from '@stores/Auth.store.ts';
import { Navigate } from 'react-router-dom';
import { isEmail, isNotEmpty } from '@mantine/form';

const LoginRoute: FC = (): ReactElement => {
    const setToken = useAuthStore(store => store.setToken);
    const [login, {data, error}] = useMutation(LoginMutation);

    const form = useLoginForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: {
            email: isEmail('Invalid email'),
            password: isNotEmpty('Password is required'),
        },
    });

    const formOnSubmit = useCallback(async (values: LoginFormValues) => {
        await login({
            variables: {
                loginDto: values,
            },
        });
    }, [login]);

    if (data?.login.token) {
        setToken(data.login.token);
        return (
            <Navigate
                to={'/'}
                replace={true}
            />
        );
    }

    return (
        <Grid gutter={0} mih={'100vh'}>
            <Grid.Col span={6} mih={'100vh'} className={gridContainer}>
                <Flex
                    gap={'md'}
                    justify={'center'}
                    align={'flex-end'}
                    direction={'column'}
                    wrap={'nowrap'}
                    mih={'100vh'}
                    p={30}
                >
                    <div className={container}>
                        <Title order={3} ta="left" mb={25}>
                            Welcome back to Message System!
                        </Title>

                        <LoginFormProvider form={form}>
                            <form onSubmit={form.onSubmit(formOnSubmit)}>
                                <LoginFormModule/>

                                {error && (
                                    <Text c={'red.5'} fw={7000} mt={'md'}>
                                        Email or password is incorrect.
                                    </Text>
                                )}

                                <Button type={'submit'} fullWidth mt="xl" size="md">
                                    Login
                                </Button>
                                <Text ta="center" mt="md">
                                    Don&apos;t have an account?{' '}
                                    <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
                                        Register
                                    </Anchor>
                                </Text>
                            </form>
                        </LoginFormProvider>
                    </div>
                </Flex>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
        </Grid>
    );
};

export default LoginRoute;