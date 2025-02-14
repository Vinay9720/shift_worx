'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SwxInput } from '../components';

const InputField = props => {
    const { control } = useFormContext();
    const { defaultValue, value, SWXInputProps } = props;
    const {
        required = false,
        validate,
        pattern,
        minLength,
        maxLength,
        placeholderColor,
        font,
        ...rest
    } = SWXInputProps;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate, pattern, minLength, maxLength }}
            defaultValue={defaultValue || value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxInput
                        required={required}
                        {...rest}
                        placeholderColor={placeholderColor}
                        font={font}
                        errorText={error?.message}
                        value={field.value || value || ''}
                        onChange={evt => field.onChange(evt.target.value)}
                    />
                );
            }}
        />
    );
};

export default InputField;
