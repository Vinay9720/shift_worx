import http from '../../httpCommon';

const fetchSchedule = (term, date) => {
    return http.get(`/shift_positions?term=${term}&shift_start_range=${date}`);
};

const addShift = shiftData => {
    return http.post(`/shifts`, JSON.stringify(shiftData));
};

const AdminScheduleService = {
    fetchSchedule,
    addShift,
};

export default AdminScheduleService;
