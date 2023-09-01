import { useMemo } from 'react';
import { Stack, Avatar, IconButton } from '@mui/material';
import { capitalize } from 'lodash';

import { useEmployees } from '@/hooks/admin-employee';

import { WidgetCardsContainer } from './admin-overview.styles';

import { SearchFilter, WidgetCard } from '../common/layout';
import { SwxDataGrid, SwxChip, SwxTypography, SwxLinearProgress, SwxPopupMenu } from '../common/components';
import { Icon } from '../common/icons';
import AddEmployee from '../add-employee';
import SwxPagination from '../common/layout/pagination';

export default function AdminOverview() {
    const { data: overviewData, isSuccess } = useEmployees();

    const employees = useMemo(() => {
        if (isSuccess) {
            return (overviewData.employees || []).map(employee => employee.user);
        }
        return [];
    }, [overviewData]);

    const menuOptions = [
        {
            label: 'Send Message',
            action: () => {
                console.log('send message clicked');
            },
        },
        {
            label: 'Edit Employee',
            action: () => {
                console.log('Edit Employee clicked');
            },
        },
        {
            label: 'Note',
            action: () => {
                console.log('send message clicked');
            },
        },
        {
            label: 'Delete Employee',
            action: () => {
                console.log('send message clicked');
            },
        },
    ];

    const columns = [
        {
            field: 'fullName',
            headerName: 'Employee',
            width: 300,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Avatar sx={{ width: 32, height: 32 }}>{`${params.row.first_name.split('')[0] || ''}${
                        params.row.last_name.split('')[0] || ''
                    }`}</Avatar>
                    <SwxTypography>{`${params.row.first_name || ''} ${params.row.last_name || ''}`}</SwxTypography>
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
            renderCell: params => (
                <SwxChip label={params.value || 'RN'} color='white' background='swxBlue' size='semiMedium' />
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            // flex: 1,
            renderCell: params => (
                <SwxChip
                    label={capitalize(params.value)}
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
            valueGetter: params => params.value || 'Jan 23, 2023',
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
            valueGetter: params => params.value || 'Jan 28, 2023',
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
            renderCell: params => <SwxLinearProgress value={params.value || 40} />,
            minWidth: 120,
        },
        {
            field: 'action',
            headerName: '',
            width: 10,
            sortable: false,
            filterable: false,
            renderCell: () => (
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
                    options={menuOptions}
                />
            ),
        },
    ];

    const cardsData = useMemo(
        () => [
            {
                title: 'Total Employees',
                iconName: 'people-group',
                totalCount: overviewData ? overviewData.paginationData.total_count : 0,
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
        [overviewData]
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
                        />
                    );
                })}
            </WidgetCardsContainer>
            <SearchFilter actionButton={AddEmployee} style={{ marginTop: '3.5rem' }} />
            <SwxDataGrid rows={employees} columns={columns} />
            <SwxPagination itemsPerPageOptions={['5', '10', '15']} style={{ marginBottom: '20px' }} />
        </>
    );
}
