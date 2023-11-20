import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/theme.ts';

export const gridContainer = style({
    borderRight: `1px solid ${vars.colors.indigo[2]}`,
    background: vars.colors.indigo[0]
});

export const container = style({
    width: rem(450),
});