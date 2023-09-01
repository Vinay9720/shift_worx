'use client';

import { HeaderWithTabs } from '..';

const tabs = [
    { label: 'Overview', step: 'overview' },
    { label: 'Expirtations', step: 'expirations' },
    { label: 'PTO', step: 'pto' },
    { label: 'Notes', step: 'notes' },
];

export default function AdminMainLayout({ children }) {
    return (
        <>
            <HeaderWithTabs title='Employees' tabs={tabs} />
            {children}
        </>
    );
}
