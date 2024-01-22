import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    padding-bottom: 24px;
    justify-content: end;
`;
export const StyledRootContainer = styled.div`
    display: flex;
    border: 1px solid #e6e8e9;
    border-radius: 8px;
`;
export const StyledWeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-bottom: 0;
    height: 120px;
`;
export const UsersContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: -1;
`;

export const ViewByUsersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 84px;
    color: #030303;
    font-weight: 500;
`;

export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-width: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 84px;
    min-width: 205px;
    border-left: 1px solid #e6e8e9;
    color: #616a71;
    font-weight: 500;
    background-color: ${({ isCurrentDate }) => (isCurrentDate ? 'rgba(55, 65, 81, 0.05)' : '#ffffff')};
`;
export const ShowMoreButtonWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
export const StyledShowMoreButton = styled.button`
    ${({ theme }) => `
        font-size: ${theme.fontSize.small};
        color: ${theme.fontColor.darkBlue};
        font-weight:${theme.fontWeight.bold};
    `}
`;

export const MonthlyWeekDaysContainer = styled.div`
    width: 1247px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const WeekDayContainer = styled.div`
    justify-content: flex-start;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-weight: 500;
    ${({ theme }) => `
        border-left: 1px solid ${theme.borderColor.lightGray};
        color: ${theme.fontColor.swxBlack};
    `}
    height: 46px;
    min-width: 178px;
`;

export const DaysConatiner = styled.div`
    width: 1247px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayContainer = styled.div`
    min-width: 100%;
    height: 206px;
    background-color: ${({ isToday }) => (isToday ? '#f7f7f8' : '#ffffff')};
    ${({ theme }) => `
        border-left: 1px solid ${theme.borderColor.lightGray};
        border-top: 1px solid ${theme.borderColor.lightGray};
    `}
`;

export const DateContainer = styled.p`
    height: 25px;
    width: 25px;
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
                color: #FFFFFF;`
        }
        color: ${isFromCurrentMonth ? '#ffffff' : '#B9BDC1'};
        text-align: left;
    `}
`;

export const ScheduleBannerWrapper = styled.div`
    height: 52px;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    margin: 2px;
`;

export const ScheduleBannerContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
`;

export const TimeContainer = styled.div`
    min-width: 77px;
    ${({ theme }) => `
        font-size: ${theme.fontSize.smallest};
        color: ${theme.fontColor.swxBlack};
        font-weight:${theme.fontWeight.thin};
    `};
`;

export const EmployeeNameContainer = styled.div`
    width: 34px;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme }) => `
        font-size: ${theme.fontSize.smallest};
        font-weight:${theme.fontWeight.semiBold};
        color: ${theme.fontColor.lightGray};
    `}
`;
export const StyledRootMainContainer = styled.div`
    height: 1084px;
    position: relative;
`;
export const StyledBorderContainer = styled.div`
    width: 100%;
    position: absolute;
    overflow: auto;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.small};
    `}
`;
export const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
`;
export const StyledSessionContainer = styled.div`
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => `
    font-size: ${theme.fontSize.smallest};
    font-weight: ${theme.fontWeight.thin};
    background-color: ${theme.backgroundColor.white};
`}
    border-radius: 4px;
`;
export const StyledIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
`;
export const StyledNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${({ theme }) => `
    font-weight: ${theme.fontWeight.thin}; 
    color: ${theme.fontColor.swxBlack};
`}
`;
export const StyledNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1px;
    ${({ theme }) => `
    font-size: ${theme.fontSize.small};
    color: ${theme.fontColor.lightGray};
`}
`;
export const StyledDot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-right: 3px;
    margin-left: 3px;
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.paleGray};
`}
    width: 3px;
    height: 3px;
    border-radius: 50%;
`;
export const StyledMainDiv = styled.div`
    height: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    ${({ theme, employeeName }) => `
    border-top:  ${
        !employeeName ? `2px solid ${theme.backgroundColor.lightOrange}` : `1px solid ${theme.borderColor.lightGray}`
    };
    border-left: 2px solid ${!employeeName ? theme.backgroundColor.lightOrange : null};
    border-bottom: 2px solid ${!employeeName ? theme.backgroundColor.lightOrange : null};
`};
`;
export const StyledDayContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const StyledGridWeekDayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 205px;
    padding: 0.75rem;
    ${({ theme }) => `
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.thin};
    border-left: 1px solid ${theme.borderColor.lightGray};
`}
    border-bottom: ${({ employeeName }) => (!employeeName ? '2px solid #F47602' : null)};
    border-top: ${({ employeeName }) => (!employeeName ? '2px solid #F47602' : '1px solid #e6e8e9')};
    border-right: ${({ day, employeeName }) => {
        return day && !employeeName ? '2px solid #F47602' : 'initial';
    }};
    flex-direction: column;
    gap: 0.5rem;
    min-height: 96px;
`;
export const StyledNoScheduleContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.white};
    border: 1px solid ${theme.borderColor.lightGray};
    color: ${theme.fontColor.swxBlack};
`}
    border-bottom: 0;
    border-right: 0;
    width: 1435px;
`;
