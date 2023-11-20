import { FC } from 'react';
import { ActionIcon } from '@mantine/core';
import { IconBellFilled } from '@tabler/icons-react';
import { notificationIconBell } from '@components/notification/Notification.css.ts';

const Notification: FC = () => {
    return (
        <ActionIcon size={'lg'} radius={'md'} variant={'default'}>
            <IconBellFilled stroke={1.5} className={notificationIconBell}/>
        </ActionIcon>
    );
};

export default Notification;