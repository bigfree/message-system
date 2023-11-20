import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.ts';
import { rem, rgba } from '@mantine/core';

export const mantinePaperProps = style({
    vars: {
        '--paper-shadow': '0 !important',
    },
    selectors: {
        [vars.lightSelector]: {
            boxShadow: '2px 2px 0 0 #F1F3F5',
        },
        [vars.darkSelector]: {
            boxShadow: '2px 2px 0 0 #25262B',
        }
    },
    borderRadius: 0,
});

export const mantineTableHeadProps = style({
    selectors: {
        [vars.lightSelector]: {
            backgroundColor: rgba('#F8F9FA', .5),
        },
        [vars.darkSelector]: {
            backgroundColor: rgba('#000000', .5),
        }
    }
});

export const mantineTableHeadCellProps = style({
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
});

export const mantineTableProps = style({});

export const mantineTableOpenProps = style([mantineTableHeadProps, {
    width: `${rem(10)} !important`,
    minWidth: `${rem(10)} !important`,
    paddingLeft: vars.spacing.sm,
    paddingRight: 0,
    textAlign: 'center',
    backgroundColor: 'transparent !important'
}]);

export const mantineTableOpenPropsAction = style({
    border: 0
});

export const mantineTableOpenPropsIcon = style({
    width: rem(28),
    height: rem(28),
    selectors: {
        [vars.lightSelector]: {
            color: vars.colors.gray[5]
        },
        [vars.darkSelector]: {
            color: vars.colors.dark[3]
        }
    }
});

export const mantineBottomToolbarProps = style({
    selectors: {
        [vars.lightSelector]: {
            borderTop: `1px solid ${vars.colors.gray[3]}`,
            backgroundColor: rgba('#F8F9FA', .15),
        },
        [vars.darkSelector]: {
            borderTop: `1px solid ${vars.colors.dark[2]}`,
            backgroundColor: rgba('#000000', .15),
        }
    }
});

export const mantinePaginationProps = style({
    // background: 'red'
});
