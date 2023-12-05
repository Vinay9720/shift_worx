'use client';

import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SwxPagination, DynamicPromptModal } from '@/lib/common/layout';
import { Icon } from '@/lib/common/icons';
import { SwxDataGrid, SwxSwitch } from '@/lib/common/components';
import SearchFilter from './searchFilter';

import { openModal } from '@/lib/store/slices/modal-slice';

export default function AdminScheduleTemplates() {
    const dispatch = useDispatch();

    const columns = [
        {
            field: 'templateName',
            headerName: 'Template Name',
            width: 200,
            renderCell: params => params.value || 'Week #1 Schedule',
            align: 'left',
            filterable: false,
            // flex: 1,
            // minWidth: 120,
        },
        {
            field: 'totalShift',
            headerName: 'Total Shift',
            width: 120,
            align: 'left',
            // minWidth: 100,
            // flex: 1,
            sortable: false,
            filterable: false,
            renderCell: params => params.value || 32,
        },
        {
            field: 'totalUnfilledShift',
            headerName: 'Total Unfilled Shift',
            width: 160,
            align: 'left',
            // minWidth: 120,
            sortable: false,
            filterable: false,
            // flex: 1,
            renderCell: params => params.value || 8,
        },
        {
            field: 'templateWeeks',
            headerName: 'Template Week(s)',
            width: 160,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || '1 Week',
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'scheduledEmployees',
            headerName: 'Scheduled Employees',
            width: 180,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 32,
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'schedulableHours',
            headerName: 'Schedulable Hours',
            width: 160,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || '32hrs',
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'publish',
            headerName: 'Publish',
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: () => <SwxSwitch />,
        },
        {
            field: 'edit',
            headerName: '',
            width: 30,
            // flex: 1,
            sortable: false,
            filterable: false,
            renderCell: () => (
                <IconButton>
                    <Icon styles={{ fill: '#838A91' }} name='pencil' height={16} width={16} />
                </IconButton>
            ),
        },
        {
            field: 'delete',
            headerName: '',
            width: 30,
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: () => (
                <IconButton
                    onClick={() => {
                        dispatch(openModal({ modalName: 'deleteScheduleTemplateModal' }));
                    }}>
                    <Icon styles={{ fill: '#838A91' }} name='trash' height={16} width={16} />
                </IconButton>
            ),
        },
    ];
    const rows = [
        { id: 1, employee: 'Katie L', role: 'RN', status: 'Approved', timeOffRequested: '', Description: '' },
        { id: 2, employee: 'Henry Ford', role: 'LPN', status: 'Declined', timeOffRequested: '', Description: '' },
        { id: 3, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 4, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 5, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 6, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 7, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 8, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 9, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
        { id: 10, employee: 'Katie L', role: 'CNA', status: 'Pending', timeOffRequested: '', Description: '' },
    ];

    return (
        <>
            <SearchFilter
                //  actionButton={AddRequest}
                style={{ marginTop: '3.5rem', marginBottom: '1rem' }}
            />

            <SwxDataGrid checkboxSelection columns={columns} rows={rows} />
            <DynamicPromptModal
                modalName='deleteScheduleTemplateModal'
                // actionName='Delete'
                entityName='template'

                // onConfirm={() => denyPto(employeeId)}
            />
            <SwxPagination
                paginationName='adminScheduleTemplatesPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ margin: '20px 0px' }}
            />
        </>
    );
}
