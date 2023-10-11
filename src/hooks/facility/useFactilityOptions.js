import { useQuery } from 'react-query';

import SpecialityService from '@/services/facility';

export const useSpecialityOptions = () => {
    return useQuery(['speciality-options'], () => SpecialityService.fetchSpecialityOptions(), {
        select: data => {
            const res = data.data;
            const formattedData = res.map(item => ({ value: item.id, label: item.name }));
            return formattedData;
        },
        refetchOnWindowFocus: false,
    });
};
