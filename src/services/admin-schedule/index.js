import http from '../../httpCommon';

const fetchSchedule = (term, date, search, status, roles) => {
    const queryParams = [];

    if (term) queryParams.push(`term=${term}`);
    if (date) queryParams.push(`shift_start_range=${date}`);
    if (search) queryParams.push(`search=${search}`);
    if (roles) queryParams.push(`certificate_id=${roles}`);
    if (status) queryParams.push(`status=${status}`);

    const queryString = queryParams.join('&');
    return http.get(`/shift_positions?${queryString}`);
};

const addShift = shiftData => {
    return http.post(`/shifts`, JSON.stringify(shiftData));
};
const deleteShift = id => {
    return http.delete(`/shifts/${id}`);
};

const AdminScheduleService = {
    fetchSchedule,
    addShift,
    deleteShift,
};

export default AdminScheduleService;
