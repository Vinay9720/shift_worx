/* eslint-disable prefer-destructuring */
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';
import {
    closeAddCertificateForm,
    handleNext,
    setFacilityUserId,
    setCertificates,
} from '@/lib/store/slices/add-employee-module';

export const useAddEmployee = () => {
    const { currentStepName, currentStep, facilityUserId } = useSelector(state => state.addEmployeeModule);
    const dispatch = useDispatch();
    const isCertificationStep = currentStep === 3;

    const addEmployee = employeeData => {
        const profileableAttributes = {
            profileable_attributes: {
                facility_id: 1,
            },
            profileable_type: 'Nurse',
        };

        const nurseCertificateDetails = { nurse_certificate: { ...employeeData } };
        if (isCertificationStep) {
            nurseCertificateDetails.nurse_certificate.certificate_id = employeeData.certificate_id[0];
            nurseCertificateDetails.nurse_certificate.jurisdiction = employeeData.jurisdiction[0];
        }

        const payload = {
            user: { ...(!isCertificationStep ? employeeData : {}), ...profileableAttributes },
            step: currentStepName,
            ...(isCertificationStep ? nurseCertificateDetails : {}),
            ...(facilityUserId ? { facility_user_id: facilityUserId } : {}),
        };
        return AdminEmployeeService.addEmployee(payload);
    };

    return useMutation(addEmployee, {
        onSuccess: async response => {
            if (currentStep !== 3) {
                dispatch(handleNext());
                dispatch(setFacilityUserId(response.data.facility_user.id));
            }
            dispatch(closeAddCertificateForm());
            dispatch(setCertificates(response.data.certificates));
        },
        onError: error => {
            console.log('error', error.response.data.errors[0]);
        },
    });
};
