'use client';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { SwxPopupMenu, SwxChip } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import {
    DayContainer,
    DaysConatiner,
    EmployeeNameContainer,
    ScheduleBannerContainer,
    ScheduleBannerWrapper,
    ShowMoreButtonWrapper,
    StyledBorderContainer,
    StyledRootMainContainer,
    StyledShowMoreButton,
    TimeContainer,
    WeekDayContainer,
    MonthlyWeekDaysContainer,
} from './schedule-templates.styles';
import { SwxModal, DynamicPromptModal } from '@/lib/common/layout';
import ShiftForm from '../../admin-schedule-overview/add-shift/ShiftForm';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDeleteShift } from '@/hooks/admin-schedule/useDeleteShift';
import { useState } from 'react';

// const templateShifts = [
//     {
//         id: 453,
//         name: 'Navin',
//         week: 1,
//         day: 'Monday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 456,
//         name: 'usr',
//         week: 2,
//         day: 'Friday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 452,
//         name: 'Malviya',
//         week: 2,
//         day: 'Tuesday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 461,
//         name: 'trent',
//         week: 5,
//         day: 'Tuesday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 451,
//         name: 'Luffy',
//         week: 3,
//         day: 'Wednesday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 470,
//         name: 'Arlong',
//         week: 3,
//         day: 'Wednesday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 471,
//         name: 'Zoro',
//         week: 3,
//         day: 'Wednesday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
//     {
//         id: 450,
//         name: 'King',
//         week: 3,
//         day: 'Thursday',
//         start_date: '12-08-2023',
//         end_date: '12-08-2023',
//         station: '2',
//         status: 'Filled',
//         start_time: '08:30am',
//         end_time: '12:30pm',
//         planned: '4:0',
//         created_at: '12-08-2023',
//         shift_id: 438,
//         certificate: 'CNA',
//     },
// ];

export default function MonthlyTemplate({ templateShifts = [] }) {
    const dispatch = useDispatch();
    const [employeeId, setEmployeeId] = useState(null);
    const { mutate: deleteShift } = useDeleteShift();
    const fixedWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getMonthDays = () => {
        const monthDays = [];

        let weekCounter = 1;
        let dayCounter = 1;

        for (let day = 1; day <= 35; day++) {
            const dayName = getDayName(dayCounter);
            const startingColumn = day === 1 ? ((dayCounter - 1) % 7) + 1 : 'unset';

            const dayOfMonth = {
                dayName,
                startingColumn,
                isFromCurrentMonth: true,
                week: weekCounter,
            };

            monthDays.push(dayOfMonth);

            if (dayCounter % 7 === 0) {
                weekCounter++;
            }

            dayCounter++;
        }

        return monthDays;
    };

    const getDayName = dayCounter => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[(dayCounter - 1) % 7];
    };

    const monthDays = getMonthDays();

    const menuOptions = id => {
        return [
            {
                label: 'Edit Shift',
                action: () => {
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

    const getBackGroundColor = kind => {
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

    const getScheduleBanner = (empName, cert, start, end, session, station, id) => {
        const timeStartInput = start;
        const timeEndInput = end;
        const parsedStartTime = moment(timeStartInput, 'h:mma');
        const parsedEndTime = moment(timeEndInput, 'h:mma');
        const outputStartTime = parsedStartTime.format('hha');
        const outputEndTime = parsedEndTime.format('hha');
        return (
            <ScheduleBannerContainer>
                <TimeContainer>
                    {outputStartTime} {`>`} {outputEndTime}
                </TimeContainer>
                <EmployeeNameContainer>{empName.substring(0, 6)}</EmployeeNameContainer>
                <div>
                    <SwxChip label={cert} color='white' background={getBackGroundColor(cert)} size='smallest' />
                    <div>
                        <SwxPopupMenu
                            buttonElement={
                                <IconButton sx={{ height: '10px' }}>
                                    <Icon
                                        styles={{ fill: '#838A91', transform: 'rotate(90deg)' }}
                                        name='vertical-menu'
                                        aria-hidden='true'
                                        height={10}
                                        width={4}
                                    />
                                </IconButton>
                            }
                            from='month wise'
                            options={menuOptions(id)}
                        />
                    </div>
                </div>
            </ScheduleBannerContainer>
        );
    };

    const handleShowMoreButton = () => {
        return null;
    };

    return (
        <StyledRootMainContainer>
            <StyledBorderContainer>
                <MonthlyWeekDaysContainer>
                    {fixedWeekDays.map((weekDay, index) => (
                        <WeekDayContainer key={index}>
                            <p style={{ marginLeft: '12px' }}>{weekDay}</p>
                        </WeekDayContainer>
                    ))}
                </MonthlyWeekDaysContainer>
                <DaysConatiner>
                    {monthDays.map((day, i) => {
                        let noOfShifts = 0;
                        const shiftsToShow = [];
                        return (
                            <DayContainer style={{ gridColumnStart: `${day.startingColumn}` }} key={i}>
                                {templateShifts.map((shift, key) => {
                                    if (shift.day === day.dayName && shift.week === day.week) {
                                        noOfShifts += 1;
                                        if (noOfShifts <= 2) {
                                            shiftsToShow.push(
                                                <ScheduleBannerWrapper key={key}>
                                                    <Badge
                                                        text={getScheduleBanner(
                                                            shift.name,
                                                            shift.certificate || 'RN',
                                                            shift.start_time,
                                                            shift.end_time,
                                                            shift.session || 'Morning',
                                                            shift.station || 'First Floor',
                                                            shift.id
                                                        )}
                                                        kind={
                                                            shift.title === 'RN'
                                                                ? 'scheduleOrange'
                                                                : shift.title === 'LPN'
                                                                ? 'scheduleCyan'
                                                                : shift.title === 'CNA'
                                                                ? 'scheduleMistyRose'
                                                                : 'scheduleOrange'
                                                        }
                                                        styles='p-[3px] w-full'
                                                    />
                                                </ScheduleBannerWrapper>
                                            );
                                        }
                                    }
                                    return null;
                                })}
                                {shiftsToShow}
                                {noOfShifts > 2 && (
                                    <ShowMoreButtonWrapper>
                                        <StyledShowMoreButton onClick={() => handleShowMoreButton(day.date)}>
                                            {`View ${noOfShifts - 2}`} More&nbsp;
                                        </StyledShowMoreButton>
                                    </ShowMoreButtonWrapper>
                                )}
                            </DayContainer>
                        );
                    })}
                </DaysConatiner>
            </StyledBorderContainer>
            <DynamicPromptModal
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal'>
                <ShiftForm
                    modalName='editShiftModal'
                    title='Edit'
                    // action={addShift}
                />
            </SwxModal>
        </StyledRootMainContainer>
    );
}
