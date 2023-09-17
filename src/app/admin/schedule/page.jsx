'use client';

import { useSearchParams } from 'next/navigation';

import { AdminScheduleLayout } from '@/lib/common/layout/admin-layouts';
import { AdminScheduleOverView } from '@/modules/admin-schedule';
import { useSchedule } from '@/hooks/admin-schedule';

export default function Page() {
    const searchParams = useSearchParams();
    const { data } = useSchedule();
    console.log('data', data);
    const currentStepName = searchParams.get('step');
    return <AdminScheduleLayout>{currentStepName === 'overview' && <AdminScheduleOverView />}</AdminScheduleLayout>;
}
