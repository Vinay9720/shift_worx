import { StyledTimeSlotDiv, StyledTimeSlotMainDiv } from './day-wise-schedule.styles';

export const TimeSlots = ({ timeSlots }) => {
    return (
        <StyledTimeSlotMainDiv>
            {timeSlots.map((time, index) => (
                <StyledTimeSlotDiv style={{ flex: `0 0 auto` }} key={index}>
                    <p className='ml-2 font-normal'>{time}</p>
                </StyledTimeSlotDiv>
            ))}
        </StyledTimeSlotMainDiv>
    );
};
