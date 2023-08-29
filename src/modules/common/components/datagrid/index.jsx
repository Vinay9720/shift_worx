import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { DataGridStyles } from './datagrid.styles';

export default function SwxDataGrid({ rows, columns, onSelectionChange }) {
    return (
        <Box sx={{ height: '890px', width: '100%' }}>
            <DataGrid
                sx={DataGridStyles}
                getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd')}
                rows={rows}
                columns={columns}
                checkboxSelection
                onRowSelectionModelChange={onSelectionChange}
                hideFooter
                disableRowSelectionOnClick
            />
        </Box>
    );
}
