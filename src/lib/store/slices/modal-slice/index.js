import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state, action) => {
            const { modalName } = action.payload;
            state[modalName] = true;
        },
        closeModal: (state, action) => {
            const { modalName } = action.payload;
            state[modalName] = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
