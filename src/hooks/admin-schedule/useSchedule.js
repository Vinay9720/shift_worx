import { useQuery } from 'react-query';
import moment from 'moment';
import { useSelector } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';

export const useSchedule = () => {
    const { scheduleType, currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const { search, status, roles } = useSelector(state => state.employeesFilter);

    const getDateForSchedule = () => {
        if (scheduleType === 'daily' || scheduleType === 'weekly' || scheduleType === 'list') {
            return moment(currentTimeValue, 'ddd, MMM D').format('MM-DD-YYYY');
        }
        if (scheduleType === 'monthly') {
            return moment(currentTimeValue, 'MMM YYYY').format('MM-DD-YYYY');
        }
        // if (scheduleType === 'list') {
        //     // return moment(currentTimeValue.split('-')[0].replace(/\s/g, ''), 'ddd, MMM DD').format('MM-DD-YYYY');
        //     return '06-01-2023';
        // }
    };
    return useQuery(
        ['admin-schedule', scheduleType, currentTimeValue, search, status, roles],
        () => AdminScheduleService.fetchSchedule(scheduleType, getDateForSchedule(), search, status, roles),
        {
            select: data => {
                const res = data.data;
                return res;
            },
            refetchOnWindowFocus: false,
        }
    );
};
