'use client';

import { Stack } from '@mui/material';
import { SwxTypography } from '../../components';
import {
    TimeOfRequestWidgetWrapper,
    ShiftsAndExpirationsWidgetsWrapper,
    UnfilledShiftsWidgetWrapper,
    AcitivityWidgetWrapper,
    ActivitiesAndEventsContainer,
    EmployeeEventsWidgetWrapper,
    EmployeeExpirationsWidgetWrapper,
} from './admin-layout.styles';

export default function AdminHomeLayout({
    title,
    cards,
    timeOffRequestWidget,
    unfilledShiftsWidget,
    emplyeeExpirationsWidget,
    activityWidget,
    emplyeeEventsWidget,
}) {
    return (
        <>
            <Stack spacing={3} direction='column' sx={{ mt: 7 }}>
                <SwxTypography color='swxBlack' size='extraLarge' weight='bold' sx={{ fontFamily: '__Manrope_36d688' }}>
                    {title}
                </SwxTypography>
                {cards}
            </Stack>
            <Stack direction='column' sx={{ mt: 7 }}>
                <TimeOfRequestWidgetWrapper style={{ minHeight: '420px', background: '#fff' }}>
                    {timeOffRequestWidget}
                </TimeOfRequestWidgetWrapper>
                <ShiftsAndExpirationsWidgetsWrapper direction='row'>
                    <UnfilledShiftsWidgetWrapper style={{ minHeight: '420px', background: '#fff' }}>
                        {unfilledShiftsWidget}
                    </UnfilledShiftsWidgetWrapper>
                    <EmployeeExpirationsWidgetWrapper style={{ minHeight: '420px', background: '#fff' }}>
                        {emplyeeExpirationsWidget}
                    </EmployeeExpirationsWidgetWrapper>
                </ShiftsAndExpirationsWidgetsWrapper>
                <ActivitiesAndEventsContainer direction='row'>
                    <AcitivityWidgetWrapper style={{ minHeight: '420px', background: '#fff' }}>
                        {activityWidget}
                    </AcitivityWidgetWrapper>
                    <EmployeeEventsWidgetWrapper style={{ minHeight: '420px', background: '#fff' }}>
                        {emplyeeEventsWidget}
                    </EmployeeEventsWidgetWrapper>
                </ActivitiesAndEventsContainer>
            </Stack>
        </>
    );
}
