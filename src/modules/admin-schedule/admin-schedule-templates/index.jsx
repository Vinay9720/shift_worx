'use client';

import { IconButton } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { SwxPagination, DynamicPromptModal } from '@/lib/common/layout';
import { Icon } from '@/lib/common/icons';
import { SwxDataGrid, SwxSwitch, SwxTypography, SwxChip } from '@/lib/common/components';
import SearchFilter from './searchFilter';

import { openModal } from '@/lib/store/slices/modal-slice';
import { useTemplates } from '@/hooks/admin-schedule-templates';
import {
    setTemplateTobePublished,
    setTemplateTobeDeleted,
    setTemplateType,
} from '@/lib/store/slices/admin-schedule-templates-module';
import PublishScheduleTemplate from './schedule-templates/publish-schedule-template';
import { useDeleteTemplate } from '@/hooks/admin-schedule-templates/useDeleteTemplate';
import { useRouter } from 'next/navigation';
import { capitalize } from 'lodash';
import { templateStatusBackground } from '@/lib/util/dynamicChipColor';

export default function AdminScheduleTemplates() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { data: templatesData, isLoading: templatesLoading, isSuccess } = useTemplates();
    const { mutate: deleteTemplate, isLoading: deleteTemplateLoading } = useDeleteTemplate();

    const templates = useMemo(() => {
        if (isSuccess) {
            return templatesData.templates;
        }
        return [];
    }, [templatesData]);

    const columns = [
        {
            field: 'name',
            headerName: 'Template Name',
            width: 180,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {params.value || 'Draft Template'}
                    </SwxTypography>
                );
            },
            align: 'left',
            filterable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: params => {
                const background = templateStatusBackground(params.value);
                return (
                    <SwxChip
                        label={capitalize(params.value) || 'Draft'}
                        color={params.value === 'ready' ? 'white' : 'black'}
                        background={background}
                        size='small'
                    />
                );
            },
        },
        {
            field: 'total_shifts',
            headerName: 'Total Shifts',
            width: 100,
            align: 'left',
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {params.value}
                    </SwxTypography>
                );
            },
        },
        {
            field: 'unfilled_shifts',
            headerName: 'Total Unfilled Shifts',
            width: 150,
            align: 'left',
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {params.value}
                    </SwxTypography>
                );
            },
        },
        {
            field: 'template_week',
            headerName: 'Template Type',
            width: 130,
            align: 'left',
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {capitalize(params.value) || '1 Week'}
                    </SwxTypography>
                );
            },
            filterable: false,
        },
        {
            field: 'scheduled_employees',
            headerName: 'Scheduled Employees',
            width: 170,
            align: 'left',
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {params.value}
                    </SwxTypography>
                );
            },
            filterable: false,
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
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin' className='Manrope'>
                        {params.value}
                    </SwxTypography>
                );
            },
            filterable: false,
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
                                dispatch(setTemplateTobePublished(params.row));
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
            field: 'edit',
            headerName: '',
            width: 15,
            sortable: false,
            filterable: false,
            renderCell: params => {
                return (
                    params.row.status !== 'published' && (
                        <IconButton
                            onClick={() => {
                                router.push(`/admin/schedule/edit-template/${params.row.id}`);
                                dispatch(setTemplateType(capitalize(params.row.template_week) || 'Weekly'));
                            }}>
                            <Icon styles={{ fill: '#838A91' }} name='pencil' height={16} width={16} />
                        </IconButton>
                    )
                );
            },
        },
        {
            field: 'delete',
            headerName: '',
            width: 15,
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: params => (
                <IconButton
                    onClick={() => {
                        dispatch(openModal({ modalName: 'deleteScheduleTemplateModal' }));
                        dispatch(setTemplateTobeDeleted(params.row));
                    }}>
                    <Icon styles={{ fill: '#838A91' }} name='trash' height={16} width={16} />
                </IconButton>
            ),
        },
    ];

    return (
        <>
            <SearchFilter style={{ marginTop: '3.5rem', marginBottom: '1rem' }} />
            <PublishScheduleTemplate action='publish' />
            <SwxDataGrid checkboxSelection columns={columns} rows={templates || []} loading={templatesLoading} />
            <DynamicPromptModal
                loading={deleteTemplateLoading}
                modalName='deleteScheduleTemplateModal'
                entityName='template'
                onConfirm={() => deleteTemplate()}
            />
            <SwxPagination
                paginationName='adminScheduleTemplatesPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ margin: '20px 0px' }}
            />
        </>
    );
}
