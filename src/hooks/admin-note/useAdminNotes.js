import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import AdminNoteService from '@/services/admin-note';

export const useNotes = () => {
    const { itemsPerPage, currentPage } = useSelector(state => state.pagination);
    return useQuery(
        ['admin-notes', itemsPerPage, currentPage],
        () => AdminNoteService.fetchnotes(itemsPerPage, currentPage, ''),
        {
            select: data => {
                const res = data.data;
                const formattedData = {
                    notes: res.records,
                };
                return formattedData;
            },
            refetchOnWindowFocus: false,
        }
    );
};
