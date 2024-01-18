export const scheduleBannerBackgroundColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'lightBlue';
        case 'RN':
            return 'palePink';
        case 'CNA':
            return 'paleOrange';
        default:
            return 'palePink';
    }
};
