import { useQuery } from 'react-query';
import moment from 'moment';
import { useSelector } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';
import { usePagination } from '../common';

export const useSchedule = () => {
    const { itemsPerPage, currentPage, setPagination } = usePagination('adminScheduleListPagination');
    const { scheduleType, currentTimeValue, currentListTimeValue } = useSelector(state => state.adminScheduleModule);
    const { search, status, roles } = useSelector(state => state.scheduleFilter);
    const getDateForSchedule = () => {
        if (scheduleType === 'daily' || scheduleType === 'weekly') {
            return moment(currentTimeValue, 'ddd, MMM D, YYYY').format('MM-DD-YYYY');
        }
        if (scheduleType === 'monthly') {
            return moment(currentTimeValue, 'MMM YYYY').format('MM-DD-YYYY');
        }
    };
    const scheduleListDates = () => {
        if (scheduleType === 'list') {
            return currentListTimeValue;
        }
    };
    return useQuery(
        [
            'admin-schedule',
            scheduleType,
            currentTimeValue,
            currentListTimeValue,
            search,
            status,
            roles,
            itemsPerPage,
            currentPage,
        ],
        () =>
            AdminScheduleService.fetchSchedule(
                scheduleType,
                getDateForSchedule(),
                scheduleListDates(),
                search,
                status,
                roles,
                itemsPerPage,
                currentPage
            ),
        {
            select: data => {
                const res = data.data;
                return res;
            },
            onSuccess: data => {
                const pagination = data.pagination_data;
                setPagination({
                    currentPage: pagination && pagination.current_page,
                    itemsPerPage: pagination && pagination.per_page,
                    totalItems: pagination && pagination.total_count,
                });
            },
            refetchOnWindowFocus: false,
        }
    );
};
