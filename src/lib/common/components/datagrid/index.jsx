'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { DataGridStyles, styles } from './datagrid.styles';

export default function SwxDataGrid({ rows, columns, loading, onSelectionChange, checkboxSelection, ...rest }) {
    const dataGridHeight = rows.length * 80 + 56;
    const hasNoData = rows.length === 0;

    return (
        <Box
            sx={{
                height: `${dataGridHeight}px`,
                width: '100%',
            }}>
            {hasNoData && !loading ? (
                <div style={styles.noData}>No Data Found</div>
            ) : (
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
            )}
        </Box>
    );
}
