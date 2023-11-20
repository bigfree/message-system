import { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { GetAllUsersQuery } from '@/graphql/User/GetAllUsers.query.ts';

const IndexLayout: FC = (): ReactElement => {
    const {data} = useQuery(GetAllUsersQuery);

    return (
        <div>
            <div>Index page</div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
};

export default IndexLayout;