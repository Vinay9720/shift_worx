import { getNoteTypeByValue } from '@/lib/util';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editingNote: false,
    noteToBeUpdated: null,
};

const AdminNotesModule = createSlice({
    name: 'adminNotesModule',
    initialState,
    reducers: {
        openEditNoteForm: state => {
            state.editingNote = true;
        },
        closeEditNoteForm: state => {
            state.editingNote = false;
        },
        setnoteToBeUpdated: (state, action) => {
            const { payload } = action;
            state.noteToBeUpdated = { ...payload, note_type_id: getNoteTypeByValue(payload.note_type.id) };
        },
    },
});

export const { openEditNoteForm, setnoteToBeUpdated } = AdminNotesModule.actions;
export default AdminNotesModule.reducer;
