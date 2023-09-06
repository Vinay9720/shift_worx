import http from '../../httpCommon';

const fetchnotes = (itemsPerPage, page, searchParams) => {
    return http.get(`/notes?per_page=${itemsPerPage}&page=${page}&search=${searchParams}`);
};

const AdminNoteService = {
    fetchnotes,
};

export default AdminNoteService;
