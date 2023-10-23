'use client';

import { HeaderWithTabs } from '..';

const tabs = [
    { label: 'General Information', step: 'profile_information' },
    { label: 'Personal Documents', step: 'personal_documents' },
    { label: 'Certs/Licenses', step: 'certificates', icon: 'alert' },
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
