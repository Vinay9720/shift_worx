'use client';

import { Stack } from '@mui/material';

import { Form, InputField, DatePickerField } from '@/lib/common/form-components';
import { SwxTypography } from '@/lib/common/components';
import { useUpdateEmployee } from '@/hooks/admin-employee';
import { secondStepStyles } from './edit-employee.styles';

function EditEmployeeStep2({ employeeData, footer }) {
    const { mutate: updateEmployee } = useUpdateEmployee();
    const ssnProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                SSN#
            </SwxTypography>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
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
        <Form
            onSubmit={updatedData => updateEmployee({ id: employeeData.id, employeeData: updatedData })}
            defaultValues={employeeData}>
            <Stack sx={secondStepStyles.rootContainer}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Personal Documents
                </SwxTypography>
                <Stack sx={secondStepStyles.inputContainer}>
                    <InputField name='ssn' SWXInputProps={ssnProps} />
                </Stack>
                <Stack sx={secondStepStyles.inputContainer}>
                    <InputField name='dl_number' SWXInputProps={driverLicenseProps} />
                </Stack>
                <Stack sx={secondStepStyles.dateContainer}>
                    <DatePickerField name='dl_issue_date' SWXInputProps={driverLicenseIssueProps} />
                </Stack>
                <Stack sx={secondStepStyles.dateContainer}>
                    <DatePickerField name='dl_expiration_date' SWXInputProps={driverLicenseExpireProps} />
                </Stack>
            </Stack>
            {/* <Stack spacing={0.5} direction='row' style={{ float: 'right', padding: '60px 0px' }}>
                <FormSubmitButton
                    variant='contained'
                    size='small'
                    padding='6px 24px'
                    radius='large'
                    weight='bold'
                    buttonName='Save'
                />
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(currentStep - 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    {'< '}Previous
                </SwxButton>
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(currentStep + 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    Next{' >'}
                </SwxButton>
            </Stack> */}
            {footer}
        </Form>
    );
}

export default EditEmployeeStep2;
