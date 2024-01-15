'use client';

import moment from 'moment';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { Icon } from '@/lib/common/icons';
import { timeSlots } from '@/lib/constants';
import {
    StyledAvatarGridContainer,
    StyledBoderBoxSlotDiv,
    StyledCalenderDiv,
    StyledDotDiv,
    StyledEmployeeName,
    StyledFlexDiv,
    StyledFlexRow,
    StyledGridMainDiv,
    StyledGridSubDiv,
    StyledMainDiv,
    StyledMarginDiv,
    StyledNameFlexContainer,
    StyledNoSchedulesContainer,
    StyledShiftByDateContainer,
    StyledShiftLengthDiv,
    StyledSortedShiftsContainer,
    StyledSortedShiftsMainContainer,
    StyledSubFlexDiv,
    StyledTimeDiv,
    StyledTimePositionContainer,
    StyledTimeSlotDiv,
    StyledTimeSlotMainDiv,
    StyledViewUsersDiv,
} from './day-wise-schedule.styles';
import { DailyScheduleBanner, SwxModal, DynamicPromptModal, OpenShifts } from '@/lib/common/layout';
import { convertTo24HourFormat, today } from '@/lib/util';
import ShiftForm from '../add-shift/ShiftForm';
import { useState } from 'react';
import { useEditShift, useDeleteShift } from '@/hooks/admin-schedule';

const twidth = '1920';

