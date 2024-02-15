import styled from 'styled-components';
import { Select, InputLabel } from '@mui/material';

export const StyledSelect = styled(Select)`
    & .MuiOutlinedInput-input {
        ${({ theme, padding }) => `
            font-family: var(--font-Manrope) !important;
            padding: ${padding || '17px 16px'};
            color: ${theme.fontColor.lightGray};
        `}
    }
    & .MuiOutlinedInput-input:first-child {
        padding-right: 0;
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
        color: ${({ theme }) => theme.fontColor.lightGray} !important;
    }
`;

export const ValueContainer = styled.span`
    ${({ theme, multiple, marginleft }) =>
        multiple
            ? `
            margin-left: 56px;
            border-radius: 100px;
            padding: 0px 6px;
            background: ${theme.backgroundColor.swxBlue};
            font-size: ${theme.fontSize.small};
            color: ${theme.fontColor.white};
            margin-top: 2px;
    `
            : `
            margin-left: ${marginleft}px;
            color: ${theme.fontColor.swxSlightlyBlack};
    `}
`;
