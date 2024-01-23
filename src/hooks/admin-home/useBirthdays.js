import { useQuery } from 'react-query';

import AdminHomeService from '@/services/admin-home';

import { useToast } from '../common';

export const useBirthdays = () => {
    const showToast = useToast();
    return useQuery([], () => AdminHomeService.fetchBirthdays(), {
        select: data => {
            const birthdays = data.data;
            return birthdays;
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
        refetchOnWindowFocus: false,
    });
};
