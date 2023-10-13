import http from '../../httpCommon';

const fetchFacilityOptions = () => {
    return http.get(`/facilities`);
};

const FacilityService = {
    fetchFacilityOptions,
};

export default FacilityService;
