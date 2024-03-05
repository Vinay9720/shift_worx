/* eslint-disable prefer-destructuring */
import { useMutation } from 'react-query';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import AdminEmployeeService from '@/services/admin-employee';
import {
    closeAddCertificateForm,
    setFacilityUserId,
    setCertificates,
    setCurrentStep,
} from '@/lib/store/slices/add-employee-module';
import { closeAddCertificateForm as closeCertificateFormFromEditEmployee } from '@/lib/store/slices/edit-employee-module';

import { useToast } from '../common';

export const useAddEmployee = () => {
    const { currentStepName, currentStep, facilityUserId } = useSelector(state => state.addEmployeeModule);
    const { certificateToBeEdited } = useSelector(state => state.editEmployeeModule);
    const searchParams = useSearchParams();
    const urlStep = searchParams.get('step');
    const dispatch = useDispatch();
    const showToast = useToast();
    const isCertificationStep = currentStep === 3;

    const addEmployee = ({ employeeData, employeeId }) => {
        const profileableAttributes = {
            profileable_attributes: {
                facility_id: 1,
            },
            profileable_type: 'Nurse',
        };

        const nurseCertificateDetails = {
            nurse_certificate: {
                ...employeeData,
                ...(!isEmpty(certificateToBeEdited) ? { id: certificateToBeEdited.id } : {}),
            },
        };
        if (isCertificationStep || urlStep === 'certificates') {
            nurseCertificateDetails.nurse_certificate.certificate_id = employeeData.certificate_id.value;
            nurseCertificateDetails.nurse_certificate.jurisdiction = employeeData.jurisdiction.value;
            nurseCertificateDetails.nurse_certificate.speciality_ids = [employeeData.speciality_ids.value];
        }

        const payload = {
            user: {
                ...(!(isCertificationStep || urlStep === 'certificates') ? employeeData : {}),
                ...profileableAttributes,
            },
            step: urlStep === 'overview' ? currentStepName : urlStep,
            ...(isCertificationStep || urlStep === 'certificates' ? nurseCertificateDetails : {}),
            ...(facilityUserId || employeeId ? { facility_user_id: facilityUserId || employeeId } : {}),
        };
        return AdminEmployeeService.addEmployee(payload);
    };

    return useMutation(addEmployee, {
        onSuccess: async response => {
            if (currentStep !== 3) {
                dispatch(setCurrentStep(currentStep + 1));
            }
            if (isCertificationStep || urlStep === 'certificates') {
                showToast('saved successfully', 'success');
                dispatch(setCertificates(response.data.certificates));
                dispatch(closeAddCertificateForm());
            }
            dispatch(setFacilityUserId(response.data?.facility_user?.id || response.data?.id));
            dispatch(closeAddCertificateForm());
            dispatch(closeCertificateFormFromEditEmployee());
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
