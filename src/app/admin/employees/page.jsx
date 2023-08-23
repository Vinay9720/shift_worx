'use client';

import AdminLayout from '@/modules/admin-layout';
import AdminOverview from '@/modules/admin-overview';

export default function Page() {
    return (
        <AdminLayout>
            <AdminOverview />
        </AdminLayout>
    );
}
