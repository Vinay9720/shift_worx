'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SwxFileUpload } from '../components';

const FileUploadField = props => {
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
                    <SwxFileUpload {...SWXInputProps} field={field} file={field.value} uploadFile={field.onChange} />
                );
            }}
        />
    );
};

export default FileUploadField;
