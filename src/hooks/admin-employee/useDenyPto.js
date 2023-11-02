import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

// import AdminNoteService from '@/services/admin-note';
import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useDenyPto = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const denyPto = id => {
        return AdminEmployeeService.denyPto(id);
    };

    return useMutation(denyPto, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-pto');
            dispatch(closeModal({ modalName: 'denyRequestModal' }));
            showToast('Request Denied Successfully !', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
