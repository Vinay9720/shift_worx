import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useActivities = employeeId => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchActivities(employeeId), {
        select: data => {
            const activitiesData = data.data;
            return activitiesData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
