export const styles = {
    mainContainer: {
        marginTop: '56px',
        marginBottom: '24px',
        justifyContent: 'space-between',
        '@media(max-width:700px)': {
            flexDirection: 'column',
            gap: '16px',
        },
    },
    subContainer: {
        display: 'flex',
        gap: '16px',
        '@media(max-width:900px)': {
            flexDirection: 'column',
        },
    },
    filtersContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        '@media(max-width:900px)': {
            justifyContent: 'space-between',
        },
    },
    inputField: {
        width: '320px',
        '@media(max-width:700px)': {
            width: '100%',
        },
    },
    statusSelectField: {
        width: '260px',
        '@media(max-width:700px)': {
            width: '100%',
        },
    },
    clearAllButton: {
        minWidth: '108px',
        display: 'flex',
        gap: '8px',
        marginLeft: 'none',
        '@media(max-width:600px)': {
            span: {
                display: 'none',
            },
            border: '1px solid #e6e8e9',
            borderRadius: '8px',
            minWidth: '48px',
        },
    },
};
