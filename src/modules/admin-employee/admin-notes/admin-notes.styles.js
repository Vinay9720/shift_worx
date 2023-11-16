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
        '@media(max-width:700px)': {
            flexDirection: 'column',
            gap: '16px',
        },
    },
    subContainer: {
        width: '80%',
        display: 'flex',
        gap: '16px',
        '@media(max-width:1000px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },
    inputField: {
        width: '17rem',
        '@media(max-width:900px)': {
            width: '100%',
        },
    },
    selectField: {
        width: '7.5rem',
        '@media(max-width:900px)': {
            width: '100%',
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
    datesContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        '@media(max-width:900px)': {
            flexDirection: 'column',
        },
    },
    datesSubContainer: {
        width: '150px',
        '@media(max-width:900px)': {
            width: '100%',
        },
    },
};
