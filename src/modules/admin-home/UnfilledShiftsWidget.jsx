import { SwxTypography, SwxButton, SwxDataGrid, SwxPopupMenu } from '@/lib/common/components';
import { Stack, IconButton } from '@mui/material';
import { Icon } from '@/lib/common/icons';
import { UnfilledShiftsWidgetWrapper } from './admin-home.styles';

export default function UnfilledShiftsWidget() {
    const rows = [
        {
            id: 1,
            role: 'LPN',
            time: '7/4 - 8:00 AM - 8:00 PM',
        },
        {
            id: 2,
            role: 'RN',
            time: '7/4 - 8:00 AM - 8:00 PM',
        },
        {
            id: 3,
            role: 'LPN',
            time: '7/4 - 8:00 AM - 8:00 PM',
        },
        {
            id: 4,
            role: 'RN',
            time: '7/4 - 8:00 AM - 8:00 PM',
        },
        {
            id: 5,
            role: 'LPN',
            time: '7/4 - 8:00 AM - 8:00 PM',
        },
        {
            id: 6,
            role: 'LPN',
            time: '7/4 - 8:00 AM - 8:00 PM',
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
            field: 'role',
            headerName: 'Role',
            width: 150,
            renderCell: params => (
                <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                    {params.value}
                </SwxTypography>
            ),
            align: 'left',
            filterable: false,
            minWidth: 150,
        },
        {
            field: 'time',
            headerName: 'Date/Time',
            width: 250,
            flex: 1,
            align: 'left',
            sortable: false,
            renderCell: params => (
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' className='Manrope' weight='extraThin'>{`${
                    params.value || '7/4 - 8:00 AM - 8:00 PM'
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
        <UnfilledShiftsWidgetWrapper direction='column' sx={{ my: 5, mr: 5 }}>
            <Stack justifyContent='space-between' direction='row'>
                <SwxTypography className='Manrope' size='semiLarge' color='swxSlightlyBlack' weight='semiBold'>
                    Unfilled Shifts
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
        </UnfilledShiftsWidgetWrapper>
    );
}
