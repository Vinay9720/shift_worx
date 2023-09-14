import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    type: '',
    status: '',
    startDate: null,
    endDate: null,
};

const notesFilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState);
        },
    },
});

export const { setSearch, setType, setStatus, setStartDate, setEndDate, clearFilters } = notesFilterSlice.actions;
export default notesFilterSlice.reducer;
