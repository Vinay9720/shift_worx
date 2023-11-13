'use client';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { SwxPopupMenu } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';

export default function MonthWiseSchedule({ scheduleData }) {
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

    const monthDays = getCurrentMonthDays();

    const getScheduleBanner = (empName, cert, start, end) => {
        return (
            <div className='flex items-center justify-between gap-2'>
                <div className='text-[12px] font-semibold text-newBlackColor'>
                    {start} {`>`} {end}
                </div>
                <div className='text-[12px] font-semibold text-newLightGray'>{empName.substring(0, 6)}</div>
                <div className='mt-[27px]'>
                    <Badge kind='certPink' styles='rounded px-[2px] text-white h-fit' text={cert || 'RN'} />
                    <div>
                        <SwxPopupMenu
                            buttonElement={
                                <IconButton>
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
                            options={menuOptions()}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='grid grid-cols-7 bg-white'>
                {fixedWeekDays.map((weekDay, index) => (
                    <div
                        className='justify-start py-3 font-medium border h-fit border-r-borderGray text-newBlackColor text-default'
                        key={index}>
                        <p className='ml-3'>{weekDay}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-7 bg-white border border-borderGray'>
                {monthDays.map((day, i) => {
                    let noOfShifts = 0;
                    const shiftsToShow = [];
                    const formattedDate = parseInt(day.date.split('-')[0], 10).toString();
                    const isToday = moment().format('DD-MM-YYYY') === day.date;
                    return (
                        <div
                            className={`w-full h-[190px] ${isToday && 'bg-newCellColor'} border border-borderGray`}
                            style={{ gridColumnStart: `${day.startingColumn}` }}
                            key={i}>
                            <p
                                className={`ml-4 mt-3 text-sm font-medium ${
                                    isToday && 'py-[2px] px-[5px] bg-newBorderBlue rounded-circle w-fit text-white'
                                } text-left ${day.isFromCurrentMonth ? 'text-black' : 'text-calenderDateDisabled'}`}>
                                {formattedDate}
                            </p>
                            {(scheduleData.records || []).map(data => {
                                const employeeName = data.name;
                                return Object.entries(data.shifts).map(([date, shifts]) => {
                                    if (moment(date, 'MM-DD-YY').format('DD-MM-YYYY') === day.date) {
                                        shifts.forEach((shift, key) => {
                                            noOfShifts += 1;
                                            if (noOfShifts <= 2) {
                                                shiftsToShow.push(
                                                    <div key={key} className='mb-2 flex justify-center m-[2px]'>
                                                        <Badge
                                                            text={getScheduleBanner(
                                                                employeeName,
                                                                shift.cert || 'RN',
                                                                shift.start_time,
                                                                shift.end_time,
                                                                shift.session || 'Morning',
                                                                shift.station || 'First Floor'
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
                                                    </div>
                                                );
                                            }
                                        });
                                    }
                                    return null;
                                });
                            })}
                            {shiftsToShow}
                            {noOfShifts > 3 && (
                                <div className='flex items-end justify-center'>
                                    <button
                                        // onClick={() => showShiftsPopup(day.date)}
                                        className='text-sm font-bold text-newBrand'>
                                        {`View ${noOfShifts - 3}`} More&nbsp;
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
