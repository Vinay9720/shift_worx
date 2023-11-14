import { SwxTypography, SwxButton, SwxDataGrid, SwxPopupMenu } from '@/lib/common/components';
import { Stack, IconButton, Avatar } from '@mui/material';
import { Icon } from '@/lib/common/icons';

export default function EmployeeExpirationsWidget() {
    const rows = [
        {
            id: 1,
            name: 'Jack',
            item_expiring: "Driver's License",
            expiration_date: 'Jan 3, 2023',
        },
        {
            id: 2,
            name: 'John',
            item_expiring: 'RN License',
            expiration_date: 'Jan 3, 2023',
        },
        {
            id: 3,
            name: 'Travis',
            item_expiring: "Driver's License",
            expiration_date: 'Jan 3, 2023',
        },
        {
            id: 4,
            name: 'Mark',
            item_expiring: 'RN License',
            expiration_date: 'Jan 3, 2023',
        },
        {
            id: 5,
            name: 'Steve',
            item_expiring: 'RN License',
            expiration_date: 'Jan 3, 2023',
        },
        {
            id: 6,
            name: 'Larry',
            item_expiring: "Driver's License",
            expiration_date: 'Jan 3, 2023',
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
            field: 'name',
            headerName: 'Employee',
            width: 330,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                        params.row.name.split('')[0].toUpperCase() || ''
                    }`}</Avatar>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold'>{`${
                        params.row.name || ''
                    }`}</SwxTypography>
                </Stack>
            ),
            align: 'left',
            filterable: false,
            flex: 1,
            minWidth: 120,
        },
        {
            field: 'item_expiring',
            headerName: 'Item Expiring',
            width: 200,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <Stack direction='row' spacing={1}>
                        <Icon name='alert' height={20} width={20} />
                        <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='extraThin'>
                            {params.value}
                        </SwxTypography>
                    </Stack>
                );
            },
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
            renderCell: params => {
                return (
                    <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='extraThin'>
                        {params.value || 'Jan 28, 2023'}
                    </SwxTypography>
                );
            },
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
        <Stack direction='column' sx={{ my: 5, ml: 5 }}>
            <Stack justifyContent='space-between' direction='row'>
                <SwxTypography size='semiLarge' color='swxSlightlyBlack' weight='bold'>
                    Employee Expirations
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
