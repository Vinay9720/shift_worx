import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Stack } from '@mui/material';

import { Icon } from '@/lib/common/icons';
import { Form, FormSubmitButton, InputField } from '@/lib/common/form-components';
import { validateEmail } from '@/lib/validators/emailValidator';
import { SwxTypography } from '@/lib/common/components';
import { useLogin } from '@/hooks/auth/useLogin';

import {
    Container,
    StyledLoginContainer,
    HeadingContainer,
    FooterContainer,
    IconContainer,
    CopyrightContainer,
} from './login.styles';

const PasswordIcon = styled(Icon)`
    fill: ${({ isPasswordFocused }) => (isPasswordFocused ? 'brand' : 'inherit')};
`;

export default function LoginForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const { mutate: login } = useLogin();
    const onSubmit = async credentials => {
        login(credentials);
    };

    const emailProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin'>
                Email
            </SwxTypography>
        ),
        placeholder: 'Email',
        required: 'Enter email address',
        validate: validateEmail,
        radius: '4px',
        background: 'white',
        placeholderColor: 'darkestGray',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin'>
                Password
            </SwxTypography>
        ),
        type: isPasswordVisible ? 'text' : 'password',
        placeholder: 'Password',
        required: 'Enter password',
        radius: '4px',
        background: 'white',
        placeholderColor: 'darkestGray',
        minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
        },
        maxLength: {
            value: 8,
            message: 'Password cannot be more than 8 characters long',
        },
        icon: (
            <PasswordIcon
                isPasswordFocused={isPasswordFocused}
                onMouseDown={() => {
                    setIsPasswordVisible(true);
                }}
                onMouseUp={() => setIsPasswordVisible(false)}
                name='eye'
                aria-hidden='true'
                height={20}
                width={20}
            />
        ),
        onFocus: () => setIsPasswordFocused(true),
        onBlur: () => !isPasswordVisible && setIsPasswordFocused(false),
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
        },
    };

    return (
        <Container>
            <StyledLoginContainer>
                <HeadingContainer>
                    <Image src='/images/Swx-login.png' alt='logo' width={215} height={57} priority />
                    <SwxTypography color='white' size='large' weight='bolder'>
                        Members Login
                    </SwxTypography>
                </HeadingContainer>
                <Form onSubmit={onSubmit}>
                    <Stack direction='column' spacing={3}>
                        <InputField name='email' SWXInputProps={emailProps} />
                        <InputField name='password' SWXInputProps={passwordProps} />
                        <FormSubmitButton styles={buttonProps.styles} buttonName='Log In' disabled={false} />
                    </Stack>
                </Form>
                <FooterContainer>
                    <Stack direction='row' spacing={1}>
                        <SwxTypography weight='extraThin'>Don’t have an account?</SwxTypography>
                        <SwxTypography weight='bold'>Create an Account</SwxTypography>
                    </Stack>
                    <SwxTypography weight='bold'>Forgot Password?</SwxTypography>
                </FooterContainer>
                <IconContainer>
                    <Icon name='facebook' width={20} height={35} fill={'white'} />
                    <Icon name='twitter' width={42} height={33} fill={'white'} />
                    <Icon name='linked-in' width={38} height={35} fill={'white'} />
                    <Icon name='instagram' width={38} height={35} fill={'white'} />
                </IconContainer>
                <CopyrightContainer>
                    <SwxTypography weight='extraThin'>2022 ShiftWorx.io. All Rights Reserved.</SwxTypography>
                </CopyrightContainer>
            </StyledLoginContainer>
        </Container>
    );
}
