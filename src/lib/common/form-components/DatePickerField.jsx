'use client';

import { Controller, useFormContext } from 'react-hook-form';

import SwxDatePicker from '../components/date-picker';

const DatePickerField = props => {
    const { control } = useFormContext();
    const { defaultValue, value, SWXInputProps, width } = props;
    const { required = false, validate, range, padding, multiple, ...rest } = SWXInputProps;
    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate }}
            defaultValue={defaultValue || value}
            render={({ field, fieldState: { error } }) => {
                return (
                    <SwxDatePicker
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
