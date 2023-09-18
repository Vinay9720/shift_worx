'use client';

// NEEDS TO CHANGE THIS COMPONENT WITH STYLED WHICH IS COMMENTED FOR NOW

// import { Stack } from '@mui/material';

// import { SwxChip, SwxTypography } from '@/lib/common/components';
// import { Icon } from '@/lib/common/icons';

// import { BannerWrapper, Bannercontainer } from './daily-schedule-banner.styles';

// function DailyScheduleBanner({ kind, startTime, endTime, floor, session }) {
//     const getBackGroundColor = () => {
//         switch (kind) {
//             case 'LPN':
//                 return 'blue';
//             case 'RN':
//                 return 'green';
//             case 'CNA':
//                 return 'pink';
//             default:
//                 return 'black';
//         }
//     };
//     return (
//         <BannerWrapper>
//             <Bannercontainer>
//                 <SwxChip label={kind} color='white' background={getBackGroundColor()} size='smallest' />
//                 <Stack direction='column' sx={{ ml: '4px' }}>
//                     <SwxTypography>
//                         {startTime} {'>'} {endTime}
//                     </SwxTypography>
//                     <SwxTypography>{floor || 'Second Floor'}</SwxTypography>
//                 </Stack>
//                 <SwxChip
//                     label={session || 'morning'}
//                     icon={<Icon styles={{ fill: '#1DB304' }} name='activity-status' height={6} width={6} />}
//                     color='black'
//                     background='white'
//                     size='smallest'
//                 />
//             </Bannercontainer>
//         </BannerWrapper>
//     );
// }

// export default DailyScheduleBanner;

import { cva } from 'class-variance-authority';

const badgleStyles = cva('text-sm font-medium rounded w-fit flex', {
    variants: {
        kind: {
            nurseioGreen: 'bg-nurseioGreen text-darkGray bg-opacity-10 border-nurseioGreen',
            nurseioPurple: 'bg-nurseioPurple text-darkGray bg-opacity-10 border-nurseioPurple',
            nurseioOrange: 'bg-nurseioOrange text-darkGray bg-opacity-10 border-nurseioOrange',
            nurseioRed: 'bg-nurseioRed text-darkGray bg-opacity-10 border-nurseioRed',
            // scheduleOrange: 'bg-schduleBgOrange rounded-lg border-nurseioRed',
            // scheduleCyan: 'bg-scheduleLPN rounded-lg border-scheduleLPNBorder',
            scheduleOrange: 'bg-schduleBgRed rounded-lg border-nurseioRed border-2 border-white',
            scheduleCyan: 'bg-scheduleLPNBlue rounded-lg border-scheduleLPNBorder border-2 border-white',
            scheduleMistyRose: 'bg-scheduleCNA rounded-lg border-scheduleCNABorder border-2 border-white',
            certPink: 'bg-newPinkColor rounded',
            certLPN: 'bg-newBorderBlue rounded',
            certCNA: 'bg-newCNAColor rounded',
            nurseioBlue: 'bg-nuresioblue rounded text-newBrand',
        },
    },
    defaultVariants: {
        kind: 'primary',
    },
});

const Badge = ({ text, kind, styles, icon }) => {
    return (
        <div className={`${badgleStyles({ kind })} ${styles}`}>
            <div className={`${styles}`}>
                {icon} {text}{' '}
            </div>
        </div>
    );
};

export default Badge;
