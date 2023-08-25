import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currectStep: 1,
};

const addEmployeeStepsSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        HandleNext: state => {
            state.currectStep += 1;
        },
        previousState: state => {
            state.currectStep -= 1;
        },
    },
});

export const { HandleNext, previousState } = addEmployeeStepsSlice.actions;
export default addEmployeeStepsSlice.reducer;
