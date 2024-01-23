import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useBirthdays = () => {
    const showToast = useToast();
    return useQuery(['widget-birthdays'], () => AdminHomeService.fetchBirthdays(), {
        select: data => {
            const usersData = data.data;
            return usersData.users;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
