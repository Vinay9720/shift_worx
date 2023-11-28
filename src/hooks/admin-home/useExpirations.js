import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useExpirations = employeeId => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchExpirations(employeeId), {
        select: data => {
            const expirationsData = data.data;
            return expirationsData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
