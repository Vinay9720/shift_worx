'use client';

import styled from 'styled-components';

export const ButtonGroupContainer = styled.div`
    display: flex;
    padding: 2px;
    gap: 5px;
    align-items: center;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    color: ${({ theme }) => theme.fontColor.lightGray};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    & button {
        border: none;
        padding: 4px;
        width: 64px;
        cursor: pointer;
        color: ${({ theme }) => theme.fontColor.lightGray};
        font-weight: ${({ theme }) => theme.fontWeight.thin};
        font-size: ${({ theme }) => theme.fontSize.semiMedium};
        background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    }
    .active {
        color: ${({ theme }) => theme.fontColor.swxBlack};
        border: none;
        border-radius: 6px;
        background: ${({ theme }) => theme.backgroundColor.white};
        box-shadow: ${({ theme }) => theme.boxShadow.whiteShadow};
    }
`;
