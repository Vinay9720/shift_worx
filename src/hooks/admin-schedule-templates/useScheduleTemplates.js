/* eslint-disable camelcase */
import { useQuery } from 'react-query';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

import { usePagination } from '../common';

export const useTemplates = () => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminScheduleTemplatesPagination');
    return useQuery(
        ['admin-schedule-templates', itemsPerPage, currentPage],
        () => AdminScheduleTemplatesService.fetchTemplates(itemsPerPage, currentPage),
        {
            select: data => {
                const res = data.data;
                const { data: templates, current_page, per_page, total_count } = res;
                const formattedData = {
                    templates,
                    paginationData: {
                        current_page,
                        per_page,
                        total_count,
                    },
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