export default function DayWiseSchedule({ scheduleData }) {
    const { mutate: deleteShift } = useDeleteShift();
    const [employeeId, setEmployeeId] = useState(null);
    const [shiftData, setShiftData] = useState();
    const { mutate: updateShift } = useEditShift(shiftData && shiftData);
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTimePosition = `${currentHour * 100 + currentMinutes * 1.66}px`;
    const rightBgColr = `${(twidth - currentTimePosition.split('px', 1)).toFixed(2)}px`;
    const leftBgColr = `${currentTimePosition.split('px', 1)[0]}px`;

    const getShiftsByDate = (data, date) => {
        const shifts = [];
        const formattedDate = moment(date, 'ddd, MMM D').format('MM-DD-YYYY');
        for (const employee of data || []) {
            const employeeShifts = employee.shifts[formattedDate];
            if (employeeShifts) {
                shifts.push({ name: employee.name, shifts: employeeShifts });
            }
        }

        return shifts;
    };
    const shiftsByDate = getShiftsByDate(scheduleData && scheduleData.records, currentTimeValue);
    const sortedShiftsByDate = shiftsByDate.reduce((acc, cur) => {
        const dat = cur.name ? [...acc, cur] : [cur, ...acc];
        return dat;
    }, []);
    const getMarginLeft = start => {
        const startTime = convertTo24HourFormat(start);
        const [startTimeHour, startTimeMinutes] = startTime.split(':');
        return `${parseInt(startTimeHour, 10) * 100 + parseInt(startTimeMinutes, 10) * 1.66}`;
    };
    const getScheduleWidth = (start, end) => {
        const startTime = convertTo24HourFormat(start);
        const endTime = convertTo24HourFormat(end);
        const [startTimeHour, startTimeMinutes] = startTime.split(':');
        const [endTimeHour, endTimeMinutes] = endTime.split(':');
        const totalMinutes1 = parseInt(startTimeHour, 10) * 60 + parseInt(startTimeMinutes, 10);
        const totalMinutes2 = parseInt(endTimeHour, 10) * 60 + parseInt(endTimeMinutes, 10);
        const differenceInMinutes = totalMinutes2 - totalMinutes1;
        return `${differenceInMinutes * 1.66}`;
    };

    const currentDay = () => {
        return today('ddd, MMM D, YYYY');
    };

    return (
        <StyledMainDiv>
            <StyledGridMainDiv>
                <div>
                    <StyledViewUsersDiv style={{ flex: `0 0 auto` }}>View by Users</StyledViewUsersDiv>
                    <StyledGridSubDiv>
                        {sortedShiftsByDate.map((emp, i) => {
                            return (
                                <StyledFlexDiv style={{ flex: `0 0 auto` }} key={i} employeeName={emp.name}>
                                    <StyledSubFlexDiv style={{ flex: `0 0 auto` }}>
                                        <StyledAvatarGridContainer>
                                            {emp.name ? (
                                                <div className='row-span-2'>
                                                    <Avatar
                                                        sx={{ width: 42, height: 42, bgcolor: '#1F6FA9' }}>{`${emp.name
                                                        .split('')[0]
                                                        .toUpperCase()}`}</Avatar>
                                                </div>
                                            ) : null}
                                            <StyledNameFlexContainer>
                                                {emp.name ? (
                                                    <StyledEmployeeName>
                                                        {`${emp.name.slice(0, 7)} ${emp.name
                                                            .slice(7, 8)
                                                            .toUpperCase()}`}
                                                    </StyledEmployeeName>
                                                ) : (
                                                    <OpenShifts modalName='editShiftModal' />
                                                )}
                                                {emp.name ? (
                                                    <StyledFlexRow>
                                                        <StyledMarginDiv>
                                                            <Icon
                                                                styles={{ fill: '#838A91' }}
                                                                name='clock'
                                                                aria-hidden='true'
                                                                height={16}
                                                                width={16}
                                                            />
                                                        </StyledMarginDiv>
                                                        <StyledTimeDiv>{emp.shifts[0].planned}</StyledTimeDiv>
                                                        <StyledDotDiv />
                                                        <StyledCalenderDiv>
                                                            <Icon
                                                                styles={{ fill: '#838A91' }}
                                                                name='calender'
                                                                aria-hidden='true'
                                                                height={16}
                                                                width={16}
                                                            />
                                                        </StyledCalenderDiv>
                                                        <StyledShiftLengthDiv>
                                                            {emp.shifts.length || 1}
                                                        </StyledShiftLengthDiv>
                                                    </StyledFlexRow>
                                                ) : null}
                                            </StyledNameFlexContainer>
                                        </StyledAvatarGridContainer>
                                    </StyledSubFlexDiv>
                                </StyledFlexDiv>
                            );
                        })}
                    </StyledGridSubDiv>
                </div>
                <div className='relative h-sr' style={{ width: '1040px', overflowY: 'hidden' }}>
                    <StyledTimeSlotMainDiv>
                        {timeSlots.map((time, index) => (
                            <StyledTimeSlotDiv style={{ flex: `0 0 auto` }} key={index}>
                                <p className='ml-2 font-normal'>{time}</p>
                            </StyledTimeSlotDiv>
                        ))}
                    </StyledTimeSlotMainDiv>
                    <StyledShiftByDateContainer>
                        {currentDay === currentTimeValue && (
                            <>
                                <h1 className='absolute dot' style={{ left: currentTimePosition }} />
                                <StyledTimePositionContainer
                                    style={{
                                        left: currentTimePosition,
                                        zIndex: '1',
                                        height: `${!isEmpty(shiftsByDate) ? shiftsByDate.length * 100 : '48'}px`,
                                    }}
                                />
                            </>
                        )}
                        {!isEmpty(shiftsByDate) ? (
                            sortedShiftsByDate.map((emp, i) => {
                                const sortedShifts = [...emp.shifts].sort((a, b) => {
                                    const timeA = moment(a.start_time, 'hh:mma');
                                    const timeB = moment(b.start_time, 'hh:mma');
                                    return timeA.diff(timeB);
                                });
                                const shiftDurationAndMargin = [];
                                // eslint-disable-next-line array-callback-return
                                sortedShifts.map(shift => {
                                    shiftDurationAndMargin.push({
                                        duration: getScheduleWidth(shift.start_time, shift.end_time),
                                        marginLeft: getMarginLeft(shift.start_time),
                                    });
                                });
                                return (
                                    <div className='relative' key={i}>
                                        <StyledSortedShiftsMainContainer>
                                            <div
                                                style={{
                                                    width: leftBgColr,
                                                    background: currentDay === currentTimeValue ? '#F7F8F8' : '#ffffff',
                                                }}>
                                                &nbsp;
                                            </div>
                                            <div className='bg-black-50 bg-opacity-1' style={{ width: rightBgColr }}>
                                                &nbsp;
                                            </div>
                                        </StyledSortedShiftsMainContainer>

                                        <StyledSortedShiftsContainer key={i} employeeName={emp.name}>
                                            <div style={{ display: 'flex' }}>
                                                {timeSlots.map((time, index) => {
                                                    return <StyledBoderBoxSlotDiv key={index} />;
                                                })}
                                            </div>
                                            {sortedShifts.map((shift, index) => {
                                                let margin;
                                                const getMargin = () => {
                                                    if (index === 0) {
                                                        margin = shiftDurationAndMargin[0].marginLeft;
                                                        return margin;
                                                    }
                                                    margin = parseInt(shiftDurationAndMargin[index].marginLeft, 10);
                                                    return margin;
                                                };
                                                return (
                                                    <DailyScheduleBanner
                                                        key={index}
                                                        startTime={shift.start_time}
                                                        endTime={shift.end_time}
                                                        floor={shift.station || 'First Floor'}
                                                        session={shift.session_type || 'Morning'}
                                                        kind={shift.certificate.abbreviation || 'CNA'}
                                                        style={{
                                                            marginLeft: `${getMargin()}px`,
                                                            width: `${shiftDurationAndMargin[index].duration}px`,
                                                            flex: `0 0 auto`,
                                                        }}
                                                        id={shift.id}
                                                        setEmployeeId={setEmployeeId}
                                                        setShiftData={setShiftData}
                                                        shiftId={shift.shift_id}
                                                        specialities={shift.specialities}
                                                        facility={shift.facility}
                                                        startDate={shift.start_date}
                                                        certificateId={shift.certificate.id}
                                                        empName={emp.name}
                                                    />
                                                );
                                            })}
                                        </StyledSortedShiftsContainer>
                                    </div>
                                );
                            })
                        ) : (
                            <StyledNoSchedulesContainer>No schedules to display.</StyledNoSchedulesContainer>
                        )}
                    </StyledShiftByDateContainer>
                </div>
            </StyledGridMainDiv>
            <DynamicPromptModal
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal'>
                <ShiftForm modalName='editShiftModal' title='Edit' action={updateShift} employeeShiftData={shiftData} />
            </SwxModal>
        </StyledMainDiv>
    );
}
