import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useEvents = employeeId => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchEvents(employeeId), {
        select: data => {
            const eventsData = data.data;
            return eventsData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
