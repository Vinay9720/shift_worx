import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
    templateTobePublished: {},
    templateTobeDeleted: {},
    templateShiftTobeDeleted: {},
    templateShiftTobeEdited: {},
    templateDetails: {},
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
        setTemplateShiftTobeEdited: (state, action) => {
            state.templateShiftTobeEdited = action.payload;
        },
        setTemplateDetails: (state, action) => {
            state.templateDetails = action.payload;
        },
        clearState: state => {
            state.templateTobePublished = {};
            state.templateTobeDeleted = {};
            state.templateShiftTobeDeleted = {};
            state.templateShiftTobeEdited = {};
            state.templateDetails = {};
        },
    },
});

export const {
    setTemplateType,
    setTemplateTobePublished,
    setTemplateTobeDeleted,
    setTemplateShiftTobeDeleted,
    clearState,
    setTemplateShiftTobeEdited,
    setTemplateDetails,
} = AdminScheduleTemplatesModule.actions;
export default AdminScheduleTemplatesModule.reducer;
