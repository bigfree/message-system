import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem } from '@mantine/core';

export const toolboxButtonRoot = style({
    border: 'none',
    borderRadius: 0,
    height: '100%',
    fontWeight: '400',
    fontSize: rem(16),
    selectors: {
        [vars.lightSelector]: {
            borderRight: `1px solid ${vars.colors.gray[3]}`,
        },
        [vars.darkSelector]: {
            borderRight: `1px solid ${vars.colors.dark[4]}`,
        },
        ['&:last-of-type']: {
            borderRight: 'none'
        }
    }
});

export const toolboxButtonIcon = style({
    width: rem(20),
    height: rem(20),
});