import http from '../../httpCommon';

const fetchCertificateOptions = () => {
    return http.get(`/certificates`);
};

const CertificationService = {
    fetchCertificateOptions,
};

export default CertificationService;
