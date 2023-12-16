'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { LinkWrapper, StyledTab } from './tabs.styles';

import { Icon } from '../../icons';
import { useTabs } from '@/hooks/common';
import { useEffect } from 'react';

const isActive = (href, pathname) => {
    return pathname === href;
};

function SwxTabs({ tabs, currentStep, initialState, tabsName }) {
    const router = useRouter();
    const { goTo, clear, set, currentTab } = useTabs(tabsName, initialState || { currentTab: '' });
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const handleTabClick = step => {
        if (!tabsName) {
            params.set('step', step);
            const newUrl = `${pathname}?${params}`;
            router.push(newUrl);
        } else {
            goTo(step);
        }
    };

    useEffect(() => {
        set();
        return () => {
            clear();
        };
    }, [tabsName]);

    return (
        <LinkWrapper>
            {tabs.map((tab, i) => (
                <StyledTab
                    key={i}
                    onClick={() => handleTabClick(tab.step)}
                    active={isActive(tab.step, !tabsName ? currentStep : currentTab)}>
                    {tab.icon && (
                        <span style={{ marginRight: '4px' }}>
                            <Icon name={tab.icon} height={20} width={20} />
                        </span>
                    )}
                    <span>{tab.label}</span>
                </StyledTab>
            ))}
        </LinkWrapper>
    );
}

export default SwxTabs;
