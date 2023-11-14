import styled from 'styled-components';

export const WeekDaysContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #ffffff;
`;

export const WeekDayContainer = styled.div`
    justify-content: flex-start;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-weight: 500;
    border-width: 1px;
    height: fit-content;
    border-right-width: 1px;
    border-color: #d4d4d4;
    color: #030303;
`;

export const DaysConatiner = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: #d4d4d4;
`;

export const DayContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: ${({ isToday }) => (isToday ? '#f7f7f8' : '#ffffff')};
    border-width: 1px;
    border-style: solid;
    border-color: #d4d4d4;
`;

export const DateContainer = styled.p`
    margin-left: 1rem;
    margin-top: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    ${({ isToday, isFromCurrentMonth }) => `
        ${
            isToday &&
            `   padding-top: 2px;
                padding-bottom: 2px;
                padding-left: 5px;
                padding-right: 5px;
                background-color: #027EF4;
                border-radius: 50%;
                width: fit-content;
                color: #FFFFFF;`
        }
        color: ${isFromCurrentMonth ? '#ffffff' : '#B9BDC1'};
        text-align: left;
    `}
`;

export const ScheduleBannerWrapper = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    margin: 2px;
`;

export const ShowMoreButtonWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const StyledShowMoreButton = styled.button`
    font-size: 0.875rem;
    font-weight: 700;
    color: #1f6fa9;
`;

export const ScheduleBannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`;

export const TimeContainer = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #030303;
`;

export const EmployeeNameContainer = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #f7f7f8;
`;
