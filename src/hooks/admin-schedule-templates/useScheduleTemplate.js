import { useQuery } from 'react-query';
import { useRouter, useParams } from 'next/navigation';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

import { useToast } from '../common';

export const useScheduleTemplate = () => {
    const { templateId } = useParams();
    const showToast = useToast();
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
                const template = data.data && data.data.records;
                return template;
            },
            onError: error => {
                showToast(error.response.data.message, 'error');
                router.push('/admin/employees?step=overview');
            },
            refetchOnWindowFocus: false,
        }
    );
};
