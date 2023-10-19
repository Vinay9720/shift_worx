import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    applicationLoading: false,
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setApplicationLoading: (state, action) => {
            state.applicationLoading = action.payload;
        },
    },
});

export const { setApplicationLoading } = applicationSlice.actions;
export default applicationSlice.reducer;
