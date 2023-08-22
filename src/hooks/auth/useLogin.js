import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';

import { redirectUser } from '@/lib/util';

const userSignIn = credentials => {
    return signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
    });
};

export const useLogin = () => {
    const router = useRouter();
    return useMutation(userSignIn, {
        onSuccess: async response => {
            const session = await getSession();
            if (response.status === 200 && session) {
                redirectUser(session, router);
            } else if (response.status === 401) {
                console.log('error', 'Invalid credentials');
            }
        },
    });
};
