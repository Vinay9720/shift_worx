import http from '../../httpCommon';

const fetchEmployees = (itemsPerPage, page, searchParams) => {
    return http.get(`/users?per_page=${itemsPerPage}&page=${page}&search=${searchParams}`);
};

const addEmployee = employeeData => {
    return http.post(`/facility_users`, employeeData);
};

const updateEmployee = (id, employeeData) => {
    return http.patch(`/facility_users/${id}`, employeeData);
};

const fetchEmployee = id => {
    return http.get(`/facility_users/${id}`);
};

const deleteEmployee = id => {
    return http.delete(`/users/${id}`);
};

const AdminEmployeeService = {
    fetchEmployees,
    fetchEmployee,
    updateEmployee,
    addEmployee,
    deleteEmployee,
};

export default AdminEmployeeService;
