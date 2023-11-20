import { FC, ReactElement } from 'react';
import '@mantine/core/styles.css';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import AppShellHeader from '@modules/app-shell/header/AppShellHeader.modules.tsx';
import { appShellHeader, appShellMain } from '@routes/root/Root.css.tsx';
import AppShellNavbar from '@modules/app-shell/navbar/AppShellNavbar.component.tsx';

const RootRoute: FC = (): ReactElement => (
    <AppShell
        layout={'alt'}
        header={{height: 60}}
        navbar={{width: 300, breakpoint: 'sm'}}
        padding={'md'}
    >
        <AppShell.Header className={appShellHeader}>
            <AppShellHeader/>
        </AppShell.Header>
        <AppShell.Navbar p={'md'}>
            <AppShellNavbar/>
        </AppShell.Navbar>
        <AppShell.Main className={appShellMain}>
            <Outlet/>
        </AppShell.Main>
    </AppShell>
);

export default RootRoute;
