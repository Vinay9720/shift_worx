import { SwxTypography } from '@/lib/common/components';
import { Stack, Avatar } from '@mui/material';
import { Icon } from '@/lib/common/icons';
import { ActivitiesContainer, ActivityWrapper, StyledNameContainer, AcitivityWidgetWrapper } from './admin-home.styles';

export default function ActivityWidget() {
    return (
        <AcitivityWidgetWrapper direction='column'>
            <Stack justifyContent='space-between' direction='row'>
                <SwxTypography size='semiLarge' color='swxSlightlyBlack' weight='bold'>
                    Activity
                </SwxTypography>
                {/* <SwxButton
                    endIcon={<Icon width={12} height={12} name='right-arrow' styles={{ fill: '#1F6FA9' }} />}
                    variant='text'
                    size='small'
                    label='link'
                    weight='bold'>
                    View more
                </SwxButton> */}
            </Stack>
            <ActivitiesContainer sx={{ mt: 2, pr: 1 }} spacing={5}>
                <Stack>
                    <Stack direction='row' spacing={1.25}>
                        <Icon name='radio' height={20} width={20} />
                        <SwxTypography color='swxBlack' size='small' weight='semiBold'>
                            Today
                        </SwxTypography>
                    </Stack>
                    <Stack sx={{ ml: '28px', mt: '4px' }} spacing={1}>
                        <ActivityWrapper>
                            <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                                <Stack>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='extraThin'>
                                        <StyledNameContainer>Janet</StyledNameContainer> accepted your shift proposal
                                        for 6/18
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='thin'>
                                        1 min ago
                                    </SwxTypography>
                                </Stack>
                            </Stack>
                        </ActivityWrapper>
                        <ActivityWrapper>
                            <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                                <Stack>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='extraThin'>
                                        <StyledNameContainer>Janet</StyledNameContainer> accepted your shift proposal
                                        for 6/18
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='thin'>
                                        1 min ago
                                    </SwxTypography>
                                </Stack>
                            </Stack>
                        </ActivityWrapper>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack direction='row' spacing={1.25}>
                        <Icon name='radio' height={20} width={20} />
                        <SwxTypography color='swxBlack' size='small' weight='semiBold'>
                            Yesterday
                        </SwxTypography>
                    </Stack>
                    <Stack sx={{ ml: '28px', mt: '4px' }} spacing={1}>
                        <ActivityWrapper>
                            <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                                <Stack>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='extraThin'>
                                        <StyledNameContainer>Janet</StyledNameContainer> accepted your shift proposal
                                        for 6/18
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='thin'>
                                        1 min ago
                                    </SwxTypography>
                                </Stack>
                            </Stack>
                        </ActivityWrapper>
                        <ActivityWrapper>
                            <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                                <Stack>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='extraThin'>
                                        <StyledNameContainer>Janet</StyledNameContainer> accepted your shift proposal
                                        for 6/18
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='thin'>
                                        1 min ago
                                    </SwxTypography>
                                </Stack>
                            </Stack>
                        </ActivityWrapper>
                        <ActivityWrapper>
                            <Stack sx={{ py: '14px', pl: '16px' }} direction='row' spacing={2}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: '#1F6FA9' }}>{`${'J'}`}</Avatar>
                                <Stack>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='extraThin'>
                                        <StyledNameContainer>Janet</StyledNameContainer> accepted your shift proposal
                                        for 6/18
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='thin'>
                                        1 min ago
                                    </SwxTypography>
                                </Stack>
                            </Stack>
                        </ActivityWrapper>
                    </Stack>
                </Stack>
            </ActivitiesContainer>
        </AcitivityWidgetWrapper>
    );
}
