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

const fetchEvents = id => {
    return http.get(`/facility_users/${id}`);
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
    fetchEvents,
    fetchExpirations,
    fetchActivities,
};

export default AdminHomeService;
