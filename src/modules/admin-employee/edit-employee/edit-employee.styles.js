import styled from 'styled-components';

export const CertificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    display: flex;
    gap: 8px;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.verySmall};
        background: ${theme.backgroundColor.lighterGray};
    `}
`;

export const CertificationUpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
    }
`;

export const CertificationUpperRightSection = styled.div`
    display: flex;
    gap: 16px;
`;

export const CertificationLowerSection = styled.div`
    display: flex;
    gap: 48px;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
        gap: 12px;
    }
`;
export const styles = {
    notesSearchField: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media(max-width:900px)': {
            flexDirection: 'column',
            gap: '16px',
        },
    },
    mainContainer: {
        display: 'flex',
        gap: '16px',
        flexDirection: 'row',
        '@media(max-width:900px)': {
            flexDirection: 'column',
        },
    },
    inputField: {
        width: '280px',
        '@media(max-width:800px)': {
            width: '100%',
        },
    },
    typeField: {
        width: '100px',
        '@media(max-width:800px)': {
            width: '100%',
        },
    },
    dateField: {
        width: '165px',
        '@media(max-width:800px)': {
            width: '100%',
        },
    },
    addButton: {
        '@media(max-width:800px)': {
            width: '100%',
        },
    },
    clearAllButton: {
        display: 'flex',
        gap: '8px',
        marginLeft: 'none',
        '@media(max-width:600px)': {
            span: {
                display: 'none',
            },
            border: '1px solid #e6e8e9',
        },
    },
};
export const firstStepStyles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },
    inputContainer: {
        padding: '0px 220px 0px 0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '68px',
        '@media(max-width:700px)': {
            flexDirection: 'column',
            padding: '0px',
        },
    },
    dateInputContainer: {
        width: '56%',
        padding: '0px 220px 0px 0px',
        '@media(max-width:700px)': {
            padding: '0px',
            width: '100%',
        },
    },
};
export const secondStepStyles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },
    inputContainer: {
        padding: '0px 220px 0px 0px',
        width: '836px',
        '@media(max-width:600px)': {
            padding: '0px',
            width: '100%',
        },
    },
    dateContainer: {
        padding: '0px 220px 0px 0px',
        width: '520px',
        '@media(max-width:600px)': {
            padding: '0px',
            width: '100%',
        },
    },
};
