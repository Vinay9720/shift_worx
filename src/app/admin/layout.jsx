'use client';

import { ADMIN_NAV_LINKS } from '@/lib/constants';
import { NavBar } from '@/modules/common/layout';

export default function Layout({ children }) {
    return (
        <>
            <NavBar navLinks={ADMIN_NAV_LINKS} />
            <div style={{ maxWidth: '1420px', margin: '0px auto' }}>{children}</div>
        </>
    );
}
