import styled from 'styled-components';
import { Stack } from '@mui/material';

export const WidgetCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 1rem;
    margin-top: ;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ActivityWrapper = styled(Stack)`
    ${({ theme }) => `
        background: ${theme.backgroundColor.lightestGray};
        border-radius: 10px;
    `}
`;

export const EventWrapper = styled(Stack)`
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: 10px;
    `}
`;

export const EventsWrapper = styled(Stack)`
    max-height: 340px;
    overflow-y: auto;
    transition: overflow-y 0.5s;
`;

export const ActivitiesContainer = styled(Stack)`
    max-height: 400px;
    overflow-y: auto;
    transition: overflow-y 0.5s;
`;

export const StyledNameContainer = styled.span`
    ${({ theme }) => `
        color: ${theme.fontColor.swxBlack};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize.semiMedium};
    `}
`;

export const UnfilledShiftsWidgetWrapper = styled(Stack)`
    margin: 40px 0px;
    margin-right: 40px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        margin-right: 0px;
    }
`;

export const AcitivityWidgetWrapper = styled(Stack)`
    margin: 40px 0px;
    margin-right: 40px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        margin-right: 0px;
    }
`;

export const EmployeeExpirationsWidgetWrapper = styled(Stack)`
    margin: 40px 0px;
    margin-left: 40px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
    }
`;

export const EmployeeEventsWidgetWrapper = styled(Stack)`
    margin: 40px 0px;
    margin-left: 40px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
    }
`;
