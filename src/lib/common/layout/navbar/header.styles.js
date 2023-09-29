'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    padding: 0.25rem;
    justify-content: space-between;
    align-items: center;
    height: 4.6rem;
    max-width: 1280px;
    margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.blue};
`;

export const StyledLinkContainer = styled.button`
    display: flex;
    gap: 6px;
    align-items: center;
    margin-right: 23px;
    padding: 7px 10px;
    border: none;
    background-color: ${({ theme, active }) => (active ? theme.backgroundColor.darkBlue : 'transparent')};
    font-weight: ${({ theme, active }) => (active ? theme.fontWeight.semiBold : theme.fontWeight.extraThin)};
    border-radius: ${({ theme, active }) => active && theme.borderRadius.large};
    a {
        color: ${({ theme, active }) => (active ? theme.fontColor.white : theme.fontColor.lightBlue)};
        text-decoration: none;
    }
`;

export const StyledLink = styled(Link)`
    ${({ theme }) => `
        font-size: ${theme.fontSize.semiMedium};
        font-weight: ${theme.fontWeight.thin};
        color: ${theme.fontColor.white};
        text-decoration: none;
    `}
`;
export const styles = {
    stackOne: {
        display: 'flex',
        alignItems: 'center',
    },
    stackTwo: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stackThree: {
        position: 'absolute',
    },
    stackFour: {
        position: 'relative',
    },
    stackFive: { position: 'absolute', left: '10px' },
};
