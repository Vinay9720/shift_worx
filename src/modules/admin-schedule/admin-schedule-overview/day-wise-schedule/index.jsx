'use client';

import moment from 'moment';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

// import Badge from '@/lib/common/layout/daily-schedule-banner';
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
    // StyledShiftDurationContainer,
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
import { DailyScheduleBanner } from '@/lib/common/layout';

const twidth = '1920';

export default function DayWiseSchedule({ scheduleData }) {
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTimePosition = `${currentHour * 100 + currentMinutes * 1.66}px`;
    const rightBgColr = `${(twidth - currentTimePosition.split('px', 1)).toFixed(2)}px`;
    const leftBgColr = `${currentTimePosition.split('px', 1)[0]}px`;

    const menuOptions = () => {
        return [
            {
                label: 'Edit',
                action: () => null,
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete',
                action: () => null,
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const getShiftsByDate = (data, date) => {
        const shifts = [];
        const formattedDate = moment(date, 'ddd, MMM D').format('MM-DD-YY');
        for (const employee of data || []) {
            const employeeShifts = employee.shifts[formattedDate];
            if (employeeShifts) {
                shifts.push({ name: employee.name, shifts: employeeShifts });
            }
        }

        return shifts;
    };
    const shiftsByDate = getShiftsByDate(scheduleData.records, currentTimeValue);
    const convertTo24HourFormat = time12h => {
        const time = time12h.slice(0, 5); // Extract the first 5 characters for the time
        const period = time12h.slice(5);
        const [hour, minutes] = time.split(':');
        let hourValue = parseInt(hour, 10);
        if (period.toLowerCase() === 'pm' && hourValue !== 12) {
            hourValue += 12;
        }
        if (period.toLowerCase() === 'am' && hourValue === 12) {
            hourValue = 0;
        }
        return `${hourValue}:${+minutes}`;
    };
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
    // const getScheduleBanner = (start, end, floor, session, cert) => {
    //     return (
    //         <div className='columns'>
    //             <div className='flex justify-between'>
    //                 <div className='flex gap-4'>
    //                     <Badge
    //                         kind={cert === 'LPN' ? 'certLPN' : cert === 'CNA' ? 'certCNA' : 'certPink'}
    //                         styles='px-[2px] h-fit text-white'
    //                         text={cert || 'LPN'}
    //                     />
    //                     <div className='text-sm font-bold text-black'>
    //                         <div className='flex flex-row'>
    //                             <div className='text-sm font-semibold'>
    //                                 {start} {`>`} {end}{' '}
    //                             </div>
    //                             <div className='py-[2px] px-2 ml-2 flex text-sm font-semibold bg-white rounded'>
    //                                 <div className='flex self-center mr-1'>
    //                                     <Icon
    //                                         styles={{ fill: '#1DB304' }}
    //                                         name='activity-status'
    //                                         aria-hidden='true'
    //                                         height={10}
    //                                         width={10}
    //                                     />
    //                                 </div>
    //                                 <div>{session}</div>
    //                             </div>
    //                         </div>
    //                         <div className='text-sm font-semibold text-newLightGray'>{floor}</div>
    //                     </div>
    //                 </div>
    //                 <div>
    //                     <SwxPopupMenu
    //                         buttonElement={
    //                             <IconButton>
    //                                 <Icon
    //                                     styles={{ fill: '#838A91' }}
    //                                     name='vertical-menu'
    //                                     aria-hidden='true'
    //                                     height={15}
    //                                     width={10}
    //                                 />
    //                             </IconButton>
    //                         }
    //                         options={menuOptions()}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <StyledMainDiv>
            <StyledGridMainDiv>
                <div>
                    <StyledViewUsersDiv style={{ flex: `0 0 auto` }}>View by Users</StyledViewUsersDiv>
                    <StyledGridSubDiv>
                        {shiftsByDate.map((emp, i) => {
                            console.log(emp, 'employrrrrrrrrr');
                            return (
                                <StyledFlexDiv style={{ flex: `0 0 auto` }} key={i}>
                                    <StyledSubFlexDiv style={{ flex: `0 0 auto` }}>
                                        <StyledAvatarGridContainer>
                                            <div className='row-span-2'>
                                                <Avatar sx={{ width: 32, height: 32 }}>{`${
                                                    emp.name.split('')[0] || ''
                                                }`}</Avatar>
                                            </div>
                                            <StyledNameFlexContainer>
                                                <StyledEmployeeName>{emp.name}</StyledEmployeeName>
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
                                                    <StyledTimeDiv>
                                                        {emp.shifts[0].start_time.slice(0, 5)}
                                                    </StyledTimeDiv>
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
                        {!isEmpty(shiftsByDate) ? (
                            shiftsByDate.map((emp, i) => {
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
                                            {/* <div style={{ display: 'flex' }}>
                                                {timeSlots.map((time, index) => {
                                                    return <StyledBoderBoxSlotDiv key={index} />;
                                                })}
                                            </div> */}
                                            <div style={{ width: leftBgColr, background: '#F7F8F8' }}>&nbsp;</div>
                                            <div className='bg-black-50 bg-opacity-1' style={{ width: rightBgColr }}>
                                                &nbsp;
                                            </div>
                                        </StyledSortedShiftsMainContainer>

                                        <StyledSortedShiftsContainer key={i}>
                                            <div style={{ display: 'flex' }}>
                                                {timeSlots.map((time, index) => {
                                                    return <StyledBoderBoxSlotDiv key={index} />;
                                                })}
                                            </div>
                                            {sortedShifts.map((shift, index) => {
                                                const getMargin = () => {
                                                    let margin;
                                                    if (index === 0) {
                                                        margin = shiftDurationAndMargin[0].marginLeft;
                                                        return margin;
                                                    }
                                                    margin =
                                                        parseInt(shiftDurationAndMargin[index].marginLeft, 10) -
                                                        (parseInt(shiftDurationAndMargin[index - 1].marginLeft, 10) +
                                                            parseInt(shiftDurationAndMargin[index - 1].duration, 10));
                                                    return margin;
                                                };
                                                return (
                                                    <DailyScheduleBanner
                                                        key={index}
                                                        startTime={shift.start_time}
                                                        endTime={shift.end_time}
                                                        floor={shift.floor || 'First Floor'}
                                                        session={shift.session_type || 'Morning'}
                                                        kind={shift.title || 'CNA'}
                                                        menuOptions={menuOptions()}
                                                        style={{
                                                            marginLeft: `${getMargin()}px`,
                                                            width: `${shiftDurationAndMargin[index].duration}px`,
                                                            flex: `0 0 auto`,
                                                        }}
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
        </StyledMainDiv>
    );
}
