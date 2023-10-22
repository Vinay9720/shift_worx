'use client';

import styled from 'styled-components';
import { LinearProgress } from '@mui/material';

export const StyledProgress = styled(LinearProgress)`
    height: 2px !important;
    ${({ theme }) => `
        background-color: ${theme.backgroundColor.lightGray} !important;
    `}

    & .MuiLinearProgress-bar {
        ${({ theme }) => `
            background-color: ${theme.backgroundColor.darkBlue};
        `}
    }
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 784px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 24;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.small};
        color: ${theme.fontColor.swxBlack};
        background-color: ${theme.backgroundColor.white};
        border: 1px solid ${theme.borderColor.lightGray};
        box-shadow: ${theme.boxShadow.grayShadow};
    `}

    @media (max-width: 800px) {
        width: 90%;
        padding: 20px;
        box-sizing: border-box;
        max-height: auto;
        overflow-y: auto;
    }
`;

export const StyledTitle = styled.h1`
    ${({ theme }) => `
        color: ${theme.fontColor.swxSlightlyBlack};
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        font-style: normal;
  `}
`;

export const StepsContainer = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        align-items: start;
        align-content: center;
        margin-top: 16px;
    }
`;

export const StyledStep = styled.div`
    display: flex;
    gap: 10px;
    padding: 1px 0px;
    align-items: center;
    cursor: pointer;
`;

export const StyledNumber = styled.span`
    padding: 1px 8px;
    ${({ theme, active }) => `
        color: ${active ? theme.fontColor.blue : theme.fontColor.lightGray};
        font-size: ${theme.fontSize.smallest};
        border-radius: ${theme.borderRadius.large};
        background: ${active ? theme.backgroundColor.lightBlue : theme.backgroundColor.lightestGray};
        border: 1px solid ${active ? theme.borderColor.blue : 'transparent'};
  `}
`;

export const StyledInlineText = styled.span`
    ${({ theme, size, color, weight }) => `
        color: ${theme.fontColor[color]};
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeight[weight]};
  `}
`;

export const HeaderContainer = styled.div`
    padding: 4px 0px 12px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 0px 24px 24px 24px;
    margin-top: 62px;
    justify-content: end;
`;

export const CertificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const CertificationsWrapper = styled.div`
    margin: 0px 76px 0px 24px;
`;

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 64%;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.verySmall} !important;
    `}
`;
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CloseContainer = styled.div`
    height: 30px;
    width: 30px;
`;
export const EllipseContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
`;
export const styles = {
    headerStyles: {
        padding: '0px 24px 24px 24px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    namePropStyles: {
        display: 'flex',
        gap: '24px',
        padding: '0px 24px',
        height: '86px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
        },
    },
    dateTimePropStyles: {
        display: 'flex',
        gap: '24px',
        padding: '0px 24px',
        height: '86px',
        marginTop: '24px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
            // marginTop: '0px',
        },
    },
    emailPasswordPropStyles: {
        display: 'flex',
        gap: '24px',
        padding: '0px 24px',
        height: '86px',
        marginTop: '10px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
        },
    },
    dividerStyles: {
        borderBottom: '1px solid #E6E8E9',
        marginTop: '23px',
    },
    addressLinePropStyles: {
        display: 'flex',
        gap: '24px',
        padding: '0px 24px',
        height: '86px',
        marginTop: '22px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
        },
    },
    cityStatePropStyles: {
        display: 'flex',
        gap: '24px',
        padding: '0px 24px',
        height: '86px',
        marginTop: '27px',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
        },
    },
};
