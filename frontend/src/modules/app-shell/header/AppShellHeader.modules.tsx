import { FC, ReactElement } from 'react';
import { Grid, Group } from '@mantine/core';
import MeComponent from '@components/me/Me.component.tsx';
import Notification from '@components/notification/Notification.component.tsx';
import { notificationColumn, userColumn } from '@modules/app-shell/header/AppShellHeader.css.ts';
import ThemeSwitch from '@components/theme-switch/ThemeSwitch.component.tsx';

const AppShellHeader: FC = (): ReactElement => {
    return (
        <Grid gutter={0} align={'stretch'} justify={'flex-start'}>
            <Grid.Col span={'auto'}></Grid.Col>
            <Grid.Col span={'content'} h={60} className={notificationColumn}>
                <Group h={60} align={'center'} gap={'sm'}>
                    <Notification/>
                    <ThemeSwitch/>
                </Group>
            </Grid.Col>
            <Grid.Col span={'content'} h={60} className={userColumn}>
                <MeComponent/>
            </Grid.Col>
        </Grid>
    );
};

export default AppShellHeader;