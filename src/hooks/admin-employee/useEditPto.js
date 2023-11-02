import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useEditPto = id => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const updatePto = ptoData => {
        const payload = {
            ...ptoData,
            request_type: ptoData.request_type[0],
        };

        return AdminEmployeeService.updatePto(id, JSON.stringify(payload));
    };

    return useMutation(updatePto, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-pto');
            dispatch(closeModal({ modalName: 'editPtoModal' }));
            showToast('Request Successfully Added!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
