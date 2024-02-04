import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
    search: '',
    searchLabel: '',
    publishStatus: ['All'],
    filterApplied: false,
    publishLabel: 'All',
};

const scheduleTemplateFilterSlice = createSlice({
    name: 'schedule_template_filter',
    initialState: initialFilterState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filterApplied = true;
        },
        setSearchLabel: (state, action) => {
            state.searchLabel = action.payload;
        },
        setPublishStatus: (state, action) => {
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
            state.publishLabel = payload;
            state.filterApplied = true;
        },
        clearFilters: state => {
            Object.assign(state, initialFilterState, { filtersApplied: false });
        },
    },
});

export const { setSearch, setPublishStatus, clearFilters, setSearchLabel } = scheduleTemplateFilterSlice.actions;
export default scheduleTemplateFilterSlice.reducer;
