/* eslint-disable prefer-destructuring */
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';

export const useUpdateEmployee = () => {
    const { currentStepName, currentStep } = useSelector(state => state.editEmployeeModule);
    const queryClient = useQueryClient();

    const isCertificationStep = currentStep === 3;

    const updateEmployee = ({ id, employeeData }) => {
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
            ...(id ? { facility_user_id: id } : {}),
        };
        return AdminEmployeeService.updateEmployee(id, payload);
    };

    return useMutation(updateEmployee, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-employee');
        },
        onError: error => {
            console.log('error', error.response.data.errors[0]);
        },
    });
};
