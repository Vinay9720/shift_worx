import { Stack, Avatar, IconButton } from '@mui/material';
import { capitalize } from 'lodash';
import { useState } from 'react';
import { useEditShift, useDeleteShift } from '@/hooks/admin-schedule';

import { SwxDataGrid, SwxChip, SwxTypography, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { roleBackground, filledCircleBackground, filledChipBackground } from '@/lib/util';
import SwxPagination from '@/lib/common/layout/pagination';
import moment from 'moment';
import { DynamicPromptModal, OpenShifts, SwxModal } from '@/lib/common/layout';
import ShiftForm from '../add-shift/ShiftForm';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDispatch } from 'react-redux';

export default function ScheduleList({ scheduleData, isLoading }) {
    const { mutate: deleteShift } = useDeleteShift();
    const [employeeId, setEmployeeId] = useState(null);
    const [shiftData, setShiftData] = useState();
    const { mutate: updateShift } = useEditShift(shiftData && shiftData);
    const dispatch = useDispatch();
    const menuOptions = ({
        start,
        end,
        floor,
        cert,
        id,
        shiftId,
        specialities,
        facility,
        startDate,
        certId,
        empName,
    }) => {
        const employeeShiftData = {
            employee: empName,
            id,
            facility_id: facility,
            shift_id: shiftId,
            certificate_ids: certId,
            speciality_ids: specialities,
            station: floor,
            start_date: startDate,
            start_time: start,
            end_time: end,
            role: cert,
        };
        return [
            {
                label: 'Edit Shift',
                action: async e => {
                    e.preventDefault();
                    setShiftData(employeeShiftData);
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: async e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'deleteShiftModal' }));
                    setEmployeeId(shiftId);
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
            width: 250,
            renderCell: params => {
                const unAssigned = params.row.name === null;
                return unAssigned ? (
                    <OpenShifts />
                ) : (
                    <Stack direction='row' spacing={1} alignItems='center' style={{ cursor: 'pointer' }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${params.row.name
                            .split('')[0]
                            .toUpperCase()}`}</Avatar>
                        <SwxTypography
                            color='swxBlack'
                            size='semiMedium'
                            weight='semiBold'
                            className='Manrope'>{`${params.row.name}`}</SwxTypography>
                    </Stack>
                );
            },
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
            renderCell: params => {
                const background = roleBackground(params.row.certificate.abbreviation);
                return (
                    <SwxChip
                        label={params.row.certificate.abbreviation || 'RN'}
                        color='white'
                        background={background}
                        size='semiMedium'
                    />
                );
            },
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 100,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => {
                const inputDate = params.value;
                const formattedDate = moment(inputDate, 'MM-DD-YYYY').format('MMM D, YYYY');
                return formattedDate || 'Jan 23, 2023';
            },
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
            valueGetter: params => params.value.toUpperCase() || 'Some station',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            renderCell: params => {
                const circleBackground = filledCircleBackground(params.value);
                const chipBackground = filledChipBackground(params.value);
                return (
                    <SwxChip
                        icon={<Icon name='circle' fill={circleBackground} height={8} width={8} cx='4' cy='4' r='3.5' />}
                        label={capitalize(params.value)}
                        kind='rounded'
                        color='swxBlack'
                        background={chipBackground}
                        size='semiMedium'
                        leftPadding='4px'
                    />
                );
            },
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
            valueGetter: params => {
                return params.value || '05:00 AM - 05:00 AM';
            },
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
            valueGetter: params => `${params.value}hrs`,
            filterable: false,
            minWidth: 80,
        },
        {
            field: '',
            headerName: '',
            width: 10,
            sortable: false,
            filterable: false,
            renderCell: params => {
                const [startTime, endTime] = params.row.time.split(' - ');
                const parsedStartTime = moment(startTime, 'hh:mma').format('hh:mma');
                const parsedEndTime = moment(endTime, 'hh:mma').format('hh:mma');
                return (
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
                            empName: params.row.name,
                            id: params.id,
                            facility: params.row.facility,
                            shiftId: params.row.shift_id,
                            certId: params.row.certificate.id,
                            specialities: params.row.specialities,
                            floor: params.row.station,
                            startDate: params.row.date,
                            start: parsedStartTime,
                            end: parsedEndTime,
                            cert: params.row.certificate.abbreviation,
                        })}
                    />
                );
            },
        },
    ];

    return (
        <>
            <SwxDataGrid checkboxSelection loading={isLoading} rows={scheduleData.records} columns={columns} />
            <DynamicPromptModal
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal'>
                <ShiftForm modalName='editShiftModal' title='Edit' employeeShiftData={shiftData} action={updateShift} />
            </SwxModal>
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminScheduleListPagination'
                style={{ marginBottom: '20px', marginTop: '20px' }}
            />
        </>
    );
}
