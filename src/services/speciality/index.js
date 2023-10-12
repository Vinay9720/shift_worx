import http from '../../httpCommon';

const fetchSpecialityOptions = () => {
    return http.get(`/specialities`);
};

const SpecialityService = {
    fetchSpecialityOptions,
};

export default SpecialityService;
