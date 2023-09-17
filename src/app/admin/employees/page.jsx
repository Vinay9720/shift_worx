'use client';

import { useSearchParams } from 'next/navigation';

import { AdminEmployeeLayout } from '@/lib/common/layout';
import AdminOverview from '@/modules/admin-employee/admin-overview';
import AdminNotes from '@/modules/admin-employee/admin-notes';

export default function Page() {
    const searchParams = useSearchParams();
    const currentStepName = searchParams.get('step');
    return (
        <AdminEmployeeLayout>
            {currentStepName === 'overview' && <AdminOverview />}
            {currentStepName === 'notes' && <AdminNotes />}
        </AdminEmployeeLayout>
    );
}
