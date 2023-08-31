import { useMutation } from 'react-query';
import AdminEmployeeService from '@/services/admin-employee';
import { setCurrentStep } from '@/lib/store/slices/add-employee-steps-slice';
// import { useRouter } from 'next/navigation';
// import { getSession, signIn } from 'next-auth/react';

// import { redirectUser } from '@/lib/util';

// const userSignIn = credentials => {
//     return signIn('credentials', {
//         email: credentials.email,
//         password: credentials.password,
//         redirect: false,
//     });
// };

export const useAddEmployee = () => {
    // const router = useRouter();
    return useMutation(AdminEmployeeService.addEmployee, {
        onSuccess: async response => {
            debugger
            // const session = await getSession();
            // if (response.status === 200 && session) {
            //     redirectUser(session, router);
            // } else if (response.status === 401) {
            //     console.log('error', 'Invalid credentials');
            // }
        },
    });
};
