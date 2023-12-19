import { useMemo, useState } from 'react';
import { SwxTypography, SwxButton, SwxDataGrid, SwxPopupMenu } from '@/lib/common/components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Stack, IconButton, Avatar } from '@mui/material';
import { Icon } from '@/lib/common/icons';
import { EmployeeExpirationsWidgetWrapper } from './admin-home.styles';
import { useExpirations } from '@/hooks/admin-employee';
import { openModal } from '@/lib/store/slices/modal-slice';
import AddNote from '../admin-employee/add-note';

export default function EmployeeExpirationsWidget() {
    const router = useRouter();
    const { data: expirationsData, isLoading, isSuccess } = useExpirations();
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const dispatch = useDispatch();

    const expirations = useMemo(() => {
        if (isSuccess) {
            return expirationsData.expirations;
        }
        return [];
    }, [expirationsData]);

    const menuOptions = ({ id }) => {
        return [
            {
                label: 'Edit',
                action: () => {
                    router.push(`/admin/employees/edit-employee/${id}?step=certificates`);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Note',
                action: e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                    setSelectedEmployee({ employee: { profileable_id: id } });
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='paper' height={14} width={14} />,
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
                    <SwxTypography className='Manrope' color='swxBlack' size='semiMedium' weight='semiBold'>{`${
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
                        <SwxTypography
                            className='Manrope'
                            color='swxSlightlyBlack'
                            size='semiMedium'
                            weight='extraThin'>
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
                    <SwxTypography className='Manrope' color='swxSlightlyBlack' size='semiMedium' weight='extraThin'>
                        {params.value || 'Jan 28, 2023'}
                    </SwxTypography>
                );
            },
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'nurse_id',
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
            <AddNote hideButton employee={selectedEmployee} />
            <EmployeeExpirationsWidgetWrapper direction='column'>
                <Stack justifyContent='space-between' direction='row'>
                    <SwxTypography className='Manrope' size='semiLarge' color='swxSlightlyBlack' weight='semiBold'>
                        Employee Expirations
                    </SwxTypography>
                    <SwxButton
                        endIcon={<Icon width={12} height={12} name='right-arrow' styles={{ fill: '#1F6FA9' }} />}
                        variant='text'
                        size='small'
                        label='link'
                        onClick={() => router.push('/admin/employees?step=expirations')}
                        weight='bold'>
                        View more
                    </SwxButton>
                </Stack>
                <SwxDataGrid
                    rows={expirations.slice(0, 6).map((row, index) => ({ ...row, id: `${row.nurse_id}_${index}` }))}
                    columns={columns}
                    isRowSelectable={false}
                    checkboxSelection={false}
                    getRowId={row => row.id}
                    loading={isLoading}
                />
            </EmployeeExpirationsWidgetWrapper>
        </>
    );
}
