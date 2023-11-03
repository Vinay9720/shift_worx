import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { lowerCase } from 'lodash';

import AdminEmployeeService from '@/services/admin-employee';

import { usePagination } from '../common';

export const useExpirations = () => {
    const { search, status, roles } = useSelector(state => state.expirationsFilter);
    const formattedStatus = lowerCase(status);
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminExpirationsPagination');
    return useQuery(
        ['admin-expirations', itemsPerPage, currentPage, search, status, roles],
        () => AdminEmployeeService.fetchExpirations(itemsPerPage, currentPage, search, formattedStatus, roles),
        {
            select: data => {
                const expirationData = data.data;
                const formattedData = {
                    kpiData: expirationData.kpi,
                    paginationData: expirationData.pagination_data,
                    expirations: expirationData.records,
                };
                return formattedData;
            },
            onSuccess: data => {
                const pagination = data.paginationData;
                setPagination({
                    currentPage: pagination.current_page,
                    itemsPerPage: pagination.per_page,
                    totalItems: pagination.total_count,
                });
            },
            refetchOnWindowFocus: false,
        }
    );
};
