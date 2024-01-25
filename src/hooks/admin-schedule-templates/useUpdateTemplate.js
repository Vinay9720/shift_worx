import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useRouter, useParams } from 'next/navigation';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

export const useUpdateTemplate = () => {
    const { templateId } = useParams();
    const queryClient = useQueryClient();
    const router = useRouter();
    const dispatch = useDispatch();
    const showToast = useToast();
    const updateTemplate = ({ shiftData }) => {
        const payload = {
            shift_template: {
                name: shiftData.template_name,
                description: shiftData.description,
                assigned: shiftData.assigned,
            },
        };
        return AdminScheduleTemplatesService.updateTemplate(templateId, payload);
    };

    return useMutation(updateTemplate, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-templates');
            dispatch(closeModal({ modalName: 'updateScheduleTemplateModal' }));
            router.push('/admin/schedule?step=templates');
            showToast('Template Successfully Updated!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
