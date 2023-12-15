import styled from 'styled-components';

export const WidgetCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 1rem;
    margin-top: ;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;
export const styles = {
    mainContainer: {
        marginTop: '56px',
        marginBottom: '24px',
        justifyContent: 'space-between',
        '@media(max-width:600px)': {
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
    clearAllButton: {
        width: '108px',
        display: 'flex',
        gap: '8px',
        marginLeft: 'none',
        '@media(max-width:600px)': {
            span: {
                display: 'none',
            },
            border: '1px solid #e6e8e9',
            borderRadius: '8px',
        },
    },
    inputField: {
        width: '320px',
        '@media(max-width:700px)': {
            width: '100%',
        },
    },
    statusSelectField: {
        width: '160px',
        '@media(max-width:700px)': {
            width: '100%',
        },
    },
    multiSelect: {
        width: '126px',
        '@media(max-width:700px)': {
            width: '100%',
        },
        '@media(max-width:400px)': {
            width: '126px',
        },
    },
};
