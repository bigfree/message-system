import { Button, ButtonProps } from '@mantine/core';
import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { IconBrandTwitter } from '@tabler/icons-react';

export function TwitterButton(props: ButtonProps & ComponentPropsWithoutRef<'button'>): ReactElement {
    return (
        <Button
            leftSection={<IconBrandTwitter style={{width: '1rem', height: '1rem'}} color="#00ACEE"/>}
            variant="default"
            {...props}
        />
    );
}