import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/lib/store/slices/modal-slice';
import { useToast } from '../common';
import AdminScheduleService from '@/services/admin-schedule';

export const useDeleteShift = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const deleteShift = id => {
        return AdminScheduleService.deleteShift(id);
    };

    return useMutation(deleteShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule');
            dispatch(closeModal({ modalName: 'deleteShiftModal' }));
            showToast('Shift Deleted Successfully !', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
