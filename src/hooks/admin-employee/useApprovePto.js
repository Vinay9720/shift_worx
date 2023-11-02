import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

// import AdminNoteService from '@/services/admin-note';
import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useApprovePto = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const approvePto = id => {
        return AdminEmployeeService.approvePto(id);
    };

    return useMutation(approvePto, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-pto');
            dispatch(closeModal({ modalName: 'approveRequestModal' }));
            showToast('Approved Pto Successfully !', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
