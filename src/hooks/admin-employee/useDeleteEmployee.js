import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

// import AdminNoteService from '@/services/admin-note';
import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useDelelteEmployee = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const deleteEmployee = id => {
        return AdminEmployeeService.deleteEmployee(id);
    };

    return useMutation(deleteEmployee, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-employees');
            dispatch(closeModal({ modalName: 'deleteEmployeeModal' }));
            showToast('Employee Successfully Deleted!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
