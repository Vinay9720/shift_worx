import { useQuery } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

export const useEmployee = employeeId => {
    return useQuery(['admin-employee'], () => AdminEmployeeService.fetchEmployee(employeeId), {
        select: data => {
            const employeeData = data.data;
            return employeeData;
        },
        onSuccess: data => {
            console.log('employeeData', data);
        },
        refetchOnWindowFocus: false,
    });
};
