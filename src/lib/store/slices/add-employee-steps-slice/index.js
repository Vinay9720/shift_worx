import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    totalSteps: 3,
    isPreviousStep: false,
    isNextStep: true,
};

const addEmployeeStepsSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        HandleNext: state => {
            state.currentStep += 1;
            if (state.currentStep > 1) {
                state.isPreviousStep = true;
            }
            if (state.currentStep < 3) {
                state.isNextStep = true;
            }
        },
        handlePrevious: state => {
            state.currentStep -= 1;
            if (state.currentStep > 1) {
                state.isPreviousStep = true;
            }
            if (state.currentStep < 3) {
                state.isNextStep = true;
            }
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
            if (state.currentStep > 1) {
                state.isPreviousStep = true;
            }
            if (state.currentStep < 3) {
                state.isNextStep = true;
            }
        },
    },
});

export const { HandleNext, handlePrevious, setCurrentStep } = addEmployeeStepsSlice.actions;
export default addEmployeeStepsSlice.reducer;
