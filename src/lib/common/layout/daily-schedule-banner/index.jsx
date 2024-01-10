'use client';

// NEEDS TO CHANGE THIS COMPONENT WITH STYLED WHICH IS COMMENTED FOR NOW

import { IconButton, Stack } from '@mui/material';
import { cva } from 'class-variance-authority';

import { SwxChip, SwxPopupMenu, SwxTypography } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { openModal } from '@/lib/store/slices/modal-slice';

import { BannerWrapper, Bannercontainer } from './daily-schedule-banner.styles';
import { useDispatch } from 'react-redux';
import AdminScheduleService from '@/services/admin-schedule';

function DailyScheduleBanner({ kind, startTime, endTime, floor, session, style, id, setEmployeeId, setShiftData }) {
    const dispatch = useDispatch();
    const menuOptions = () => {
        return [
            {
                label: 'Edit Shift',
                action: async () => {
                    const response = await AdminScheduleService.editShift(id);
                    const data = await response.data;
                    setShiftData(data);
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                    setEmployeeId(id);
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: () => {
                    dispatch(openModal({ modalName: 'deleteShiftModal' }));
                    setEmployeeId(id);
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const getBackGroundColor = () => {
        switch (kind) {
            case 'LPN':
                return 'blue';
            case 'RN':
                return 'pink';
            case 'CNA':
                return 'lightOrange';
            default:
                return 'black';
        }
    };
    return (
        <BannerWrapper kind={kind}>
            <Bannercontainer style={style}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                    <SwxChip label={kind} color='white' background={getBackGroundColor()} size='smallest' />
                    <Stack direction='column' sx={{ ml: '4px' }}>
                        <SwxTypography
                            sx={{ fontFamily: '__Manrope_36d688' }}
                            color='swxBlack'
                            size='small'
                            weight='semiBold'>
                            {startTime} {'>'} {endTime}
                        </SwxTypography>
                        <SwxTypography
                            color='lightGray'
                            size='small'
                            weight='semiBold'
                            sx={{ fontFamily: '__Manrope_36d688' }}>
                            {floor || 'Second Floor'}
                        </SwxTypography>
                    </Stack>
                    <SwxChip
                        label={session || 'morning'}
                        icon={
                            <Icon
                                styles={{ fill: '#1DB304', marginRight: '4px' }}
                                name='activity-status'
                                height={6}
                                width={6}
                            />
                        }
                        color='black'
                        background='white'
                        size='smallest'
                    />
                </Stack>
                <SwxPopupMenu
                    buttonElement={
                        <IconButton>
                            <Icon
                                styles={{ fill: '#838A91' }}
                                name='vertical-menu'
                                aria-hidden='true'
                                height={15}
                                width={10}
                            />
                        </IconButton>
                    }
                    options={menuOptions && menuOptions(id)}
                    from='daily schedule'
                />
            </Bannercontainer>
        </BannerWrapper>
    );
}

export default DailyScheduleBanner;

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

export const Badge = ({ text, kind, styles, icon }) => {
    return (
        <div className={`${badgleStyles({ kind })} ${styles}`}>
            <div className={`${styles}`}>
                {icon} {text}{' '}
            </div>
        </div>
    );
};

// export default Badge;
