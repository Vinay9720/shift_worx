'use client';

import { Typography } from '@mui/material';
import styled from 'styled-components';

const SwxTypography = styled(Typography)`
    ${({ theme, size, color, weight, lineHeight }) => `
        color: ${theme.fontColor[color]} !important;
        font-size: ${theme.fontSize[size]} !important;
        font-weight: ${theme.fontWeight[weight]} !important;
        line-height: ${lineHeight || 1.5}
  `}
`;

export default SwxTypography;
