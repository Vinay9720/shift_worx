'use client';

import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ defaultValues, children, onSubmit, onFormStateChange, styles }) => {
    const methods = useForm({ defaultValues, mode: 'onChange' });
    const { handleSubmit, watch, formState } = methods;

    useEffect(() => {
        if (onFormStateChange) {
            const subscription = watch(values => onFormStateChange(values, formState));
            return () => subscription.unsubscribe();
        }
    }, [onFormStateChange]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${styles}`}>
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;
