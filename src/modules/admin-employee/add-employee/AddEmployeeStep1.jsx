'use client';

import { Divider, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { SwxButton, SwxTypography } from '@/lib/common/components';
import {
    Form,
    FormSubmitButton,
    InputField,
    DatePickerField,
    SelectField,
    PhoneNumberField,
} from '@/lib/common/form-components';
import { UsStates } from '@/lib/constants';
import { useAddEmployee } from '@/hooks/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { FooterContainer, SpanContainer } from './add-employee.styles';

function AddEmployeeStep1() {
    const { mutate: addEmployee } = useAddEmployee();
    const dispatch = useDispatch();
    const firstNameProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                First Name
            </SwxTypography>
        ),
        placeholder: 'Employee first name',
        placeholderColor: 'lightGray',
        required: 'Enter first name',
    };

    const emailProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Email
            </SwxTypography>
        ),
        placeholder: 'Employee email',
        placeholderColor: 'lightGray',
        required: 'Enter email',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Password
            </SwxTypography>
        ),
        type: 'password',
        placeholder: 'Employee password',
        placeholderColor: 'lightGray',
        required: 'Enter password',
    };

    const addressLine1Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Address
            </SwxTypography>
        ),
        placeholder: 'Employee address',
        placeholderColor: 'lightGray',
        required: 'Enter address',
    };

    const addressLine2Props = {
        label: (
            <SpanContainer>
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                    Address line 2
                </SwxTypography>
                <span>
                    <SwxTypography size='semiMedium' color='lightGray' weight='thin'>
                        Optional
                    </SwxTypography>
                </span>
            </SpanContainer>
        ),
        placeholder: 'Employee address',
        placeholderColor: 'lightGray',
        required: 'Enter address',
    };

    const lastNameProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Last Name
            </SwxTypography>
        ),
        placeholder: 'Employee last name',
        placeholderColor: 'lightGray',
        required: 'Enter last name',
    };

    const phoneNumberProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Phone number
            </SwxTypography>
        ),
        width: '100%',
        required: 'Enter phone number',
    };

    const cityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                City
            </SwxTypography>
        ),
        placeholder: 'City',
        placeholderColor: 'lightGray',
        required: 'Enter city',
    };

    const zipProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                ZIP Code
            </SwxTypography>
        ),
        placeholder: 'XXXXX',
        placeholderColor: 'lightGray',
        type: 'number',
        required: 'Enter zip code',
    };

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                State
            </SwxTypography>
        ),
        options: UsStates,
        placeholder: 'state',
        placeholderColor: '#838A91',
        width: '100%',
        multiple: false,
        padding: '8px 4px',
    };

    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px 24px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Profile Information
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin'>
                    Add employee profile information here
                </SwxTypography>
            </Stack>
            <Form onSubmit={addEmployee}>
                <Stack direction='column'>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px', height: '86px' }}>
                        <InputField name='first_name' SWXInputProps={firstNameProps} />
                        <InputField name='last_name' SWXInputProps={lastNameProps} />
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px', height: '86px', marginTop: '24px' }}>
                        <DatePickerField name='date_of_birth' SWXInputProps={dateProps} />
                        <PhoneNumberField name='phone_number' SWXInputProps={phoneNumberProps} />
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px', height: '86px', marginTop: '10px' }}>
                        <InputField name='email' SWXInputProps={emailProps} />
                        <InputField name='password' SWXInputProps={passwordProps} />
                    </Stack>
                    <Divider
                        orientation='vertical'
                        flexItem
                        sx={{ borderBottom: '1px solid #E6E8E9', marginTop: '23px' }}
                    />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px', height: '86px', marginTop: '22px' }}>
                        <InputField name='address1' SWXInputProps={addressLine1Props} />
                        <InputField name='address2' SWXInputProps={addressLine2Props} disableValidation />
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px', height: '86px', marginTop: '27px' }}>
                        <InputField name='city' SWXInputProps={cityProps} />
                        <Stack direction='row' spacing={2} style={{ width: '100%' }}>
                            <SelectField name='State' SWXInputProps={stateProps} />
                            <InputField name='zipcode' SWXInputProps={zipProps} />
                        </Stack>
                    </Stack>
                </Stack>
                <FooterContainer>
                    <SwxButton
                        onClick={() => dispatch(closeModal({ modalName: 'addEmployeeModal' }))}
                        variant='text'
                        size='medium'>
                        Cancel
                    </SwxButton>
                    <FormSubmitButton variant='contained' buttonName='Next' />
                </FooterContainer>
            </Form>
        </>
    );
}

export default AddEmployeeStep1;
