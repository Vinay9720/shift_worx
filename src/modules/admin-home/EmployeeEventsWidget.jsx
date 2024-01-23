import { SwxTypography, SwxTabs } from '@/lib/common/components';
import { useMemo } from 'react';
import { Stack, Avatar } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { EventWrapper, EventsWrapper, EmployeeEventsWidgetWrapper } from './admin-home.styles';
import { useBirthdays } from '@/hooks/admin-home';

const eventTabs = [{ label: 'Birthdays', step: 'birthdays' }];

const initialTab = { currentTab: 'birthdays' };

export default function EmployeeEventssWidget() {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step');
    const { data: birthdaysData, isSuccess } = useBirthdays();

    const birthdays = useMemo(() => {
        if (isSuccess) {
            return birthdaysData;
        }
        return [];
    }, [birthdaysData]);

    console.log('birthdays', birthdays);

    return (
        <EmployeeEventsWidgetWrapper direction='column'>
            <Stack justifyContent='space-between' direction='row' sx={{ mb: 4 }}>
                <SwxTypography className='Manrope' size='semiLarge' color='swxSlightlyBlack' weight='semiBold'>
                    Employee Events
                </SwxTypography>
            </Stack>
            <SwxTabs tabs={eventTabs} currentStep={currentStep} tabsName='eventTabs' initialState={initialTab} />
            <EventsWrapper sx={{ mt: 2, pr: 1 }} spacing={1}>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
                <EventWrapper>
                    <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                        <Stack>
                            <SwxTypography className='Manrope' color='swxBlack' size='medium' weight='semiBold'>
                                John Thomas
                            </SwxTypography>
                            <SwxTypography className='Manrope' color='lightGray' size='smallest' weight='thin'>
                                Jan 3, 2023
                            </SwxTypography>
                        </Stack>
                    </Stack>
                </EventWrapper>
            </EventsWrapper>
        </EmployeeEventsWidgetWrapper>
    );
}
