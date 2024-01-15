import http from '../../httpCommon';

const fetchTemplates = (itemsPerPage, page) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);

    const queryString = queryParams.join('&');

    return http.get(`/shift_templates?${queryString}`);
};

const addTemplateShift = shiftData => {
    return http.post(`/shift_templates`, JSON.stringify(shiftData));
};

const publishTemplate = templateData => {
    return http.post(`/shift_templates`, JSON.stringify(templateData));
};

const fetchTemplate = id => {
    return http.get(`/shift_templates/${id}`);
};

const deleteTemplate = id => {
    return http.delete(`/shift_templates/${id}`);
};

const AdminScheduleTemplatesService = {
    fetchTemplates,
    addTemplateShift,
    fetchTemplate,
    publishTemplate,
    deleteTemplate,
};

export default AdminScheduleTemplatesService;
