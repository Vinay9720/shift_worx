export const styles = {
    mainContainer: {
        height: '40px',
        '@media(max-width:750px)': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    subPaginationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media(max-width:750px)': {
            marginTop: '16px',
        },
    },
    previousNextButtons: {
        display: 'block',
        '@media(max-width:750px)': {
            display: 'none',
        },
    },
    responsivePreviousNextButtons: {
        display: 'none',
        '@media(max-width:750px)': {
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '16px',
            borderBottom: '1px solid #E6E8E9',
        },
    },
    text: {
        '@media(max-width:450px)': {
            fontSize: '13px',
        },
    },
};
