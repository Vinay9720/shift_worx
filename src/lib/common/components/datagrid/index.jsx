'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { DataGridStyles } from './datagrid.styles';

export default function SwxDataGrid({ rows, columns, loading, onSelectionChange, checkboxSelection, ...rest }) {
    const dataGridHeight = rows.length * 80 + 56;

    return (
        <Box sx={{ height: `${dataGridHeight}px`, width: '100%' }}>
            <DataGrid
                sx={DataGridStyles}
                getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd')}
                rows={rows}
                columns={columns}
                checkboxSelection={checkboxSelection}
                onRowSelectionModelChange={onSelectionChange}
                hideFooter
                loading={loading}
                disableRowSelectionOnClick
                {...rest}
            />
        </Box>
    );
}
