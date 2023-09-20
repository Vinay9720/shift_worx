'use client';

import { useSearchParams } from 'next/navigation';
import { Stack } from '@mui/material';

import { SwxTypography, SwxTabs } from '../../components';

export default function HeaderWithTabs({ title, tabs }) {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step');
    return (
        <Stack direction='column' spacing={5} sx={{ mt: 7 }}>
            <SwxTypography color='swxBlack' size='extraLarge' weight='bold'>
                {title}
            </SwxTypography>
            <SwxTabs tabs={tabs} currentStep={currentStep} />
        </Stack>
    );
}
