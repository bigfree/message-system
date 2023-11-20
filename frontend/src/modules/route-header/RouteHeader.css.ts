import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem } from '@mantine/core';

export const routeHeaderRoot = style({
    height: rem(60),
    borderBottom: '1px solid var(--_app-shell-border-color)',
    position: 'sticky',
    top: rem(60),
    zIndex: 100,
    selectors: {
        [vars.lightSelector]: {
            backgroundColor: 'white',
        },
        [vars.darkSelector]: {
            backgroundColor: vars.colors.dark[6],
        },
    },
});

export const routeHeaderGroup = style({
    height: '100%',
});