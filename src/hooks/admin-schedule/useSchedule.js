import { useQuery } from 'react-query';
import moment from 'moment';
import { useSelector } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';

export const useSchedule = () => {
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
        ['admin-schedule', scheduleType, currentTimeValue, currentListTimeValue, search, status, roles],
        () =>
            AdminScheduleService.fetchSchedule(
                scheduleType,
                getDateForSchedule(),
                scheduleListDates(),
                search,
                status,
                roles
            ),
        {
            select: data => {
                const res = data.data;
                return res;
            },
            refetchOnWindowFocus: false,
        }
    );
};
