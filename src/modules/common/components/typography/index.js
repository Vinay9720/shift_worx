'use client';

import { Typography } from '@mui/material';
import styled from 'styled-components';

const SwxTypography = styled(Typography)`
    ${({ theme, size, color, weight }) => `
        color: ${theme.fontColor[color]} !important;
        font-size: ${theme.fontSize[size]} !important;
        font-weight: ${theme.fontWeight[weight]} !important;
  `}
`;

export default SwxTypography;
