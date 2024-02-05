'use client';

import React, { useState } from 'react';
import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Stack } from '@mui/material';
import { StyledContainerwrapper, StyledTimeField, StyledTimePickerOverlay } from './time-picker.styles';
import SwxTypography from '../typography';
import { SpanContainer } from '../common.styles';

export default function SwxTimeComponent({ onChange, time, label, width, required }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleInputChange = event => {
        const formattedValue = event.format('hh:mm A');
        onChange(formattedValue);
    };

    return (
        <Stack direction='column' spacing={0.5} style={{ width }}>
            {label && (
                <SpanContainer>
                    <label>{label}</label>
                    {!required && (
                        <SwxTypography size='semiMedium' color='lightGray' weight='thin' className='Manrope'>
                            Optional
                        </SwxTypography>
                    )}
                </SpanContainer>
            )}
            <StyledContainerwrapper>
                <StyledTimePickerOverlay onClick={handleOpen} />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DemoContainer
                        components={['TimePicker']}
                        sx={{ paddingTop: '0', width: '100%', overflow: 'hidden' }}>
                        <StyledTimeField
                            format='hh:mm A'
                            name='time'
                            onChange={handleInputChange}
                            value={moment(time, 'hh:mm A')}
                            minutesStep={15}
                            // disableOpenPicker
                            open={open}
                            onClose={() => {
                                setOpen(false);
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </StyledContainerwrapper>
        </Stack>
    );
}
