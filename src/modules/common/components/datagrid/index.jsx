import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { DataGridStyles } from './datagrid.styles';

export default function SwxDataGrid({ rows, columns }) {
    return (
        <Box sx={{ height: '510px', width: '100%' }}>
            <DataGrid
                sx={DataGridStyles}
                getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd')}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
