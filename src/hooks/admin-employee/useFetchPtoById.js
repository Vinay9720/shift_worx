import { useQuery } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

export const useFetchPtoById = id => {
    useQuery(['admin-pto', id], () => AdminEmployeeService.fetchPtoById(id), {
        select: data => {
            const fetchPtoDataById = data.data;
            return fetchPtoDataById;
        },
        refetchOnWindowFocus: false,
    });
};
