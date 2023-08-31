'use client';

import { Divider, Stack } from '@mui/material';

// import { setCurrentStep } from '@/lib/store/slices/add-employee-module';
import { useAddEmployee } from '@/hooks';

import { FooterContainer } from './add-employee.styles';

import { SwxButton, SwxTypography } from '../common/components';
import { Form, InputField, DatePickerField, FormSubmitButton } from '../common/form-components';

function AddEmployeeStep2() {
    const { mutate: addEmployee } = useAddEmployee();

    const ssnProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                SSN#
            </SwxTypography>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        required: 'Enter ssn',
    };

    const driverLicenseProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Driver&apos;s License #
            </SwxTypography>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        required: 'Enter driver license number',
    };

    const driverLicenseIssueProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Driver&apos;s License Issue date
            </SwxTypography>
        ),
        required: true,
    };

    const driverLicenseExpireProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Driver&apos;s License Expiration Date
            </SwxTypography>
        ),
        required: true,
    };

    // const onSubmit = userData => {
    //     dispatch(setCurrentStep(3));
    // };

    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Personal Documents
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin'>
                    Upload employee personal documents
                </SwxTypography>
            </Stack>
            <Form onSubmit={addEmployee} styles='flex flex-col gap-y-5'>
                <Stack direction='column' spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='ssn' SWXInputProps={ssnProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='dl_number' SWXInputProps={driverLicenseProps} />
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <DatePickerField name='dl_issue_date' SWXInputProps={driverLicenseIssueProps} />
                        <DatePickerField name='dl_expiration_date' SWXInputProps={driverLicenseExpireProps} />
                    </Stack>
                </Stack>
                <FooterContainer>
                    <SwxButton variant='text'>Cancel</SwxButton>
                    <FormSubmitButton variant='contained' buttonName='Next' />
                </FooterContainer>
            </Form>
        </>
    );
}

export default AddEmployeeStep2;
