import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';

import { usePagination } from '../common';

export const usePto = () => {
    const {
        itemsPerPage,
        currentPage,
        //  setPagination
    } = usePagination('adminPtoPagination');
    const { search, status, roles } = useSelector(state => state.ptoFilter);
    return useQuery(
        ['admin-pto', itemsPerPage, currentPage, search, status, roles],
        () => AdminEmployeeService.fetchPto(itemsPerPage, currentPage, search, roles, status),
        {
            select: data => {
                const ptoData = data.data.records;
                console.log(data, 'PtoData');
                return ptoData;
            },
            // onSuccess: data => {
            //     console.log(data, 'records data from get request of Fetch Pto');
            //     const pagination = data.paginationData;
            //     setPagination({
            //         currentPage: pagination.current_page,
            //         itemsPerPage: pagination.per_page,
            //         totalItems: pagination.total_count,
            //     });
            // },
            refetchOnWindowFocus: false,
        }
    );
};
