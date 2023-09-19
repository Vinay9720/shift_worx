'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

import { StyledAutoCompleteSelect } from './select.styles';

export default function SwxSelect({ width, style, label, padding, options, value, onChange, placeholder, ...rest }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <Stack direction='column' spacing={1} style={{ width }}>
            {label && label}
            <StyledAutoCompleteSelect
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                style={{ width, ...style }}
                inputValue={inputValue}
                padding={padding}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                // Icon needs to be changed
                // popupIcon={
                //     <Icon styles={{ fill: '#838A91' }} name='select-down-arrow' aria-hidden='true' height={18} width={16} />
                // }
                id={`single-select-${label}`}
                options={options || []}
                {...rest}
                renderInput={params => (
                    <TextField
                        {...params}
                        InputLabelProps={{
                            shrink: false,
                        }}
                        placeholder={placeholder}
                    />
                )}
            />
        </Stack>
    );
}
