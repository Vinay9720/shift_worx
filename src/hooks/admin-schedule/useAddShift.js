import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminScheduleService from '@/services/admin-schedule';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useAddShift = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const addShift = ({ shiftData }) => {
        const payload = {
            shift: {
                facility_id: shiftData.facility.value, // current user's
                instructions: '',
                positions: [
                    {
                        quantity: 1,
                        certificate_ids: [shiftData.role.value],
                        speciality_ids: [shiftData.speciality.value],
                        nurse_id: shiftData.employee.value,
                        additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
                        mandatory_lunch: true,
                    },
                ],
                station: shiftData.facility_name,
                late_call_confirm: true,
                do_unavailability_check: true,
                dates: shiftData.date, // shiftData.date.map(date => moment(date, 'DD-MM-YYYY').format('MM-DD-YY')),
                start_time: shiftData.start_time,
                end_time: shiftData.end_time,
            },
        };
        return AdminScheduleService.addShift(payload);
    };

    return useMutation(addShift, {
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
