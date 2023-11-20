import { FC, ReactElement } from 'react';
import { User } from '@/generated/graphql.ts';
import { Avatar, Flex, rem, Text } from '@mantine/core';
import {
    userAvatarOnMessageAvatar, userAvatarOnMessageEmail, userAvatarOnMessageName,
    userAvatarOnMessageRoot,
} from '@components/user-avatar-on-messages/UserAvatarOnMessage.css.ts';
import { Link } from 'react-router-dom';

const UserAvatarOnMessage: FC<User> = (props): ReactElement => {
    return (
        <Flex align={'center'} className={userAvatarOnMessageRoot} component={Link} to={`/users/${props.id}`}>
            <Avatar
                src={props.profile?.avatar}
                radius="xl"
                className={userAvatarOnMessageAvatar}
                size={rem(32)}
            >
                {null === props.profile?.avatar && props.profile.acronym}
            </Avatar>

            <div>
                <Text size="sm" fw={500} className={userAvatarOnMessageName}>
                    {props.firstName} {props.lastName}
                </Text>

                <Text c="dimmed" size="xs" className={userAvatarOnMessageEmail}>
                    {props.email}
                </Text>
            </div>
        </Flex>
    );
};

export default UserAvatarOnMessage;