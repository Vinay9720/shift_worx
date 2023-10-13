'use client';

import { useMemo } from 'react';
import { Avatar, Stack, IconButton } from '@mui/material';

import { WidgetCard, SwxPagination } from '@/lib/common/layout';
import { Icon } from '@/lib/common/icons';
import { SwxDataGrid, SwxTypography, SwxChip, SwxPopupMenu } from '@/lib/common/components';

import { WidgetCardsContainer } from './admin-pto.styles';
import AddRequest from './PtoForm';
import SearchFilter from './SearchFilter';

export default function AdminPto() {
    const menuOptions = () => {
        return [
            {
                label: 'Send Message',
                action: () => {
                    console.log('send message clicked');
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='message' height={20} width={20} />,
            },
            {
                label: 'Edit',
                // action: () => {
                //     router.push(`/admin/employees/edit-employee/${id}?step=profile_information`);
                // },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={20} width={20} />,
            },
            {
                label: 'Note',
                action: () => {
                    console.log('send message clicked');
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='notes' height={20} width={20} />,
            },
            {
                label: 'Delete Employee',
                // action: e => {
                //     e.preventDefault();
                //     setEmployeeIdToBeDeleted(id);
                //     dispatch(openModal({ modalName: 'deleteEmployeeModal' }));
                // },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={20} width={20} />,
            },
        ];
    };

    const columns = [
        {
            field: 'employee',
            headerName: 'Employee',
            width: 300,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center' style={{ cursor: 'pointer' }}>
                    {/* onClick={() =>
                        router.push(`/admin/employees/edit-employee/${params.row.id}?step=profile_information`)
                     } */}
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                        params.row.employee.split('')[0].toUpperCase() || 'K'
                    }`}</Avatar>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold'>{`${
                        params.row.employee || ''
                    } `}</SwxTypography>
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
            width: 120,
            align: 'left',
            minWidth: 120,
            sortable: false,
            filterable: false,
            renderCell: params => {
                const backgroundColor = status => {
                    switch (status) {
                        case 'RN':
                            return 'pink';
                        case 'LPN':
                            return 'swxBlue';
                        case 'CNA':
                            return 'lightOrange';
                        default:
                            return 'pink';
                    }
                };
                const background = backgroundColor(params.value);
                return <SwxChip label={params.value} color='white' background={background} size='semiMedium' />;
            },
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            minWidth: 120,
            sortable: false,
            filterable: false,
            // flex: 1,
            renderCell: params => {
                const getFillColor = status => {
                    switch (status) {
                        case 'Approved':
                            return '#02B692';
                        case 'Declined':
                            return '#E65889';
                        case 'Pending':
                            return '#838A91';
                        default:
                            return '#838A91';
                    }
                };
                const backgroundColor = status => {
                    switch (status) {
                        case 'Approved':
                            return 'paleGreen';
                        case 'Declined':
                            return 'lightPink';
                        case 'Pending':
                            return 'dullGray';
                        default:
                            return 'dullGray';
                    }
                };
                const fillColor = getFillColor(params.value);
                const background = backgroundColor(params.value);

                return (
                    <SwxChip
                        icon={<Icon name='circle' fill={fillColor} height={8} width={8} cx='4' cy='4' r='3.5' />}
                        label={params.value}
                        kind='rounded'
                        color='swxBlack'
                        background={background}
                        size='semiMedium'
                        leftPadding='4px'
                    />
                );
            },
        },
        {
            field: 'timeOffRequested',
            headerName: 'Time Off Requested',
            width: 174,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || '7/4 - 8:00 AM - 8:00 PM',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'note',
            headerName: 'Note',
            width: 336,
            align: 'left',
            flex: 1,
            sortable: false,
            valueGetter: params => params.value || "I'm requesting time off to attend my brother's wedding",
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
    const rows = [
        { id: 1, employee: 'Katie L', role: 'RN', status: 'Pending', timeOffRequested: '', note: '' },
        { id: 2, employee: 'Henry Ford', role: 'LPN', status: 'Declined', timeOffRequested: '', note: '' },
        { id: 3, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', note: '' },
        { id: 4, employee: 'Andrew Lincon', role: 'LPN', status: 'Approved', timeOffRequested: '', note: '' },
        { id: 5, employee: 'Dangel Washington', role: 'RN', status: 'Pending', timeOffRequested: '', note: '' },
        { id: 6, employee: 'Katie L', role: 'RN', status: 'Approved', timeOffRequested: '', note: '' },
        { id: 7, employee: 'John Hancock', role: 'CNA', status: 'Pending', timeOffRequested: '', note: '' },
        { id: 8, employee: 'Katie L', role: 'RN', status: 'Declined', timeOffRequested: '', note: '' },
        { id: 9, employee: 'Rick Grimes', role: 'RN', status: 'Pending', timeOffRequested: '', note: '' },
        { id: 10, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', note: 'Testing the Note' },
    ];
    const cardsData = useMemo(
        () => [
            {
                title: 'Pending Time Off Request',
                iconName: 'restart-line',
                totalCount: 3,
                percentage: '15%',
                badgeArrow: 'up-arrow',
                fill: '#1F6FA9',
            },
            {
                title: 'Approved Time Off Request',
                iconName: 'filled-check',
                totalCount: 12,
                percentage: '9%',
                badgeArrow: 'up-arrow',
                fill: '#1F6FA9',
            },
            {
                title: 'Declined Time Off Request',
                iconName: 'file-close',
                totalCount: 2,
                percentage: '29%',
                badgeArrow: 'down-arrow',
                fill: '#1F6FA9',
            },
        ],
        []
    );

    return (
        <>
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
                            fill={card.fill}
                        />
                    );
                })}
            </WidgetCardsContainer>
            <SearchFilter actionButton={AddRequest} style={{ marginTop: '3.5rem', marginBottom: '1rem' }} />
            <SwxDataGrid columns={columns} rows={rows} />
            <SwxPagination
                paginationName='adminPtoPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ margin: '20px 0px' }}
            />
        </>
    );
}
