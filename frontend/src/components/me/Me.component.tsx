import { Avatar, Flex, Text } from '@mantine/core';
import { root, userData } from '@components/me/Me.css.ts';
import { useQuery } from '@apollo/client';
import { MeQuery } from '@/graphql/User/Me.query.ts';

const MeComponent = () => {
    const {data} = useQuery(MeQuery);

    return (
        <Flex align={'center'} className={root}>
            <Avatar
                src={data?.me.profile?.avatar}
                radius="xl"
            >
                {null === data?.me.profile?.avatar && data.me.profile.acronym}
            </Avatar>

            <div className={userData}>
                <Text size="sm" fw={500}>
                    {data?.me.firstName} {data?.me.lastName}
                </Text>

                <Text c="dimmed" size="xs">
                    {data?.me.email}
                </Text>
            </div>
        </Flex>
    );
};

export default MeComponent;