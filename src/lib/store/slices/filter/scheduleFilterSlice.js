import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    searchLabel: '',
    status: '',
    roles: [],
    filterApplied: false,
};

const scheduleFilterSlice = createSlice({
    name: 'schedule_filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filterApplied = true;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
            state.filterApplied = true;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
            state.filterApplied = true;
        },
        setSearchLabel: (state, action) => {
            state.searchLabel = action.payload;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState, { filtersApplied: false });
        },
    },
});

export const { setSearch, setRoles, setStatus, clearFilters, setSearchLabel } = scheduleFilterSlice.actions;
export default scheduleFilterSlice.reducer;
