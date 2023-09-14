import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import AdminNoteService from '@/services/admin-note';

import { usePagination } from '../common';

export const useNotes = () => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminNotesPagination');
    const { search } = useSelector(state => state.noterFilter);
    return useQuery(
        ['admin-notes', itemsPerPage, currentPage, search],
        () => AdminNoteService.fetchnotes(itemsPerPage, currentPage, search),
        {
            select: data => {
                const res = data.data;
                const formattedData = {
                    notes: res.records,
                    paginationData: res.pagination_data,
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
