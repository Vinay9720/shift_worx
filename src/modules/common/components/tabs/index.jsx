'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { LinkWrapper, StyledTab } from './tabs.styles';

const isActive = (href, pathname) => {
    return pathname === href;
};

function SwxTabs({ tabs, currentStep }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const handleTabClick = step => {
        params.set('step', step);
        router.push(`${pathname}?${params}`);
    };
    return (
        <LinkWrapper>
            {tabs.map((tab, i) => (
                <StyledTab key={i} onClick={() => handleTabClick(tab.step)} active={isActive(tab.step, currentStep)}>
                    {tab.label}
                </StyledTab>
            ))}
        </LinkWrapper>
    );
}

export default SwxTabs;
