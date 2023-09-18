'use client';

import moment from 'moment';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

import Badge from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { timeSlots } from '@/lib/constants';

const twidth = '1920';

export default function DayWiseSchedule({ scheduleData }) {
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTimePosition = `${currentHour * 80 + currentMinutes * 1.33}px`;
    const rightBgColr = `${(twidth - currentTimePosition.split('px', 1)).toFixed(2)}px`;
    const leftBgColr = `${currentTimePosition.split('px', 1)[0]}px`;
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
        return `${parseInt(startTimeHour, 10) * 80 + parseInt(startTimeMinutes, 10) * 1.33}`;
    };
    const getScheduleWidth = (start, end) => {
        const startTime = convertTo24HourFormat(start);
        const endTime = convertTo24HourFormat(end);
        const [startTimeHour, startTimeMinutes] = startTime.split(':');
        const [endTimeHour, endTimeMinutes] = endTime.split(':');
        const totalMinutes1 = parseInt(startTimeHour, 10) * 60 + parseInt(startTimeMinutes, 10);
        const totalMinutes2 = parseInt(endTimeHour, 10) * 60 + parseInt(endTimeMinutes, 10);
        const differenceInMinutes = totalMinutes2 - totalMinutes1;
        return `${differenceInMinutes * 1.33}`;
    };
    const getScheduleBanner = (start, end, floor, session, cert) => {
        return (
            <div className='columns'>
                <div className='flex gap-4'>
                    <Badge
                        kind={cert === 'LPN' ? 'certLPN' : cert === 'CNA' ? 'certCNA' : 'certPink'}
                        styles='px-[2px] h-fit text-white'
                        text={cert || 'LPN'}
                    />
                    <div className='text-sm font-bold text-black'>
                        <div className='flex flex-row'>
                            <div className='text-sm font-semibold'>
                                {start} {`>`} {end}{' '}
                            </div>
                            <div className='py-[2px] px-2 ml-2 flex text-sm font-semibold bg-white rounded'>
                                <div className='flex self-center mr-1'>
                                    <Icon
                                        styles={{ fill: '#1DB304' }}
                                        name='activity-status'
                                        aria-hidden='true'
                                        height={10}
                                        width={10}
                                    />
                                </div>
                                <div>{session}</div>
                            </div>
                        </div>
                        <div className='text-sm font-semibold text-newLightGray'>{floor}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='bg-white'>
            <div className='grid grid-flow-col gap-0 border grid-col-2 border-borderGray'>
                <div className='col-span-1 bg-white border border-borderGray'>
                    <div
                        className='w-[200px] flex justify-startcborder items-center justify-center ml-4 text-black text-default font-medium py-2'
                        style={{ flex: `0 0 auto` }}>
                        View by Users
                    </div>
                    {shiftsByDate.map((emp, i) => {
                        return (
                            <div
                                className='flex bg-white border border-borderGray border-r-0 min-h-[100px]'
                                style={{ flex: `0 0 auto` }}
                                key={i}>
                                <div
                                    className='flex justify-center items-center w-[200px] bg-white text-lightGray'
                                    style={{ flex: `0 0 auto` }}>
                                    <div className='grid grid-flow-col grid-rows-1 gap-2'>
                                        <div className='row-span-2'>
                                            <Avatar sx={{ width: 32, height: 32 }}>{`${
                                                emp.name.split('')[0] || ''
                                            }`}</Avatar>
                                        </div>
                                        <div className='items-center justify-center col-span-1 text-sm font-extrabold text-darkGray'>
                                            {emp.name}
                                        </div>
                                        <div className='flex flex-row -mt-4'>
                                            <div className='flex items-center justify-center mr-2'>
                                                <Icon
                                                    styles='fill-newLightGray'
                                                    name='clock'
                                                    aria-hidden='true'
                                                    height={16}
                                                    width={16}
                                                />
                                            </div>
                                            <div className='flex items-center justify-center mr-2 text-sm font-normal text-newLightGray'>
                                                {emp.shifts[0].start_time.slice(0, 5)}
                                            </div>
                                            <div className='flex items-center justify-center mt-2 mr-2 text-newLightGray gray_dot' />
                                            <div className='flex items-center justify-center mr-2'>
                                                <Icon
                                                    styles={{ fill: '#838A91' }}
                                                    name='calender'
                                                    aria-hidden='true'
                                                    height={16}
                                                    width={16}
                                                />
                                            </div>
                                            <div className='flex items-center justify-center mr-2 text-sm font-normal text-newLightGray'>
                                                {emp.shifts.length || 1}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='relative h-sr'>
                    <div className='flex col-span-12 bg-white'>
                        {timeSlots.map((time, index) => (
                            <div
                                className='w-[80px] border bg-white border-borderGray flex justify-start first-letter items-center text-black text-sm py-2'
                                style={{ flex: `0 0 auto` }}
                                key={index}>
                                <p className='ml-2 font-normal'>{time}</p>
                            </div>
                        ))}
                    </div>
                    <div className='col-span-12 bg-white'>
                        <>
                            <h1 className='absolute dot' style={{ left: currentTimePosition }} />
                            <div
                                className='absolute top-0 left-0 border-2 border-l border-newBorderBlue mt-[39px]'
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
                                        <div className='flex w-[1920px] min-h-[100px]'>
                                            <div style={{ width: leftBgColr, background: '#F7F8F8' }}>&nbsp;</div>
                                            <div className='bg-black-50 bg-opacity-1' style={{ width: rightBgColr }}>
                                                &nbsp;
                                            </div>
                                        </div>
                                        <div
                                            className='flex border border-borderGray border-b-borderGray min-h-[100px] absolute top-0'
                                            style={{ flex: `0 0 auto`, width: `1920px` }}
                                            key={i}>
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
                                                    <div
                                                        className='flex items-center justify-center py-2'
                                                        style={{
                                                            marginLeft: `${getMargin()}px`,
                                                            width: `${shiftDurationAndMargin[index].duration}px`,
                                                            flex: `0 0 auto`,
                                                        }}
                                                        key={index}>
                                                        <Badge
                                                            text={getScheduleBanner(
                                                                shift.start_time,
                                                                shift.end_time,
                                                                shift.floor || 'First Floor',
                                                                shift.session_type || 'Morning',
                                                                shift.cert || 'RN'
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
                                                            styles='p-1 w-full'
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className='p-3 text-default text-darkGray'>No schedules to display.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
