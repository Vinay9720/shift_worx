import { useQuery } from 'react-query';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

import { usePagination } from '../common';

export const useTemplates = () => {
    const { itemsPerPage, currentPage } = usePagination('adminScheduleTemplatesPagination');
    return useQuery(
        ['admin-schedule-templates'],
        () => AdminScheduleTemplatesService.fetchTemplates(itemsPerPage, currentPage),
        {
            select: data => {
                const res = data.data;
                const formattedData = {
                    notes: res,
                    // paginationData: res.pagination_data,
                };
                return formattedData;
            },
            // onSuccess: data => {
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
