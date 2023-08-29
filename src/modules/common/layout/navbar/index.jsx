'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Stack } from '@mui/material';

import { HeaderContainer, StyledLink, StyledLinkContainer } from './header.styles';

import { SwxPopupMenu } from '../../components';
import { Icon } from '../../icons';

const NavBar = ({ navLinks }) => {
    const pathname = usePathname();
    const { data } = useSession();
    const router = useRouter();
    const isActive = href => {
        return href.includes(pathname);
    };

    const getIconName = label => {
        if (label === 'Home') {
            return 'header-home';
        }
        if (label === 'Employees') {
            return 'header-employee';
        }
        if (label === 'Schedule') {
            return 'header-calender';
        }
        if (label === 'Reports') {
            return 'header-report';
        }
        if (label === 'Notes') {
            return 'header-notes';
        }
    };

    const renderLinks = () => {
        return (
            <div style={{ display: 'flex' }}>
                {navLinks.map((link, index) => {
                    return (
                        <StyledLinkContainer key={index} active={isActive(link.destination)}>
                            <Icon name={getIconName(link.label)} height={18} width={18} />
                            <Link href={link.destination}>{link.label}</Link>
                        </StyledLinkContainer>
                    );
                })}
            </div>
        );
    };

    const menuOptions = [
        {
            label: 'Logout',
            action: () => {
                signOut();
                localStorage.clear();
                router.push('/');
            },
        },
    ];

    return (
        <HeaderContainer>
            <Stack spacing={3} direction='row'>
                <Stack direction='row' alignItems='center'>
                    <Image src='/images/swx-logo.png' alt='logo' width={137} height={25} />
                </Stack>
                <Stack direction='row' alignItems='center'>
                    {renderLinks()}
                </Stack>
            </Stack>
            <Stack spacing={3} direction='row'>
                <Link href='/'>
                    <Icon styles={{ fill: '#ffffff' }} name='bell' aria-hidden='true' height={20} width={20} />
                </Link>
                <div>
                    <SwxPopupMenu
                        buttonElement={
                            <Stack direction='row' spacing={1.5} alignItems='center'>
                                <Icon
                                    styles={{ fill: '#ffffff' }}
                                    name='user'
                                    aria-hidden='true'
                                    height={20}
                                    width={20}
                                />
                                <StyledLink href='/'>{data ? (data.user ? data.user.name : 'User') : ''}</StyledLink>
                            </Stack>
                        }
                        options={menuOptions}
                    />
                </div>
            </Stack>
        </HeaderContainer>
    );
};

export default NavBar;
