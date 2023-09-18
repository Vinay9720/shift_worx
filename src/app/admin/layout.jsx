'use client';

import { ADMIN_NAV_LINKS } from '@/lib/constants';
import { NavBar } from '@/lib/common/layout';

export default function Layout({ children }) {
    return (
        <>
            <NavBar navLinks={ADMIN_NAV_LINKS} />
            <div style={{ maxWidth: '1280px', margin: '0px auto', padding: '0 1rem' }}>{children}</div>
        </>
    );
}
