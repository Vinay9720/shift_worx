import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useUnfilledShifts = employeeId => {
    const showToast = useToast();
    return useQuery(['widget-unfilled-shifts'], () => AdminHomeService.fetchUnfilledShifts(employeeId), {
        select: data => {
            const unfilledshiftsData = data.data;
            return unfilledshiftsData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
