import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';

export const routeBodyRoot = style({
    padding: `${vars.spacing.md} ${vars.spacing.md} 0`,
});