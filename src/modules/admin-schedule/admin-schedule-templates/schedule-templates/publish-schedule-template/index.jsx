'use client';

import { SwxModal } from '@/lib/common/layout';

import PublishScheduleTemplateForm from './PublishScheduleTemplateForm';
import { usePublishTemplate } from '@/hooks/admin-schedule-templates/usePublishTemplate';

export default function PublishScheduleTemplate({ action }) {
    const { mutate: publishTemplate } = usePublishTemplate();
    const getAction = () => {
        if (action === 'publish') {
            return publishTemplate;
        }
    };
    return (
        <div className='flex items-center mt-0'>
            <SwxModal modalName='publishScheduleTemplateModal'>
                <PublishScheduleTemplateForm modalName='publishScheduleTemplateModal' action={getAction()} />
            </SwxModal>
        </div>
    );
}
