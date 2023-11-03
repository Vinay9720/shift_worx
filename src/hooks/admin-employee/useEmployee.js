import { useQuery } from 'react-query';
import { useRouter } from 'next/navigation';

import AdminEmployeeService from '@/services/admin-employee';

import { useToast } from '../common';

export const useEmployee = employeeId => {
    const showToast = useToast();
    const router = useRouter();
    return useQuery(['admin-employee'], () => AdminEmployeeService.fetchEmployee(employeeId), {
        select: data => {
            const employeeData = data.data;
            return employeeData;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
            router.push('/admin/employees?step=overview');
        },
        refetchOnWindowFocus: false,
    });
};
