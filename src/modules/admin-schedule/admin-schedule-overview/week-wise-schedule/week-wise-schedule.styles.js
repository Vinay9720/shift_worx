import { parseInt } from 'lodash';
import styled, { css } from 'styled-components';

export const styles = {
    mainDiv: {
        height: '120px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem  ',
        alignItems: 'center',
        borderTop: '1px solid #E6E8E9',
    },
};
export const StyledRootContainer = styled.div`
    display: flex;
    ${({ theme }) => `
    border: 1px solid ${theme.borderColor.lightGray};
    border-radius: ${theme.borderRadius.small};
`}
`;
export const StyledWeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.white};
`}
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
    ${({ theme }) => `
    color: ${theme.fontColor.swxBlack};
    font-weight: ${theme.fontWeight.thin};
`}
`;

export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom-width: 0;
    height: 84px;
    min-width: 205px;
    ${({ theme }) => `
    border-left: 1px solid ${theme.borderColor.lightGray};
    font-weight: ${theme.fontWeight.thin};
`}
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
export const StyledNoScheduleContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px;
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.white};
    border: 1px solid ${theme.borderColor.lightGray};
    color: ${theme.fontColor.swxBlack};
`}
    border-bottom: 0;
    border-right: 0;
    width: 1435px;
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
export const StyledIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
`;
export const StyledSubWeekDayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
export const StyledDayContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const StyledCurrentWeekDay = styled.div`
    margin-right: 0.75rem;
    ${({ theme }) => `
    font-size: ${theme.fontSize.semiLarge};
    font-weight: ${theme.fontWeight.thin}; 
    color: ${theme.fontColor.swxBlack};
`}
`;
export const StyledCurrentDayButton = styled.button`
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.swxBlue};
    color: ${theme.fontColor.white};
`}
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
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
    border-top: 1px solid ${theme.borderColor.lightGray};
`}
    flex-direction: column;
    gap: 0.5rem;
    min-height: 96px;

    ${props =>
        parseInt(props.weekDay.date.split('-')[0]) === new Date().getDate() &&
        css`
            background-color: #f7f7f8;
        `}
`;
