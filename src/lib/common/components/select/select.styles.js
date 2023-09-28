import styled from 'styled-components';
import { Autocomplete } from '@mui/material';

export const StyledAutoCompleteSelect = styled(Autocomplete)`
    input {
        ${({ padding }) => `
            padding: ${padding || '17px 16px'} !important;
        `}
    }
    & .MuiOutlinedInput-input {
        ${({ theme, padding }) => `
            color: ${theme.fontColor.swxSlightlyBlack};
            padding: ${padding || '17px 16px'};
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
