import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';
import { setPagination } from '@/lib/store/slices/paginationSlice';

export const useEmployees = () => {
    const { itemsPerPage, currentPage } = useSelector(state => state.pagination);
    const dispatch = useDispatch();
    return useQuery(
        ['admin-employees', itemsPerPage, currentPage],
        () => AdminEmployeeService.fetchEmployees(itemsPerPage, currentPage, ''),
        {
            select: data => {
                const res = data.data;
                const formattedData = {
                    employees: res.records,
                    scheduledEmployee: res.scheduled_employee,
                    scheduledEmployeePercentage: res.scheduled_employee_percentage,
                    expirations: res.expirations,
                    expirationsPercentage: res.expirations_percentage,
                    employeePercentage: res.total_employee_percentage,
                    paginationData: res.pagination_data,
                };
                return formattedData;
            },
            onSuccess: data => {
                const pagination = data.paginationData;
                dispatch(
                    setPagination({
                        currentPage: pagination.current_page,
                        itemsPerPage: pagination.per_page,
                        totalItems: pagination.total_count,
                    })
                );
            },
            refetchOnWindowFocus: false,
        }
    );
};
