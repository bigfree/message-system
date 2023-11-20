import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem, rgba } from '@mantine/core';

export const navbarLinkIcon = style({
    marginRight: vars.spacing.md,
    width: rem(23),
    height: rem(23),
    color: vars.colors.gray[6],
    'selectors': {
        [vars.darkSelector]: {
            color: vars.colors.dark[2],
        },
    },
});

export const navbarLinkRoot = style({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: vars.fontSizes.md,
    color: vars.colors.gray[7],
    padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
    borderRadius: vars.radius.sm,
    marginBottom: vars.spacing.xs,
    border: `1px solid ${vars.colors.defaultBorder}`,
    'selectors': {
        [vars.darkSelector]: {
            color: vars.colors.dark[4],
        },
        [vars.lightSelector]: {
            backgroundColor: vars.colors.gray[0],
            boxShadow: `2px 2px 0 0 ${rgba('#F1F3F5', .9)}`,
        },
        '&:hover': {
            backgroundColor: vars.colors.gray[1],
            color: vars.colors.black,
            [vars.darkSelector]: {
                backgroundColor: vars.colors.dark[6],
                color: vars.colors.white,
            },
        },
    },
});