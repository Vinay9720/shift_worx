import { useQuery } from 'react-query';
import { useRouter } from 'next/navigation';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

import { useToast } from '../common';

export const useScheduleTemplate = employeeId => {
    const showToast = useToast();
    const router = useRouter();
    return useQuery(['admin-schedule-template'], () => AdminScheduleTemplatesService.fetchTemplate(employeeId), {
        select: data => {
            const template = data.data;
            return template;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
            router.push('/admin/employees?step=overview');
        },
        refetchOnWindowFocus: false,
    });
};
