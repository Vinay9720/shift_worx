import styled from 'styled-components';
import { Chip } from '@mui/material';

export const StyledChip = styled(Chip)`
    ${({ theme, kind, swxcolor, background, size, leftPadding }) => `
        font-family: var(--font-Manrope) !important;
        padding-left:${leftPadding || null};
        border-radius: ${kind === 'rounded' ? theme.borderRadius.large : '0.375rem'} !important;
        background: ${theme.backgroundColor[background]} !important;
        color: ${theme.fontColor[swxcolor]} !important;
        font-size: ${theme.fontSize[size]} !important;
        border: 1.5px solid ${theme.borderColor.white} !important;
        // height: fit-content !important;
        line-height: initial !important;
        height: ${kind === 'rounded' ? null : '23px'} !important;
        span {
            padding: ${kind === 'rounded' ? '5px 12px' : '3px 4px'} !important;
        }
    `}
`;
