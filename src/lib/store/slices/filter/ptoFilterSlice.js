import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    status: '',
    roles: [],
};

const ptoFilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState);
        },
    },
});

export const { setSearch, setRoles, setStatus, clearFilters } = ptoFilterSlice.actions;
export default ptoFilterSlice.reducer;
