import { useMutation, useQueryClient } from 'react-query';

import AdminNoteService from '@/services/admin-note';

import { useToast } from '../common';

export const useReadNote = () => {
    const queryClient = useQueryClient();
    const showToast = useToast();

    const readNote = id => {
        return AdminNoteService.readNote(id);
    };

    return useMutation(readNote, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-notes');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
