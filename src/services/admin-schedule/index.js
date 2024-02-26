import http from '../../httpCommon';

const fetchSchedule = (term, date, dates, search, status, roles, itemsPerPage, page) => {
    const queryParams = [];

    const roleIdMap = {
        CNA: 1,
        LPN: 2,
        RN: 3,
        GN: 4,
    };

    if (term) queryParams.push(`term=${term}`);
    if (date) queryParams.push(`shift_start_range=${date}`);
    if (dates) queryParams.push(`shift_start_range=${dates[0]}`);
    if (dates) queryParams.push(`shift_end_range=${dates[1]}`);
    if (search) queryParams.push(`search=${search}`);
    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);
    // if (roles) queryParams.push(`certificate_id=${roles}`);
    if (roles && roles.length > 0) {
        roles.forEach(role => {
            queryParams.push(`certificate_id[]=${encodeURIComponent(roleIdMap[role])}`);
        });
    }
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
const updateShift = (id, shiftData) => {
    return http.patch(`/shifts/${id}`, JSON.stringify(shiftData));
};

const AdminScheduleService = {
    fetchSchedule,
    addShift,
    deleteShift,
    updateShift,
};

export default AdminScheduleService;
