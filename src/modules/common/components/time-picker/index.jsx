import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MenuItem, Stack } from '@mui/material';
import { StyledAMPMSelect, StyledTimeField } from './time-picker.styles';
import { Icon } from '../../icons';

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
            <div style={containerDiv}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeField']} sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <StyledTimeField format={format} onChange={onChange} value={value} />
                    </DemoContainer>
                </LocalizationProvider>
                <div style={{ borderLeft: '1px solid #e6e8e9' }}>
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
                </div>
            </div>
        </Stack>
    );
}

const containerDiv = {
    display: 'flex',
    alignItems: 'end',
    border: '1px solid #E6E8E9',
    borderRadius: '8px',
    height: '57px',
};
