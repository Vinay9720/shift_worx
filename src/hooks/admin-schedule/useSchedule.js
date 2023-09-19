import { useQuery } from 'react-query';
import moment from 'moment';
import { useSelector } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';

export const useSchedule = () => {
    const { scheduleType, currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const getDateForSchedule = () => {
        if (scheduleType === 'daily' || scheduleType === 'weekly') {
            return moment(currentTimeValue, 'ddd, MMM D').format('MM-DD-YYYY');
        }
        if (scheduleType === 'monthly') {
            return moment(currentTimeValue, 'MMM YYYY').format('MM-DD-YYYY');
        }
        if (scheduleType === 'list') {
            // return moment(currentTimeValue.split('-')[0].replace(/\s/g, ''), 'ddd, MMM DD').format('MM-DD-YYYY');
            return '06-01-2023';
        }
    };
    return useQuery(
        ['admin-notes', scheduleType, currentTimeValue],
        () => AdminScheduleService.fetchSchedule(scheduleType, getDateForSchedule()),
        {
            select: data => {
                const res = data.data;
                return res;
            },
            refetchOnWindowFocus: false,
        }
    );
};
