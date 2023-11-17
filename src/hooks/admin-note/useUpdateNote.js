import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminNoteService from '@/services/admin-note';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useUpdateNote = () => {
    const queryClient = useQueryClient();
    const { noteToBeUpdated } = useSelector(state => state.adminNotesModule);
    const dispatch = useDispatch();
    const showToast = useToast();

    const updateNote = noteData => {
        const payload = {
            ...noteData.noteData,
            id: noteToBeUpdated.id,
        };
        return AdminNoteService.updateNote(noteToBeUpdated.id, payload);
    };

    return useMutation(updateNote, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-notes');
            dispatch(closeModal({ modalName: 'editNoteModal' }));
            showToast('Note Successfully Updated!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
