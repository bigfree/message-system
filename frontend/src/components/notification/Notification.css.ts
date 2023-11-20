import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem } from '@mantine/core';

export const root = style({
    cursor: 'pointer',
    background: vars.colors.body,
    height: 'calc(100% - 1px)',
});

export const notificationIconBell = style({
    width: rem(22),
    height: rem(22),
    color: vars.colors.gray[7],
    selectors: {
        [vars.darkSelector]: {
            color: vars.colors.gray[1]
        }
    }
});