import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { lowerCase } from 'lodash';

import AdminEmployeeService from '@/services/admin-employee';

import { usePagination } from '../common';

export const usePto = () => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminPtoPagination');
    const { search, status, roles } = useSelector(state => state.ptoFilter);
    const formattedSearch = lowerCase(status);
    return useQuery(
        ['admin-pto', itemsPerPage, currentPage, search, status, roles],
        () => AdminEmployeeService.fetchPto(itemsPerPage, currentPage, search, roles, formattedSearch),
        {
            select: data => {
                const ptoData = data.data;
                const formattedData = { paginationData: ptoData.pagination_data, recordData: ptoData.records };
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
