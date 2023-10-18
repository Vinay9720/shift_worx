'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, InputAdornment, Stack, Avatar } from '@mui/material';

import { StyledAutoCompleteSelect } from './select.styles';

import { Icon } from '../../icons';
import SwxTypography from '../typography';
import { SpanContainer } from '../common.styles';

export default function SwxSelect({
    width,
    style,
    label,
    padding,
    options,
    value,
    onChange,
    placeholder,
    borderRight,
    required,
    spacing,
    ...rest
}) {
    const [inputValue, setInputValue] = useState('');

    return (
        <Stack direction='column' spacing={spacing || 1} style={{ width }}>
            {label && (
                <SpanContainer>
                    <label>{label}</label>
                    {!required && (
                        <SwxTypography size='semiMedium' color='lightGray' weight='thin'>
                            Optional
                        </SwxTypography>
                    )}
                </SpanContainer>
            )}
            <StyledAutoCompleteSelect
                popupIcon={<Icon name='dropdown-arrow' width='14' styles={{ margin: '4px 8px 4px 8px' }} />}
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                style={{ width, ...style }}
                inputValue={inputValue}
                padding={padding}
                groupBy={option => option.groupBy}
                // borderRight is temporaryly appended for demo (29/9/2023)
                borderRight={borderRight}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
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
                            {option.avatar ? (
                                <Avatar sx={{ width: 32, height: 32, bgcolor: '#1F6FA9', mr: '8px' }}>{`${
                                    option.label.split('')[0].toUpperCase() || ''
                                }`}</Avatar>
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
