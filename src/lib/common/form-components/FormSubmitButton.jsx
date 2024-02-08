'use client';

import { useFormContext } from 'react-hook-form';

import { SwxButton } from '../components/';

const FormSubmitButton = props => {
    const { formState } = useFormContext();
    const { disabled, buttonId, styles, buttonName, ...rest } = props;

    return (
        <SwxButton
            disabled={!formState.isValid || disabled}
            id={buttonId}
            styles={{ ...styles }}
            {...rest}
            type='submit'>
            {buttonName}
        </SwxButton>
    );
};

export default FormSubmitButton;
