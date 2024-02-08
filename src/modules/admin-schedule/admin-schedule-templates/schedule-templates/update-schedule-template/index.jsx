'use client';

import { SwxModal } from '@/lib/common/layout';

import SaveScheduleTemplateForm from '../save-schedule-template/save-schedule-templateForm';
import { useUpdateTemplate } from '@/hooks/admin-schedule-templates';

export default function UpdateScheduleTemplate() {
    const { mutate: updateTemplate, isLoading } = useUpdateTemplate();
    return (
        <SwxModal modalName='updateScheduleTemplateModal'>
            <SaveScheduleTemplateForm
                title='Edit Schedule Template'
                modalName='updateScheduleTemplateModal'
                action={updateTemplate}
                loading={isLoading}
                isEditing
            />
        </SwxModal>
    );
}
