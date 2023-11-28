import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useKPIs = employeeId => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchKPIs(employeeId), {
        select: data => {
            const KPIsData = data.data;
            return KPIsData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
