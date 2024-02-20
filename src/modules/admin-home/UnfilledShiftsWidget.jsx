import moment from 'moment';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SwxTypography, SwxButton, SwxDataGrid, SwxPopupMenu } from '@/lib/common/components';
import { Stack, IconButton } from '@mui/material';
import { Icon } from '@/lib/common/icons';
import { UnfilledShiftsWidgetWrapper } from './admin-home.styles';
import { useUnfilledShifts } from '@/hooks/admin-home';
import { setShiftData, setScheduleType } from '@/lib/store/slices/admin-schedule-module';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDeleteShift, useEditShift } from '@/hooks/admin-schedule';
import { DynamicPromptModal, SwxModal } from '@/lib/common/layout';
import ShiftForm from '../admin-schedule/admin-schedule-overview/add-shift/ShiftForm';
import { setStatus } from '@/lib/store/slices/filter/scheduleFilterSlice';
import { useRouter } from 'next/navigation';

export default function UnfilledShiftsWidget() {
    const { mutate: deleteShift, isLoading: loadingState } = useDeleteShift();
    const [employeeId, setEmployeeId] = useState(null);
    const router = useRouter();
    const { mutate: updateShift, isLoading: shiftLoading } = useEditShift();
    const dispatch = useDispatch();
    const { data: unfilledShifts, isLoading, isSuccess } = useUnfilledShifts();

    const formattedShifts = useMemo(() => {
        if (isSuccess) {
            return (
                unfilledShifts &&
                unfilledShifts
                    .filter(shift => shift.date && shift.time) // Filter out shifts with null date or time
                    .map(shift => {
                        const date = moment(shift.date);
                        const time = shift.time.split('-');
                        const startTime = moment(time[0], 'hh:mma');
                        const endTime = moment(time[1], 'hh:mma');
                        const dateTime = `${date.format('M/D')} - ${startTime.format('h:mm A')} - ${endTime.format(
                            'h:mm A'
                        )}`;

                        return {
                            ...shift,
                            dateTime,
                        };
                    })
            );
        }
        return [];
    }, [unfilledShifts, isSuccess]);

    const menuOptions = ({ shift }) => {
        const employeeShiftData = {
            employee: shift.name,
            id: shift.id,
            facility_id: shift?.facility.id,
            shift_id: shift.shift_id,
            certificate_ids: shift?.certificate.id,
            speciality_ids: shift.specialities,
            station: shift.station || 'First Floor',
            start_date: shift.start_date,
            start_time: shift.start_time,
            end_time: shift.end_time,
            role: shift?.certificate.abbreviation,
        };
        return [
            {
                label: 'Edit Shift',
                action: async e => {
                    e.preventDefault();
                    dispatch(setShiftData(employeeShiftData));
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: async e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'deleteShiftModal' }));
                    setEmployeeId(shift.shift_id);
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const columns = [
        {
            field: 'certificate',
            headerName: 'Role',
            width: 150,
            renderCell: params => (
                <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                    {params.value.abbreviation}
                </SwxTypography>
            ),
            align: 'left',
            filterable: false,
            minWidth: 150,
        },
        {
            field: 'dateTime',
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
                        shift: params.row,
                    })}
                />
            ),
        },
    ];

    return (
        <UnfilledShiftsWidgetWrapper direction='column' sx={{ my: 5, mr: 5 }}>
            <DynamicPromptModal
                loading={loadingState}
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal' onCancel={() => dispatch(setShiftData(null))}>
                <ShiftForm
                    modalName='editShiftModal'
                    title='Edit'
                    action={updateShift}
                    loading={isLoading}
                    onCancel={() => dispatch(setShiftData(null))}
                />
            </SwxModal>
            <Stack justifyContent='space-between' direction='row'>
                <SwxTypography className='Manrope' size='semiLarge' color='swxSlightlyBlack' weight='semiBold'>
                    Unfilled Shifts
                </SwxTypography>
                <SwxButton
                    endIcon={<Icon width={12} height={12} name='right-arrow' styles={{ fill: '#1F6FA9' }} />}
                    variant='text'
                    onClick={() => {
                        router.push('/admin/schedule?step=overview');
                        dispatch(setScheduleType('list'));
                        dispatch(setStatus('Unfilled'));
                    }}
                    size='small'
                    label='link'
                    weight='bold'>
                    View more
                </SwxButton>
            </Stack>
            <SwxDataGrid
                columns={columns}
                rows={formattedShifts.slice(0, 6)}
                loading={shiftLoading}
                isRowSelectable={false}
                checkboxSelection={false}
            />
        </UnfilledShiftsWidgetWrapper>
    );
}
