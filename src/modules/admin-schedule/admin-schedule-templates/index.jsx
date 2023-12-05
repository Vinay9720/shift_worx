import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';
import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import ActionButtons from './ActionButtons';

export default function AdminScheduleTemplates() {
    return (
        <AdminScheduleTemplateLayout
            title='Create New Template'
            filter={<Filter />}
            weeklyTemplate={<WeeklyTemplate />}
            footer={<ActionButtons />}
        />
    );
}
