import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/theme.ts';

export const appShellHeader = style({
    backdropFilter: 'blur(6px)',
    // selectors: {
    //     [vars.lightSelector]: {
    //         background: rgba('#ffffff', 0.45),
    //     },
    //     [vars.darkSelector]: {
    //         background: rgba('#1a1b1e', 0.45),
    //     },
    // },
});

export const appShellMain = style({
    paddingTop: rem(60),
    paddingLeft: rem(300),
    paddingRight: 0,
    paddingBottom: 0,
    selectors: {
        [vars.lightSelector]: {
            backgroundColor: vars.colors.gray[0],
        },
        [vars.darkSelector]: {
            backgroundColor: vars.colors.dark[5],
        },
    },
});