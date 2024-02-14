import styled from 'styled-components';

export const StyledCtn = styled.div``;

export const StyledRightCtn = styled.div`
    width: 1040px;
    overflow: auto;
`;

export const StyledUsersLeftBar = styled.div``;

export const StyledFlexBox = styled.div`
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
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-weight: ${theme.fontWeight.thin};
        font-size: ${theme.fontSize.semiMedium};
        border-bottom: 1px solid ${theme.borderColor.lightGray};
    `}
`;
export const StyledFlexDiv = styled.div`
    display: flex;
    height: 74px;
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
export const StyledGridRow = styled.div`
    display: flex;
`;
export const StyledGridCell = styled.div`
    border: 1px solid #e6e8e9;
    height: 74px;
    width: 100px;
    box-sizing: border-box;
`;
export const StyledGridLinesCtn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const StyledAvatarGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: ${({ height }) => height}px;
    border-top: 1px solid ${({ theme, showTopBorder }) => (showTopBorder ? theme.borderColor.lightGray : 'none')};
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

    height: 74px;
`;
export const StyledShiftByDateContainer = styled.div``;
export const StyledTimePositionContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.blue};
    `};
`;
export const StyledSortedShiftsMainContainer = styled.div`
    display: flex;
    width: 2400px;
    min-height: 74px;
`;
export const StyledSortedShiftsContainer = styled.div`
    min-height: 74px;
    width: 2400px;
    position: relative;
    top: 0;
    ${({ theme, employeeName }) => `
    border: 2px solid ${!employeeName ? theme.backgroundColor.lightOrange : null};
    border-left: none;
`};
`;
export const StyledNoSchedulesContainer = styled.div`
    padding: 12px;
    min-height: 80px;
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        border-left: 1px solid ${theme.borderColor.lightGray};
        font-weight: ${theme.fontWeight.thin};
    `}
`;
