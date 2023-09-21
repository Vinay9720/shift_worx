import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MenuItem, Stack } from '@mui/material';
import { StyledAMPMSelect, StyledContainerwrapper, StyledTimeField, StyledWrapper } from './time-picker.styles';
import { Icon } from '@/lib/common/icons';

export default function SwxTimeComponent({ onChange, value, format, label, width }) {
    const [ampm, setAmPm] = useState('AM');
    const [open, setOpen] = useState(false);

    const handleCustomIconClick = () => {
        setOpen(!open);
    };

    const handleAmPmChange = event => {
        setAmPm(event.target.value);
    };

    return (
        <Stack direction='column' spacing={1} style={{ width }}>
            {label && label}
            <StyledContainerwrapper>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeField']} sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <StyledTimeField format={format} onChange={onChange} value={value} />
                    </DemoContainer>
                </LocalizationProvider>
                <StyledWrapper>
                    <StyledAMPMSelect
                        value={ampm}
                        onChange={handleAmPmChange}
                        open={open}
                        onClose={() => setOpen(false)}
                        IconComponent={() => (
                            <Icon
                                open={open}
                                onClick={handleCustomIconClick}
                                name='dropdown-arrow'
                                height={14}
                                width={14}
                                styles={{ marginRight: '18', marginLeft: '8', cursor: 'pointer' }}
                            />
                        )}>
                        <MenuItem value='AM'>AM</MenuItem>
                        <MenuItem value='PM'>PM</MenuItem>
                    </StyledAMPMSelect>
                </StyledWrapper>
            </StyledContainerwrapper>
        </Stack>
    );
}
