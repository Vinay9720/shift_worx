'use client';

import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import { SwxLoader, SwxTypography } from '../../components/';
import { ScheduleTemplateTitleContainer } from './admin-layout.styles';

export default function AdminScheduleTemplateLayout({
    title,
    filter,
    weeklyTemplate,
    footer,
    monthlyTemplate,
    loading,
}) {
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);
    return (
        <>
            <ScheduleTemplateTitleContainer>
                <SwxTypography color='swxBlack' size='extraLarge' weight='bold' sx={{ fontFamily: '__Manrope_36d688' }}>
                    {title}
                </SwxTypography>
            </ScheduleTemplateTitleContainer>
            {loading ? (
                <SwxLoader loading={loading} />
            ) : (
                <Stack direction='column' spacing={3} sx={{ marginTop: '24px' }}>
                    {filter}
                    {templateType[0] === 'Weekly' ? weeklyTemplate : monthlyTemplate}
                    {footer}
                </Stack>
            )}
        </>
    );
}
