'use client';

import { useSearchParams } from 'next/navigation';

import { AdminScheduleLayout } from '@/lib/common/layout/admin-layouts';
import { AdminScheduleOverView } from '@/modules/admin-schedule';
import { AdminScheduleTemplates } from '@/modules/admin-schedule/';

export default function Page() {
    const searchParams = useSearchParams();
    const currentStepName = searchParams.get('step');
    return (
        <AdminScheduleLayout>
            {currentStepName === 'overview' && <AdminScheduleOverView />}
            {currentStepName === 'templates' && <AdminScheduleTemplates />}
        </AdminScheduleLayout>
    );
}
