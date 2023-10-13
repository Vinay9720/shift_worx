import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Avatar, IconButton } from '@mui/material';
import { capitalize } from 'lodash';
import { useRouter } from 'next/navigation';

// import { openModal } from '@/lib/store/slices/modal-slice';
import { WidgetCard, DeleteModal } from '@/lib/common/layout';
import { SwxDataGrid, SwxChip, SwxTypography, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { openModal } from '@/lib/store/slices/modal-slice';
import SwxPagination from '@/lib/common/layout/pagination';

import SearchFilter from './SearchFilter';
import { WidgetCardsContainer } from './admin-expirations.styles';

import AddNote from '../add-note';

export default function AdminExpirations() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isLoading = false;

    const expirations = [
        {
            first_name: 'John',
            id: '1',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            first_name: 'Katie',
            role: 'LPN',
            id: '2',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '3',
            first_name: 'Eric',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '4',
            first_name: 'Gene',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '5',
            first_name: 'Ola',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '6',
            first_name: 'Ruby',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '6',
            first_name: 'Otis',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '7',
            first_name: 'Hrk',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '8',
            first_name: 'Wick',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
        {
            id: '9',
            first_name: 'Adam',
            role: 'LPN',
            status: 'Active',
            item_expiring: 'RN License',
            expiration_date: 'Jan 4, 2023',
        },
    ];

    const menuOptions = ({ id }) => {
        return [
            // {
            //     label: 'Send Message',
            //     action: () => {
            //         console.log('send message clicked');
            //     },
            // },
            {
                label: 'Edit',
                action: () => {
                    router.push(`/admin/employees/edit-employee/${id}?step=profile_information`);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Note',
                action: e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='paper' height={14} width={14} />,
            },
            {
                label: 'Delete',
                action: () => {
                    console.log('send message clicked');
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const columns = [
        {
            field: 'fullName',
            headerName: 'Employee',
            width: 330,
            renderCell: params => (
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        router.push(`/admin/employees/edit-employee/${params.row.id}?step=profile_information`)
                    }>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                        params.row.first_name.split('')[0].toUpperCase() || ''
                    }`}</Avatar>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold'>{`${
                        params.row.first_name || ''
                    } ${params.row.last_name || ''}`}</SwxTypography>
                </Stack>
            ),
            align: 'left',
            filterable: false,
            // flex: 1,
            minWidth: 120,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 140,
            align: 'left',
            minWidth: 160,
            sortable: false,
            filterable: false,
            renderCell: params => (
                <SwxChip label={params.value || 'RN'} color='white' background='pink' size='semiMedium' />
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            align: 'left',
            // flex: 1,
            renderCell: params => (
                <SwxChip
                    icon={<Icon name='circle' fill='#838A91' height={8} width={8} cx='4' cy='4' r='3.5' />}
                    label={capitalize(params.value)}
                    kind='rounded'
                    color='swxBlack'
                    background='dullGray'
                    size='semiMedium'
                    leftPadding='4px'
                />
            ),
            minWidth: 120,
            sortable: false,
            filterable: false,
        },
        {
            field: 'item_expiring',
            headerName: 'Item Expiring',
            width: 200,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Jan 23, 2023',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'expiration_date',
            headerName: 'Expiration Date',
            width: 220,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Jan 28, 2023',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'id',
            headerName: '',
            width: 10,
            sortable: false,
            filterable: false,
            renderCell: params => (
                <SwxPopupMenu
                    buttonElement={
                        <IconButton>
                            <Icon
                                styles={{ fill: '#838A91' }}
                                name='vertical-menu'
                                aria-hidden='true'
                                height={15}
                                width={10}
                            />
                        </IconButton>
                    }
                    options={menuOptions({
                        id: params.value,
                    })}
                />
            ),
        },
    ];

    const cardsData = useMemo(
        () => [
            {
                title: 'Expired',
                iconName: 'people-group',
                totalCount: 8,
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expiring this Week',
                iconName: 'calender-check',
                totalCount: 24,
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expiring this Month',
                iconName: 'calender-todo',
                totalCount: 45,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );

    return (
        <>
            <AddNote hideButton />
            <WidgetCardsContainer style={{ marginTop: '1rem' }}>
                {cardsData.map((card, index) => {
                    return (
                        <WidgetCard
                            key={index}
                            title={card.title}
                            iconName={card.iconName}
                            totalCount={card.totalCount}
                            percentage={card.percentage}
                            badgeArrow={card.badgeArrow}
                        />
                    );
                })}
            </WidgetCardsContainer>
            <DeleteModal
                modalName='deleteExpirationModal'
                entityName='Expiration'
                onConfirm={() => console.log('deleted')}
            />
            <SearchFilter style={{ marginTop: '3.5rem', marginBottom: '1rem' }} />
            <SwxDataGrid rows={expirations} columns={columns} isLoading={isLoading} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminEmployeesPagination'
                style={{ marginBottom: '20px' }}
            />
        </>
    );
}
