import { EMAIL_REGEX } from '../constants';

export const validateEmail = value => {
    const regex = EMAIL_REGEX;
    if (!value || !regex.test(value)) {
        return 'Please enter a valid email address';
    }
    return undefined;
};
