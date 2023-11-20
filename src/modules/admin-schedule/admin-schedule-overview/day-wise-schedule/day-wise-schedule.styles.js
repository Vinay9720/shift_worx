import styled from 'styled-components';

export const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
export const StyledGridMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.aboveMedium};
    `}
`;
export const StyledGridSubDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyledViewUsersDiv = styled.div`
    width: 200px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-weight: ${theme.fontWeight.thin};
        font-size: ${theme.fontSize.semiMedium};
    `}
`;
export const StyledFlexDiv = styled.div`
    display: flex;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
    `}
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
    ${({ theme }) => `
         color: ${theme.fontColor.lighterGray};
    `}
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
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize.medium};
    `}
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
    ${({ theme }) => `
        color: ${theme.fontColor.lightGray};
        font-weight: ${theme.fontWeight.extraThin};
        font-size: ${theme.fontSize.small};
    `}
    margin-right: 0.5rem;
`;
export const StyledDotDiv = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    ${({ theme }) => `
    background-color: ${theme.backgroundColor.paleGray};
    `}
    margin-right: 0.5rem;
`;
export const StyledCalenderDiv = styled.div`
    margin-right: 0.5rem;
`;
export const StyledShiftLengthDiv = styled.div`
    ${({ theme }) => `
        color: ${theme.fontColor.lightGray};
    `}
    margin-right: 0.5rem;
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
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-size: ${theme.fontSize.small};
        border: 1px solid ${theme.borderColor.lightGray};
    `}
    border-top: none;
    border-right: none;
    padding: 8px;
`;

export const StyledBoderBoxSlotDiv = styled.div`
    width: 100px;
    border-top: 0px;
    border-right: 0px;
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        border-bottom: 0.5px solid ${theme.borderColor.lightGray};
        border-left: 0.5px solid ${theme.borderColor.lightGray};
    `}
`;
export const StyledShiftByDateContainer = styled.div`
    display: grid;
    grid-column: span 12;
`;
export const StyledTimePositionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.blue};
    `}
    margin-top: 39px;
`;
export const StyledSortedShiftsMainContainer = styled.div`
    display: flex;
    width: 2400px;
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
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        border-left: 1px solid ${theme.borderColor.lightGray};
        font-weight: ${theme.fontWeight.thin};
    `}
`;
