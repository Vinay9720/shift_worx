import { SwxTypography, SwxButton, SwxDataGrid, SwxPopupMenu } from '@/lib/common/components';
import { Stack, Avatar, IconButton } from '@mui/material';
import { Icon } from '@/lib/common/icons';

export default function TimeOffRequestsWidget() {
    const rows = [
        {
            id: 1,
            employee: 'Katie L',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
        {
            id: 2,
            employee: 'Henry Ford',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
        {
            id: 3,
            employee: 'Katie L',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
        {
            id: 4,
            employee: 'Katie L',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
        {
            id: 5,
            employee: 'Henry Ford',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
        {
            id: 6,
            employee: 'Katie L',
            timeOffRequested: '7/4 - 8:00 AM - 8:00 PM',
            note: "I'm requesting time off to attend my brother's wedding",
        },
    ];
    const menuOptions = () => {
        return [
            {
                label: 'Note',
                action: () => null,
                icon: <Icon styles={{ fill: '#838A91' }} name='notes' height={20} width={20} />,
            },
            {
                label: 'Edit',
                action: () => null,
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={20} width={20} />,
            },
            {
                label: 'Delete',
                action: () => null,
                color: 'red',
                icon: <Icon name='trash' height={26} width={26} />,
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
            minWidth: 150,
        },
        {
            field: 'timeOffRequested',
            headerName: 'Time Off Requested',
            width: 300,
            align: 'left',
            sortable: false,
            renderCell: params => (
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='extraThin'>{`${
                    params.value || '7/4 - 8:00 AM - 8:00 PM'
                } `}</SwxTypography>
            ),
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
            renderCell: params => (
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='extraThin'>{`${
                    params.value || "I'm requesting time off to attend my brother's wedding"
                } `}</SwxTypography>
            ),
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

    return (
        <Stack direction='column' sx={{ mb: 5 }}>
            <Stack justifyContent='space-between' direction='row'>
                <SwxTypography size='semiLarge' color='swxSlightlyBlack' weight='bold'>
                    Time Off Requests
                </SwxTypography>
                <SwxButton
                    endIcon={<Icon width={12} height={12} name='right-arrow' styles={{ fill: '#1F6FA9' }} />}
                    variant='text'
                    size='small'
                    label='link'
                    weight='bold'>
                    View more
                </SwxButton>
            </Stack>
            <SwxDataGrid
                columns={columns}
                rows={rows}
                loading={false}
                isRowSelectable={false}
                checkboxSelection={false}
            />
        </Stack>
    );
}
