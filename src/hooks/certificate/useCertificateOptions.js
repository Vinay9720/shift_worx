import { useQuery } from 'react-query';

import CertificationService from '@/services/certification';

export const useCertificateOptions = () => {
    return useQuery(['certificate-options'], () => CertificationService.fetchCertificateOptions(), {
        select: data => {
            const res = data.data;
            const formattedData = res.map(item => ({ value: item.id, label: item.abbreviation }));
            return formattedData;
        },
        refetchOnWindowFocus: false,
    });
};
