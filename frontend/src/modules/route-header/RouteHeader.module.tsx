import { FC, PropsWithChildren, ReactElement } from 'react';
import { routeHeaderGroup, routeHeaderRoot } from '@modules/route-header/RouteHeader.css.ts';
import { Group } from '@mantine/core';

type RouteHeaderProps = PropsWithChildren;

const RouteHeader: FC<RouteHeaderProps> = ({children}): ReactElement => {
    return (
        <div className={routeHeaderRoot}>
            <Group className={routeHeaderGroup} gap={0}>
                {children}
            </Group>
        </div>
    );
};

export default RouteHeader;