import styled from 'styled-components';

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 100%;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.verySmall} !important;
    `}
`;

export const StyledBorderContainerSecondary = styled.div`
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.small};
    `}
`;
export const styles = {
    chooseFileButton: {
        width: '170px',
        '@media (max-width: 600px)': {
            width: '100%',
        },
    },
};
