import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useAddTemplateShift = () => {
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
        };
        return AdminScheduleTemplatesService.addTemplateShift(payload);
    };

    return useMutation(addTemplateShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule');
            dispatch(closeModal({ modalName: 'addShiftModal' }));
            showToast('Shift Successfully Added!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
