import { cloneElement, FC, PropsWithChildren, ReactElement } from 'react';
import { Button } from '@mantine/core';
import { toolboxButtonIcon, toolboxButtonRoot } from '@components/buttons/toolbox/ToolboxButton.css.ts';
import { Link } from 'react-router-dom';

type ToolboxButton = PropsWithChildren & {
    icon?: ReactElement;
    link?: string;
    onClick?: () => void;
}

const ToolboxButton: FC<ToolboxButton> = ({children, ...props}): ReactElement => {
    return (
        <Button
            variant={'default'}
            component={Link}
            className={toolboxButtonRoot}
            to={props.link ? props.link : ''}
            onClick={props.onClick}
            leftSection={props.icon ? cloneElement(props.icon, {
                stroke: '1.5',
                className: toolboxButtonIcon,
            }) : null}
        >
            {children}
        </Button>
    );
};

export default ToolboxButton;