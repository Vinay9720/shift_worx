import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import MonthlyTemplate from './MonthlyTemplate';
import ActionButtons from './ActionButtons';
import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';
import { useScheduleTemplate } from '@/hooks/admin-schedule-templates/useScheduleTemplate';

export default function AdminScheduleTemplate() {
    const { data: templateShifts } = useScheduleTemplate();
    return (
        <AdminScheduleTemplateLayout
            title='Create New Template'
            filter={<Filter />}
            weeklyTemplate={<WeeklyTemplate templateShifts={templateShifts} />}
            monthlyTemplate={<MonthlyTemplate templateShifts={templateShifts} />}
            footer={<ActionButtons />}
        />
    );
}
