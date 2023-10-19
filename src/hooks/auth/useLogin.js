import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';

import { setApplicationLoading } from '@/lib/store/slices/application';
import { redirectUser } from '@/lib/util';

import { useToast } from '../common';

export const useLogin = () => {
    const dispatch = useDispatch();
    const userSignIn = credentials => {
        dispatch(setApplicationLoading(true));
        return signIn('credentials', {
            email: credentials.email,
            password: credentials.password,
            redirect: false,
        });
    };

    const showToast = useToast();
    const router = useRouter();
    return useMutation(userSignIn, {
        onSuccess: async response => {
            const session = await getSession();
            if (response.status === 200 && session) {
                redirectUser(session, router, dispatch);
            } else if (response.status === 401) {
                showToast('Invalid credentials', 'error');
            }
        },
    });
};
