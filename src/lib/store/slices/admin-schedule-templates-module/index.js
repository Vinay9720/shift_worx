import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
};

const AdminScheduleTemplatesModule = createSlice({
    name: 'adminScheduleTemplatesModule',
    initialState,
    reducers: {
        setTemplateType: (state, action) => {
            state.templateType = [action.payload];
        },
    },
});

export const { setTemplateType } = AdminScheduleTemplatesModule.actions;
export default AdminScheduleTemplatesModule.reducer;
