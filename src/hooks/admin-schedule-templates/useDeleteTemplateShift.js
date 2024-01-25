import { useMutation, useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { clearState } from '@/lib/store/slices/admin-schedule-templates-module';

export const useDeleteTemplateShift = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { templateShiftTobeDeleted } = useSelector(state => state.adminScheduleTemplatesModule);
    const showToast = useToast();

    const deleteTemplateShift = () => {
        return AdminScheduleTemplatesService.deleteTemplateShift(templateShiftTobeDeleted.id);
    };

    return useMutation(deleteTemplateShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-template');
            dispatch(closeModal({ modalName: 'deleteTemplateShiftModal' }));
            dispatch(clearState());
            showToast('Shift Successfully Deleted!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
