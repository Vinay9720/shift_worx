'use client';

import { Stack } from '@mui/material';

import { StyledPhone } from './phone-number.styles';

import SwxTypography from '../typography';

import 'react-phone-number-input/style.css'; // Import the default CSS styles
import './customStyles.css'; // Import the custom styles

export default function SwxPhoneNumberInput({ label, width, errorText, phoneValue, onPhoneNumberChange }) {
    return (
        <Stack direction='column' spacing={0.5} style={{ width: `${width || '100%'}` }}>
            {label && label}
            <StyledPhone
                country='US'
                placeholder='Enter phone number'
                value={phoneValue}
                onChange={onPhoneNumberChange}
            />
            {errorText && (
                <SwxTypography color='red' size='smallest' weight='thin'>
                    {errorText}
                </SwxTypography>
            )}
        </Stack>
    );
}
