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
            state.noteToBeUpdated = action.payload;
        },
    },
});

export const { openEditNoteForm, setnoteToBeUpdated } = AdminNotesModule.actions;
export default AdminNotesModule.reducer;
