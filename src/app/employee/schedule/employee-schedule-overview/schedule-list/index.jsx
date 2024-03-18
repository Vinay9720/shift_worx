import { IconButton } from '@mui/material';

import { SwxDataGrid, SwxChip, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { roleBackground } from '@/lib/util';
import SwxPagination from '@/lib/common/layout/pagination';
import moment from 'moment';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDispatch } from 'react-redux';
import { setShiftData } from '@/lib/store/slices/admin-schedule-module';

export default function ScheduleList({ scheduleData }) {
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
            field: 'date',
            headerName: 'Date',
            width: 230,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => {
                const inputDate = params.value;
                const formattedDate = moment(inputDate, 'MM-DD-YYYY').format('MMM D, YYYY');
                return formattedDate || 'Jan 23, 2023';
            },
            filterable: false,
            minWidth: 180,
        },
        {
            field: 'certificate',
            headerName: 'Cert',
            width: 190,
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
            field: 'station',
            headerName: 'Station',
            width: 180,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value?.toUpperCase() || 'Some station',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'time',
            headerName: 'Time',
            width: 240,
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
            width: 150,
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
            width: 150,
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
            <SwxDataGrid checkboxSelection rows={scheduleData} columns={columns} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminScheduleListPagination'
                style={{ marginBottom: '20px', marginTop: '20px' }}
            />
        </>
    );
}
