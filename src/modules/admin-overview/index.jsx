import { useMemo } from 'react';
import { Stack, Avatar, IconButton } from '@mui/material';

import { WidgetCardsContainer } from './admin-overview.styles';

import { SearchFilter, WidgetCard } from '../common/layout';
import { SwxDataGrid, SwxChip, SwxTypography, SwxLinearProgress } from '../common/components';
import { Icon } from '../common/icons';

export default function AdminOverview() {
    const columns = [
        {
            field: 'fullName',
            headerName: 'Employee',
            width: 300,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Avatar sx={{ width: 32, height: 32 }}>{`${params.row.firstName.split('')[0] || ''}${
                        params.row.lastName.split('')[0] || ''
                    }`}</Avatar>
                    <SwxTypography>{`${params.row.firstName || ''} ${params.row.lastName || ''}`}</SwxTypography>
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
            renderCell: params => <SwxChip label={params.value} color='white' background='swxBlue' size='semiMedium' />,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            // flex: 1,
            renderCell: params => (
                <SwxChip
                    label={params.value}
                    kind='rounded'
                    color='swxBlack'
                    background='lightPink'
                    size='semiMedium'
                />
            ),
            minWidth: 120,
            sortable: false,
            filterable: false,
        },
        {
            field: 'lastShift',
            headerName: 'Last shift',
            width: 170,
            align: 'left',
            // flex: 1,
            sortable: false,
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'nextShift',
            headerName: 'Next Shift',
            width: 170,
            align: 'left',
            // flex: 1,
            sortable: false,
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'utilization',
            headerName: 'Utilization',
            width: 330,
            align: 'left',
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: params => <SwxLinearProgress value={params.value} />,
            minWidth: 120,
        },
        {
            field: 'action',
            headerName: '',
            width: 10,
            sortable: false,
            filterable: false,
            renderCell: () => (
                <IconButton>
                    <Icon styles={{ fill: '#838A91' }} name='vertical-menu' aria-hidden='true' height={15} width={10} />
                </IconButton>
            ),
        },
    ];

    const rows = [
        {
            id: 1,
            firstName: 'Ross',
            lastName: 'Geller',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 30,
        },
        {
            id: 2,
            firstName: 'Rachel',
            lastName: 'Green',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 70,
        },
        {
            id: 3,
            firstName: 'Monica',
            lastName: 'Geller',
            role: 'LPN',
            status: 'Inactive',
            lastShift: 'Jan 6, 2023',
            nextShift: 'Jan 10, 2023',
            utilization: 40,
        },
        {
            id: 4,
            firstName: 'Joe',
            lastName: 'Tribiani',
            role: 'LPN',
            status: 'Active',
            lastShift: 'Jan 1, 2023',
            nextShift: 'Jan 23, 2023',
            utilization: 90,
        },
        {
            id: 5,
            firstName: 'Pheobe',
            lastName: 'Buffey',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 97,
        },
        {
            id: 6,
            firstName: 'Ross',
            lastName: 'Geller',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 30,
        },
        {
            id: 7,
            firstName: 'Rachel',
            lastName: 'Green',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 70,
        },
        {
            id: 8,
            firstName: 'Monica',
            lastName: 'Geller',
            role: 'LPN',
            status: 'Inactive',
            lastShift: 'Jan 6, 2023',
            nextShift: 'Jan 10, 2023',
            utilization: 40,
        },
        {
            id: 9,
            firstName: 'Joe',
            lastName: 'Tribiani',
            role: 'LPN',
            status: 'Active',
            lastShift: 'Jan 1, 2023',
            nextShift: 'Jan 23, 2023',
            utilization: 90,
        },
        {
            id: 10,
            firstName: 'Pheobe',
            lastName: 'Buffey',
            role: 'RN',
            status: 'Active',
            lastShift: 'Jan 4, 2023',
            nextShift: 'Jan 4, 2023',
            utilization: 97,
        },
    ];

    const cardsData = useMemo(
        () => [
            {
                title: 'Total Employees',
                iconName: 'people-group',
                totalCount: 12,
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Scheduled Employees',
                iconName: 'calender-check',
                totalCount: 35,
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expirations',
                iconName: 'calender-todo',
                totalCount: 40,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );
    return (
        <>
            <WidgetCardsContainer>
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
            <SearchFilter />
            <SwxDataGrid rows={rows} columns={columns} />
        </>
    );
}
