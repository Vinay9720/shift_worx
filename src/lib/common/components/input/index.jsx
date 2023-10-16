'use client';

import { InputAdornment } from '@mui/material';

import { StyledOutlinedInput, InputContainer } from './input.styles';

import SwxTypography from '../typography';
import { SpanContainer } from '../common.styles';

const SwxInput = ({
    label,
    width,
    startIcon: StartIcon,
    endIcon: EndIcon,
    type,
    style,
    placeholder,
    placeholderColor,
    errorText,
    required,
    ...restProps
}) => {
    return (
        <InputContainer style={{ width, ...style }}>
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
            <StyledOutlinedInput
                // id='outlined-adornment-password'
                type={type}
                placeholder={placeholder}
                placeholderColor={placeholderColor}
                {...restProps}
                startAdornment={StartIcon && <InputAdornment position='start'>{StartIcon}</InputAdornment>}
                endAdornment={EndIcon && <InputAdornment position='start'>{EndIcon}</InputAdornment>}
            />
            {errorText && (
                <SwxTypography color='red' size='smallest' weight='thin'>
                    {errorText}
                </SwxTypography>
            )}
        </InputContainer>
    );
};

export default SwxInput;
