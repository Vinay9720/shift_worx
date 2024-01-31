'use client';

import { SwxLoader } from '@/lib/common/components';
import AdminScheduleTemplate from '@/modules/admin-schedule/admin-schedule-templates/schedule-templates/layout';
import { useSelector } from 'react-redux';

export default function Page() {
    const { loading } = useSelector(state => state.loading);
    return <> {loading ? <SwxLoader loading={loading} /> : <AdminScheduleTemplate />}</>;
}
