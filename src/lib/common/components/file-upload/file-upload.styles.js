import styled from 'styled-components';

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 357px;
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
