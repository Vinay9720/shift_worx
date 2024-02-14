'use client';

/* eslint-disable camelcase */
// NEEDS TO CHANGE THIS COMPONENT WITH STYLED WHICH IS COMMENTED FOR NOW

import { IconButton, Stack } from '@mui/material';
import { cva } from 'class-variance-authority';

import { SwxChip, SwxPopupMenu, SwxTypography } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { openModal } from '@/lib/store/slices/modal-slice';

import { BannerWrapper, Bannercontainer } from './daily-schedule-banner.styles';
import { useDispatch } from 'react-redux';
import { setShiftData } from '@/lib/store/slices/admin-schedule-module';
import { convertTo24HourFormat } from '@/lib/util';

function DailyScheduleBanner({
    kind,
    startTime,
    endTime,
    floor,
    session,
    style,
    id,
    setEmployeeId,
    shiftId,
    specialities,
    facility,
    startDate,
    certificateId,
    empName,
    nurseId,
}) {
    const dispatch = useDispatch();
    const start_Time = convertTo24HourFormat(startTime);
    const end_Time = convertTo24HourFormat(endTime);

    const [startHour, startMinute] = start_Time.split(':').map(Number);
    const [endHour, endMinute] = end_Time.split(':').map(Number);

    // Convert start and end times to minutes
    const totalMinutes1 = startHour * 60 + startMinute;
    const totalMinutes2 = endHour * 60 + endMinute;

    // Handle the case where the shift spans across midnight
    const differenceInMinutes =
        totalMinutes2 >= totalMinutes1 ? totalMinutes2 - totalMinutes1 : 24 * 60 - totalMinutes1 + totalMinutes2;

    const timeDifference = differenceInMinutes / 60;

    const menuOptions = () => {
        const employeeShiftData = {
            employee: empName,
            id,
            facility_id: facility,
            shift_id: shiftId,
            certificate_ids: certificateId,
            speciality_ids: specialities,
            station: floor,
            start_date: startDate,
            start_time: startTime,
            end_time: endTime,
            role: kind,
            nurseId,
        };
        return [
            {
                label: 'Edit Shift',
                action: async () => {
                    dispatch(setShiftData(employeeShiftData));
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: () => {
                    dispatch(openModal({ modalName: 'deleteShiftModal' }));
                    setEmployeeId(employeeShiftData.shift_id);
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const getBackGroundColor = () => {
        switch (kind) {
            case 'LPN':
                return 'swxBlue';
            case 'RN':
                return 'pink';
            case 'CNA':
                return 'lightOrange';
            default:
                return 'pink';
        }
    };
    return (
        <BannerWrapper>
            <Bannercontainer style={style} kind={kind} employeeName={empName}>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: timeDifference && timeDifference <= 2 ? '12px' : '16px',
                    }}>
                    <SwxChip label={kind} color='white' background={getBackGroundColor()} size='smallest' />
                    <Stack direction='column' sx={{ ml: '4px' }}>
                        <SwxTypography
                            className='Manrope'
                            color='swxBlack'
                            size={timeDifference && timeDifference <= 3 ? 'smaller' : 'small'}
                            lineHeight={timeDifference && timeDifference <= 2 ? 1 : null}
                            weight='semiBold'>
                            {startTime} {'>'} {endTime}
                        </SwxTypography>
                        <SwxTypography
                            color='lightGray'
                            size={timeDifference && timeDifference <= 2 ? 'verySmall' : 'small'}
                            weight='semiBold'
                            className='Manrope'>
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
                        size={timeDifference && timeDifference <= 2 ? 'verySmall' : 'smallest'}
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
        <div className={`${badgleStyles({ kind })}`} style={styles}>
            <div>
                {icon} {text}{' '}
            </div>
        </div>
    );
};
