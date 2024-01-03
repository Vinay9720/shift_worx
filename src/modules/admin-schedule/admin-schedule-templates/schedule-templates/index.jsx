import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import MonthlyTemplate from './MonthlyTemplate';
import ActionButtons from './ActionButtons';
import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';
import { useScheduleTemplate } from '@/hooks/admin-schedule-templates/useScheduleTemplate';

export default function AdminScheduleTemplate() {
    const data = useScheduleTemplate();
    console.log('data===>', data);
    return (
        <AdminScheduleTemplateLayout
            title='Create New Template'
            filter={<Filter />}
            weeklyTemplate={<WeeklyTemplate />}
            monthlyTemplate={<MonthlyTemplate />}
            footer={<ActionButtons />}
        />
    );
}
