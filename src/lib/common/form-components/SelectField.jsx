'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SwxSelect } from '../components';

const SelectField = props => {
    const { control } = useFormContext();
    const { value, SWXInputProps } = props;
    const { required = false } = SWXInputProps;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required }}
            defaultValue={value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxSelect
                        required={required}
                        width={SWXInputProps.width}
                        radius={SWXInputProps.radius}
                        padding={SWXInputProps.padding}
                        placeholder={SWXInputProps.placeholder}
                        placeholderColor={SWXInputProps.placeholderColor}
                        options={SWXInputProps.options || []}
                        errorText={error?.message}
                        label={SWXInputProps.label}
                        multiple={SWXInputProps.multiple}
                        disableClearable={SWXInputProps.disableClearable}
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
