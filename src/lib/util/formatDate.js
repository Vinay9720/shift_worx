import moment from 'moment';

export function formatDate(date, formatString = 'MMMM DD, YYYY') {
    return moment(date).format(formatString);
}
