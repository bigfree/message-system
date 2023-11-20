import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';

export const root = style({
    cursor: 'pointer',
    background: vars.colors.body,
    height: 'calc(100% - 1px)',
});

export const userData = style({
    flex: 1,
    paddingLeft: vars.spacing.md,
});