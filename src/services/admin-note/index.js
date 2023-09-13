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

const readNote = id => {
    return http.patch(`/notes/${id}/read`);
};

const readNotes = () => {
    return http.patch(`/notes/bulk_read`);
};

const AdminNoteService = {
    fetchnotes,
    updateNote,
    deleteNote,
    readNote,
    readNotes,
};

export default AdminNoteService;
