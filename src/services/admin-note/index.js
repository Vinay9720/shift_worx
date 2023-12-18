import http from '../../httpCommon';

// &note_type_id=${null}&start_date=${null}&end_date=${null}
const fetchnotes = (itemsPerPage, page, searchParams, type, status, startDate, endDate, entityId, entityType) => {
    const queryParams = [];

    if (itemsPerPage) queryParams.push(`per_page=${itemsPerPage}`);
    if (page) queryParams.push(`page=${page}`);
    if (searchParams) queryParams.push(`search=${searchParams}`);
    if (type) queryParams.push(`note_type_id=${type}`);
    if (startDate) queryParams.push(`start_date=${startDate}`);
    if (endDate) queryParams.push(`end_date=${endDate}`);
    if (entityId) queryParams.push(`entity_id=${entityId}`);
    if (entityType) queryParams.push(`entity_type=${entityType}`);

    const queryString = queryParams.join('&');

    return http.get(`/notes?${queryString}`);
};

const addNote = noteData => {
    return http.post(`/notes`, noteData);
};

const updateNote = (id, noteData) => {
    return http.patch(`/notes/${id}`, noteData);
};

const deleteNote = id => {
    return http.delete(`/notes/${id}`);
};

const readNote = id => {
    return http.put(`/notes/${id}/read`);
};

const readNotes = () => {
    return http.patch(`/notes/bulk_read`);
};

const AdminNoteService = {
    addNote,
    fetchnotes,
    updateNote,
    deleteNote,
    readNote,
    readNotes,
};

export default AdminNoteService;
