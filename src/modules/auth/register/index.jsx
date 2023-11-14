'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Stack } from '@mui/material';

import { SwxTypography, SwxLoader } from '@/lib/common/components';
import { validateEmail } from '@/lib/validators';
import { InputField, Form, FormSubmitButton, PhoneNumberField } from '@/lib/common/form-components';
import { useRegistration } from '@/hooks/auth/useRegistration';

import {
    Container,
    CopyrightContainer,
    FooterContainer,
    StyledRegistrationContainer,
    HeadingContainer,
} from './register.styles';

export default function Registration() {
    const { mutate: registerUser, isLoading } = useRegistration();
    const emailProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                Email
            </SwxTypography>
        ),
        placeholder: 'Email',
        required: 'Enter email address',
        validate: validateEmail,
        radius: '4px',
        background: 'white',
        placeholderColor: 'darkestGray',
        fontFamily: '__Nunito_3dc409',
    };

    const firstNameProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                First Name
            </SwxTypography>
        ),
        placeholder: 'First name',
        background: 'white',
        placeholderColor: 'darkestGray',
        fontFamily: '__Nunito_3dc409',
        required: 'Enter first name',
    };

    const lastNameProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                Last Name
            </SwxTypography>
        ),
        placeholder: 'Employee last name',
        background: 'white',
        placeholderColor: 'darkestGray',
        fontFamily: '__Nunito_3dc409',
        required: 'Enter last name',
    };

    const phoneNumberProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                Phone number
            </SwxTypography>
        ),
        width: '100%',
        background: 'white',
        placeholderColor: 'darkestGray',
        fontFamily: '__Nunito_3dc409',
        required: 'Enter phone number',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                Password
            </SwxTypography>
        ),
        type: 'password',
        placeholder: 'Employee password',
        background: 'white',
        fontFamily: '__Nunito_3dc409',
        placeholderColor: 'darkestGray',
        required: 'Enter password',
    };

    const buttonProps = {
        styles: {
            height: '60px',
            background: '#0080F6',
            marginTop: '32px',
            width: '100%',
            color: 'white',
            fontWeight: '700',
            fontSize: '24px',
            padding: '6px 24px',
            borderRadius: '5px',
            fontFamily: '__Nunito_3dc409',
        },
    };

    return (
        <Container>
            {!isLoading ? (
                <StyledRegistrationContainer>
                    <HeadingContainer>
                        <Image
                            src='/images/shiftworx_logo_text_white.png'
                            alt='logo'
                            width={215}
                            height={57}
                            priority
                        />
                        <SwxTypography color='white' size='large' weight='bolder' className='nunito'>
                            Member Registration
                        </SwxTypography>
                    </HeadingContainer>
                    <Form onSubmit={userData => registerUser(userData)}>
                        <Stack direction='column' spacing={3}>
                            <InputField name='first_name' SWXInputProps={firstNameProps} />
                            <InputField name='last_name' SWXInputProps={lastNameProps} />
                            <InputField name='email' SWXInputProps={emailProps} />
                            <InputField name='password' SWXInputProps={passwordProps} />
                            <PhoneNumberField name='phone_number' SWXInputProps={phoneNumberProps} />
                            <FormSubmitButton
                                styles={buttonProps.styles}
                                buttonName='Create Account'
                                disabled={false}
                            />
                        </Stack>
                    </Form>
                    <FooterContainer>
                        <Stack direction='row' spacing={1}>
                            <SwxTypography weight='extraThin' className='nunito'>
                                Already have an account?
                            </SwxTypography>
                            <SwxTypography weight='bold' className='nunito'>
                                <Link href='/'>Log In</Link>
                            </SwxTypography>
                        </Stack>
                    </FooterContainer>
                    <CopyrightContainer>
                        <SwxTypography weight='extraThin' className='nunito'>
                            2022 ShiftWorx.io. All Rights Reserved.
                        </SwxTypography>
                    </CopyrightContainer>
                </StyledRegistrationContainer>
            ) : (
                <SwxLoader loading={isLoading} />
            )}
        </Container>
    );
}
