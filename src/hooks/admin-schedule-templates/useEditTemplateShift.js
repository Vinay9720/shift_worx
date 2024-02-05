import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { clearState, setTemplateShiftTobeEdited } from '@/lib/store/slices/admin-schedule-templates-module';

export const useEditTemplateShift = () => {
    const { templateShiftTobeEdited } = useSelector(state => state.adminScheduleTemplatesModule);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();
    const updateShift = ({ shiftData }) => {
        const payload = {
            template_shift: {
                week: shiftData.week ? shiftData.week.value : templateShiftTobeEdited.week,
                day: shiftData.days || templateShiftTobeEdited.day,
                start_time: shiftData.start_time || templateShiftTobeEdited.start_time,
                end_time: shiftData.end_time || templateShiftTobeEdited.end_time,
                station: shiftData.facility_name || templateShiftTobeEdited.station,
                role: shiftData.role.value || templateShiftTobeEdited.certificate_ids,
                speciality_id: shiftData.speciality.value || templateShiftTobeEdited.speciality_ids.id,
                facility_id: 1,
                nurse_id: shiftData.employee?.value || templateShiftTobeEdited.nurseId,
                additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
            },
            shift_template: {
                template_type: templateShiftTobeEdited.template_type,
            },
        };

        return AdminScheduleTemplatesService.updateTemplateShift(templateShiftTobeEdited.id, payload);
    };

    return useMutation(updateShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule-template');
            dispatch(closeModal({ modalName: 'editTemplateShiftModal' }));
            dispatch(clearState());
            dispatch(setTemplateShiftTobeEdited(null));
            showToast('Shift Successfully Updated!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
