import { getWeek } from '@/lib/util';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    templateType: ['Weekly'],
    templateTobePublished: {},
    templateTobeDeleted: {},
    templateShiftTobeDeleted: {},
    templateShiftTobeEdited: {},
    templateDetails: {},
    templateIdsTobePublished: [],
    shiftModalData: {},
    scheduleTemplateModalData: {},
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
            const { payload } = action;
            let shiftData;
            if (payload) {
                shiftData = {
                    week: payload.week ? getWeek(payload.week) : null,
                    days: payload.day,
                    start_time: payload.start_time,
                    end_time: payload.end_time,
                    facility_name: payload.station,
                    role: payload.role,
                    speciality: payload.speciality_ids.name,
                    facility: payload.facility_id.name,
                    employee: payload.employee,
                };
            }
            state.shiftModalData = shiftData;
            state.templateShiftTobeEdited = action.payload;
        },
        setTemplateDetails: (state, action) => {
            const { payload } = action;
            const data = {
                template_name: payload.name,
                description: payload.description,
            };
            state.templateDetails = action.payload;
            state.scheduleTemplateModalData = data;
        },
        setTemplateIdsTobePublished: (state, action) => {
            state.templateIdsTobePublished = action.payload;
        },
        clearState: state => {
            state.templateTobePublished = {};
            state.templateTobeDeleted = {};
            state.templateShiftTobeDeleted = {};
            state.templateShiftTobeEdited = {};
            state.templateDetails = {};
            state.templateIdsTobePublished = [];
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
