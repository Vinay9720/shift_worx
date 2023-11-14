'use client';

import styled from 'styled-components';

export const LinkWrapper = styled.div`
    display: flex;
    // padding-bottom: 7px;
    border-bottom: 1px solid #e6e8e9;
    color: #666666;
    @media (max-width: 500px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const StyledTab = styled.button`
    display: flex;
    margin-right: 1.5rem;
    font-size: 14px;
    font-weight: 600;
    color: #838a91;
    cursor: pointer;

    ${({ active }) =>
        active &&
        `
    padding-bottom: 0.4rem;
    border-bottom: 2px solid #027EF4;
    color: #030303;
  `}
`;
