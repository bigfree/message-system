import { FC, ReactElement } from 'react';
import useAuthStore from '@stores/Auth.store.ts';
import { Navigate, useLocation } from 'react-router-dom';

type AuthGuardProps = {
    children: ReactElement;
}

const AuthGuard: FC<AuthGuardProps> = ({children}): ReactElement => {
    const location = useLocation();
    const token: string | null = useAuthStore(store => store.token);

    if (null === token) {
        return (
            <Navigate
                to={'/login'}
                state={{from: location}}
                replace
            />
        );
    }

    return children;
};

export default AuthGuard;