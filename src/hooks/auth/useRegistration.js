import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/navigation';

import AuthService from '@/services/auth';

import { useToast } from '../common';

export const useRegistration = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const showToast = useToast();

    const registerUser = userData => {
        return AuthService.registerUser(userData);
    };

    return useMutation(registerUser, {
        onSuccess: async () => {
            queryClient.invalidateQueries('admin-schedule');
            showToast('User registered successfully!', 'success');
            router.push('/');
        },
        onError: error => {
            showToast(error.response.data.errors[0], 'error');
        },
    });
};
