import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import MonthlyTemplate from './MonthlyTemplate';
import ActionButtons from './ActionButtons';
import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';
import { useScheduleTemplate } from '@/hooks/admin-schedule-templates/useScheduleTemplate';

export default function AdminScheduleTemplate({ editingTemplate }) {
    const { data: templateShifts } = useScheduleTemplate();
    return (
        <AdminScheduleTemplateLayout
            title={editingTemplate ? 'Edit a Template' : 'Create New Template'}
            filter={<Filter editingTemplate={editingTemplate} />}
            weeklyTemplate={<WeeklyTemplate templateShifts={templateShifts} />}
            monthlyTemplate={<MonthlyTemplate templateShifts={templateShifts} />}
            footer={<ActionButtons editingTemplate={editingTemplate} />}
        />
    );
}
