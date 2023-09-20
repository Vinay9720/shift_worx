import { useMutation, useQueryClient } from 'react-query';

import AdminNoteService from '@/services/admin-note';

import { useToast } from '../common';

export const useReadNotes = () => {
    const queryClient = useQueryClient();
    const showToast = useToast();

    const readNotes = () => {
        return AdminNoteService.readNotes();
    };

    return useMutation(readNotes, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-notes');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
