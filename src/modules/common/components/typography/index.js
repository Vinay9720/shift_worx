'use client';

import { Typography } from '@mui/material';
import styled from 'styled-components';

const SwxTypography = styled(Typography)`
    ${({ theme, size, color, weight }) => `
        color: ${theme.fontColor[color]};
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeight[weight]};
  `}
`;

export default SwxTypography;
