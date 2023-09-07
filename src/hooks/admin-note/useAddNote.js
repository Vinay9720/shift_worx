import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminEmployeeService from '@/services/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useAddNote = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const addEmployee = ({ noteData, employeeId: facilityUserId }) => {
        const payload = {
            step: 'notes',
            note: { ...noteData, entity_id: '98', entity_type: 'Nurse', note_type_id: '12' },
            ...(facilityUserId ? { facility_user_id: facilityUserId } : {}),
        };
        return AdminEmployeeService.addEmployee(payload);
    };

    return useMutation(addEmployee, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-employee');
            dispatch(closeModal({ modalName: 'addNoteModal' }));
            showToast('Note Successfully Added!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
