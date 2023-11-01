import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

// import AdminEmployeeService from '@/services/admin-employee';
import AdminNoteService from '@/services/admin-note';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useAddNote = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const addNote = ({ noteData, employee }) => {
        console.log('employee prop', employee);
        const payload = {
            step: 'notes',
            note: { ...noteData, entity_id: employee.profileable_id || employee, entity_type: 'Nurse' },
            // entitty Id will be profileable id
            facility_user_id: employee.id || employee,
        };
        // eslint-disable-next-line prefer-destructuring
        payload.note.note_type_id = noteData.note_type_id[0];
        // console.log(payload, 'payload');
        return AdminNoteService.addNote(payload);
    };

    return useMutation(addNote, {
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
