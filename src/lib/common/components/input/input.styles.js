import styled from 'styled-components';
import { OutlinedInput } from '@mui/material';

export const InputContainer = styled.div`
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
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
    /* For Focus */
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray} !important;
            // box-shadow: ${theme.boxShadow.blueShadow} !important;
        `}
    }
`;
