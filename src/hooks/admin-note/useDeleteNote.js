import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';

import AdminNoteService from '@/services/admin-note';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';

export const useDeleteNote = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const updateNote = id => {
        return AdminNoteService.deleteNote(id);
    };

    return useMutation(updateNote, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-notes');
            dispatch(closeModal({ modalName: 'editNoteModal' }));
            showToast('Note Successfully Deleted!', 'success');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
