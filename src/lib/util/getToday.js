import moment from 'moment';

export const today = () => {
    return moment().format('MM/DD/YYYY');
};
