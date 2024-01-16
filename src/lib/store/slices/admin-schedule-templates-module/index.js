import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
    templateTobePublished: {},
    templateTobeDeleted: {},
    templateShiftTobeDeleted: {},
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
        setTemplateShiftTobeDeleted: (state, action) => {
            state.templateShiftTobeDeleted = action.payload;
        },
        clearState: state => {
            state.templateTobePublished = {};
            state.templateTobeDeleted = {};
            state.templateShiftTobeDelete = {};
        },
    },
});

export const {
    setTemplateType,
    setTemplateTobePublished,
    setTemplateTobeDeleted,
    setTemplateShiftTobeDeleted,
    clearState,
} = AdminScheduleTemplatesModule.actions;
export default AdminScheduleTemplatesModule.reducer;
