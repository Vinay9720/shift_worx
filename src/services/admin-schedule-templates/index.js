import http from '../../httpCommon';

const fetchTemplates = (itemsPerPage, page) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);

    const queryString = queryParams.join('&');

    return http.get(`/shift_templates?${queryString}`);
};

const AdminScheduleTemplatesService = {
    fetchTemplates,
};

export default AdminScheduleTemplatesService;
