import http from '../../httpCommon';

// &note_type_id=${null}&start_date=${null}&end_date=${null}
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
