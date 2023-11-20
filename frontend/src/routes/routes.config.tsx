import { RouteObject } from 'react-router-dom';
import RootRoute from '@routes/root/Root.route.tsx';
import AuthGuard from '@routes/guard/Auth.guard.tsx';
import LoginRoute from '@routes/auth/login/Login.route.tsx';
import IndexLayout from '@routes/index/Index.layout.tsx';
import MessagesRoute from '@routes/messages/Messages.route.tsx';
import UsersRoute from '@routes/users/Users.route.tsx';
import UsersGroupsRoute from '@routes/users-group/UsersGroups.route.tsx';

const routes: RouteObject[] = [{
    path: '/login',
    element: <LoginRoute/>,
}, {
    path: '/',
    element: (
        <AuthGuard>
            <RootRoute/>
        </AuthGuard>
    ),
    children: [{
        index: true,
        element: <IndexLayout/>,
    }, {
        path: 'messages',
        element: <MessagesRoute/>,
    }, {
        path: 'users',
        element: <UsersRoute/>,
    }, {
        path: 'users-groups',
        element: <UsersGroupsRoute/>,
    }],
}];

export default routes;