/* eslint-disable prefer-destructuring */
import { useMutation, useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { isEmpty } from 'lodash';

import { closeAddCertificateForm } from '@/lib/store/slices/edit-employee-module';
import AdminEmployeeService from '@/services/admin-employee';

import { useToast } from '../common';

export const useUpdateEmployee = () => {
    const { currentStepName, currentStep } = useSelector(state => state.editEmployeeModule);
    const dispatch = useDispatch();
    const { certificateToBeEdited } = useSelector(state => state.editEmployeeModule);
    const showToast = useToast();
    const queryClient = useQueryClient();
    const searchParams = useSearchParams();
    const urlStep = searchParams.get('step');

    const isCertificationStep = currentStep === 3;

    const updateEmployee = ({ id, employeeData }) => {
        const profileableAttributes = {
            profileable_attributes: {
                facility_id: 1,
            },
            profileable_type: 'Nurse',
        };

        const nurseCertificateDetails = {
            nurse_certificate: {
                speciality: employeeData.speciality,
                cert_license_number: employeeData.cert_license_number,
                effective_date: employeeData.effective_date,
                expiration_date: employeeData.expiration_date,
                file_upload_key: employeeData.file_upload_key,
                ...(!isEmpty(certificateToBeEdited) ? { id: certificateToBeEdited.id } : {}),
            },
        };
        if (isCertificationStep || urlStep === 'certificates') {
            nurseCertificateDetails.nurse_certificate.certificate_id = employeeData.certificate_id[0];
            nurseCertificateDetails.nurse_certificate.jurisdiction = employeeData.jurisdiction[0];
        }

        const payload = {
            user: {
                ...(!(isCertificationStep || urlStep === 'certificates') ? employeeData : {}),
                ...profileableAttributes,
            },
            step: currentStepName,
            ...(isCertificationStep || urlStep === 'certificates' ? nurseCertificateDetails : {}),
            ...(id ? { facility_user_id: id } : {}),
        };
        return AdminEmployeeService.updateEmployee(id, payload);
    };

    return useMutation(updateEmployee, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-employee');
            if (isCertificationStep || urlStep === 'certificates') {
                dispatch(closeAddCertificateForm());
            }
            showToast('Saved successfully', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
