import { style } from '@vanilla-extract/css';
import { rem } from '@mantine/core';
import { vars } from '@/theme/theme.ts';

export const themeSwitchIconMoon = style({
    width: rem(22),
    height: rem(22),
    color: vars.colors.gray[7],
});