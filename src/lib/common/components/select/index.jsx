'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, InputAdornment, Stack } from '@mui/material';
import { StyledAutoCompleteSelect, DropdownIcon } from './select.styles';
import { Icon } from '@/modules/common/icons';

export default function SwxSelect({ width, style, label, padding, options, value, onChange, placeholder, ...rest }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <Stack direction='column' spacing={1} style={{ width }}>
            {label && label}
            <StyledAutoCompleteSelect
                popupIcon={DropdownIcon}
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
                renderOption={(props, option) => {
                    return (
                        <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option.icon ? (
                                <Icon
                                    name={option.icon}
                                    // styles={{ fill: option.fill }}
                                    fill={option.fill}
                                    styles={{ marginRight: '12px' }}
                                    height={10}
                                    width={10}
                                />
                            ) : null}
                            {option.label || option || ''}
                        </Box>
                    );
                }}
                renderInput={params => (
                    <TextField
                        {...params}
                        InputLabelProps={{
                            shrink: false,
                        }}
                        placeholder={placeholder}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment:
                                value && value.icon ? (
                                    <>
                                        <InputAdornment position='start'>
                                            <Icon
                                                name={value.icon}
                                                styles={{ fill: value.fill, marginLeft: '8px' }}
                                                height={10}
                                                width={10}
                                            />
                                        </InputAdornment>
                                        {params.InputProps.startAdornment}
                                    </>
                                ) : null,
                        }}
                    />
                )}
            />
        </Stack>
    );
}
