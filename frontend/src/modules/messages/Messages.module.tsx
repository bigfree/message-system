import { FC, ReactElement, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GetAllMessagesQuery } from '@/graphql/Messages/GetAllMessages.query.ts';
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table';
import { Message, SortOrder } from '@/generated/graphql.ts';
import UserAvatarOnMessage from '@components/user-avatar-on-messages/UserAvatarOnMessage.component.tsx';
import {
    mantineBottomToolbarProps,
    mantinePaginationProps,
    mantinePaperProps,
    mantineTableHeadCellProps,
    mantineTableHeadProps,
    mantineTableOpenProps,
    mantineTableOpenPropsAction,
    mantineTableOpenPropsIcon,
    mantineTableProps,
} from '@modules/messages/Messages.css.ts';
import { ActionIcon, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconEye } from '@tabler/icons-react';
import MessagesFilters from '@modules/messages/Filters/MessagesFilters.module.tsx';
import { MessagesFilterFormProvider, useMessagesFilterForm } from '@/form-context/MessagesFilterForm.context.ts';

const Messages: FC = (): ReactElement => {
    const form = useMessagesFilterForm({
        initialValues: {
            title: {
                contains: '',
            },
        },
    });

    const {data} = useQuery(GetAllMessagesQuery, {
        variables: {
            where: form.values,
            orderBy: {
                createdAt: {
                    sort: SortOrder.Desc,
                },
            },
        },
    });

    const columns = useMemo<MRT_ColumnDef<Message>[]>(() => [
        {
            accessorKey: 'id',
            header: '',
            size: 1,
            enableResizing: false,
            enableSorting: false,
            enableColumnActions: false,
            mantineTableHeadCellProps: {
                className: mantineTableOpenProps,
            },
            mantineTableBodyCellProps: {
                className: mantineTableOpenProps,
            },
            accessorFn: (row) => (
                <Tooltip label={'Open detail message'}>
                    <ActionIcon
                        variant={'transparent'}
                        component={Link}
                        to={row.id}
                        className={mantineTableOpenPropsAction}
                    >
                        <IconEye stroke={1.5} className={mantineTableOpenPropsIcon}/>
                    </ActionIcon>
                </Tooltip>
            ),
        }, {
            accessorKey: 'title',
            header: 'Title',
            enableSorting: false,
            accessorFn: (row) => `[${row.prefix}] ${row.title}`,
            enableHiding: false,
            // size: 'auto'
        }, {
            accessorKey: 'createdAt',
            header: 'Created At',
            enableResizing: false,
            enableSorting: false,
            size: 50,
            accessorFn: (row) => {
                return new Date(row.createdAt).toLocaleString('cs-CS');
            },
        }, {
            accessorKey: 'status',
            header: 'Status',
            enableResizing: false,
            enableSorting: false,
            size: 50,
        }, {
            accessorKey: 'createdUserId',
            header: 'Created By',
            enableResizing: false,
            enableSorting: false,
            size: 70,
            accessorFn: (row) => <UserAvatarOnMessage {...row.createdUser} id={row.createdUserId}/>,
        },
    ], []);

    const table = useMantineReactTable({
        columns,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        data: data?.messages ?? [],
        enableDensityToggle: false,
        enableFullScreenToggle: false,
        enableTopToolbar: false,
        mantinePaperProps: {
            className: mantinePaperProps,
        },
        mantineTableHeadProps: {
            className: mantineTableHeadProps,
        },
        mantineTableHeadCellProps: {
            className: mantineTableHeadCellProps,
        },
        mantineTableBodyProps: {
            className: mantineTableProps,
        },
        mantineBottomToolbarProps: {
            className: mantineBottomToolbarProps,
        },
        mantinePaginationProps: {
            className: mantinePaginationProps,
        },
        paginationDisplayMode: 'pages',
        mantineTableProps: {
            layout: 'fixed',
        },
        initialState: {
            density: 'xs',

            // isLoading: loading,
        },
    });

    return (
        <div>
            <MessagesFilterFormProvider form={form}>
                <MessagesFilters/>
                <MantineReactTable
                    table={table}
                />
                <div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dignissimos facilis
                        maxime
                        modi non odit praesentium quam reiciendis rem sunt suscipit velit voluptate? Earum ipsa sit
                        sunt!
                        Aspernatur, molestias, quisquam.
                    </div>
                    <div>Blanditiis, dolor ex minima nobis quo voluptates. Dolores doloribus eligendi explicabo harum
                        ipsa
                        itaque magnam, minima molestiae molestias nam nemo nihil odit officia quasi quod repellendus
                        sequi
                        sunt vitae! Praesentium.
                    </div>
                    <div>Adipisci et eum excepturi fuga, id impedit, ipsa iure laboriosam nam nihil odio officia optio
                        porro
                        ratione recusandae reiciendis rem soluta tempora! Commodi facere obcaecati odit similique vero
                        voluptatum. Voluptatem.
                    </div>
                    <div>Alias, asperiores at autem deserunt, dolores fugit inventore molestias mollitia nam nostrum
                        quos
                        sapiente sequi vel. Adipisci blanditiis consectetur cumque delectus dolorum hic, laudantium, nam
                        neque non quis vel velit.
                    </div>
                    <div>Excepturi placeat tempora vel vero? Ducimus itaque provident tempore! Adipisci consequuntur,
                        itaque
                        minima neque quis rerum saepe. Delectus deleniti dicta dolore doloremque dolorum iusto, quaerat
                        quo,
                        sapiente sit totam veritatis!
                    </div>
                    <div>A amet, assumenda at autem dolor magnam necessitatibus, omnis perferendis quae quam tenetur
                        velit
                        vitae. Labore recusandae, tempore? Accusantium aperiam consequuntur earum laborum nisi officia
                        provident quibusdam quo suscipit voluptas!
                    </div>
                    <div>Animi consequatur consequuntur cum ea impedit iure sed sint voluptatum! Accusamus ducimus in,
                        maxime minima neque nulla possimus praesentium provident repellat sed! Atque blanditiis error
                        esse,
                        neque officia quod ut.
                    </div>
                    <div>Aspernatur corporis pariatur perspiciatis quas quibusdam tenetur vel vero! Autem iure nemo
                        nesciunt
                        quasi soluta? Accusantium ad ducimus impedit laborum, nulla perspiciatis quaerat quo quod.
                        Corporis
                        eius ipsam minima nulla.
                    </div>
                    <div>Architecto asperiores aut beatae cumque dicta earum eius error exercitationem incidunt
                        inventore
                        laboriosam nam necessitatibus nemo neque optio pariatur porro possimus provident quasi quidem
                        reiciendis, tempore tenetur ullam. Natus, obcaecati.
                    </div>
                    <div>Consequuntur nisi qui quos, recusandae tempore vitae! Aut blanditiis dolore ex facilis nisi
                        nulla
                        perferendis quas. Amet cumque deserunt doloremque exercitationem laboriosam nihil veritatis!
                        Explicabo iste labore placeat sed voluptatem?
                    </div>
                </div>
            </MessagesFilterFormProvider>
        </div>
    );
};

export default Messages;