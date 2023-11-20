import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { ZustandPersistStoreNamesEnum } from '@/helpers/enums/ZustandPersistStoreNames.enum.ts';

export type AuthState = {
    token: string | null;
}

export type AuthActions = {
    setToken: (token: string) => void;
    removeToken: () => void;
}

export type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>()(persist((set) => ({
    token: null,
    setToken: (token) => {
        set(produce((state: AuthStore) => {
            state.token = token;
        }));
    },
    removeToken: () => {
        set(produce((state: AuthStore) => {
            state.token = null;
        }));
    },
}), {
    name: ZustandPersistStoreNamesEnum.AUTH_STORE,
}));

/**
 * Export non-reactive selector for token
 */
export const token: string | null = useAuthStore.getState().token;
export const removeToken = useAuthStore.getState().removeToken;

export default useAuthStore;