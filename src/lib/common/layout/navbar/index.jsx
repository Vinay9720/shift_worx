'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Avatar, Stack, Drawer } from '@mui/material';

import {
    HeaderContainer,
    HeaderWrapper,
    StyledLink,
    StyledLinkContainer,
    styles,
    LinksContainer,
    MobileLogoContainer,
} from './header.styles';

import { SwxPopupMenu } from '../../components';
import { Icon } from '../../icons';

const NavBar = ({ navLinks }) => {
    const [navbar, setNavBar] = useState(false);
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

    const renderLinks = isMobile => {
        return (
            <LinksContainer isMobile={isMobile}>
                {navLinks.map((link, index) => {
                    return (
                        <StyledLinkContainer
                            onClick={() => (isMobile ? setNavBar(false) : null)}
                            key={index}
                            active={isActive(link.destination)}>
                            <Icon name={getIconName(link.label)} height={18} width={18} />
                            <Link href={link.destination}>{link.label}</Link>
                        </StyledLinkContainer>
                    );
                })}
            </LinksContainer>
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
        <HeaderWrapper>
            <HeaderContainer>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: '#1F6FA9',
                        },
                    }}
                    anchor='left'
                    onClose={() => setNavBar(false)}
                    open={navbar}>
                    <>
                        <MobileLogoContainer direction='row' alignItems='center'>
                            <Image src='/images/swx-logo.png' alt='logo' width={137} height={25} />
                        </MobileLogoContainer>
                        {renderLinks(true)}
                    </>
                </Drawer>
                <Stack spacing={3} direction='row'>
                    <Stack direction='row' alignItems='center'>
                        <Image src='/images/swx-logo.png' alt='logo' width={137} height={25} />
                    </Stack>
                    <Stack direction='row' alignItems='center' sx={styles.mainNavLinks}>
                        {renderLinks()}
                    </Stack>
                </Stack>
                <Stack spacing={2} direction='row' sx={styles.stackOne}>
                    <Stack sx={styles.stackTwo}>
                        <Icon name='ellipse' width={36} height={36} fill='#1B6397' />
                        <Stack sx={styles.stackThree}>
                            <Stack sx={styles.stackFour}>
                                {/* <Link href='/'> */}
                                <Icon
                                    styles={{ fill: '#ffffff' }}
                                    name='bell'
                                    aria-hidden='true'
                                    height={18}
                                    width={18}
                                />
                                {/* </Link> */}
                                <Stack sx={styles.stackFive}>
                                    <Icon
                                        name='circle'
                                        width={8}
                                        height={8}
                                        fill='#FE6782'
                                        cx='4'
                                        cy='4'
                                        r='3.5'
                                        stroke='#1B6397'
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={styles.headerPopupMenu}>
                        <SwxPopupMenu
                            buttonElement={
                                <Stack direction='row' spacing={1.5} alignItems='center'>
                                    <Avatar
                                        alt='image'
                                        sx={{ width: 36, height: 36, bgcolor: '#1B6397' }}
                                        src='/static/images/avatar/5.jpg'
                                    />
                                    <StyledLink href='/'>
                                        {data ? (data.user ? data.user.name : 'User') : ''}
                                    </StyledLink>
                                </Stack>
                            }
                            options={menuOptions}
                        />
                    </Stack>
                    <Stack sx={styles.hamburger}>
                        <Stack onClick={() => setNavBar(true)} sx={styles.stackTwo}>
                            <Icon name='ellipse' width={36} height={36} fill='#1B6397' />
                            <Stack sx={styles.stackThree}>
                                <Stack sx={styles.stackFour}>
                                    <Icon fill='#ffffff' name='hamburger' aria-hidden='true' height={18} width={18} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default NavBar;
