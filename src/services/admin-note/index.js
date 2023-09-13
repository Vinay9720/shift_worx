import http from '../../httpCommon';

const fetchnotes = (itemsPerPage, page, searchParams) => {
    return http.get(`/notes?per_page=${itemsPerPage}&page=${page}&search=${searchParams}`);
};

const updateNote = (id, noteData) => {
    return http.patch(`/notes/${id}`, noteData);
};

const deleteNote = id => {
    return http.delete(`/notes/${id}`);
};

const AdminNoteService = {
    fetchnotes,
    updateNote,
    deleteNote,
};

export default AdminNoteService;
