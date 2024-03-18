/* eslint-disable camelcase */
import { IconButton } from '@mui/material';
import { useMemo } from 'react';

import { SwxDataGrid, SwxChip, SwxPopupMenu } from '@/lib/common/components';
import { capitalize } from 'lodash';
import { Icon } from '@/lib/common/icons';
import { statusChipBackground, statusCircleBackground } from '@/lib/util';
import SwxPagination from '@/lib/common/layout/pagination';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDispatch } from 'react-redux';
import { setShiftData } from '@/lib/store/slices/admin-schedule-module';
import { WidgetCard } from '@/lib/common/layout';
import { WidgetCardsContainer } from '@/modules/admin-home/admin-home.styles';
import SearchFilter from '../SearchFilter';

const ptoData = [
    {
        id: 1,
        description: "I'm requesting time off to attend my brother's wedding",
        status: 'Approved',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 2,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 3,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Pending',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 4,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Pending',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 5,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Pending',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 6,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Pending',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 7,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Pending',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 8,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 9,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 10,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 11,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
    {
        id: 12,
        station: "I'm requesting time off to attend my brother's wedding",
        status: 'Declined',
        time: '7/4 - 8:00 AM - 8:00 PM',
    },
];

export default function EmployeePTO() {
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

    const cardsData = useMemo(
        () => [
            {
                title: 'Total shifts',
                iconName: 'people-group',
                totalCount: 120,
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
                title: 'Open Shifts',
                iconName: 'calender-todo',
                totalCount: 40,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );

    const columns = [
        {
            field: 'time',
            headerName: 'Time',
            width: 300,
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
            field: 'status',
            headerName: 'Status',
            width: 380,
            align: 'left',
            // flex: 1,
            renderCell: params => {
                const circleBackground = statusCircleBackground(params.value);
                const chipBackground = statusChipBackground(params.value);
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
            field: 'description',
            headerName: 'Description',
            width: 450,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value?.toUpperCase() || 'Some station',
            filterable: false,
            minWidth: 90,
        },
        {
            field: '',
            headerName: '',
            width: 10,
            sortable: false,
            filterable: false,
            renderCell: params => {
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
                        })}
                    />
                );
            },
        },
    ];

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
            <SearchFilter />
            <div style={{ marginBottom: '2rem' }}>
                <SwxDataGrid checkboxSelection rows={ptoData} columns={columns} />
                <SwxPagination
                    itemsPerPageOptions={['5', '10', '15']}
                    paginationName='adminScheduleListPagination'
                    style={{ marginBottom: '20px', marginTop: '20px' }}
                />
            </div>
        </>
    );
}
