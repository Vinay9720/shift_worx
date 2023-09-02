import { createSlice } from '@reduxjs/toolkit';

const stepsMap = {
    1: 'general',
    2: 'personal_documents',
    3: 'certificates',
    4: 'notes',
};

const TOTAL_STEPS = 4;

const initialState = {
    currentStep: 1,
    totalSteps: TOTAL_STEPS,
    isPreviousStep: false,
    isNextStep: true,
    currentStepName: 'general',
    employee: {},
    addingCertificate: false,
};

const editEmployeeModule = createSlice({
    name: 'editEmployeeModule',
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            const newStep = action.payload;
            state.currentStep = newStep;
            state.currentStepName = stepsMap[newStep];
            if (state.currentStep > 1) {
                state.isPreviousStep = true;
            }
            if (state.currentStep < TOTAL_STEPS) {
                state.isNextStep = true;
            }
        },
        setEmployee: (state, action) => {
            state.employee = action.payload;
        },
        openAddCertificateForm: state => {
            state.addingCertificate = true;
        },
        closeAddCertificateForm: state => {
            state.addingCertificate = false;
        },
    },
});

export const { setCurrentStep, openAddCertificateForm, closeAddCertificateForm, setEmployee } =
    editEmployeeModule.actions;
export default editEmployeeModule.reducer;
