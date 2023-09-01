'use client';

import { HeaderWithTabs } from '..';

const tabs = [
    { label: 'General Information', step: 'general' },
    { label: 'Personal Documents', step: 'documents' },
    { label: 'Certs/Licenses', step: 'certificates' },
    { label: 'Notes', step: 'notes' },
];

export default function EditEmployeeLayout({ children }) {
    return (
        <>
            <HeaderWithTabs title='Edit Employee Details' tabs={tabs} />
            {children}
        </>
    );
}
