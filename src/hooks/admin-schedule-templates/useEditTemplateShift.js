import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

export const useEditTemplateShift = shiftId => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();
    const updateShift = ({ shiftData }) => {
        const payload = {
            template_shift: {
                days: [shiftData.days],
                start_time: shiftData.start_time,
                end_time: shiftData.end_time,
                station: shiftData.facility_name,
                role: shiftData.role.value,
                speciality_id: shiftData.speciality.value,
                facility_id: 1,
                nurse_id: shiftData.employee.value,
                additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
            },
            shift_template: {
                template_type: 'weekly',
            },
        };
        return AdminScheduleTemplatesService.updateTemplateShift(shiftId, payload);
    };

    return useMutation(updateShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-template');
            dispatch(closeModal({ modalName: 'editTemplateShiftModal' }));
            showToast('Shift Successfully Updated!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
