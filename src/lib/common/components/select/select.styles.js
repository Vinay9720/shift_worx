import styled from 'styled-components';
import { Autocomplete } from '@mui/material';

export const StyledAutoCompleteSelect = styled(Autocomplete)`
    input {
        ${({ theme, padding, borderRight }) => `
            padding: ${padding || '17px 16px'} !important;
            border-right:1px solid ${theme.borderColor[borderRight] || null} !important;
        `}
    }
    & .MuiOutlinedInput-input {
        // font-family: __Manrope_36d688;
        ${({ theme, padding, placeholderColor }) => `
            color: ${placeholderColor || theme.fontColor.swxSlightlyBlack};
            padding: ${padding || '17px 16px'};
        `}
    }
    & .MuiOutlinedInput-notchedOutline {
        ${({ theme, radius }) => `
            border-radius:${radius || '8px'};
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
