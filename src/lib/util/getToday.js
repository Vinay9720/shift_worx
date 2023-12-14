import moment from 'moment';

export const today = format => {
    return moment().format(format || 'MM/DD/YYYY');
};
