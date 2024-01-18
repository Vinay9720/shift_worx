import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    roles: [],
    publishStatus: [],
    filterApplied: false,
};

const scheduleTemplateFilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filterApplied = true;
        },
        setRoles: (state, action) => {
            const { payload } = action;
            const publishStatus = () => {
                switch (payload) {
                    case 'All':
                        return 'All';
                    case 'Published':
                        return 'true';
                    case 'Not Published':
                        return 'false';
                    default:
                        return 'All';
                }
            };
            state.publishStatus = publishStatus();
            state.roles = action.payload;
            state.filterApplied = true;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState, { filtersApplied: false });
        },
    },
});

export const { setSearch, setRoles, clearFilters } = scheduleTemplateFilterSlice.actions;
export default scheduleTemplateFilterSlice.reducer;
