import http from '../../httpCommon';

const fetchEmployees = (itemsPerPage, page, searchParams, roles, status) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);
    if (searchParams) queryParams.push(`search=${searchParams}`);
    if (roles) queryParams.push(`roles=${roles}`);
    if (status) queryParams.push(`status=${status}`);

    const queryString = queryParams.join('&');
    return http.get(`/users?${queryString}`);
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

const fetchExpirations = (itemsPerPage, page, searchParams, roles, status) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);
    if (searchParams) queryParams.push(`search=${searchParams}`);
    if (roles) queryParams.push(`roles=${roles}`);
    if (status) queryParams.push(`status=${status}`);

    const queryString = queryParams.join('&');
    return http.get(`/expirations?${queryString}`);
};

const AdminEmployeeService = {
    fetchEmployees,
    fetchEmployee,
    updateEmployee,
    addEmployee,
    deleteEmployee,
    fetchExpirations,
};

export default AdminEmployeeService;
