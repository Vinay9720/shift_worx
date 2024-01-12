'use client';

import { SwxModal } from '@/lib/common/layout';

import PublishScheduleTemplateForm from './PublishScheduleTemplateForm';
import { useAddTemplateShift } from '@/hooks/admin-schedule-templates/useAddTemplateShift';

export default function PublishScheduleTemplate() {
    const { mutate: addShift } = useAddTemplateShift();

    return (
        <div className='flex items-center mt-0'>
            <SwxModal modalName='publishScheduleTemplateModal'>
                <PublishScheduleTemplateForm modalName='publishScheduleTemplateModal' action={addShift} />
            </SwxModal>
        </div>
    );
}
