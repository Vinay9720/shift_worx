import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { lowerCase } from 'lodash';
import { useRouter } from 'next/navigation';

export const useAddTemplateShift = () => {
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);
    const router = useRouter();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const addTemplateShift = ({ shiftData }) => {
        const payload = {
            template_shift: {
                days: [shiftData.days],
                start_time: shiftData.start_time,
                end_time: shiftData.end_time,
                station: shiftData.facility_name,
                role: [shiftData.role.value],
                speciality_id: [shiftData.speciality.value],
                facility_id: 1,
                employee1: shiftData.employee.value,
                employee2: shiftData.employee_2 ? shiftData.employee_2.value : '',
            },
            template: {
                template_type: lowerCase(templateType[0]),
            },
        };
        return AdminScheduleTemplatesService.addTemplateShift(payload);
    };

    return useMutation(addTemplateShift, {
        onSuccess: async data => {
            const res = data.data;
            const templateId = res && res.template.id;
            queryClient.invalidateQueries('admin-schedule');
            dispatch(closeModal({ modalName: 'addTemplateShiftModal' }));
            showToast('Shift Successfully Added!', 'success');
            router.push(`/admin/schedule/create-template/${templateId}`);
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
