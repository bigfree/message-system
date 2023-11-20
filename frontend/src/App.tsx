import { FC, ReactElement } from 'react';
import { theme } from '@/theme/theme.ts';
import { RouterProvider } from 'react-router-dom';
import browserRouter from '@routes/config.ts';
import { MantineProvider } from '@mantine/core';
import useThemeStore from '@stores/Theme.store.ts';

const App: FC = (): ReactElement => {
    const colorScheme = useThemeStore(store => store.colorScheme);

    return (
        <MantineProvider theme={theme} defaultColorScheme={'light'} forceColorScheme={colorScheme}>
            <RouterProvider router={browserRouter}/>
        </MantineProvider>
    );
};

export default App;