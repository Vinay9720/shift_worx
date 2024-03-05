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
    facilityUserId: null,
    addingCertificate: false,
    certificates: [],
    editingCertificate: false,
    certificateToBeEdited: {},
    addEmployeeDataStep1: {},
    addEmployeeDataStep2: {},
    addEmployeeDataStep3: {},
};

const addEmployeeModule = createSlice({
    name: 'addEmployeeModule',
    initialState,
    reducers: {
        handleNext: state => {
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
                state.currentStepName = stepsMap[action.payload];
            }
            if (state.currentStep < 3) {
                state.isNextStep = true;
                state.currentStepName = stepsMap[action.payload];
            }
        },
        setFacilityUserId: (state, action) => {
            state.facilityUserId = action.payload;
        },
        openAddCertificateForm: state => {
            state.addingCertificate = true;
        },
        closeAddCertificateForm: state => {
            state.addingCertificate = false;
        },
        setCertificates: (state, action) => {
            state.certificates = action.payload;
        },
        openEditCertificateForm: state => {
            state.editingCertificate = true;
        },
        closeEditCertificateForm: state => {
            state.editingCertificate = false;
        },
        setCertificateToBeEdited: (state, action) => {
            state.certificateToBeEdited = action.payload;
        },
        setAddEmployeeDataStep1: (state, action) => {
            state.addEmployeeDataStep1 = action.payload;
        },
        setAddEmployeeDataStep2: (state, action) => {
            state.addEmployeeDataStep2 = action.payload;
        },
        setAddEmployeeDataStep3: (state, action) => {
            state.addEmployeeDataStep3 = action.payload;
        },
        clearState: state => {
            state.addEmployeeDataStep1 = {};
            state.addEmployeeDataStep2 = {};
            state.addEmployeeDataStep3 = {};
        },
    },
});

export const {
    handleNext,
    handlePrevious,
    setCurrentStep,
    setFacilityUserId,
    openAddCertificateForm,
    closeAddCertificateForm,
    setCertificates,
    openEditCertificateForm,
    closeEditCertificateForm,
    setCertificateToBeEdited,
    setAddEmployeeDataStep1,
    setAddEmployeeDataStep2,
    setAddEmployeeDataStep3,
    clearState,
} = addEmployeeModule.actions;
export default addEmployeeModule.reducer;
