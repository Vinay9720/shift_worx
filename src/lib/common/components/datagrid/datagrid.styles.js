import styled from 'styled-components';

export const DataGridStyles = {
    width: '100%',
    '--DataGrid-overlayHeight': '300px',
    '.MuiDataGrid-columnSeparator': {
        display: 'none',
    },
    '&.MuiDataGrid-root': {
        border: 'none',
        fontFamily: 'var(--font-Manrope) !important',
        color: '#030303',
        fontWeight: '500',
    },
    '.MuiDataGrid-columnHeader': {
        borderBottom: '1px solid #838A91',
        color: '#838A91',
        justifyContent: 'flex-start',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'flex-start',
    },
    '.MuiDataGrid-cell': {
        border: 'none',
    },
    '.MuiDataGrid-row.Mui-odd': {
        backgroundColor: '#F6FAFD',
    },
    '& .MuiDataGrid-row': {
        height: '80px !important',
        maxHeight: '80px !important',
        alignItems: 'center',
    },
    '& .MuiCheckbox-root svg': {
        height: '24px',
        width: '24px',
        border: '1px solid #E6E8E9',
        borderRadius: '4px',
        backgroundColor: '#FFFFFF',
    },
    '& .MuiCheckbox-root svg path': {
        display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#E65889',
        borderColor: '#FFFFFF',
        path: {
            fill: 'white', // Set the fill color to white
            display: 'block', // Display the tick icon
        },
    },
};
export const styles = {
    noData: {
        marginTop: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export const StyledGridOverlay = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .ant-empty-img-1': {
        fill: '#aeb8c2',
    },
    '& .ant-empty-img-2': {
        fill: '#f5f5f7',
    },
    '& .ant-empty-img-3': {
        fill: '#dce0e6',
    },
    '& .ant-empty-img-4': {
        fill: '#fff',
    },
    '& .ant-empty-img-5': {
        fillOpacity: '0.8',
        fill: '#f5f5f5',
    },
});
