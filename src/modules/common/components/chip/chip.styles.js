import styled from 'styled-components';
import { Chip } from '@mui/material';

export const StyledChip = styled(Chip)`
    ${({ theme, kind, swxcolor, background, size }) => `
        border-radius: ${kind === 'rounded' ? theme.borderRadius.large : '0.375rem'};
        background: ${theme.backgroundColor[background]};
        color: ${theme.fontColor[swxcolor]};
        font-size: ${theme.fontSize[size]};
        border: 1.5px solid ${theme.borderColor.white};
        height: fit-content;
        line-height: initial !important;
        span {
            padding: ${kind === 'rounded' ? '5px 12px' : '4px'};
        }
    `}
`;
