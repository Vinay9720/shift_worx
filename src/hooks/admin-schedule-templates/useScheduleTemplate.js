import { useQuery } from 'react-query';
import { useRouter, useParams } from 'next/navigation';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

import { useToast } from '../common';
import { setTemplateDetails, setTemplateType } from '@/lib/store/slices/admin-schedule-templates-module';
import { useDispatch } from 'react-redux';
import { capitalize } from 'lodash';

export const useScheduleTemplate = () => {
    const { templateId } = useParams();
    const showToast = useToast();
    const dispatch = useDispatch();
    const router = useRouter();
    return useQuery(
        ['admin-schedule-template'],
        () => {
            if (templateId === 'new') {
                return Promise.resolve({ data: [] });
            }
            return AdminScheduleTemplatesService.fetchTemplate(templateId);
        },
        {
            select: data => {
                const templateData = data.data;
                const templateShifts = templateData.records;
                dispatch(setTemplateDetails(templateData.template_schedule));
                dispatch(setTemplateType(capitalize(templateData.template_schedule.template_type)));
                return templateShifts;
            },
            onError: error => {
                showToast(error.response.data.message, 'error');
                router.push('/admin/employees?step=overview');
            },
            refetchOnWindowFocus: false,
        }
    );
};
