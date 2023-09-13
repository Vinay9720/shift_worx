import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editingNote: false,
};

const AdminNotesModule = createSlice({
    name: 'adminNotesModule',
    initialState,
    reducers: {
        openEditNoteForm: state => {
            state.editingNote = true;
        },
    },
});

export const { openEditNoteForm } = AdminNotesModule.actions;
export default AdminNotesModule.reducer;
