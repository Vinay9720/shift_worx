import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { useSession, signIn, getSession } from 'next-auth/react';

import { Icon } from '@/lib/common/icons';
import { Form, FormSubmitButton, InputField } from '@/lib/common/form-components';
import { validateEmail } from '@/lib/validators/emailValidator';
import { SwxTypography, SwxLoader } from '@/lib/common/components';
import { redirectUser } from '@/lib/util';
import { useToast } from '@/hooks/common';

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
    const showToast = useToast();
    const [loading, setLoading] = useState(false);
    // const { applicationLoading } = useSelector(state => state.application);

    // const { mutate: login, isLoading } = useLogin();
    const router = useRouter();
    const { data: user, status } = useSession();
    const onSubmit = async credentials => {
        setLoading(true);
        await signIn('credentials', {
            email: credentials.email,
            password: credentials.password,
            redirect: false,
        }).then(async response => {
            const session = await getSession();
            if (response.status === 200 && session) {
                redirectUser(session, router);
            } else if (response.status === 401) {
                showToast('Invalid credentials', 'error');
                setLoading(false);
            }
        });
    };

    // const onSubmit = async credentials => {
    //     login(credentials);
    // };

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
        font: 'var(--font-Nunito)',
    };

    const passwordProps = {
        label: (
            <SwxTypography color='white' size='semiMedium' weight='thin' className='nunito'>
                Password
            </SwxTypography>
        ),
        type: isPasswordVisible ? 'text' : 'password',
        placeholder: 'Password',
        required: 'Enter password',
        radius: '4px',
        background: 'white',
        placeholderColor: 'darkestGray',
        font: 'var(--font-Nunito)',
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
            fontFamily: 'var(--font-Nunito)',
        },
    };

    if (user) {
        redirectUser(user, router);
        return null;
    }

    return (
        <Container>
            {!(loading || status === 'loading') ? (
                <StyledLoginContainer>
                    <HeadingContainer>
                        <Image
                            src='/images/shiftworx_logo_text_white.png'
                            alt='logo'
                            width={215}
                            height={57}
                            priority
                        />
                        <SwxTypography color='white' size='large' weight='bolder' className='nunito'>
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
                            <SwxTypography weight='extraThin' className='nunito'>
                                Don’t have an account?
                            </SwxTypography>
                            <SwxTypography weight='bold' className='nunito'>
                                <Link href='/register'>Create an Account</Link>
                            </SwxTypography>
                        </Stack>
                        <SwxTypography weight='bold' className='nunito'>
                            Forgot Password?
                        </SwxTypography>
                    </FooterContainer>
                    <IconContainer>
                        <Icon name='facebook' width={20} height={35} fill='white' />
                        <Icon name='twitter' width={42} height={33} fill='white' />
                        <Icon name='linked-in' width={38} height={35} fill='white' />
                        <Icon name='instagram' width={38} height={35} fill='white' />
                    </IconContainer>
                    <CopyrightContainer>
                        <SwxTypography weight='extraThin' className='nunito'>
                            2022 ShiftWorx.io. All Rights Reserved.
                        </SwxTypography>
                    </CopyrightContainer>
                </StyledLoginContainer>
            ) : (
                <SwxLoader loading={loading || status === 'loading'} />
            )}
        </Container>
    );
}
