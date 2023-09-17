import http from '../../httpCommon';

const fetchSchedule = (term, date) => {
    console.log('date', date);
    return http.get(`/shift_positions?term=${term}&shift_start_range=06-28-2023`);
};

const AdminScheduleService = {
    fetchSchedule,
};

export default AdminScheduleService;
