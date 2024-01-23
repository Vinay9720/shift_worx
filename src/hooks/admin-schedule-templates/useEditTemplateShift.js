import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';

export const useEditTemplateShift = () => {
    const { templateShiftTobeEdited } = useSelector(state => state.adminScheduleTemplatesModule);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();
    const updateShift = ({ shiftData }) => {
        const payload = {
            template_shift: {
                days: [shiftData.days] || templateShiftTobeEdited.day,
                start_time: shiftData.start_time || templateShiftTobeEdited.start_time,
                end_time: shiftData.end_time || templateShiftTobeEdited.end_time,
                station: shiftData.facility_name || templateShiftTobeEdited.station,
                role: shiftData.role.value || templateShiftTobeEdited.certificate_ids,
                speciality_id: shiftData.speciality.value || templateShiftTobeEdited.speciality_ids.id,
                facility_id: 1 || templateShiftTobeEdited.facility_id.id,
                nurse_id: shiftData.employee.value || templateShiftTobeEdited.nurseId,
                additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
            },
            shift_template: {
                template_type: templateShiftTobeEdited.template_type,
            },
        };
        return AdminScheduleTemplatesService.updateTemplateShift(templateShiftTobeEdited.shift_id, payload);
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
