import http from '../../httpCommon';

const fetchKPIs = id => {
    return http.get(`/facility_users/${id}`);
};

const fetchTimeOffRequests = id => {
    return http.get(`/facility_users/${id}`);
};

const fetchUnfilledShifts = () => {
    return http.get(`/unfilled_shifts`);
};

const fetchBirthdays = () => {
    return http.get(`/facility_users/current_month_birthdays`);
};

const fetchExpirations = id => {
    return http.get(`/facility_users/${id}`);
};

const fetchActivities = id => {
    return http.get(`/facility_users/${id}`);
};

const AdminHomeService = {
    fetchKPIs,
    fetchTimeOffRequests,
    fetchUnfilledShifts,
    fetchBirthdays,
    fetchExpirations,
    fetchActivities,
};

export default AdminHomeService;
