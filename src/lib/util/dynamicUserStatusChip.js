import { lowerCase } from 'lodash';

export const userStatusChipBackground = status => {
    const formattedStatus = lowerCase(status);
    switch (formattedStatus) {
        case 'active':
            return 'lightPink';
        case 'inactive':
            return 'dullGray';
        default:
            return 'dullGray';
    }
};
export const userStatusCircleBackground = status => {
    const formattedStatus = lowerCase(status);
    switch (formattedStatus) {
        case 'active':
            return '#E65889';
        case 'inactive':
            return '#838A91';
        default:
            return '#838A91';
    }
};
