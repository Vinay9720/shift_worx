'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SwxSelect } from '../components';

const SelectField = props => {
    const { control } = useFormContext();
    const { required = false, value, SWXInputProps } = props;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required }}
            defaultValue={value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxSelect
                        width={SWXInputProps.width}
                        radius={SWXInputProps.radius}
                        padding={SWXInputProps.padding}
                        placeholder={SWXInputProps.placeholder}
                        placeholderColor={SWXInputProps.placeholderColor}
                        options={SWXInputProps.options || []}
                        errorText={error?.message}
                        label={SWXInputProps.label}
                        multiple={SWXInputProps.multiple}
                        outsideLabel={SWXInputProps.outsideLabel}
                        value={field.value || ''}
                        onChange={field.onChange}
                    />
                );
            }}
        />
    );
};

export default SelectField;
