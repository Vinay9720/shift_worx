import { useQuery } from 'react-query';
import { lowerCase } from 'lodash';
import { useSelector } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';

import { usePagination } from '../common';

export const useEmployees = returnAllEmployees => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminEmployeesPagination');
    const { search, status, roles } = useSelector(state => state.employeesFilter);
    const formattedSearch = lowerCase(status);
    return useQuery(
        ['admin-employees', itemsPerPage, currentPage, search, status, roles],
        () =>
            AdminEmployeeService.fetchEmployees(
                !returnAllEmployees ? itemsPerPage : 'all',
                currentPage,
                search,
                roles,
                formattedSearch
            ),
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
                if (!returnAllEmployees) {
                    const pagination = data.paginationData;
                    setPagination({
                        currentPage: pagination.current_page,
                        itemsPerPage: pagination.per_page,
                        totalItems: pagination.total_count,
                    });
                }
            },
            refetchOnWindowFocus: false,
        }
    );
};
