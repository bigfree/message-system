import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { ZustandPersistStoreNamesEnum } from '@/helpers/enums/ZustandPersistStoreNames.enum.ts';

export type ThemeState = {
    colorScheme: 'dark' | 'light';
}

export type ThemeActions = {
    setColorScheme: (colorScheme: 'dark' | 'light') => void;
}

export type ThemeStore = ThemeState & ThemeActions;

const useThemeStore = create<ThemeStore>()(persist((set) => ({
    colorScheme: 'light',
    setColorScheme: (colorScheme) => {
        set(produce((state: ThemeStore) => {
            state.colorScheme = colorScheme;
        }));
    },
}), {
    name: ZustandPersistStoreNamesEnum.THEME_STORE,
}));

export default useThemeStore;