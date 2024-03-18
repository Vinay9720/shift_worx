'use client';

import { useSearchParams } from 'next/navigation';

import { EmployeeScheduleLayout } from '@/lib/common/layout/employee-layouts';
import EmployeeScheduleOverView from './employee-schedule-overview';
import EmployeeShiftBoard from './employee-schedule-overview/employee-shift-board';
import EmployeePTO from './employee-schedule-overview/employee-pto';

export default function Page() {
    const searchParams = useSearchParams();
    const currentStepName = searchParams.get('step');
    return (
        <EmployeeScheduleLayout>
            {currentStepName === 'overview' && <EmployeeScheduleOverView />}
            {currentStepName === 'shift_board' && <EmployeeShiftBoard />}
            {currentStepName === 'pto' && <EmployeePTO />}
        </EmployeeScheduleLayout>
    );
}
