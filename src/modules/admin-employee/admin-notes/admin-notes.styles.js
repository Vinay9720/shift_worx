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
        '@media(max-width:970px)': {
            flexDirection: 'column',
        },
    },
    filtersContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        '@media(max-width:900px)': {
            gap: '30px',
        },
    },
    datesContainer: {
        width: '400px',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        '@media(max-width:600px)': {
            flexDirection: 'column',
        },
    },
    datesSubContainer: {
        width: '170px',
        '@media(max-width:600px)': {
            width: '68%',
        },
    },
};
