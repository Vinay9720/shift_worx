'use client';

import { HeaderWithTabs } from '..';

export default function EditEmployeeLayout({ children, tabs }) {
    return (
        <>
            <HeaderWithTabs title='Edit Employee Details' tabs={tabs} />
            {children}
        </>
    );
}
