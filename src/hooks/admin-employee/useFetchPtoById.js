import { useQuery } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

export const useFetchPtoById = id => {
    return useQuery(['admin-pto'], () => AdminEmployeeService.fetchPtoById(id), {
        select: data => {
            const fetchPtoDataById = data.data;
            return fetchPtoDataById;
        },
        refetchOnWindowFocus: false,
    });
};
