import { cloneElement, FC, ReactElement } from 'react';
import { LinkData } from '@components/navbar-menu/NavbarMenu.component.tsx';
import { Link } from 'react-router-dom';
import { Box } from '@mantine/core';
import { navbarLinkIcon, navbarLinkRoot } from '@components/navbar-menu/NavbarLink.css.ts';

type NavbarLinkProps = LinkData;

const NavbarLink: FC<NavbarLinkProps> = ({link, icon, label}): ReactElement => {
    return (
        <Box component={Link} to={link} className={navbarLinkRoot}>
            {cloneElement(icon, {
                stroke: '1.6',
                className: navbarLinkIcon
            })}
            {label}
        </Box>
    );
};

export default NavbarLink;