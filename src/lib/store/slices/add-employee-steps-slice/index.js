import { createSlice } from '@reduxjs/toolkit';

const stepsMap = {
    1: 'profile_information',
    2: 'personal_documents',
    3: 'certificates',
};

const initialState = {
    currentStep: 1,
    totalSteps: 3,
    isPreviousStep: false,
    isNextStep: true,
    currentStepName: 'profile_information',
};

const addEmployeeModule = createSlice({
    name: 'addEmployeeModule',
    initialState,
    reducers: {
        HandleNext: state => {
            const nextStep = state.currentStep + 1;
            state.currentStep = nextStep;
            state.currentStepName = stepsMap[nextStep];
            if (state.currentStep > 1) {
                state.isPreviousStep = true;
            }
            if (state.currentStep < 3) {
                state.isNextStep = true;
            }
        },
        handlePrevious: state => {
            const prevStep = state.currentStep - 1;
            state.currentStep = prevStep;
            state.currentStepName = stepsMap[prevStep];
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

export const { HandleNext, handlePrevious, setCurrentStep } = addEmployeeModule.actions;
export default addEmployeeModule.reducer;
