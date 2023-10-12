'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SwxTimeComponent } from '../components';

const TimePickerField = props => {
    const { control } = useFormContext();
    const { defaultValue, value, SWXInputProps, width } = props;
    const { required = false, validate, label, ...rest } = SWXInputProps;
    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate }}
            defaultValue={defaultValue || value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxTimeComponent
                        required={required}
                        time={field.value || '12:00am'}
                        label={label}
                        width={width}
                        format='hh:mm'
                        onChange={field.onChange}
                        error={error}
                        {...rest}
                    />
                );
            }}
        />
    );
};

export default TimePickerField;
