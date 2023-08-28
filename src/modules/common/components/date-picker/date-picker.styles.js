import styled from 'styled-components';

export const StyledDateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${({ theme, padding }) => `
        padding: ${padding || '17px 16px'};
        color: ${theme.fontColor.swxSlightlyBlack};
        font-size: ${theme.fontSize.semiMedium};
        font-weight: ${theme.fontWeight.thin};
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.small};
  `}
`;
