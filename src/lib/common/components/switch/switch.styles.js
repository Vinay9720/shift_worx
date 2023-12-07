import { Switch } from '@mui/material';
import styled from 'styled-components';

export const StyledSwitch = styled(Switch)`
    width: 42px;
    height: 26px;
    padding: 0;

    & .MuiSwitch-switchBase {
        padding: 0;
        margin: 2px;
        transition-duration: 300ms;

        &.Mui-checked {
            transform: translateX(16px);
            ${({ theme }) => `
            color: ${theme.fontColor.white}; 
        `};

            & + .MuiSwitch-track {
                ${({ theme }) => `
                background-color: ${theme.backgroundColor.switchGreen}; 
            `};
                opacity: 1;
                border: 0;
            }

            &.Mui-disabled + .MuiSwitch-track {
                opacity: 0.5;
            }
        }

        &.Mui-focusVisible .MuiSwitch-thumb {
            ${({ theme }) => `
            color: ${theme.fontColor.lightGreen}; 
            border: 6px solid ${theme.borderColor.white};
        `};
        }

        &.Mui-disabled .MuiSwitch-thumb {
            ${({ theme }) => `
            color: ${theme.fontColor.gray}; 
        `};
        }

        &.Mui-disabled + .MuiSwitch-track {
            opacity: 0.7;
        }
    }

    & .MuiSwitch-thumb {
        box-sizing: border-box;
        width: 22px;
        height: 22px;
    }

    & .MuiSwitch-track {
        border-radius: 13px;
        ${({ theme }) => `
        background-color: ${theme.backgroundColor.switchGray}; 
    `};
        opacity: 1;
        transition: background-color 500ms;
    }
`;
