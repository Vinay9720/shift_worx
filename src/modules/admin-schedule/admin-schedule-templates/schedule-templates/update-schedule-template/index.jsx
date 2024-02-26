'use client';

import { SwxModal } from '@/lib/common/layout';

import SaveScheduleTemplateForm from '../save-schedule-template/save-schedule-templateForm';
import { useUpdateTemplate } from '@/hooks/admin-schedule-templates';
import { clearState } from '@/lib/store/slices/admin-schedule-templates-module';
import { useDispatch } from 'react-redux';

export default function UpdateScheduleTemplate() {
    const { mutate: updateTemplate, isLoading } = useUpdateTemplate();
    const dispatch = useDispatch();
    return (
        <SwxModal modalName='updateScheduleTemplateModal' onCancel={() => dispatch(clearState())}>
            <SaveScheduleTemplateForm
                title='Edit Schedule Template'
                modalName='updateScheduleTemplateModal'
                action={updateTemplate}
                onCancel={() => dispatch(clearState())}
                loading={isLoading}
                isEditing
            />
        </SwxModal>
    );
}
