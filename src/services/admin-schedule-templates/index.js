import http from '../../httpCommon';

const fetchTemplates = (itemsPerPage, page, publishStatus, search) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);
    if (search) queryParams.push(`name=${search}`);
    if (publishStatus) queryParams.push(`publish=${publishStatus}`);

    const queryString = queryParams.join('&');

    return http.get(`/shift_templates?${queryString}`);
};

const addTemplateShift = shiftData => {
    return http.post(`/shift_templates`, JSON.stringify(shiftData));
};

const createTemplate = templateData => {
    return http.post(`/shift_templates/create_with_template_shifts`, JSON.stringify(templateData));
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

const deleteTemplateShift = id => {
    return http.delete(`/shift_templates/${id}/delete_template_shift`);
};

const updateTemplateShift = (id, shiftData) => {
    return http.put(`/shift_templates/${id}/update_shift_template`, JSON.stringify(shiftData));
};
const updateTemplate = (id, shiftData) => {
    return http.put(`/shift_templates/${id}`, JSON.stringify(shiftData));
};

const AdminScheduleTemplatesService = {
    fetchTemplates,
    addTemplateShift,
    fetchTemplate,
    publishTemplate,
    deleteTemplate,
    deleteTemplateShift,
    updateTemplateShift,
    createTemplate,
    updateTemplate,
};

export default AdminScheduleTemplatesService;
