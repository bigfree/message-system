import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem, rgba } from '@mantine/core';

export const messagesFiltersRoot = style({
    marginBottom: vars.spacing.md,
    borderRadius: '0',
    position: 'sticky',
    top: rem(120),
    zIndex: 99,
    marginTop: `calc(${vars.spacing.md} * -1)`,
    marginLeft: `calc(${vars.spacing.md} * -1)`,
    marginRight: `calc(${vars.spacing.md} * -1)`,
    borderBottom: `1px solid ${vars.colors.gray[3]}`,
    padding: vars.spacing.md,
    backdropFilter: 'blur(8px)',
    selectors: {
        [vars.lightSelector]: {
            backgroundColor: rgba('#ffffff', .8),
        },
        [vars.darkSelector]: {
            backgroundColor: vars.colors.dark[6],
        },
    },
});