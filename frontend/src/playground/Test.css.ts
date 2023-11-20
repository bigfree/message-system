import { createVar, style } from '@vanilla-extract/css';

export const TestColor = createVar();

export const root = style({
    color: TestColor,
});