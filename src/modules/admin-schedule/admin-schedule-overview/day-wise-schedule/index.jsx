'use client';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { timeSlots } from '@/lib/constants';
import { StyledFlexBox, StyledCtn, StyledRightCtn } from './day-wise-schedule.styles';
import { SwxModal, DynamicPromptModal } from '@/lib/common/layout';
import { convertTo24HourFormat, sortedShiftsByName, today } from '@/lib/util';
import ShiftForm from '../add-shift/ShiftForm';
import { useEffect, useState } from 'react';
import { useEditShift, useDeleteShift } from '@/hooks/admin-schedule';
import { UsersLeftBar } from './UsersLeftBar';
import { TimeSlots } from './TimeSlots';
import { StyledCapsules } from './StyledCapsules';

// const twidth = '1920';

export default function DayWiseSchedule({ scheduleData }) {
    const { mutate: deleteShift, isLoading: loadingState } = useDeleteShift();
    const [employeeId, setEmployeeId] = useState(null);
    const [shiftData, setShiftData] = useState();
    const { mutate: updateShift, isLoading } = useEditShift(shiftData && shiftData);
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTimePosition = `${currentHour * 100 + currentMinutes * 1.66}px`;
    // const rightBgColr = `${(twidth - currentTimePosition.split('px', 1)).toFixed(2)}px`;
    // const leftBgColr = `${currentTimePosition.split('px', 1)[0]}px`;

    const [data, setData] = useState([]);
    useEffect(() => {
        const sortedShiftsByDate = sortedShiftsByName(shiftsByDate);
        setData(sortedShiftsByDate);
    }, [scheduleData]);
    const getShiftsByDate = (dat, date) => {
        const shifts = [];
        const formattedDate = moment(date, 'ddd, MMM D').format('MM-DD-YYYY');
        for (const employee of dat || []) {
            const employeeShifts = employee.shifts[formattedDate];
            if (employeeShifts) {
                shifts.push({ name: employee.name, shifts: employeeShifts });
            }
        }

        return shifts;
    };
    const shiftsByDate = getShiftsByDate(scheduleData?.records, currentTimeValue);

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

    const isCurrentDayEqualsCurrentTimeVal = () => {
        const currentDay = today('ddd, MMM D, YYYY');
        return currentDay === currentTimeValue;
    };

    return (
        <StyledCtn>
            <StyledFlexBox>
                <UsersLeftBar data={data} />
                <StyledRightCtn>
                    <TimeSlots timeSlots={timeSlots} />
                    <StyledCapsules
                        isCurrentDayEqualsCurrentTimeVal={isCurrentDayEqualsCurrentTimeVal}
                        currentTimePosition={currentTimePosition}
                        shiftsByDate={shiftsByDate}
                        getScheduleWidth={getScheduleWidth}
                        setEmployeeId={setEmployeeId}
                        setShiftData={setShiftData}
                        data={data}
                        getMarginLeft={getMarginLeft}
                    />
                </StyledRightCtn>
            </StyledFlexBox>
            <DynamicPromptModal
                loading={loadingState}
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal'>
                <ShiftForm
                    modalName='editShiftModal'
                    title='Edit'
                    action={updateShift}
                    employeeShiftData={shiftData}
                    loading={isLoading}
                />
            </SwxModal>
        </StyledCtn>
    );
}
