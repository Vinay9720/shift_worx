'use client';

import styled from 'styled-components';

export const CardWrapper = styled.div`
    ${({ theme }) => `
    border-radius: ${theme.borderRadius.small};
    border: 1px solid ${theme.borderColor.lightGray};
    box-shadow: ${theme.boxShadow.grayShadow};
  `}
`;

export const CardContainer = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const UpperContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LowerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const PillContainer = styled.div`
    display: flex;
    height: fit-content;
    border-radius: 300px;
    ${({ theme, color }) => `
    background: ${theme.backgroundColor[color]};
  `}
`;

export const StyledH1 = styled.h1`
    ${({ theme }) => `
    color: ${theme.fontColor.swxBlack};
    font-size: ${theme.fontSize.largest};
    font-weight: ${theme.fontWeight.thin};
  `}
`;

export const StyledTitle = styled.p`
    ${({ theme }) => `
    color: ${theme.fontColor.lightGray};
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.thin};
  `}
`;

export const StyledText = styled.p`
    ${({ theme, color }) => `
    color: ${theme.fontColor[color || 'lightGray']};
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.thin};
  `}
`;

export const StyledTopRightSlot = styled.div`
    display: flex;
    padding: 2px 0%;
    align-items: center;
`;
