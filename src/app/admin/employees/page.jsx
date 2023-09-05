'use client';

import { useSearchParams } from 'next/navigation';

import { AdminMainLayout } from '@/modules/common/layout';
import AdminOverview from '@/modules/admin-overview';
import AdminNotes from '@/modules/admin-notes';

export default function Page() {
    const searchParams = useSearchParams();
    const currentStepName = searchParams.get('step');
    return (
        <AdminMainLayout>
            {currentStepName === 'overview' && <AdminOverview />}
            {currentStepName === 'notes' && <AdminNotes />}
        </AdminMainLayout>
    );
}
