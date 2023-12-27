'use client';

import moment from 'moment';
import {
    DateContainer,
    DayContainer,
    DaysConatiner,
    StyledBorderContainer,
    StyledRootMainContainer,
    WeekDayContainer,
    MonthWeekDaysContainer,
} from './schedule-templates.styles';

export default function MonthlyTemplate() {
    const currentTimeValue = 'Dec 2023';
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

    const monthDays = getCurrentMonthDays();

    return (
        <StyledRootMainContainer>
            <StyledBorderContainer>
                <MonthWeekDaysContainer>
                    {fixedWeekDays.map((weekDay, index) => (
                        <WeekDayContainer key={index}>
                            <p style={{ marginLeft: '12px' }}>{weekDay}</p>
                        </WeekDayContainer>
                    ))}
                </MonthWeekDaysContainer>
                <DaysConatiner>
                    {monthDays.map((day, i) => {
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
                                {shiftsToShow}
                            </DayContainer>
                        );
                    })}
                </DaysConatiner>
            </StyledBorderContainer>
        </StyledRootMainContainer>
    );
}
