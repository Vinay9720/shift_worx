'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import ListBox from '../components/list-box';

const ListBoxField = props => {
    const { control } = useFormContext();
    const { defaultValue, SWXInputProps } = props;
    const { required, validate } = SWXInputProps;

    return (
        <Controller
            name={props.name}
            control={control}
            rules={{ required, validate }}
            defaultValue={defaultValue || []}
            render={({ field }) => {
                return (
                    <ListBox
                        {...SWXInputProps}
                        field={field}
                        selectedOptions={field.value}
                        setSelectedOptions={field.onChange}
                    />
                );
            }}
        />
    );
};

export default ListBoxField;
