'use client';

import { Divider, Stack } from '@mui/material';

import { UsStates } from '@/lib/constants';

import { FooterContainer } from './add-employee.styles';

import { SwxButton, SwxTypography } from '../common/components';
import {
    Form,
    FormSubmitButton,
    InputField,
    DatePickerField,
    SelectField,
    PhoneNumberField,
} from '../common/form-components';

function AddEmployeeStep1() {
    // const dispatch = useDispatch();

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
        required: 'Enter email',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Password
            </SwxTypography>
        ),
        type: 'password',
        placeholder: 'Employee password',
        required: 'Enter password',
    };

    const addressLine1Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Address
            </SwxTypography>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
    };

    const addressLine2Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Address line 2
            </SwxTypography>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
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
        width: '100%',
        required: 'Enter phone number',
    };

    const cityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                City
            </SwxTypography>
        ),
        placeholder: 'City',
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
        required: 'Enter zip code',
    };

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Date of Birth
            </SwxTypography>
        ),
        multiple: false,
        width: '100%',
        required: true,
        range: false,
    };

    const stateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                State
            </SwxTypography>
        ),
        options: UsStates,
        width: '100%',
        multiple: false,
    };

    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Profile Information
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin'>
                    Add employee profile information here
                </SwxTypography>
            </Stack>
            <Form>
                <Stack direction='column' spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='first_name' SWXInputProps={firstNameProps} />
                        <InputField name='last_name' SWXInputProps={lastNameProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <DatePickerField name='date_of_birth' SWXInputProps={dateProps} />
                        <PhoneNumberField name='phone_number' SWXInputProps={phoneNumberProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='email' SWXInputProps={emailProps} />
                        <InputField name='password' SWXInputProps={passwordProps} />
                    </Stack>
                    <Divider orientation='vertical' flexItem />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='address1' SWXInputProps={addressLine1Props} />
                        <InputField name='address2' SWXInputProps={addressLine2Props} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='city' SWXInputProps={cityProps} />
                        <Stack direction='row' spacing={2} style={{ width: '100%' }}>
                            <SelectField name='State' value='' SWXInputProps={stateProps} />
                            <InputField name='zipcode' SWXInputProps={zipProps} />
                        </Stack>
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

export default AddEmployeeStep1;
