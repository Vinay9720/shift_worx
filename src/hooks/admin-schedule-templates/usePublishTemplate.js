import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import moment from 'moment';

export const usePublishTemplate = () => {
    const { templateTobePublished } = useSelector(state => state.adminScheduleTemplatesModule);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const publishTemplate = ({ templateData }) => {
        const payload = {
            shift_template: {
                id: templateTobePublished.id,
                facility_id: '1',
                name: templateData.name,
                description: templateData.description,
                assigned: templateData.assigned,
                start_date: moment(templateData.start_date).format('MM/DD/YYYY'),
                publish: templateData.publish,
                template_type: templateData.template_week,
            },
        };
        return AdminScheduleTemplatesService.publishTemplate(payload);
    };

    return useMutation(publishTemplate, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-templates');
            dispatch(closeModal({ modalName: 'publishScheduleTemplateModal' }));
            showToast('Schedule Template Published!', 'success');
        },
        onError: error => {
            dispatch(closeModal({ modalName: 'publishScheduleTemplateModal' }));
            showToast(error.response.data.message, 'error');
        },
    });
};
