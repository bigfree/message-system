import { Navigate } from 'react-router-dom';
import useAuthStore from '@stores/Auth.store.ts';
import { useEffect } from 'react';

const LogoutRoute = () => {
    const removeToken = useAuthStore(store => store.removeToken);

    useEffect(() => {
        removeToken();
    }, [removeToken]);

    return (
        <Navigate
            to={'/login'}
            replace={true}
        />
    );
};

export default LogoutRoute;