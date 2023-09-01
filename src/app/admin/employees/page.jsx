'use client';

import { useSearchParams } from 'next/navigation';

import { AdminMainLayout } from '@/modules/common/layout';
import AdminOverview from '@/modules/admin-overview';

export default function Page() {
    const searchParams = useSearchParams();
    console.log('search params', searchParams);
    return (
        <AdminMainLayout>
            <AdminOverview />
        </AdminMainLayout>
    );
}
