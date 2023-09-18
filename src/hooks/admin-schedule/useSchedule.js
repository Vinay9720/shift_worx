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
            return moment(currentTimeValue.split('-')[0].replace(/\s/g, ''), 'M/D').format('MM-DD-YYYY');
        }
    };
    return useQuery(
        ['admin-notes', scheduleType, currentTimeValue],
        () => AdminScheduleService.fetchSchedule(scheduleType, getDateForSchedule()),
        {
            select: data => {
                const res = data.data;
                console.log('res', res);
                return res;
            },
            onSuccess: data => {
                console.log('data', data);
            },
            refetchOnWindowFocus: false,
        }
    );
};
