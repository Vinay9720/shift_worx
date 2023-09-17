import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Stack } from '@mui/material';

import { Icon } from '@/lib/common/icons';
import { Form, FormSubmitButton, InputField } from '@/lib/common/form-components';
import { validateEmail } from '@/lib/validators/emailValidator';
import { SwxTypography } from '@/lib/common/components';
import { useLogin } from '@/hooks/auth/useLogin';

import { Container, StyledLoginContainer, HeadingContainer } from './login.styles';

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

    return (
        <Container>
            <StyledLoginContainer>
                <HeadingContainer>
                    <Image src='/images/swx-white-logo.png' alt='logo' width={250} height={30} priority />
                    <SwxTypography color='white' size='medium' weight='bold'>
                        Members Login
                    </SwxTypography>
                </HeadingContainer>
                <Form onSubmit={onSubmit}>
                    <Stack direction='column' spacing={1.5}>
                        <InputField name='email' SWXInputProps={emailProps} />
                        <InputField name='password' SWXInputProps={passwordProps} />
                        <FormSubmitButton
                            styles={{ marginTop: '1rem', width: '100%' }}
                            buttonName='Log In'
                            disabled={false}
                        />
                    </Stack>
                </Form>
            </StyledLoginContainer>
        </Container>
    );
}
