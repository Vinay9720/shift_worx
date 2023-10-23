import { useQuery } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

export const usePto = () => {
    return useQuery(['admin-pto'], () => AdminEmployeeService.fetchPto(), {
        select: data => {
            const ptoData = data.data;
            return ptoData;
        },
        refetchOnWindowFocus: false,
    });
};
