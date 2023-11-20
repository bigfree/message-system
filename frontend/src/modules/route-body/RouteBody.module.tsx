import { FC, PropsWithChildren, ReactElement } from 'react';
import { routeBodyRoot } from '@modules/route-body/RouteBody.css.ts';

type RouteBodyProps = PropsWithChildren;

const RouteBody: FC<RouteBodyProps> = ({children}): ReactElement => {
    return (
        <div className={routeBodyRoot}>
            {children}
        </div>
    );
};

export default RouteBody;