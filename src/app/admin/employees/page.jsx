'use client';

import { useSearchParams } from 'next/navigation';

import { AdminEmployeeLayout } from '@/lib/common/layout/admin-layouts';
import AdminOverview from '@/modules/admin-employee/admin-overview';
import AdminNotes from '@/modules/admin-employee/admin-notes';
import AdminExpirations from '@/modules/admin-employee/admin-expirations';

export default function Page() {
    const searchParams = useSearchParams();
    const currentStepName = searchParams.get('step');
    return (
        <AdminEmployeeLayout>
            {currentStepName === 'overview' && <AdminOverview />}
            {currentStepName === 'expirations' && <AdminExpirations />}
            {currentStepName === 'notes' && <AdminNotes />}
        </AdminEmployeeLayout>
    );
}
