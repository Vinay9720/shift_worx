import { setApplicationLoading } from '../store/slices/application';

export const redirectUser = (session, router, dispatch) => {
    const { role } = session.user;
    dispatch(setApplicationLoading(true));
    switch (role) {
        case 'admin':
            router.push('/admin/schedule?step=overview');
            break;
        case 'Nurse':
            router.push('/admin/home');
            break;
        case 'super_admin':
            router.push('/super-admin');
            break;
        default:
            router.push('/employee/home');
    }
};
