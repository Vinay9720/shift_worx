'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SwxPhoneNumberInput } from '../components/';

const PhoneNumberField = props => {
    const { control } = useFormContext();
    const { defaultValue, value, SWXInputProps } = props;
    const { required = false, validate, pattern, minLength, maxLength } = SWXInputProps;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate, pattern, minLength, maxLength }}
            defaultValue={defaultValue || value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxPhoneNumberInput
                        {...SWXInputProps}
                        errorText={error?.message}
                        phoneValue={field.value || value}
                        onPhoneNumberChange={field.onChange}
                    />
                );
            }}
        />
    );
};

export default PhoneNumberField;
