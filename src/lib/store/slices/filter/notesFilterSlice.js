import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    type: '',
    status: '',
    startDate: null,
    filterApplied: false,
    endDate: null,
};

const notesFilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filterApplied = true;
        },
        setType: (state, action) => {
            state.type = action.payload;
            state.filterApplied = true;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
            state.filterApplied = true;
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload;
            state.filterApplied = true;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
            state.filterApplied = true;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState, { filtersApplied: false });
        },
    },
});

export const { setSearch, setType, setStatus, setStartDate, setEndDate, clearFilters } = notesFilterSlice.actions;
export default notesFilterSlice.reducer;
