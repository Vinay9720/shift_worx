import styled from 'styled-components';

export const styles = {
    mainDiv: {
        height: '96px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // borderRight: '1px solid #E6E8E9',
        borderTop: '1px solid #E6E8E9',
    },
};
export const StyledWeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-bottom: 0;
    height: 96px;
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
    // border-right: 1px solid #e6e8e9;
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
