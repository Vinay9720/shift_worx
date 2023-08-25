'use client';

// import { useDispatch } from 'react-redux';

import {
    Form,
    InputField,
    DatePickerField,
    PhoneNumberField,
    SelectField1,
    FormSubmitButton,
} from '@/components/form-components';
import { Hr, SwxButton } from '@/components/common';
import { UsStates } from '@/constants';
// import { openModal } from '@/lib/store/slices/modal-slice';

import { HeadingsContainer, RowContainer, StyledText, StyledLabel, FooterContainer } from './AddEmployee.styles';

function AddEmployeeStep1() {
    // const dispatch = useDispatch();

    const firstNameProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                First Name
            </StyledLabel>
        ),
        placeholder: 'Employee first name',
        required: 'Enter first name',
    };

    const emailProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Email
            </StyledLabel>
        ),
        placeholder: 'Employee email',
        required: 'Enter email',
    };

    const passwordProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Password
            </StyledLabel>
        ),
        type: 'password',
        placeholder: 'Employee password',
        required: 'Enter password',
    };

    const addressLine1Props = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Address
            </StyledLabel>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
    };

    const addressLine2Props = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Address line 2
            </StyledLabel>
        ),
        placeholder: 'Employee address',
        required: 'Enter address',
    };

    const lastNameProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Last Name
            </StyledLabel>
        ),
        placeholder: 'Employee last name',
        required: 'Enter last name',
    };

    const phoneNumberProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Phone number
            </StyledLabel>
        ),
        required: 'Enter phone number',
    };

    const cityProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                City
            </StyledLabel>
        ),
        placeholder: 'City',
        required: 'Enter city',
    };

    const zipProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                ZIP Code
            </StyledLabel>
        ),
        placeholder: 'XXXXX',
        type: 'number',
        required: 'Enter zip code',
    };

    const dateProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Date of Birth
            </StyledLabel>
        ),
        multiple: false,
        required: true,
        range: false,
    };

    const stateProps = {
        outsideLabel: () => {
            return (
                <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                    State
                </StyledLabel>
            );
        },
        options: UsStates,
        multiple: false,
    };

    return (
        <>
            <HeadingsContainer>
                <StyledText color='swxBlack' size='semiLarge' weight='bold'>
                    Profile Information
                </StyledText>
                <StyledText color='lightGray' size='small' weight='thin'>
                    Add employee profile information here
                </StyledText>
            </HeadingsContainer>
            <Form>
                <RowContainer>
                    <InputField name='first_name' SWXInputProps={firstNameProps} />
                    <InputField name='last_name' SWXInputProps={lastNameProps} />
                </RowContainer>
                <RowContainer>
                    <DatePickerField name='date_of_birth' SWXInputProps={dateProps} />
                    <PhoneNumberField name='phone_number' SWXInputProps={phoneNumberProps} />
                </RowContainer>
                <RowContainer>
                    <InputField name='email' SWXInputProps={emailProps} />
                    <InputField name='password' SWXInputProps={passwordProps} />
                </RowContainer>
                <Hr />
                <RowContainer>
                    <InputField name='address1' SWXInputProps={addressLine1Props} />
                    <InputField name='address2' SWXInputProps={addressLine2Props} />
                </RowContainer>
                <RowContainer>
                    <InputField name='city' SWXInputProps={cityProps} />
                    <div>
                        <SelectField1 name='State' value='' SWXInputProps={stateProps} />
                        <InputField name='zipcode' SWXInputProps={zipProps} />
                    </div>
                </RowContainer>
                {/* {footer} */}
                <FooterContainer>
                    <SwxButton variant='text'>Cancel</SwxButton>
                    <FormSubmitButton variant='contained' buttonName='Next' />
                </FooterContainer>
            </Form>
        </>
    );
}

export default AddEmployeeStep1;
