'use client';

import { InputAdornment } from '@mui/material';

import { StyledOutlinedInput, InputContainer } from './input.styles';

import SwxTypography from '../typography';

const SwxInput = ({
    label,
    width,
    startIcon: StartIcon,
    endIcon: EndIcon,
    type,
    placeholder,
    errorText,
    ...restProps
}) => {
    return (
        <InputContainer style={{ width }}>
            {label && <label>{label}</label>}
            <StyledOutlinedInput
                // id='outlined-adornment-password'
                type={type}
                placeholder={placeholder}
                {...restProps}
                startAdornment={
                    StartIcon && (
                        <InputAdornment position='start'>
                            <StartIcon />
                        </InputAdornment>
                    )
                }
                endAdornment={
                    EndIcon && (
                        <InputAdornment position='start'>
                            <EndIcon />
                        </InputAdornment>
                    )
                }
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
