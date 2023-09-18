/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: '#0080F5',
                newBrand: '#1F6FA9',
                light: '#FFFFFF',
                mediumGray: '#616A71',
                lightGray: '#92999E',
                darkGray: '#373E40',
                dark: '#000000',
                red: '#FF0606',
                backgroudBase: '#FFFFFF',
                backgroundAlt: '#173D7C',
                tableRowBase: '#FFFFFF',
                tableRowAlt: '#F7F7F7',
                newTableRowAlt: '#F6FAFD',
                // rowHovered: '#C2E1FC',
                tableRowSelected: '#F2F3FF',
                tableContextualMenu: '#FFFFFF',
                buttonPrimary: '#0080F5',
                buttonSecondary: '#F1F1F1',
                error: '#f2072b',
                nurseioGreen: '#02B692',
                nurseioPurple: '#913DFB',
                nurseioOrange: '#FF9900',
                nurseioRed: '#ed1a3a',
                lightDodgerBlue: '#0080f51a',
                paleGray: '#efedefaa',
                grayGray: '#eeeeee',
                schduleBorderOrange: '#EF5085',
                schduleBgOrange: '#FFEAD7',
                schduleBgRed: '#FCEBF1',
                scheduleLPN: '#DDF2FA',
                scheduleLPNBlue: '#DCEEFF',
                scheduleLPNBorder: '#1A428A',
                scheduleCNA: '#FAE3DD',
                scheduleCNABorder: '#DD8A03',
                borderGray: '#D4D4D4',
                borderBackground: '#707070',
                iconText: '#8A8A8A',
                darkBlue: '#5578A3',
                dayBackGray: '#DBDBDB',
                RNColor: '#F37FA6',
                LPNColor: '#79CBED',
                CNAColor: '#ED8E79',
                colorGreen: '#599E39',
                newLightGray: '#838A91',
                newBorderBlue: '#027EF4',
                newGreenColor: '#1DB304',
                newPinkColor: '#E65889',
                newGreen: '#1DB304',
                newLighterGray: '#F7F7F8',
                newRedColor: '#F43C02',
                newBlackColor: '#030303',
                newCNAColor: '#F47602',
                headerColor: '#000A14',
                newCellColor: '#F7F7F8',
                tableBorder: '#E6E8E9',
                calenderDateDisabled: '#B9BDC1',
                nuresioblue: '#EAF3FA',
            },
            fontSize: {
                sm: '14px',
                default: '16px',
                semi: '20px',
                md: '24px',
                lg: '32px',
                xl: '64px',
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                doubleextrabold: '900',
            },
            borderRadius: {
                none: '0px',
                rounded: '5px',
                sm: '4px',
                md: '8px',
                lg: '10px',
                xl: '10px',
                circle: '100px',
            },
            screens: {
                xs: { min: '220px', max: '575px' },
                sm: { min: '576px', max: '822px' },
                // md: { min: '823px', max: '1024px' },
                // lg: { min: '1280px', max: '1535px' },
                // xl: { min: '1536px' },
            },
        },
        boxShadow: {
            brand: '1px 1px 6px rgba(0, 0, 0, 0.2)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            blueBoxShadow: '0px 0px 0px 2px rgba(2, 126, 244, 0.20)',
        },
    },
    // plugins: [],
    plugins: [
        plugin(({ addBase, addComponents, addUtilities, theme }) => {
            addBase({
                h1: {
                    fontSize: theme('fontSize.2xl'),
                },
                h2: {
                    fontSize: theme('fontSize.xl'),
                },
            });
            addComponents({
                '.card': {
                    backgroundColor: theme('colors.white'),
                    borderRadius: theme('borderRadius.lg'),
                    padding: theme('spacing.6'),
                    boxShadow: theme('boxShadow.xl'),
                },
                '.img-circle': {
                    width: '40px',
                    height: '40px',
                },
                '.card-mobile': {
                    width: '43%',
                    'min-width': '43%',
                    'max-width': '43%',
                },
                '.emp-card-mobile': {
                    width: '100%',
                    'overflow-y': 'hidden',
                    'overflow-x': 'scroll',
                    '-webkit-overflow-scrolling': 'touch',
                    display: 'flex !important',
                },
                '.emp-card-mobile .scrollbar-hide': {
                    /* IE and Edge */
                    '-ms-overflow-style': 'none',
                    /* Firefox */
                    'scrollbar-width': 'none',
                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.instagram_hover': {
                    background:
                        'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
                    '-webkit-text-fill-color': 'transparent',
                },
                '.linkedin_hover': {
                    background: '#0072b1',
                },
                '.twitter_hover': {
                    background: '#00B6F1',
                },
                '.modal_header': {
                    // backgroundColor: theme('colors.buttonSecondary'),
                    'border-bottom': '1px solid rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    'text-align': 'center',
                    padding: '15px',
                },
                '.modal_body': {
                    padding: '15px',
                    'max-height': '80vh',
                    'overflow-y': 'auto',
                },
                '.modal_footer': {
                    backgroundColor: theme('colors.tableContextualMenu'),
                    'border-top': '1px solid rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    padding: '15px',
                },
                '.modal_header1': {
                    background: 'rgba(0, 0, 0, 0.6)',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    'z-index': '10',
                },
                '.modal_overlay_hcp': {
                    backgroundColor: 'rgba(0, 0, 0, 0.6) !important',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    'z-index': '10',
                },
                '.vertical-line': {
                    'border-right': '2px solid #D5D5D5',
                    height: 'auto',
                },
                '.minHeight-90': {
                    'min-height': '90px !important',
                },
                '.h-sr': {
                    'overflow-x': 'auto',
                },
                '.schedule_border_day': {
                    'box-sizing': 'border-box',
                    /* Auto layout */
                    display: 'flex',
                    'flex-direction': 'row',
                    'justify-content': 'center',
                    'align-items': 'center',
                    padding: '6px 15px',
                    gap: '5px',
                    border: '2px solid rgba(238, 246, 249, 0.25)',
                    'border-radius': '8px',
                },
                '.dot': {
                    width: '10px',
                    height: '10px',
                    'margin-top': '-10px',
                    'background-color': theme('colors.newBorderBlue'),
                    'border-radius': '50%',
                    'margin-left': '-4px',
                    padding: '5px',
                },
                '.select_box1': {
                    backgroundColor: 'rgb(23 61 124) !important',
                    border: '2px solid rgba(238, 246, 249, 0.25) !important',
                    'border-radius': '8px !important',
                    padding: '6px 15px !important',
                },
                '.gray_dot': {
                    width: '3px',
                    height: '3px',
                    'background-color': theme('colors.newLightGray'),
                    'border-radius': '50%',
                },
            });
            addUtilities({
                '.content-auto': {
                    contentVisibility: 'auto',
                },
            });
        }),
    ],
};
