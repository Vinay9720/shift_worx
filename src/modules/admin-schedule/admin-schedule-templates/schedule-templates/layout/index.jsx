import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import MonthlyTemplate from './MonthlyTemplate';
import ActionButtons from './ActionButtons';
import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';
import { useScheduleTemplate } from '@/hooks/admin-schedule-templates/useScheduleTemplate';

export default function AdminScheduleTemplate({ editingTemplate }) {
    const { data: templateData, isSuccess, isLoading } = useScheduleTemplate();
    return (
        <AdminScheduleTemplateLayout
            title={
                editingTemplate
                    ? (isSuccess && templateData.template_schedule.name) || 'Edit a Template'
                    : 'Create New Template'
            }
            filter={<Filter editingTemplate={editingTemplate} />}
            weeklyTemplate={<WeeklyTemplate templateShifts={isSuccess ? templateData.records : []} />}
            monthlyTemplate={<MonthlyTemplate templateShifts={isSuccess ? templateData.records : []} />}
            footer={<ActionButtons editingTemplate={editingTemplate} />}
            loading={isLoading}
        />
    );
}
