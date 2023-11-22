import styled from 'styled-components';
import { Select, InputLabel } from '@mui/material';

export const StyledSelect = styled(Select)`
    & .MuiOutlinedInput-input {
        ${({ theme, padding }) => `
            font-family: __Manrope_36d688;
            padding: ${padding || '17px 16px'};
            color: ${theme.fontColor.lightGray};
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

export const ValueContainer = styled.span`
    ${({ theme, multiple }) =>
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
            : ''}
`;
