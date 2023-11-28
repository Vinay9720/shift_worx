import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useTimeOffRequests = employeeId => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchTimeOffRequests(employeeId), {
        select: data => {
            const timeOffRequestsData = data.data;
            return timeOffRequestsData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
