import { useQuery } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

export const useExpirations = () => {
    return useQuery(['admin-expirations'], () => AdminEmployeeService.fetchExpirations(), {
        select: data => {
            const expirationData = data.data;
            return expirationData;
        },
        refetchOnWindowFocus: false,
    });
};
