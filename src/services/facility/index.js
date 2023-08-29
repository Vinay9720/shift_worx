import http from '../../httpCommon';

const fetchFacilityOptions = () => {
    return http.get(`/specialities`);
};

const FacilityService = {
    fetchFacilityOptions,
};

export default FacilityService;
