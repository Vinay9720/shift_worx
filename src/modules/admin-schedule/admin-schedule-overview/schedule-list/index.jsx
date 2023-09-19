// import { Stack, Avatar, IconButton } from '@mui/material';
// import { capitalize } from 'lodash';

// import { SwxDataGrid, SwxChip, SwxTypography, SwxLinearProgress, SwxPopupMenu } from '@/lib/common/components';
// import { Icon } from '@/lib/common/icons';
// import SwxPagination from '@/lib/common/layout/pagination';

export default function ScheduleList({ scheduleData }) {
    console.log('scheduleData', scheduleData);
    // const menuOptions = ({ id }) => {
    //     return [
    //         {
    //             label: 'Delete Employee',
    //             action: () => {
    //                 console.log('send message clicked', id);
    //             },
    //         },
    //     ];
    // };

    // const columns = [
    //     {
    //         field: 'fullName',
    //         headerName: 'Employee',
    //         width: 300,
    //         renderCell: params => (
    //             <Stack direction='row' spacing={1} alignItems='center'>
    //                 <Avatar sx={{ width: 32, height: 32 }}>{`${params.row.first_name.split('')[0] || ''}${
    //                     params.row.last_name.split('')[0] || ''
    //                 }`}</Avatar>
    //                 <SwxTypography>{`${params.row.first_name || ''} ${params.row.last_name || ''}`}</SwxTypography>
    //             </Stack>
    //         ),
    //         align: 'left',
    //         filterable: false,
    //         // flex: 1,
    //         minWidth: 120,
    //     },
    //     {
    //         field: 'role',
    //         headerName: 'Role',
    //         width: 120,
    //         align: 'left',
    //         minWidth: 120,
    //         sortable: false,
    //         filterable: false,
    //         renderCell: params => (
    //             <SwxChip label={params.value || 'RN'} color='white' background='swxBlue' size='semiMedium' />
    //         ),
    //     },
    //     {
    //         field: 'status',
    //         headerName: 'Status',
    //         width: 140,
    //         align: 'left',
    //         renderCell: params => (
    //             <SwxChip
    //                 label={capitalize(params.value)}
    //                 kind='rounded'
    //                 color='swxBlack'
    //                 background='lightPink'
    //                 size='semiMedium'
    //             />
    //         ),
    //         minWidth: 120,
    //         sortable: false,
    //         filterable: false,
    //     },
    //     {
    //         field: 'lastShift',
    //         headerName: 'Last shift',
    //         width: 170,
    //         align: 'left',
    //         // flex: 1,
    //         sortable: false,
    //         valueGetter: params => params.value || 'Jan 23, 2023',
    //         filterable: false,
    //         minWidth: 120,
    //     },
    //     {
    //         field: 'nextShift',
    //         headerName: 'Next Shift',
    //         width: 170,
    //         align: 'left',
    //         // flex: 1,
    //         sortable: false,
    //         valueGetter: params => params.value || 'Jan 28, 2023',
    //         filterable: false,
    //         minWidth: 120,
    //     },
    //     {
    //         field: 'utilization',
    //         headerName: 'Utilization',
    //         width: 330,
    //         align: 'left',
    //         flex: 1,
    //         sortable: false,
    //         filterable: false,
    //         renderCell: params => <SwxLinearProgress value={params.value || 40} />,
    //         minWidth: 120,
    //     },
    //     {
    //         field: 'id',
    //         headerName: '',
    //         width: 10,
    //         sortable: false,
    //         filterable: false,
    //         renderCell: params => (
    //             <SwxPopupMenu
    //                 buttonElement={
    //                     <IconButton>
    //                         <Icon
    //                             styles={{ fill: '#838A91' }}
    //                             name='vertical-menu'
    //                             aria-hidden='true'
    //                             height={15}
    //                             width={10}
    //                         />
    //                     </IconButton>
    //                 }
    //                 options={menuOptions({
    //                     id: params.value,
    //                 })}
    //             />
    //         ),
    //     },
    // ];

    return (
        <>
            {/* <SwxDataGrid rows={employees} columns={columns} isLoading={isLoading} /> */}
            {/* <SwxPagination
                itemsPerPageOptions={['5', '10', '15']}
                paginationName='adminScheduleListPagination'
                style={{ marginBottom: '20px' }}
            /> */}
        </>
    );
}
