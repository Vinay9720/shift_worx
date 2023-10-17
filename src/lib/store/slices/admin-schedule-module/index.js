import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const time = moment().format('ddd, ll');
const date1 = moment(time, 'ddd, MMM D').format('ddd, MMM D');
const date2 = moment(time, 'ddd, MMM D').add(1, 'month').format('ddd, MMM D');

const initialState = {
    scheduleType: 'daily',
    currentTimeValue: time,
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
    },
});

export const { setCurrentTimeValue, setScheduleType, setInitialTimeValue } = AdminScheduleModule.actions;
export default AdminScheduleModule.reducer;
