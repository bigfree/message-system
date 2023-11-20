import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem } from '@mantine/core';

export const userAvatarOnMessageRoot = style({
    cursor: 'pointer',
    textDecoration: 'none',
});

export const userAvatarOnMessageName = style({
    color: vars.colors.defaultColor,
    fontSize: rem(13),
    lineHeight: rem(17)
});

export const userAvatarOnMessageEmail = style({
    fontSize: rem(11),
});

export const userAvatarOnMessageAvatar = style({
    marginRight: vars.spacing.sm,
});