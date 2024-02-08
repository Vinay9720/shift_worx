'use client';

import { useFormContext } from 'react-hook-form';

import { SwxButton } from '../components';

const FormSubmitButton = props => {
    const { formState } = useFormContext();
    const { disabled, buttonId, styles, buttonName, loading, ...rest } = props;

    return (
        <SwxButton
            loading={loading}
            disabled={!formState.isValid || loading}
            id={buttonId}
            styles={{ ...styles }}
            {...rest}
            type='submit'>
            {buttonName}
        </SwxButton>
    );
};

export default FormSubmitButton;
