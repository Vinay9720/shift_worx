import Filter from './Filter';
import WeeklyTemplate from './WeeklyTemplate';
import ActionButtons from './ActionButtons';
import AdminScheduleTemplateLayout from '@/lib/common/layout/admin-layouts/AdminScheduleTemplateLayout';

export default function AdminScheduleTemplate() {
    return (
        <AdminScheduleTemplateLayout
            title='Create New Template'
            filter={<Filter />}
            weeklyTemplate={<WeeklyTemplate />}
            footer={<ActionButtons />}
        />
    );
}
