'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

import { StyledAutoCompleteSelect } from './select.styles';

const options = ['Option 1', 'Option 2'];

export default function SwxSelect({ width, style, label }) {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <Stack direction='column' spacing={1} style={{ width }}>
            {label && label}
            <StyledAutoCompleteSelect
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{ width, ...style }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                // Icon needs to be changed
                // popupIcon={
                //     <Icon styles={{ fill: '#838A91' }} name='select-down-arrow' aria-hidden='true' height={18} width={16} />
                // }
                id='controllable-states'
                options={options}
                // sx={{ width: 300 }}
                renderInput={params => (
                    <TextField
                        {...params}
                        InputLabelProps={{
                            shrink: false,
                        }}
                        placeholder='Status'
                    />
                )}
            />
        </Stack>
    );
}
