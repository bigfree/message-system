import { FC, Fragment, ReactElement } from 'react';
import { AppShell } from '@mantine/core';
import NavbarMenu from '@components/navbar-menu/NavbarMenu.component.tsx';

const AppShellNavbar: FC = (): ReactElement => {
    return (
        <Fragment>
            <AppShell.Section>
                Navbar header
            </AppShell.Section>
            <AppShell.Section grow={true}>
                <NavbarMenu/>
            </AppShell.Section>
            <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
        </Fragment>
    );
};

export default AppShellNavbar;