'use client';

import { Stack, Divider } from '@mui/material';

import { UsStates } from '@/lib/constants';
import { SwxTypography } from '@/lib/common/components';
import { SelectField, Form, InputField, DatePickerField, PhoneNumberField } from '@/lib/common/form-components';
import { useUpdateEmployee } from '@/hooks/admin-employee';

function EditEmployeeStep1({ employeeData, footer }) {
    const { mutate: updateEmployee } = useUpdateEmployee();
    const firstNameProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                First Name
            </SwxTypography>
        ),
        placeholder: 'Employee first name',
        required: 'Enter first name',
    };

    const emailProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Email
            </SwxTypography>
        ),
        placeholder: 'Employee email',
        required: 'Enter first name',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Password
            </SwxTypography>
        ),
        type: 'password',
        placeholder: 'Employee password',
        // required: 'Enter first name',
    };

    const addressLine1Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Address
            </SwxTypography>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
        width: '100%',
    };

    const addressLine2Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Address line 2
            </SwxTypography>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
        width: '100%',
    };

    const lastNameProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Last Name
            </SwxTypography>
        ),
        placeholder: 'Employee last name',
        required: 'Enter last name',
    };

    const phoneNumberProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Phone number
            </SwxTypography>
        ),
    };

    const cityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                City
            </SwxTypography>
        ),
        placeholder: 'City',
        width: '100%',
        required: 'Enter city',
    };

    const zipProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                ZIP Code
            </SwxTypography>
        ),
        placeholder: 'XXXXX',
        type: 'number',
        width: '47%',
        required: 'Enter city',
    };

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Date of Birth
            </SwxTypography>
        ),
        multiple: false,
        // required: true,
        range: false,
    };

    const stateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                State
            </SwxTypography>
        ),
        options: UsStates,
        placeholder: 'state',
        width: '100%',
        padding: '8px',
        multiple: false,
    };

    return (
        <>
            <Form
                onSubmit={updatedData => updateEmployee({ id: employeeData.id, employeeData: updatedData })}
                defaultValues={employeeData}>
                <Stack direction='column' spacing={4}>
                    <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                        General Information
                    </SwxTypography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <InputField name='first_name' SWXInputProps={firstNameProps} />
                        <InputField name='last_name' SWXInputProps={lastNameProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <InputField name='email' SWXInputProps={emailProps} />
                        <PhoneNumberField name='phone_number' SWXInputProps={phoneNumberProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <SwxTypography
                            color='mediumGreen'
                            size='semiMedium'
                            weight='semiBold'
                            style={{ width: '100%' }}>
                            Click to update email without verification.
                        </SwxTypography>
                        <InputField name='password' SWXInputProps={passwordProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <DatePickerField name='date_of_birth' SWXInputProps={dateProps} width='47%' />
                    </Stack>
                    {/* <Hr /> */}
                    <Divider flexItem />
                    <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                        Address
                    </SwxTypography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <InputField name='address1' SWXInputProps={addressLine1Props} />
                        <InputField name='address2' SWXInputProps={addressLine2Props} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <InputField name='city' SWXInputProps={cityProps} />
                        <SelectField name='State' SWXInputProps={stateProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8.5} sx={{ padding: '0px 220px 0px 0px' }}>
                        <InputField name='zipcode' SWXInputProps={zipProps} />
                    </Stack>
                </Stack>
                {footer}
            </Form>
        </>
    );
}

export default EditEmployeeStep1;
