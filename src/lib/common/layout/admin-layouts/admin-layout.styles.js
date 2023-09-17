import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const StyledIconComponent = styled(IconButton)`
    ${({ theme, isactive }) => `
        border-radius: ${theme.borderRadius.large} !important;
        border: 1px solid ${
            isactive === 'true' ? theme.backgroundColor.blue : theme.backgroundColor.lighterGray
        } !important;
        padding: 0px !important;
    `}
`;

export const StyledTodayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    background-color: white;
    padding: 5px 14px;
    ${({ theme }) => `
        font-weight: ${theme.fontWeight.thin};
        color: ${theme.fontColor.swxBlack};
        border-radius: ${theme.borderRadius.small};
        border: 1px solid ${theme.backgroundColor.blue};
        box-shadow: ${theme.boxShadow.blueShadow};
    `}
`;

export const StyledDateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    color: white;
    flex-basis: 50%;
`;

export const StyledCurrentTime = styled.p`
    margin-left: 4px;
    display: flex;
    align-items: center;
    ${({ theme }) => `
        font-size: ${theme.fontSize.semiMedium};
        font-weight: ${theme.fontWeight.semiBold};
        color: ${theme.fontColor.swxBlack};
    `}
`;

export const StyledDateDetailsContainer = styled.div`
    margin-left: 16px;
    width: 100%;
    padding-left: 16px;
    display: flex;
    align-self: center;
    ${({ theme }) => `
        border-left: 1px solid ${theme.borderColor.lightGray}
    `}
`;

export const StyledDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${({ isList }) => `
        position: ${isList && 'absolute'};
    `}
`;
