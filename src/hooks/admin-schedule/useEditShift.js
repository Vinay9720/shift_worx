import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { isArray } from 'lodash';

export const useEditShift = employeeShiftData => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();
    const updateShift = ({ shiftData }) => {
        const payload = {
            shift: {
                id: employeeShiftData.id,
                facility_id: shiftData.facility.value || employeeShiftData.facility_id.id, // current user's
                instructions: '',
                positions: [
                    {
                        id: employeeShiftData.shift_id,
                        certificate_ids: [shiftData.role.value || employeeShiftData.certificate_ids],
                        speciality_ids: [shiftData.speciality.value || employeeShiftData.speciality_ids[0].id],
                        nurse_id: shiftData.employee ? shiftData.employee.value : '',
                        additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
                        mandatory_lunch: true,
                    },
                ],
                station: shiftData.facility_name,
                late_call_confirm: true,
                do_unavailability_check: true,
                dates: isArray(shiftData.date) ? shiftData.date : [shiftData.date],
                start_time: shiftData.start_time,
                end_time: shiftData.end_time,
            },
        };

        return AdminScheduleService.updateShift(employeeShiftData.shift_id, payload);
    };

    return useMutation(updateShift, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule');
            dispatch(closeModal({ modalName: 'editShiftModal' }));
            showToast('Shift Successfully Updated!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
