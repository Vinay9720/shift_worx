import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import AdminNoteService from '@/services/admin-note';

import { usePagination } from '../common';
import { useParams } from 'next/navigation';

export const useNotes = ({ employeeNotes }) => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminNotesPagination');
    const { search, type, status, startDate, endDate } = useSelector(state => state.notersFilter);
    const params = useParams();
    const entityId = params.employeeId || null;
    const entityType = employeeNotes ? 'Nurse' : null;
    return useQuery(
        ['admin-notes', itemsPerPage, currentPage, search, type, status, startDate, endDate],
        () =>
            AdminNoteService.fetchnotes(
                itemsPerPage,
                currentPage,
                search,
                type,
                status,
                startDate,
                endDate,
                entityId,
                entityType
            ),
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
