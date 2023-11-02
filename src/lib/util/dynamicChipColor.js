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
        case 'approved':
            return 'paleGreen';
        case 'declined':
            return 'lightPink';
        case 'pending':
            return 'dullGray';
        default:
            return 'dullGray';
    }
};
export const statusCircleBackground = status => {
    switch (status) {
        case 'approved':
            return '#02B692';
        case 'declined':
            return '#E65889';
        case 'pending':
            return '#838A91';
        default:
            return '#838A91';
    }
};
