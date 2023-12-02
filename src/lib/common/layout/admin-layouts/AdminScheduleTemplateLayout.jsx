'use client';

import { Stack } from '@mui/material';
import { SwxTypography } from '../../components';
import { ScheduleTemplateTitleContainer } from './admin-layout.styles';

export default function AdminScheduleTemplateLayout({ title, filter, weeklyTemplate, footer }) {
    return (
        <>
            <ScheduleTemplateTitleContainer>
                <SwxTypography color='swxBlack' size='extraLarge' weight='bold' sx={{ fontFamily: '__Manrope_36d688' }}>
                    {title}
                </SwxTypography>
            </ScheduleTemplateTitleContainer>
            <Stack direction='column' spacing={3} sx={{ marginTop: '24px' }}>
                {filter}
                {weeklyTemplate}
                {footer}
            </Stack>
        </>
    );
}
