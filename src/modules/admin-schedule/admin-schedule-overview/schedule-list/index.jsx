import { Stack, Avatar, IconButton } from '@mui/material';
import { capitalize } from 'lodash';

import { SwxDataGrid, SwxChip, SwxTypography, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import SwxPagination from '@/lib/common/layout/pagination';

export default function ScheduleList({ scheduleData, isLoading }) {
    const menuOptions = ({ id }) => {
        return [
            {
                label: 'Edit',
                action: () => {
                    // console.log('send message clicked', id);
                },
            },
            {
                label: 'Delete',
                action: () => {
                    // console.log('send message clicked', id);
                },
            },
        ];
    };

    const columns = [
        {
            field: 'fullName',
            headerName: 'Employee',
            width: 250,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Avatar sx={{ width: 32, height: 32 }}>{`${params.row.name.split('')[0] || ''}`}</Avatar>
                    <SwxTypography>{`${params.row.name || ''}`}</SwxTypography>
                </Stack>
            ),
            align: 'left',
            filterable: false,
            // flex: 1,
            minWidth: 100,
        },
        {
            field: 'certificate',
            headerName: 'Cert',
            width: 70,
            align: 'left',
            minWidth: 120,
            sortable: false,
            filterable: false,
            renderCell: params => (
                <SwxChip label={params.value || 'RN'} color='white' background='swxBlue' size='semiMedium' />
            ),
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 100,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Jan 23, 2023',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'station',
            headerName: 'Station',
            width: 150,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Some station',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
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
            field: 'time',
            headerName: 'Time',
            width: 180,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || '05:00 AM - 05:00 AM',
            filterable: false,
            minWidth: 150,
        },
        {
            field: 'id',
            headerName: 'Id',
            width: 80,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => `#${params.value}` || '#89',
            filterable: false,
            minWidth: 60,
        },
        {
            field: 'planned',
            headerName: 'Planned',
            width: 100,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => `${params.value}hrs` || '08hrs',
            filterable: false,
            minWidth: 80,
        },
        {
            field: '',
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

    return (
        <>
            <SwxDataGrid loading={isLoading} rows={scheduleData.records} columns={columns} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminScheduleListPagination'
                style={{ marginBottom: '20px', marginTop: '20px' }}
            />
        </>
    );
}
