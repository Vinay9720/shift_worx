export const redirectUser = (session, router) => {
    const { role } = session.user;
    switch (role) {
        case 'admin':
            router.push('/admin/home?event-type=overview');
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
