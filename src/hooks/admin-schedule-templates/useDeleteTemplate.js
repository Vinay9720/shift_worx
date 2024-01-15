import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useDeleteTemplate = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { templateTobeDeleted } = useSelector(state => state.adminScheduleTemplatesModule);
    const showToast = useToast();

    const deleteEmployee = () => {
        return AdminScheduleTemplatesService.deleteTemplate(templateTobeDeleted.id);
    };

    return useMutation(deleteEmployee, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-templates');
            dispatch(closeModal({ modalName: 'deleteScheduleTemplateModal' }));
            showToast('Template Successfully Deleted!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
