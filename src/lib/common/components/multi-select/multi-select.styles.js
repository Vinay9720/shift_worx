import styled from 'styled-components';
import { Select, InputLabel } from '@mui/material';

export const StyledSelect = styled(Select)`
    & .MuiOutlinedInput-input {
        ${({ theme, padding }) => `
            padding: ${padding || '17px 16px'};
            color: ${theme.fontColor.swxSlightlyBlack};
        `}
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 8px;
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray};
        `}
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray} !important;
        `}
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray} !important;
            // box-shadow: ${theme.boxShadow.blueShadow} !important;
        `}
    }
`;

export const StyledInsideLabel = styled(InputLabel)`
    &.Mui-focused {
        color: ${({ theme }) => theme.fontColor.lightGray};
    }
`;
