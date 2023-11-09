import styled from 'styled-components';

export const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
export const StyledGridMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #e6e8e9;
    border-radius: 12px;
`;
export const StyledGridSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    // border: 1px solid #e6e8e9;
`;
export const StyledViewUsersDiv = styled.div`
    width: 200px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    color: #030303;
    font-weight: 500;
    font-size: 16px;
`;
export const StyledFlexDiv = styled.div`
    display: flex;
    border: 1px solid #e6e8e9;
    border-left: none;
    border-bottom: none;
    border-right: 0;
    min-height: 74px;
`;
export const StyledSubFlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    color: #e6e8e9;
`;
export const StyledAvatarGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
export const StyledNameFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const StyledEmployeeName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #030303;
`;
export const StyledFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -1.1rem;
`;
export const StyledMarginDiv = styled.div`
    margin-right: 0.5rem;
`;
export const StyledTimeDiv = styled.div`
    margin-right: 0.5rem;
    font-size: 14px;
    font-weight: 400;
    color: #a1a5b4;
`;
export const StyledDotDiv = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #a1a5b4;
    margin-right: 0.5rem;
`;
export const StyledCalenderDiv = styled.div`
    margin-right: 0.5rem;
`;
export const StyledShiftLengthDiv = styled.div`
    margin-right: 0.5rem;
    color: #838a91;
`;
export const StyledTimeSlotMainDiv = styled.div`
    display: flex;
    height: 46px;
`;
export const StyledTimeSlotDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    border: 1px solid #e6e8e9;
    border-top: none;
    border-right: none;
    color: #030303;
    font-size: 14px;
    padding: 8px;
`;

export const StyledBoderBoxSlotDiv = styled.div`
    width: 100px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0.5px solid #e6e8e9;
    border-bottom: 0.5px solid #e6e8e9;
    color: #030303;
`;
export const StyledShiftByDateContainer = styled.div`
    display: grid;
    grid-column: span 12;
`;
export const StyledTimePositionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #027ef4;
    margin-top: 39px;
`;
export const StyledSortedShiftsMainContainer = styled.div`
    display: flex;
    width: 1920px;
    min-height: 74px;
`;
export const StyledSortedShiftsContainer = styled.div`
    display: flex;
    min-height: 74px;
    position: absolute;
    top: 0;
`;
export const StyledNoSchedulesContainer = styled.div`
    padding: 12px;
    color: #030303;
    font-weight: 500;
    border-left: 1px solid #e6e8e9;
`;
