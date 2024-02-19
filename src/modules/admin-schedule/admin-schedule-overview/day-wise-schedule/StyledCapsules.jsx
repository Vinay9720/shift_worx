import moment from 'moment';
import { isEmpty } from 'lodash';
import {
    StyledNoSchedulesContainer,
    StyledShiftByDateContainer,
    StyledSortedShiftsContainer,
    StyledTimePositionContainer,
} from './day-wise-schedule.styles';
import { DailyScheduleBanner } from '@/lib/common/layout';
import { GridLines } from './GridLines';

export const StyledCapsules = ({
    isCurrentDayEqualsCurrentTimeVal,
    currentTimePosition,
    shiftsByDate,
    getMarginLeft,
    getScheduleWidth,
    setEmployeeId,
    setShiftData,
    data,
}) => {
    const handleTimePositionHeight = data && data.map(el => el.shifts).flat(Infinity);
    return (
        <StyledShiftByDateContainer style={{ position: 'relative' }}>
            {isCurrentDayEqualsCurrentTimeVal() && (
                <>
                    <h1 className='absolute dot' style={{ left: currentTimePosition }} />
                    <StyledTimePositionContainer
                        style={{
                            left: currentTimePosition,
                            zIndex: '2',
                            height: `${
                                !isEmpty(handleTimePositionHeight) ? handleTimePositionHeight.length * 74 : '74'
                            }px`,
                        }}
                    />
                </>
            )}
            {!isEmpty(shiftsByDate) ? (
                data.map((emp, i) => {
                    const sortedShifts = [...emp.shifts].sort((a, b) => {
                        const timeA = moment(a.start_time, 'hh:mma');
                        const timeB = moment(b.start_time, 'hh:mma');
                        return timeA.diff(timeB);
                    });
                    const shiftDurationAndMargin = sortedShifts.map(shift => ({
                        duration: getScheduleWidth(shift.start_time, shift.end_time),
                        marginLeft: getMarginLeft(shift.start_time),
                    }));
                    return (
                        <StyledSortedShiftsContainer key={i} employeeName={emp.name}>
                            <GridLines rowsCount={sortedShifts.length} />
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
                                        nurseId={shift.nurse_id}
                                    />
                                );
                            })}
                        </StyledSortedShiftsContainer>
                    );
                })
            ) : (
                <StyledNoSchedulesContainer>No schedules to display.</StyledNoSchedulesContainer>
            )}
        </StyledShiftByDateContainer>
    );
};
