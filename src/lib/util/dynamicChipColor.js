export const roleBackground = status => {
    switch (status) {
        case 'RN':
            return 'pink';
        case 'LPN':
            return 'swxBlue';
        case 'CNA':
            return 'lightOrange';
        default:
            return 'pink';
    }
};
export const statusChipBackground = status => {
    switch (status) {
        case 'Approved':
            return 'paleGreen';
        case 'Declined':
            return 'lightPink';
        case 'Pending':
            return 'dullGray';
        default:
            return 'dullGray';
    }
};
export const statusCircleBackground = status => {
    switch (status) {
        case 'Approved':
            return '#02B692';
        case 'Declined':
            return '#E65889';
        case 'Pending':
            return '#838A91';
        default:
            return '#838A91';
    }
};
