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

const PublishTemplate = templateData => {
    return http.post(`/shift_templates`, JSON.stringify(templateData));
};

const fetchTemplate = id => {
    return http.get(`/shift_templates/${id}`);
};

const AdminScheduleTemplatesService = {
    fetchTemplates,
    addTemplateShift,
    fetchTemplate,
    PublishTemplate,
};

export default AdminScheduleTemplatesService;
