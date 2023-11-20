import { FC, Fragment, lazy, ReactElement, Suspense, useCallback } from 'react';
import { Box, Flex } from '@mantine/core';
import RouteHeader from '@modules/route-header/RouteHeader.module.tsx';
import RouteBody from '@modules/route-body/RouteBody.module.tsx';
import ToolboxButton from '@components/buttons/toolbox/ToolboxButton.component.tsx';
import { IconFilter, IconMessagePlus, IconReload, IconShare2 } from '@tabler/icons-react';
import { useApolloClient } from '@apollo/client';
import { GetAllMessagesQuery } from '@/graphql/Messages/GetAllMessages.query.ts';

const Messages = lazy(() => import('@modules/messages/Messages.module.tsx'));

const MessagesRoute: FC = (): ReactElement => {
    const client = useApolloClient();

    const refetchOnClickHandler = useCallback(async () => {
        await client.refetchQueries({
            include: [GetAllMessagesQuery],
            onQueryUpdated: (_observableQuery, {complete, result, missing}) => {
                console.log(complete, result, missing);
            },
        });
    }, [client]);

    return (
        <Flex gap={0} direction={'column'}>
            <RouteHeader>
                <Fragment>
                    <ToolboxButton
                        link={'/messages/new'}
                        icon={<IconMessagePlus/>}
                    >New message</ToolboxButton>
                    <ToolboxButton
                        link={''}
                        icon={<IconFilter/>}
                    >Open filter</ToolboxButton>
                    <ToolboxButton
                        link={''}
                        icon={<IconReload/>}
                        onClick={refetchOnClickHandler}
                    >Refetch messages</ToolboxButton>
                    <Box style={{marginRight: 'auto'}}></Box>
                    <ToolboxButton
                        link={''}
                        icon={<IconShare2/>}
                    >Share</ToolboxButton>
                </Fragment>
            </RouteHeader>
            <RouteBody>
                <Suspense fallback={<Fragment></Fragment>}>
                    <Messages/>
                </Suspense>
            </RouteBody>
        </Flex>
    );
};

export default MessagesRoute;