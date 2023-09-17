'use client';

import styled from 'styled-components';
import Input from 'react-phone-number-input/input';

export const StyledPhone = styled(Input)`
    padding: 18px 16px;
    &:focus-visible {
        outline: none;
    }
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.small} !important;
        color: ${theme.fontColor.swxSlightlyBlack} !important;
        background-color: ${theme.backgroundColor.white} !important;
        border: 1px solid ${theme.borderColor.lightGray} !important;
        font-size: ${theme.fontSize.semiMedium} !important;
        `}
    & input {
        ${({ theme }) => `
            border-radius: ${theme.borderRadius.small};
            color: ${theme.fontColor.swxSlightlyBlack};
            background-color: ${theme.backgroundColor.white};
            border: 1px solid ${theme.borderColor.lightGray};
        `}
    }

    & .PhoneInputCountry {
        padding-right: 14px;
    }

    & .PhoneInputCountryIcon {
        margin: 0px 6px;
    }

    & .PhoneInputInput {
        padding: 18px 16px;
        ${({ theme }) => `
            border-left: 1px solid ${theme.borderColor.lightGray};
            font-size: ${theme.fontSize.semiMedium};
        `}
        font-weight: 500;
        &:focus-visible {
            outline: none;
        }
    }
`;
