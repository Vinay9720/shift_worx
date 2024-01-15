import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
    templateTobePublished: {},
    templateTobeDeleted: {},
};

const AdminScheduleTemplatesModule = createSlice({
    name: 'adminScheduleTemplatesModule',
    initialState,
    reducers: {
        setTemplateType: (state, action) => {
            state.templateType = [action.payload];
        },
        setTemplateTobePublished: (state, action) => {
            state.templateTobePublished = action.payload;
        },
        setTemplateTobeDeleted: (state, action) => {
            state.templateTobeDeleted = action.payload;
        },
    },
});

export const { setTemplateType, setTemplateTobePublished, setTemplateTobeDeleted } =
    AdminScheduleTemplatesModule.actions;
export default AdminScheduleTemplatesModule.reducer;
