import { FC, ReactElement, useCallback } from 'react';
import { IconBrightnessUp, IconMoonFilled } from '@tabler/icons-react';
import { ActionIcon, Tooltip } from '@mantine/core';
import useThemeStore from '@stores/Theme.store.ts';
import { themeSwitchIconMoon } from '@components/theme-switch/ThemeSwitch.css.ts';

const ThemeSwitch: FC = (): ReactElement => {
    const colorScheme = useThemeStore(store => store.colorScheme);
    const setColorScheme = useThemeStore(store => store.setColorScheme);

    const handleChangeTheme = useCallback(() => {
        if ('light' === colorScheme) {
            setColorScheme('dark');
        } else {
            setColorScheme('light');
        }
    }, [colorScheme, setColorScheme]);

    return (
        <Tooltip label={'Switch color scheme'}>
            <ActionIcon onClick={handleChangeTheme} size={'lg'} radius={'md'} variant={'default'}>
                {'light' === colorScheme ? (
                    <IconMoonFilled stroke={1.5} className={themeSwitchIconMoon}/>
                ) : (
                    <IconBrightnessUp stroke={1.5}/>
                )}
            </ActionIcon>
        </Tooltip>
    );
};

export default ThemeSwitch;