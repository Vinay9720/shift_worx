'use client';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { SwxPopupMenu, SwxChip } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import {
    DateContainer,
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
    WeekDaysContainer,
} from './month-wise-schedule.styles';
import { SwxModal, DynamicPromptModal } from '@/lib/common/layout';
import ShiftForm from '../add-shift/ShiftForm';
import { openModal } from '@/lib/store/slices/modal-slice';
import { setCurrentTimeValue, setScheduleType } from '@/lib/store/slices/admin-schedule-module';
import { useState } from 'react';
import AdminScheduleService from '@/services/admin-schedule';
import { useEditShift, useDeleteShift } from '@/hooks/admin-schedule';

export default function MonthWiseSchedule({ scheduleData }) {
    const dispatch = useDispatch();
    const [employeeId, setEmployeeId] = useState(null);
    const [shiftData, setShiftData] = useState();
    const { mutate: updateShift } = useEditShift(employeeId, shiftData && shiftData);
    const { mutate: deleteShift } = useDeleteShift();
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const fixedWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getCurrentMonthDays = () => {
        const month = moment(currentTimeValue, 'MMM YYYY').month();
        const year = moment(currentTimeValue, 'MMM YYYY').format('YYYY');

        const firstDayOfMonth = moment([year, month]);

        const daysInMonth = firstDayOfMonth.daysInMonth();

        const monthDays = [];

        // Get the last day of the previous month
        const prevMonthLastDay = moment(firstDayOfMonth).subtract(1, 'days');

        // Get the first day of the next month
        const nextMonthFirstDay = moment(firstDayOfMonth).add(1, 'month');

        // Fetch the days from the previous month
        for (let day = prevMonthLastDay.date(); day >= prevMonthLastDay.date() - prevMonthLastDay.day(); day--) {
            const date = moment([prevMonthLastDay.year(), prevMonthLastDay.month(), day]);
            const dayOfMonth = {
                day: date.format('dddd'),
                date: date.format('DD-MM-YYYY'),
                startingColumn: 'unset',
                isFromCurrentMonth: false,
            };
            monthDays.unshift(dayOfMonth);
        }

        // Fetch the days from the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = moment([year, month, day]);
            const dayOfMonth = {
                day: date.format('dddd'),
                date: date.format('DD-MM-YYYY'),
                startingColumn: day === 1 ? date.day() + 1 : 'unset',
                isFromCurrentMonth: true,
            };
            monthDays.push(dayOfMonth);
        }

        // Fetch the days from the next month
        for (let day = 1; day <= 7 - nextMonthFirstDay.day(); day++) {
            const date = moment([nextMonthFirstDay.year(), nextMonthFirstDay.month(), day]);
            const dayOfMonth = {
                day: date.format('dddd'),
                date: date.format('DD-MM-YYYY'),
                startingColumn: 'unset',
                isFromCurrentMonth: false,
            };
            monthDays.push(dayOfMonth);
        }

        return monthDays;
    };

    const menuOptions = id => {
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

    const monthDays = getCurrentMonthDays();
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

    const handleShowMoreButton = date => {
        dispatch(setScheduleType('daily'));
        dispatch(setCurrentTimeValue(moment(date, 'DD-MM-YYYY').format('ddd, MMM D, YYYY')));
    };

    return (
        <StyledRootMainContainer>
            <StyledBorderContainer>
                <WeekDaysContainer>
                    {fixedWeekDays.map((weekDay, index) => (
                        <WeekDayContainer key={index}>
                            <p style={{ marginLeft: '12px' }}>{weekDay}</p>
                        </WeekDayContainer>
                    ))}
                </WeekDaysContainer>
                <DaysConatiner>
                    {monthDays.map((day, i) => {
                        let noOfShifts = 0;
                        const shiftsToShow = [];
                        const formattedDate = parseInt(day.date.split('-')[0], 10).toString();
                        const isToday = moment().format('DD-MM-YYYY') === day.date;
                        return (
                            <DayContainer
                                isToday={isToday}
                                style={{ gridColumnStart: `${day.startingColumn}` }}
                                key={i}>
                                <DateContainer isToday={isToday} isFromCurrentMonth={day.isFromCurrentMonth}>
                                    {formattedDate}
                                </DateContainer>
                                {(scheduleData.records || []).map(data => {
                                    const employeeName = data.name || 'Nurse';
                                    return Object.entries(data.shifts).map(([date, shifts]) => {
                                        if (moment(date, 'MM-DD-YYYY').format('DD-MM-YYYY') === day.date) {
                                            shifts.forEach((shift, key) => {
                                                noOfShifts += 1;
                                                if (noOfShifts <= 2) {
                                                    shiftsToShow.push(
                                                        <ScheduleBannerWrapper key={key}>
                                                            <Badge
                                                                text={getScheduleBanner(
                                                                    employeeName,
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
                                            });
                                        }
                                        return null;
                                    });
                                })}
                                {shiftsToShow}
                                {noOfShifts > 3 && (
                                    <ShowMoreButtonWrapper>
                                        <StyledShowMoreButton onClick={() => handleShowMoreButton(day.date)}>
                                            {`View ${noOfShifts - 3}`} More&nbsp;
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
                <ShiftForm modalName='editShiftModal' title='Edit' employeeShiftData={shiftData} action={updateShift} />
            </SwxModal>
        </StyledRootMainContainer>
    );
}
