import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useAddPto = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();
    const PENDING = 'pending';
    const addPto = ptoData => {
        const payload = {
            ...ptoData,
            request_type: ptoData.request_type.value,
            state: PENDING,
        };
        return AdminEmployeeService.addPto(JSON.stringify(payload));
    };

    return useMutation(addPto, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-pto');
            dispatch(closeModal({ modalName: 'addPtoModal' }));
            showToast('Request Successfully Added!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
