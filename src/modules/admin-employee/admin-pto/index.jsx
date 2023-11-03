'use client';

import { useMemo, useState } from 'react';
import { Avatar, Stack, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { WidgetCard, SwxPagination, SwxModal, DynamicPromptModal } from '@/lib/common/layout';
import { Icon } from '@/lib/common/icons';
import { SwxDataGrid, SwxTypography, SwxChip, SwxPopupMenu } from '@/lib/common/components';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useAddNote } from '@/hooks/admin-note';
import { roleBackground, statusChipBackground, statusCircleBackground } from '@/lib/util';
import { useApprovePto, useEditPto, useDenyPto, usePto } from '@/hooks/admin-employee';
import AdminEmployeeService from '@/services/admin-employee';

import { WidgetCardsContainer } from './admin-pto.styles';
import SearchFilter from './SearchFilter';

import NoteForm from '../add-note/noteForm';
import PtoForm from '../add-pto/PtoForm';
import AddRequest from '../add-pto';

export default function AdminPto() {
    const [employeeId, setEmployeeId] = useState();
    const [employeeData, setEmployeeData] = useState();
    const dispatch = useDispatch();
    const { mutate: addNote } = useAddNote();
    const { mutate: editPto } = useEditPto(employeeId);
    const { mutate: approvePto } = useApprovePto();
    const { mutate: denyPto } = useDenyPto();
    const { data: ptoData, isLoading, isSuccess } = usePto();

    const menuOptions = ({ id }) => {
        return [
            {
                label: 'Note',
                action: () => {
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                    setEmployeeId(id);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='notes' height={20} width={20} />,
            },
            {
                label: 'Edit',
                action: async () => {
                    setEmployeeId(id);
                    const response = await AdminEmployeeService.fetchPtoById(id);
                    const data = await response.data;
                    setEmployeeData(data);
                    dispatch(openModal({ modalName: 'editPtoModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={20} width={20} />,
            },
            {
                label: 'Approve Request',
                action: () => {
                    setEmployeeId(id);
                    dispatch(openModal({ modalName: 'approveRequestModal' }));
                },
                icon: <Icon name='approve-request' height={26} width={22} />,
            },
            {
                label: 'Deny Request',
                action: () => {
                    setEmployeeId(id);
                    dispatch(openModal({ modalName: 'denyRequestModal' }));
                },
                color: 'red',
                icon: <Icon name='deny-request' height={26} width={26} />,
            },
        ];
    };
    const employees = useMemo(() => {
        if (isSuccess) {
            return (
                ptoData &&
                ptoData.recordData.map(user => {
                    const starttime = user.start_time;
                    const endtime = user.end_time;
                    const startTime = moment(starttime);
                    const endTime = moment(endtime);
                    const formattedOutput = `${startTime.format('M/D')} - ${startTime.format(
                        'h:mm A'
                    )} - ${endTime.format('h:mm A')}`;
                    return {
                        id: user.id,
                        employee: user.name || 'Temporary Employee',
                        role: user.role || 'RN',
                        status: user.state.split('')[0].toUpperCase() + user.state.slice(1),
                        timeOffRequested: formattedOutput,
                        description: user.description,
                    };
                })
            );
        }
        return [];
    }, [ptoData]);
    const columns = [
        {
            field: 'employee',
            headerName: 'Employee',
            width: 300,
            renderCell: params => (
                <Stack direction='row' spacing={1} alignItems='center' style={{ cursor: 'pointer' }}>
                    {/* onClick={() =>
                        router.push(`/admin/employees/edit-employee/${params.row.id}?step=profile_information`)
                     } */}
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
            flex: 1,
            minWidth: 120,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 120,
            align: 'left',
            minWidth: 120,
            // flex: 1,
            sortable: false,
            filterable: false,
            renderCell: params => {
                const background = roleBackground(params.value);
                return <SwxChip label={params.value} color='white' background={background} size='semiMedium' />;
            },
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            align: 'left',
            minWidth: 120,
            sortable: false,
            filterable: false,
            // flex: 1,
            renderCell: params => {
                const circleBackground = statusCircleBackground(params.value);
                const chipBackground = statusChipBackground(params.value);
                return (
                    <SwxChip
                        icon={<Icon name='circle' fill={circleBackground} height={8} width={8} cx='4' cy='4' r='3.5' />}
                        label={params.value}
                        kind='rounded'
                        color='swxBlack'
                        background={chipBackground}
                        size='semiMedium'
                        leftPadding='4px'
                    />
                );
            },
        },
        {
            field: 'timeOffRequested',
            headerName: 'Time Off Requested',
            width: 174,
            align: 'left',
            flex: 1,
            sortable: false,
            valueGetter: params => params.value || '7/4 - 8:00 AM - 8:00 PM',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 336,
            align: 'left',
            flex: 1,
            sortable: false,
            valueGetter: params => params.value || "I'm requesting time off to attend my brother's wedding",
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
    // const rows = [
    //     { id: 1, employee: 'Katie L', role: 'RN', status: 'Approved', timeOffRequested: '', Description: '' },
    //     { id: 2, employee: 'Henry Ford', role: 'LPN', status: 'Declined', timeOffRequested: '', Description: '' },
    //     { id: 3, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
    // ];
    const cardsData = useMemo(
        () => [
            {
                title: 'Pending Time Off Request',
                iconName: 'restart-line',
                totalCount: 3,
                percentage: '15%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Approved Time Off Request',
                iconName: 'filled-check',
                totalCount: 12,
                percentage: '9%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Declined Time Off Request',
                iconName: 'file-close',
                totalCount: 2,
                percentage: '29%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );

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
                            fill={card.fill}
                        />
                    );
                })}
            </WidgetCardsContainer>
            <SearchFilter actionButton={AddRequest} style={{ marginTop: '3.5rem', marginBottom: '1rem' }} />
            <SwxModal modalName='addNoteModal'>
                <NoteForm modalName='addNoteModal' action={addNote} employee={employeeId} />
            </SwxModal>
            <SwxModal modalName='editPtoModal'>
                <PtoForm modalName='editPtoModal' action={editPto} employee={employeeData} />
            </SwxModal>
            <DynamicPromptModal
                modalName='approveRequestModal'
                entityName='request'
                iconName='approve-check'
                actionName='Approve'
                onConfirm={() => approvePto(employeeId)}
            />
            <DynamicPromptModal
                modalName='denyRequestModal'
                entityName='request'
                iconName='circle-close-delete'
                actionName='Deny'
                onConfirm={() => denyPto(employeeId)}
            />
            <SwxDataGrid columns={columns} rows={employees} isLoading={isLoading} />
            <SwxPagination
                paginationName='adminPtoPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ margin: '20px 0px' }}
            />
        </>
    );
}
