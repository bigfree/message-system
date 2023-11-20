import { FC, ReactElement } from 'react';
import { root, TestColor } from '@/playground/Test.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { theme } from '@/theme/theme.ts';

const Test: FC = (): ReactElement => {
    return (
        <div className={root} style={assignInlineVars({
            [TestColor]: (1 === 1) ? theme?.colors?.red?.[5] ?? 'red' : 'blue',
        })}>
            aaaa
        </div>
    );
};

export default Test;