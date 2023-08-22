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
    ${({ theme, variant, size, padding, radius }) =>
        variant === 'contained'
            ? `
          padding: ${padding || '15px 50px'} !important;
          background: ${theme.backgroundColor.darkBlue} !important;
          color: ${theme.fontColor.white} !important;
          font-size: ${theme.fontSize[size || 'medium']} !important;
          font-weight: ${theme.fontWeight.semiBold} !important;
          border-radius: ${theme.borderRadius[radius || 'small']} !important;
          box-shadow: ${theme.backgroundColor.darkBlueShadow} !important;
          font-style: normal;
      `
            : variant === 'text'
            ? `
          color: ${theme.fontColor.darkBlue} !important;
          font-size: ${theme.fontSize[size]} !important;
          font-weight: ${theme.fontWeight.semiBold} !important;
          font-style: normal;
      `
            : variant === 'outlined'
            ? `
          padding: ${padding || '15px 50px'} !important;
          border: 2px solid ${theme.backgroundColor.darkBlue} !important;
          color: ${theme.fontColor.darkBlue} !important;
          font-size: ${theme.fontSize[size || 'medium']} !important;
          font-weight: ${theme.fontWeight.semiBold} !important;
          border-radius: ${theme.borderRadius[radius || 'small']} !important;
          font-style: normal;
      `
            : ''};
`;
