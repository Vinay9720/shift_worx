import styled from 'styled-components';

export const styles = {
    mainDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export const UsersContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
`;

export const ViewByUsersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    border-width: 1px;
    border-style: solid;
    border-bottom-width: 0;
    border-color: #d4d4d4;
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
    width: 15%;
    border-width: 1px;
    border-style: solid;
    border-color: #d4d4d4;
    color: #616a71;
    font-weight: 500;
    background-color: ${({ isCurrentDate }) => (isCurrentDate ? 'rgba(55, 65, 81, 0.05)' : '#ffffff')};
`;
