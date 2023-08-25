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
    width: 786px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    max-height: 600px;
    overflow-y: auto;
    box-shadow: 24;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.small};
        color: ${theme.fontColor.swxBlack};
        background-color: ${theme.backgroundColor.white};
        border: 1px solid ${theme.borderColor.lightGray};
        box-shadow: ${theme.boxShadow.grayShadow};
  `}
`;

export const StyledTitle = styled.h1`
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        font-style: normal;
  `}
`;

export const StepsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const StyledStep = styled.div`
    display: flex;
    gap: 10px;
    padding: 1px 0px;
    align-items: center;
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

export const StyledText = styled.p`
    ${({ theme, size, color, weight }) => `
        color: ${theme.fontColor[color]};
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeight[weight]};
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
    gap: 24px;
    margin-top: 40px;
`;

export const RowContainer = styled.div`
    ${({ padding, gap }) => `
        padding: ${padding || '0px 24px'};
        gap: ${gap || '16px'};
    `}
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
    }
`;

export const HeadingsContainer = styled.div`
    ${({ padding, gap }) => `
        padding: ${padding || '0px 24px'};
        gap: ${gap || '8px'};
    `}
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    ${({ theme, size, color, weight }) => `
        color: ${theme.fontColor[color]};
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeight[weight]};
  `}
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 0px 24px 24px 24px;
    margin-top: 32px;
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

export const CertificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    display: flex;
    gap: 8px;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.verySmall};
        background: ${theme.backgroundColor.lighterGray};
    `}
`;

export const StyledContainer = styled.div`
    display: flex;
    padding: 52px 140px 13px 160px;
    flex-direction: column;
    gap: 24px;
`;

export const StyledBorderContainer = styled.div`
    padding: 8px 16px;
    width: 64%;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.verySmall} !important;
    `}
`;

export const CertificationUpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
    }
`;

export const CertificationUpperRightSection = styled.div`
    display: flex;
    gap: 16px;
`;

export const CertificationLowerSection = styled.div`
    display: flex;
    gap: 48px;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
        gap: 12px;
    }
`;

export const CertificationLowerLeftSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CertificationLowerRightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
