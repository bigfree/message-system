import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';

export const notificationColumn = style({
    borderRight: `1px solid ${vars.colors.gray[3]}`,
    paddingLeft: vars.spacing.md,
    paddingRight: vars.spacing.md,
});

export const userColumn = style({
    paddingLeft: vars.spacing.md,
    paddingRight: vars.spacing.md,
});