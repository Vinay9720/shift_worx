'use client';

import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
    text-transform: none !important;
    ${({ theme }) => `
        &: disabled {
            background: ${theme.backgroundColor.lightGray} !important;
        }
  `}
    ${({ theme, variant, size, padding, radius, weight, themecolor }) =>
        variant === 'contained'
            ? `
          padding: ${padding || '15px 50px'} !important;
          background: ${theme.backgroundColor.blue} !important;
          color: ${theme.fontColor.white} !important;
          font-size: ${theme.fontSize[size || 'medium']} !important;
          font-weight: ${theme.fontWeight.semiBold} !important;
          border-radius: ${theme.borderRadius[radius || 'small']} !important;
          box-shadow: ${theme.boxShadow.darkBlueShadow} !important;
          font-style: normal;
      `
            : variant === 'text'
            ? `
          color: ${theme.fontColor[themecolor || 'darkBlue']} !important;
          font-size: ${theme.fontSize[size]} !important;
          font-weight: ${theme.fontWeight[weight || 'semiBold']} !important;
          font-style: normal;
      `
            : variant === 'outlined'
            ? `
          padding: ${padding || '15px 50px'} !important;
          border: 2px solid ${theme.fontColor[themecolor || 'darkBlue']} !important;
          color: ${theme.fontColor[themecolor || 'darkBlue']} !important;
          font-size: ${theme.fontSize[size || 'medium']} !important;
          font-weight: ${theme.fontWeight.semiBold} !important;
          border-radius: ${theme.borderRadius[radius || 'small']} !important;
          font-style: normal;
      `
            : ''};
`;
