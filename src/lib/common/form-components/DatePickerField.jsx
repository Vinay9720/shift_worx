'use client';

import { Controller, useFormContext } from 'react-hook-form';

import SwxDatePicker from '../components/date-picker';

const DatePickerField = props => {
    const { control } = useFormContext();
    const { defaultValue, value, SWXInputProps } = props;
    const { required = false, validate, range, padding, multiple, width, ...rest } = SWXInputProps;
    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate }}
            defaultValue={defaultValue || value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxDatePicker
                        required={required}
                        value={field.value}
                        width={width}
                        range={range}
                        padding={padding}
                        multiple={multiple}
                        onChange={field.onChange}
                        error={error}
                        {...rest}
                    />
                );
            }}
        />
    );
};

export default DatePickerField;
