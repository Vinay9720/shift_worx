'use client';

import { Stack } from '@mui/material';

import { Form, InputField, DatePickerField, FormSubmitButton } from '../common/form-components';
import { SwxTypography, SwxButton } from '../common/components';

function EditEmployeeStep2() {
    // const dispatch = useDispatch();
    const ssnProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                SSN#
            </SwxTypography>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        width: '60%',
        required: 'Enter first name',
    };

    const driverLicenseProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License #
            </SwxTypography>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        width: '60%',
        required: 'Enter last name',
    };

    const driverLicenseIssueProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License Issue date
            </SwxTypography>
        ),
        required: true,
    };

    const driverLicenseExpireProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License Expiration Date
            </SwxTypography>
        ),
        required: true,
    };

    return (
        <Form>
            <Stack direction='column' spacing={8}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Personal Documents
                </SwxTypography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                    <InputField name='ssn' SWXInputProps={ssnProps} />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                    <InputField name='dl_number' SWXInputProps={driverLicenseProps} />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                    <DatePickerField name='dl_issue_date' SWXInputProps={driverLicenseIssueProps} width='30%' />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                    <DatePickerField name='dl_expiration_date' SWXInputProps={driverLicenseExpireProps} width='30%' />
                </Stack>
            </Stack>
            {/* <FooterContainer> */}
            <FormSubmitButton
                variant='contained'
                size='small'
                padding='6px 24px'
                radius='large'
                weight='bold'
                buttonName='Save'
            />
            {/* {numberedStep !== 1 && ( */}
            <SwxButton
                size='small'
                // onClick={() => handleNavigationClick(numberedStep - 1)}
                padding='6px 24px'
                radius='large'
                variant='outlined'
                weight='bold'>
                {'< '}Previous
            </SwxButton>
            <SwxButton
                size='small'
                // onClick={() => handleNavigationClick(numberedStep + 1)}
                padding='6px 24px'
                radius='large'
                // disabled={numberedStep === 3 && true}
                variant='outlined'
                weight='bold'>
                Next{' >'}
            </SwxButton>
        </Form>
    );
}

export default EditEmployeeStep2;
