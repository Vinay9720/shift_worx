'use client';

import { HeaderWithTabs } from '..';

const adminEmployeeTabs = [
    { label: 'Overview', step: 'overview' },
    { label: 'Expirtations', step: 'expirations' },
    { label: 'PTO', step: 'pto' },
    { label: 'Notes', step: 'notes' },
];

export default function AdminEmployeeLayout({ children }) {
    return (
        <>
            <HeaderWithTabs title='Employees' tabs={adminEmployeeTabs} />
            {children}
        </>
    );
}
