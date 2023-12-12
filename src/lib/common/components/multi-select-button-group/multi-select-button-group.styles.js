'use client';

import styled from 'styled-components';

export const ButtonGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 9px;
`;

export const StyledButton = styled.button`
    border: none;
    padding: 12px;
    cursor: pointer;
    ${({ theme, selected }) => `
        color: ${theme.fontColor.swxSlightlyBlack};
        background-color: ${selected ? theme.backgroundColor.white : theme.backgroundColor.lightestBlue};
        font-weight: ${theme.fontWeight.thin};
        font-size: ${theme.fontSize.semiMedium};
        font-family: var(--font-Manrope);
        border-radius: ${theme.borderRadius.small};
        ${
            selected &&
            `border: 1px solid ${theme.backgroundColor.blue};
            box-shadow: ${theme.boxShadow.blueShadow};`
        }
    `}
`;
