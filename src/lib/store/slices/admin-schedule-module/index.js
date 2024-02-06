import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const time = moment().format('ddd, ll');
const date1 = moment(time, 'ddd, MMM D').format('ddd, MMM D');
const date2 = moment(time, 'ddd, MMM D').add(1, 'month').format('ddd, MMM D');

const initialState = {
    scheduleType: 'daily',
    currentTimeValue: time,
    currentListTimeValue: [moment().format('MM-DD-YYYY'), moment().add(2, 'days').format('MM-DD-YYYY')],
    shiftData: {},
    shiftEditModalData: {},
};

const AdminScheduleModule = createSlice({
    name: 'adminScheduleModule',
    initialState,
    reducers: {
        setScheduleType: (state, action) => {
            const type = action.payload;
            state.scheduleType = type;
            if (type === 'daily' || type === 'weekly' || type === 'list') {
                state.currentTimeValue = time;
            }

            if (type === 'monthly') {
                const formattedDate = moment(time, 'ddd, MMM D').format('MMM YYYY');
                state.currentTimeValue = formattedDate;
            }

            // if (type === 'list') {
            //     state.currentTimeValue = `${date1} - ${date2}`;
            // }
        },
        setCurrentTimeValue: (state, action) => {
            state.currentTimeValue = action.payload;
        },
        setListCurrentTimeValue: (state, action) => {
            state.currentListTimeValue = action.payload;
        },
        setInitialTimeValue: state => {
            if (state.scheduleType === 'daily' || state.scheduleType === 'weekly') {
                state.currentTimeValue = time;
            }

            if (state.scheduleType === 'monthly') {
                const formattedDate = moment(time, 'ddd, MMM D').format('MMM YYYY');
                state.currentTimeValue = formattedDate;
            }

            if (state.scheduleType === 'list') {
                state.currentTimeValue = `${date1} - ${date2}`;
            }
        },
        setShiftData: (state, action) => {
            const { payload } = action;
            const formattedShiftData = {
                date: payload.start_date,
                start_time: payload.start_time,
                end_time: payload.end_time,
                facility_name: payload.station,
                role: payload.role,
                speciality: payload.speciality_ids[0].name,
                facility: payload.facility_id.name,
                employee: payload.employee,
                description: payload.description ? payload.description : 'test',
                nurseId: payload.nurseId,
            };
            state.shiftEditModalData = formattedShiftData;
            state.shiftData = action.payload;
        },
        clearState: state => {
            state.shiftData = {};
            state.shiftEditModalData = {};
        },
    },
});

export const {
    setCurrentTimeValue,
    setScheduleType,
    setListCurrentTimeValue,
    setInitialTimeValue,
    setShiftData,
    clearState,
} = AdminScheduleModule.actions;
export default AdminScheduleModule.reducer;
