import styled from 'styled-components';

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 100%;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.verySmall} !important;
    `}
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
export const StyledLoaderContainer = styled.div`
    margin-bottom: 3rem;
    margin-top: -1rem;
`;
