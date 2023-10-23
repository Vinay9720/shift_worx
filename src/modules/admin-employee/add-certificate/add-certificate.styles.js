import styled from 'styled-components';

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 357px;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.verySmall} !important;
    `}
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const styles = {
    mainStack: {
        padding: '82px 117px 6px 117px',
        '@media (max-width: 800px)': {
            padding: '24px 64px 6px 64px',
        },
        '@media (max-width: 600px)': {
            padding: '24px 4px 6px 4px',
        },
    },
};
