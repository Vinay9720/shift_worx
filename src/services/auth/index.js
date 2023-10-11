import http from '../../httpCommon';

const recoverPassword = email => {
    return http.post(`/passwords/forgot?email=${email}`);
};

const registerUser = userData => {
    return http.post(`/users`, { user: userData });
};

const AuthService = {
    recoverPassword,
    registerUser,
};

export default AuthService;
