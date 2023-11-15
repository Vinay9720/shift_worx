import styled from 'styled-components';
import { IconButton, Stack } from '@mui/material';

export const StyledIconComponent = styled(IconButton)`
    height: 42px;
    width: 42px;
    ${({ theme, isactive }) => `
        border-radius: ${theme.borderRadius.large} !important;
        border: 1px solid ${
            isactive === 'true' ? theme.backgroundColor.blue : theme.backgroundColor.lighterGray
        } !important;
        padding: 0px !important;
    `};
`;

export const StyledTodayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    background-color: white;
    padding: 5px 14px;
    ${({ theme }) => `
        font-weight: ${theme.fontWeight.thin};
        color: ${theme.fontColor.swxBlack};
        border-radius: ${theme.borderRadius.small};
        border: 1px solid ${theme.backgroundColor.blue};
        box-shadow: ${theme.boxShadow.blueShadow};
    `}
`;

export const StyledDateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    color: white;
`;

export const StyledCurrentTime = styled.p`
    margin-left: 4px;
    display: flex;
    align-items: center;
    ${({ theme }) => `
        font-size: ${theme.fontSize.semiMedium};
        font-weight: ${theme.fontWeight.semiBold};
        color: ${theme.fontColor.swxBlack};
    `}
`;

export const StyledDateDetailsContainer = styled.div`
    padding-left: 16px;
    display: flex;
    align-self: center;
    ${({ theme }) => `
        border-left: 1px solid ${theme.borderColor.lightGray};
    `}
    @media (max-width: 800px) {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray};
        `}
    }
`;

export const StyledDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${({ isList }) => `
        // position: ${isList && 'absolute'};
        margin-left: ${isList && '8px'};
    `}
`;
export const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        '@media(max-width:800px)': {
            flexDirection: 'column',
        },
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
    },
    scheduleContainer: {
        width: '335px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media(max-width:800px)': {
            width: '100%',
        },
    },
    buttonGroup: {
        marginTop: '1px',
        width: '100%',
        height: '38px',
        '@media(max-width:600px)': {
            width: '335px',
        },
    },
};

export const TimeOfRequestWidgetWrapper = styled(Stack)`
    ${({ theme }) => `
        border-bottom: 1px solid ${theme.borderColor.lightGray};
    `}
`;

export const ShiftsAndExpirationsWidgetsWrapper = styled(Stack)`
    ${({ theme }) => `
        border-bottom: 1px solid ${theme.borderColor.lightGray};
    `}
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ActivitiesAndEventsContainer = styled(Stack)`
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const UnfilledShiftsWidgetWrapper = styled(Stack)`
    ${({ theme }) => `
        border-right: 1px solid ${theme.borderColor.lightGray};
        width: 40%;
        @media (max-width: 767px) {
            border-right: none;
            width: 100%;
            border-bottom: 1px solid ${theme.borderColor.lightGray};
        }
    `}
`;

export const EmployeeExpirationsWidgetWrapper = styled(Stack)`
    ${({ theme }) => `
        width: 60%;
        @media (max-width: 767px) {
            border-right: none;
            width: 100%;
            // border-bottom: 1px solid ${theme.borderColor.lightGray};
        }
    `}
`;

export const EmployeeEventsWidgetWrapper = styled(Stack)`
    ${({ theme }) => `
        width: 60%;
        @media (max-width: 767px) {
            border-right: none;
            width: 100%;
            // border-bottom: 1px solid ${theme.borderColor.lightGray};
        }
    `}
`;

export const AcitivityWidgetWrapper = styled(Stack)`
    ${({ theme }) => `
        border-right: 1px solid ${theme.borderColor.lightGray};
        width: 40%;
        @media (max-width: 767px) {
            border-right: none;
            width: 100%;
            border-bottom: 1px solid ${theme.borderColor.lightGray};
        }
    `}
`;
