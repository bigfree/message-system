import { FC, ReactElement } from 'react';
import { IconDashboard, IconMessage, IconUsers, IconUsersGroup } from '@tabler/icons-react';
import NavbarLink from '@components/navbar-menu/NavbarLink.component.tsx';

export type LinkData = {
    link: string,
    label: string,
    icon: ReactElement
}

const linkData: LinkData[] = [{
    link: '',
    label: 'Dashboard',
    icon: <IconDashboard/>
}, {
    link: 'messages',
    label: 'Messages',
    icon: <IconMessage/>,
}, {
    link: 'users',
    label: 'Users',
    icon: <IconUsers/>,
}, {
    link: 'users-groups',
    label: 'Users groups',
    icon: <IconUsersGroup/>,
}];

const NavbarMenu: FC = (): ReactElement => {
    return (
        <div>
            {linkData.map((link: LinkData, index: number) => (
                <NavbarLink key={index} {...link}/>
            ))}
        </div>
    );
};

export default NavbarMenu;