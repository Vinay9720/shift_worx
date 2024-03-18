/* eslint-disable camelcase */
import { IconButton, Stack, Avatar } from '@mui/material';

import { SwxDataGrid, SwxChip, SwxPopupMenu, SwxTypography } from '@/lib/common/components';
import { capitalize } from 'lodash';
import { Icon } from '@/lib/common/icons';
import { roleBackground, userStatusChipBackground, userStatusCircleBackground } from '@/lib/util';
import SwxPagination from '@/lib/common/layout/pagination';
import moment from 'moment';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDispatch } from 'react-redux';
import { setShiftData } from '@/lib/store/slices/admin-schedule-module';

const shiftBoardData = [
    {
        id: 1,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 2,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 3,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 4,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 5,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 6,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 7,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 8,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 9,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 10,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 11,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 12,
        employee: 'Navin Malviya',
        certificate: 'RN',
        date: 'Jan 4, 2023',
        station: 'TCU',
        status: 'Unfilled',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
];

export default function EmployeeShiftBoard() {
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
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const columns = [
        {
            field: 'employee',
            headerName: 'Employee',
            width: 220,
            renderCell: params => {
                const employee = params.value.split(' ');
                const first_name = employee[0];
                const last_name = employee[0];
                return (
                    <Stack direction='row' spacing={1} alignItems='center' style={{ cursor: 'pointer' }}>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                            first_name.split('')[0].toUpperCase() || ''
                        }`}</Avatar>
                        <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold' className='Manrope'>{`${
                            first_name || ''
                        } ${last_name || ''}`}</SwxTypography>
                    </Stack>
                );
            },
            align: 'left',
            filterable: false,
            // flex: 1,
            minWidth: 120,
        },
        {
            field: 'certificate',
            headerName: 'Cert',
            width: 100,
            align: 'left',
            minWidth: 80,
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
            width: 120,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => {
                const inputDate = params.value;
                const formattedDate = moment(inputDate, 'MM-DD-YYYY').format('MMM D, YYYY');
                return formattedDate || 'Jan 23, 2023';
            },
            filterable: false,
            minWidth: 100,
        },
        {
            field: 'station',
            headerName: 'Station',
            width: 90,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value?.toUpperCase() || 'Some station',
            filterable: false,
            minWidth: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            // flex: 1,
            renderCell: params => {
                const circleBackground = userStatusCircleBackground(params.value);
                const chipBackground = userStatusChipBackground(params.value);
                return (
                    <SwxChip
                        icon={<Icon name='circle' fill={circleBackground} height={8} width={8} cx='4' cy='4' r='3.5' />}
                        label={capitalize(params.value || 'Inactive')}
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
            width: 220,
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
            field: 'shift_id',
            headerName: 'Shift ID',
            width: 120,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => `${params.value}` || '#89',
            filterable: false,
            minWidth: 100,
        },
        {
            field: 'hours',
            headerName: 'Hours',
            width: 120,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value,
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
            <SwxDataGrid checkboxSelection rows={shiftBoardData} columns={columns} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminScheduleListPagination'
                style={{ marginBottom: '20px', marginTop: '20px' }}
            />
        </>
    );
}
