import { TimeField } from '@mui/x-date-pickers';
import { Select } from '@mui/material';

import styled from 'styled-components';

export const StyledTimeField = styled(TimeField)`
    & .MuiOutlinedInput-input {
        padding: 17px 14px;
        ${({ theme }) => `
        color: ${theme.fontColor.swxSlightlyBlack};
    `}
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 8px;
        ${({ theme }) => `
        border: none;
    `}
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
        border: none;
    `}
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray} !important;
        // box-shadow: ${theme.boxShadow.blueShadow} !important;
    `}
    }
`;

export const StyledAMPMSelect = styled(Select)`
    & .MuiOutlinedInput-input {
        padding-right: 0 !important;
    }
    & .MuiOutlinedInput-input {
        padding: 17px 14px;
        ${({ theme }) => `
            color: ${theme.fontColor.swxSlightlyBlack};
        `}
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 8px;
        border: none;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: none;
            // box-shadow: ${theme.boxShadow.blueShadow} !important;
        `}
    }
`;
