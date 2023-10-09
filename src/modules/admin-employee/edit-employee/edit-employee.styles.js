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
        padding: '0px 80px 0px 80px',
        display: 'flex',
        gap: '16px',
        '@media(max-width:900px)': {
            flexDirection: 'column',
            padding: '0px 8px',
        },
    },
    addButton: {
        '@media(max-width:600px)': {
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
        },
    },
};
