import { useQuery } from 'react-query';

import FacilityService from '@/services/facility';

export const useFacilityOptions = () => {
    return useQuery(['facility-options'], () => FacilityService.fetchFacilityOptions(), {
        select: data => {
            const res = data.data;
            const formattedData = res.map(item => ({ value: item.id, label: item.name }));
            return formattedData;
        },
        refetchOnWindowFocus: false,
    });
};
