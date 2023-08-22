'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.div`
    display: flex;
    padding: 0.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-between;
    align-items: center;
    height: 4.6rem;
    background-color: ${({ theme }) => theme.backgroundColor.blue};
`;

export const StyledLink = styled(Link)``;

export const StyledLinkContainer = styled.button`
    display: flex;
    gap: 6px;
    align-items: center;
    margin-right: 23px;
    padding: 7px 10px;
    background-color: ${({ theme, active }) => active && theme.backgroundColor.darkBlue};
    color: ${({ theme, active }) => (active ? theme.fontColor.white : theme.fontColor.lightBlue)};
    font-weight: ${({ theme, active }) => active && theme.fontWeight.semiBold};
    border-radius: ${({ theme, active }) => active && theme.borderRadius.large};
`;
