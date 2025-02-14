import { useMemo, useState } from 'react';
import { Stack, Avatar, IconButton } from '@mui/material';
import { capitalize, isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { useEmployees, useDelelteEmployee } from '@/hooks/admin-employee';
import { WidgetCard, DynamicPromptModal } from '@/lib/common/layout';
import { SwxDataGrid, SwxChip, SwxTypography, SwxLinearProgress, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import SwxPagination from '@/lib/common/layout/pagination';
import { roleBackground, userStatusChipBackground, userStatusCircleBackground, formatExpirations } from '@/lib/util';

import SearchFilter from './SearchFilter';
import { WidgetCardsContainer } from './admin-overview.styles';

import AddEmployee from '../add-employee';

export default function AdminOverview() {
    const { data: overviewData, isSuccess, isLoading } = useEmployees();
    const { mutate: deleteEmployee, isLoading: loadingState } = useDelelteEmployee();
    const [employeeIdToBeDeleted, setEmployeeIdToBeDeleted] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();

    const employees = useMemo(() => {
        if (isSuccess) {
            return (overviewData.employees || []).map(employee => {
                return { ...employee.user, ...{ expirations: employee.expirations }, ...{ roles: employee.roles[0] } };
            });
        }
        return [];
    }, [overviewData]);

    const menuOptions = ({ id }) => {
        return [
            // {
            //     label: 'Send Message',
            //     action: () => {
            //         console.log('send message clicked');
            //     },
            // },
            {
                label: 'Edit',
                action: () => {
                    router.push(`/admin/employees/edit-employee/${id}?step=profile_information`);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            // {
            //     label: 'Note',
            //     action: () => {
            //         console.log('send message clicked');
            //     },
            // },
            {
                label: 'Delete',
                action: e => {
                    e.preventDefault();
                    setEmployeeIdToBeDeleted(id);
                    dispatch(openModal({ modalName: 'deleteEmployeeModal' }));
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
            renderCell: params => (
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        router.push(`/admin/employees/edit-employee/${params.row.id}?step=profile_information`)
                    }>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                        params.row.first_name.split('')[0].toUpperCase() || ''
                    }`}</Avatar>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold' className='Manrope'>{`${
                        params.row.first_name || ''
                    } ${params.row.last_name || ''}`}</SwxTypography>
                </Stack>
            ),
            align: 'left',
            filterable: false,
            // flex: 1,
            minWidth: 120,
        },
        {
            field: 'roles',
            headerName: 'Role',
            width: 80,
            align: 'left',
            minWidth: 50,
            sortable: false,
            filterable: false,
            renderCell: params => {
                const background = roleBackground(params.value ? params.value[1] : 'RN');
                return (
                    <SwxChip
                        label={params.value ? params.value[1] : 'RN'}
                        color='white'
                        background={background}
                        size='semiMedium'
                    />
                );
            },
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
            field: 'lastShift',
            headerName: 'Last shift',
            width: 120,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Jan 23, 2023',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'nextShift',
            headerName: 'Next Shift',
            width: 120,
            align: 'left',
            // flex: 1,
            sortable: false,
            valueGetter: params => params.value || 'Jan 28, 2023',
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'expirations',
            headerName: 'Expirations',
            width: 200,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <Stack direction='row' spacing={1}>
                        {!isEmpty(params.value) && <Icon name='alert' height={20} width={20} />}
                        <SwxTypography color='swxBlack' size='semiMedium' weight='thin' className='Manrope'>
                            {!isEmpty(params.value) ? formatExpirations(params.value) : 'None'}
                        </SwxTypography>
                    </Stack>
                );
            },
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'utilization',
            headerName: 'Utilization',
            width: 380,
            align: 'left',
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: params => <SwxLinearProgress value={params.value || 40} />,
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

    const cardsData = useMemo(
        () => [
            {
                title: 'Total Employees',
                iconName: 'people-group',
                totalCount: overviewData
                    ? overviewData.paginationData
                        ? overviewData.paginationData.total_count
                        : 0
                    : 0,
                percentage: overviewData ? overviewData.employeePercentage : 0,
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Scheduled Employees',
                iconName: 'calender-check',
                totalCount: overviewData ? overviewData.scheduledEmployee : 0,
                percentage: overviewData ? overviewData.scheduledEmployeePercentage : 0,
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expirations',
                iconName: 'calender-todo',
                totalCount: overviewData ? overviewData.expirations : 0,
                percentage: overviewData ? overviewData.expirationsPercentage : 0,
                badgeArrow: 'down-arrow',
            },
        ],
        [overviewData]
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
                        />
                    );
                })}
            </WidgetCardsContainer>
            <DynamicPromptModal
                loading={loadingState}
                modalName='deleteEmployeeModal'
                entityName='Employee'
                onConfirm={() => deleteEmployee(employeeIdToBeDeleted)}
            />
            <SearchFilter actionButton={AddEmployee} style={{ marginTop: '3.5rem', marginBottom: '1rem' }} />
            <SwxDataGrid rows={employees} checkboxSelection columns={columns} loading={isLoading} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminEmployeesPagination'
                style={{ marginBottom: '20px', marginTop: '15px' }}
            />
        </>
    );
}
