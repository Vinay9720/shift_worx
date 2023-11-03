import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Avatar, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

// import { openModal } from '@/lib/store/slices/modal-slice';
import { WidgetCard, DynamicPromptModal } from '@/lib/common/layout';
import { SwxDataGrid, SwxChip, SwxTypography, SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { openModal } from '@/lib/store/slices/modal-slice';
import SwxPagination from '@/lib/common/layout/pagination';
import { useExpirations } from '@/hooks/admin-employee';
import { roleBackground } from '@/lib/util/dynamicChipColor';
import { userStatusChipBackground, userStatusCircleBackground, formatDate } from '@/lib/util';

import SearchFilter from './SearchFilter';
import { WidgetCardsContainer } from './admin-expirations.styles';

import AddNote from '../add-note';

export default function AdminExpirations() {
    const { data: expirationsData, isLoading, isSuccess } = useExpirations();
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();

    const expirations = useMemo(() => {
        if (isSuccess) {
            return expirationsData.expirations;
        }
        return [];
    }, [expirationsData]);

    const menuOptions = ({ id }) => {
        return [
            {
                label: 'Edit',
                action: () => {
                    router.push(`/admin/employees/edit-employee/${id}?step=certificates`);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Note',
                action: e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                    setSelectedEmployee({ employee: { profileable_id: id } });
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='paper' height={14} width={14} />,
            },
        ];
    };

    const columns = [
        {
            field: 'name',
            headerName: 'Employee',
            width: 330,
            renderCell: params => (
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        router.push(`/admin/employees/edit-employee/${params.row.nurse_id}?step=certificates`)
                    }>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9' }}>{`${
                        params.row.name.split('')[0].toUpperCase() || ''
                    }`}</Avatar>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold'>{`${
                        params.row.name || ''
                    }`}</SwxTypography>
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
            width: 160,
            align: 'left',
            minWidth: 120,
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
            width: 120,
            align: 'left',
            minWidth: 100,
            sortable: false,
            filterable: false,
            // flex: 1,
            renderCell: params => {
                const circleBackground = userStatusCircleBackground(params.value);
                const chipBackground = userStatusChipBackground(params.value);
                return (
                    <SwxChip
                        icon={<Icon name='circle' fill={circleBackground} height={8} width={8} cx='4' cy='4' r='3.5' />}
                        label={params.value || 'Inactive'}
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
            field: 'item_expiring',
            headerName: 'Item Expiring',
            width: 200,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <Stack direction='row' spacing={1}>
                        <Icon name='alert' height={20} width={20} />
                        <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin'>
                            {params.value}
                        </SwxTypography>
                    </Stack>
                );
            },
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'expiration_date',
            headerName: 'Expiration Date',
            width: 220,
            align: 'left',
            // flex: 1,
            sortable: false,
            renderCell: params => {
                return (
                    <SwxTypography color='swxBlack' size='semiMedium' weight='extraThin'>
                        {formatDate(params.value, 'MMM D, YYYY') || 'Jan 28, 2023'}
                    </SwxTypography>
                );
            },
            filterable: false,
            minWidth: 120,
        },
        {
            field: 'nurse_id',
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
                title: 'Expired',
                iconName: 'paper-with-circle-back-slash',
                totalCount: expirationsData ? expirationsData.kpiData.expired : '0',
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expiring this Week',
                iconName: 'calender-week',
                totalCount: expirationsData ? expirationsData.kpiData.week_expirations : '0',
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expiring this Month',
                iconName: 'calender-month',
                totalCount: expirationsData ? expirationsData.kpiData.month_expirations : '0',
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        [expirationsData]
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
                modalName='deleteExpirationModal'
                entityName='Expiration'
                onConfirm={() => console.log('deleted')}
            />
            <SearchFilter
                actionButton={<AddNote hideButton employee={selectedEmployee} />}
                style={{ marginTop: '3.5rem', marginBottom: '1rem' }}
            />
            <SwxDataGrid rows={expirations} columns={columns} getRowId={row => row.nurse_id} loading={isLoading} />
            <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminExpirationsPagination'
                style={{ marginBottom: '20px' }}
            />
        </>
    );
}
