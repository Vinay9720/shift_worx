'use client';

import { IconButton } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { SwxPagination, DynamicPromptModal } from '@/lib/common/layout';
import { Icon } from '@/lib/common/icons';
import { SwxDataGrid, SwxSwitch, SwxTypography } from '@/lib/common/components';
import SearchFilter from './searchFilter';

import { openModal } from '@/lib/store/slices/modal-slice';
import { useTemplates } from '@/hooks/admin-schedule-templates';
import { setTemplateTobePublished } from '@/lib/store/slices/admin-schedule-templates-module';
import PublishScheduleTemplate from './schedule-templates/publish-schedule-template';

export default function AdminScheduleTemplates() {
    const dispatch = useDispatch();
    const { data: templatesData, isLoading: templatesLoading, isSuccess } = useTemplates();

    const templates = useMemo(() => {
        if (isSuccess) {
            return templatesData.templates;
        }
        return [];
    }, [templatesData]);

    const columns = [
        {
            field: 'templateName',
            headerName: 'Template Name',
            width: 180,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || 'Week #1 Schedule'}
                    </SwxTypography>
                );
            },
            align: 'left',
            filterable: false,
        },
        {
            field: 'total_shifts',
            headerName: 'Total Shift',
            width: 100,
            align: 'left',
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || 32}
                    </SwxTypography>
                );
            },
        },
        {
            field: 'unfilled_shifts',
            headerName: 'Total Unfilled Shift',
            width: 150,
            align: 'left',
            // minWidth: 120,
            sortable: false,
            filterable: false,
            // flex: 1,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || 8}
                    </SwxTypography>
                );
            },
        },
        {
            field: 'template_week',
            headerName: 'Template Week(s)',
            width: 150,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || '1 Week'}
                    </SwxTypography>
                );
            },
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'scheduled_employees',
            headerName: 'Scheduled Employees',
            width: 170,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || 32}
                    </SwxTypography>
                );
            },
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'scheduled_hours',
            headerName: 'Schedulable Hours',
            width: 160,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value || '32hrs'}
                    </SwxTypography>
                );
            },
            filterable: false,
            // minWidth: 120,
        },
        {
            field: 'publish',
            headerName: 'Publish',
            width: 80,
            align: 'left',
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    <SwxSwitch
                        onChange={event => {
                            if (event.target.checked) {
                                setTemplateTobePublished(params.row);
                                dispatch(openModal({ modalName: 'publishScheduleTemplateModal' }));
                            }
                        }}
                        checked={params.row.publish}
                        disabled={params.row.status === 'draft'}
                    />
                );
            },
        },
        {
            field: 'status',
            headerName: 'Draft',
            width: 70,
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    <SwxTypography
                        color={params.row.status !== 'draft' ? 'swxBlack' : 'blue'}
                        size='semiMedium'
                        weight='extraThin'
                        className='Manrope'>
                        {params.value === 'draft' ? 'Yes' : 'No'}
                    </SwxTypography>
                );
            },
        },
        {
            field: 'edit',
            headerName: '',
            width: 15,
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
            width: 15,
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

    return (
        <>
            <SearchFilter
                //  actionButton={AddRequest}
                style={{ marginTop: '3.5rem', marginBottom: '1rem' }}
            />
            <PublishScheduleTemplate />
            <SwxDataGrid checkboxSelection columns={columns} rows={templates || []} loading={templatesLoading} />
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
