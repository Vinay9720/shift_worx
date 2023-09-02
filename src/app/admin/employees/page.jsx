'use client';

import { AdminMainLayout } from '@/modules/common/layout';
import AdminOverview from '@/modules/admin-overview';

export default function Page() {
    return (
        <AdminMainLayout>
            <AdminOverview />
        </AdminMainLayout>
    );
}
