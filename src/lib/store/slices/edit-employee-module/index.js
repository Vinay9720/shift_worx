import { createSlice } from '@reduxjs/toolkit';

const stepsMap = {
    1: 'profile_information',
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
    currentStepName: 'profile_information',
    employee: {},
    addingCertificate: false,
    editingCertificate: false,
    certificateToBeEdited: {},
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
        setCertificateToBeEdited: (state, action) => {
            state.certificateToBeEdited = action.payload;
        },
        openAddCertificateForm: state => {
            state.addingCertificate = true;
        },
        closeAddCertificateForm: state => {
            state.addingCertificate = false;
        },
        openEditCertificateForm: state => {
            state.editingCertificate = true;
        },
        closeEditCertificateForm: state => {
            state.editingCertificate = false;
        },
        clearState: state => {
            state.certificateToBeEdited = {};
        },
    },
});

export const {
    setCurrentStep,
    openAddCertificateForm,
    closeAddCertificateForm,
    setEmployee,
    openEditCertificateForm,
    setCertificateToBeEdited,
    closeEditCertificateForm,
    clearState,
} = editEmployeeModule.actions;
export default editEmployeeModule.reducer;
