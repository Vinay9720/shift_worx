import styled from 'styled-components';

export const WeekDaysContainer = styled.div`
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
    height: 52px;
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
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
`;

export const TimeContainer = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #030303;
`;

export const EmployeeNameContainer = styled.div`
    width: 36px;
    font-size: 12px;
    font-weight: 600;
    color: #838a91;
`;
export const StyledRootMainContainer = styled.div`
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
