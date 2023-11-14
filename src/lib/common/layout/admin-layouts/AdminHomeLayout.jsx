'use client';

import { Stack } from '@mui/material';
import { SwxTypography } from '../../components';
import {
    TimeOfRequestWidgetWrapper,
    ShiftsAndExpirationsWidgetsWrapper,
    UnfilledShiftsWidgetWrapper,
    AcitivityWidgetWrapper,
} from './admin-layout.styles';

export default function AdminHomeLayout({
    title,
    cards,
    timeOffRequestWidget,
    unfilledShiftsWidget,
    emplyeeExpirationsWidget,
    activitesWidget,
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
                    <UnfilledShiftsWidgetWrapper style={{ minHeight: '420px', width: '40%', background: '#fff' }}>
                        {unfilledShiftsWidget}
                    </UnfilledShiftsWidgetWrapper>
                    <Stack style={{ minHeight: '420px', width: '60%', background: '#fff' }}>
                        {emplyeeExpirationsWidget}
                    </Stack>
                </ShiftsAndExpirationsWidgetsWrapper>
                <Stack direction='row'>
                    <AcitivityWidgetWrapper style={{ minHeight: '420px', width: '40%', background: '#fff' }}>
                        Activity
                    </AcitivityWidgetWrapper>
                    <Stack style={{ minHeight: '420px', width: '60%', background: '#fff' }}>Employee Events</Stack>
                </Stack>
            </Stack>
        </>
    );
}
