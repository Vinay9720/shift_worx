'use client';

import styled from 'styled-components';

export const ListBoxWrapper = styled.div`
    width: 100%;
    ${({ theme, maxHeight }) => `
        border-radius: ${theme.borderRadius.verySmall};
        border: 1px solid ${theme.borderColor.lightGray};
        max-height: ${maxHeight || 'unset'};
        overflow-y: auto;
    `}
    display: flex;
    justify-content: space-between;
    .child {
        flex: 1;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    padding: 10px 12px;
`;

export const ListContainer = styled.div`
    padding: 10px 12px;
    display: flex;
    gap: 3px;
    flex-direction: column;
`;

export const StyledText = styled.p`
    ${({ theme, color }) => `
        color: ${theme.fontColor[color]};
  `}
`;
