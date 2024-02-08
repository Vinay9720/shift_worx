'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SwxSwitch } from '../components/';
import { Stack } from '@mui/material';

const FormSwitch = props => {
    const { control } = useFormContext();
    const { defaultValue, SWXInputProps } = props;
    const { required, validate, label } = SWXInputProps;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate }}
            defaultValue={defaultValue || false}
            render={({ field }) => {
                return (
                    <Stack direction='row'>
                        {label && label}
                        <SwxSwitch
                            {...SWXInputProps}
                            field={field}
                            checked={field.value}
                            onChange={event => field.onChange(event.target.checked)}
                        />
                    </Stack>
                );
            }}
        />
    );
};

export default FormSwitch;
