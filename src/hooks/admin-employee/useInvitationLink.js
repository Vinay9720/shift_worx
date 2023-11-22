import { useMutation } from 'react-query';

import AdminEmployeeService from '@/services/admin-employee';

import { useToast } from '../common';

export const useInvitation = () => {
    const showToast = useToast();

    return useMutation(employeeId => AdminEmployeeService.inviteEmplpyee(employeeId), {
        onError: error => {
            showToast(error.response.data.message || 'Please try again after some time.', 'error');
        },
        onSuccess: () => {
            showToast('Employee  Invitation Has Been Sent!', 'success');
        },
    });
};
