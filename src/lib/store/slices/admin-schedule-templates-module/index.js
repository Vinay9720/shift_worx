import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
    templateTobePublished: {},
};

const AdminScheduleTemplatesModule = createSlice({
    name: 'adminScheduleTemplatesModule',
    initialState,
    reducers: {
        setTemplateType: (state, action) => {
            state.templateType = [action.payload];
        },
        setTemplateTobePublished: (state, action) => {
            state.templateTobePublished = [action.payload];
        },
    },
});

export const { setTemplateType, setTemplateTobePublished } = AdminScheduleTemplatesModule.actions;
export default AdminScheduleTemplatesModule.reducer;
