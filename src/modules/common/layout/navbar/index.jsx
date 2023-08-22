/* eslint-disable lines-around-directive */
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import { HeaderContainer, StyledLink, StyledLinkContainer } from './header.styles';

import { SwxPopupMenu } from '../../components';
import { Icon } from '../../icons';

const NavBar = ({ navLinks }) => {
    const pathname = usePathname();
    const { data } = useSession();
    const router = useRouter();
    const isActive = href => {
        return pathname.includes(href);
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
                            <StyledLink href={link.destination}>{link.label}</StyledLink>
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
            <div className='flex gap-24'>
                <div className='flex items-center'>
                    <Image src='/white-theme-images/swx-logo.png' alt='logo' width={137} height={25} />
                </div>
                <div className='flex items-center'>{renderLinks()}</div>
            </div>
            <div className='flex items-center'>
                <Link className='font-bold text-light text-[16px] ml-[2vw] md:ml-[32px]' href='/'>
                    <Icon styles='fill-light' name='bell' aria-hidden='true' height={20} width={20} />
                </Link>
                <div>
                    <SwxPopupMenu
                        headerElement={
                            <div className='flex items-center gap-3 ml-5'>
                                <Icon styles='fill-light' name='user' aria-hidden='true' height={20} width={20} />
                                <Link className='font-medium text-light text-[16px]' href='/'>
                                    {data ? (data.user ? data.user.name : 'User') : 'User'}
                                </Link>
                            </div>
                        }
                        menuOptions={menuOptions}
                    />
                </div>
            </div>
        </HeaderContainer>
    );
};

export default NavBar;
