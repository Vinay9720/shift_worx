import styled from 'styled-components';
import { OutlinedInput } from '@mui/material';

export const InputContainer = styled.div`
    gap: ${({ gap }) => gap || '4px'};
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
    & .MuiOutlinedInput-input {
        ${({ theme, padding, background, radius, placeholderColor, font }) => `
            font-family: ${font || 'var(--font-Manrope)'} !important;
            padding: ${padding || '17px 16px'};
            color: ${theme.fontColor[placeholderColor] || theme.fontColor.swxSlightlyBlack};
            border-radius: ${radius || '8px'};
            background-color:${background || 'transparent'}
        `};
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: ${({ radius }) => radius || '8px'};
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
