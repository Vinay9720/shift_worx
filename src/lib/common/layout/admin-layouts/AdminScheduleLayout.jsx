/* eslint-disable react/jsx-boolean-value */

'use client';

import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Stack } from '@mui/material';
import moment from 'moment';

import {
    setScheduleType,
    setCurrentTimeValue,
    setInitialTimeValue,
    setListCurrentTimeValue,
} from '@/lib/store/slices/admin-schedule-module';

import {
    StyledIconComponent,
    StyledDateContainer,
    StyledDateWrapper,
    StyledCurrentTime,
    StyledDateDetailsContainer,
    StyledTodayButton,
    styles,
} from './admin-layout.styles';

import { SwxTypography, SwxTabs, SwxButtonGroup, SwxCalenderInput } from '../../components';
import { Icon } from '../../icons';

const adminScheduleTabs = [
    { label: 'Overview', step: 'overview' },
    { label: 'Templates', step: 'templates' },
];

export default function AdminScheduleLayout({ children }) {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const { scheduleType, currentTimeValue, currentListTimeValue } = useSelector(state => state.adminScheduleModule);
    const currentStep = searchParams.get('step');

    const handleDateChange = operation => {
        if (scheduleType === 'daily') {
            const formattedDate = moment(currentTimeValue, 'ddd, MMMM D');
            let modifiedDate;
            if (operation === 'add') {
                modifiedDate = formattedDate.add(1, 'day');
            } else if (operation === 'subtract') {
                modifiedDate = formattedDate.subtract(1, 'day');
            }
            dispatch(setCurrentTimeValue(modifiedDate.format('ddd, MMM D, YYYY')));
            return null;
        }

        if (scheduleType === 'weekly') {
            const formattedDate = moment(currentTimeValue, 'ddd, MMM D, YYYY');
            let modifiedDate;
            if (operation === 'add') {
                modifiedDate = formattedDate.add(1, 'week');
            } else if (operation === 'subtract') {
                modifiedDate = formattedDate.subtract(1, 'week');
            }

            dispatch(setCurrentTimeValue(modifiedDate.format('ddd, MMM D, YYYY')));
            return null;
        }

        if (scheduleType === 'monthly') {
            const formattedDate = moment(currentTimeValue, 'MMM YYYY');
            let modifiedDate;

            if (operation === 'add') {
                modifiedDate = formattedDate.add(1, 'month');
            } else if (operation === 'subtract') {
                modifiedDate = formattedDate.subtract(1, 'month');
            }

            dispatch(setCurrentTimeValue(modifiedDate.format('MMM YYYY')));
        }
    };

    const handleDateCalenderChange = dateObject => {
        const { year, month, day } = dateObject;
        const formattedDate = moment(`${month}-${day}-${year}`, 'MM-DD-YYYY');
        if (scheduleType === 'daily' || scheduleType === 'weekly') {
            dispatch(setCurrentTimeValue(formattedDate.format('ddd, MMM D, YYYY')));
            return null;
        }
        if (scheduleType === 'list') {
            dispatch(setListCurrentTimeValue(dateObject));
        }

        if (scheduleType === 'monthly') {
            dispatch(setCurrentTimeValue(formattedDate.format('MMM YYYY')));
        }
    };

    const getDateDetails = () => {
        return (
            <StyledDateContainer isList={scheduleType === 'list'}>
                {scheduleType !== 'list' && (
                    <Stack sx={{ ml: '12px', display: 'flex', flexDirection: 'row' }}>
                        <IconButton onClick={() => handleDateChange('subtract')}>
                            <Icon styles={{ fill: '#838A91' }} name='left-arrow' height={14} width={14} />
                        </IconButton>
                        <IconButton onClick={() => handleDateChange('add')}>
                            <Icon styles={{ fill: '#838A91' }} name='right-arrow' height={14} width={14} />
                        </IconButton>
                    </Stack>
                )}
                <StyledCurrentTime>
                    {scheduleType === 'list'
                        ? `${currentListTimeValue[0]} to  ${currentListTimeValue[1]}`
                        : currentTimeValue}
                </StyledCurrentTime>
            </StyledDateContainer>
        );
    };

    return (
        <>
            <Stack direction='column' spacing={5} sx={{ mt: 7 }}>
                <Stack sx={styles.mainContainer}>
                    <Stack sx={styles.scheduleContainer}>
                        <SwxTypography color='swxBlack' size='extraLarge' weight='bold' className='Manrope'>
                            Schedule
                        </SwxTypography>
                        {currentStep === 'overview' ? (
                            <Stack sx={styles.iconContainer}>
                                <StyledIconComponent
                                    name='calender'
                                    isactive={scheduleType !== 'list' ? 'true' : 'false'}
                                    onClick={() => dispatch(setScheduleType('daily'))}>
                                    <Icon
                                        styles={{ fill: '#838A91', margin: '8px' }}
                                        name='calender'
                                        height={16}
                                        width={16}
                                    />
                                </StyledIconComponent>
                                <StyledIconComponent
                                    onClick={() => dispatch(setScheduleType('list'))}
                                    name='list'
                                    isactive={scheduleType === 'list' ? 'true' : 'false'}>
                                    <Icon
                                        styles={{ fill: '#838A91', margin: '8px' }}
                                        name='list'
                                        height={16}
                                        width={16}
                                    />
                                </StyledIconComponent>
                            </Stack>
                        ) : null}
                    </Stack>
                    {currentStep === 'overview' ? (
                        <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                            {scheduleType !== 'list' && (
                                <div style={styles.buttonGroup}>
                                    <SwxButtonGroup height='42px'>
                                        <button
                                            name='daily'
                                            onClick={e =>
                                                dispatch(setScheduleType(e.target.name || e.currentTarget.name))
                                            }
                                            className={`${scheduleType === 'daily' ? 'active' : ''}`}>
                                            Day
                                        </button>
                                        <button
                                            name='weekly'
                                            onClick={e =>
                                                dispatch(setScheduleType(e.target.name || e.currentTarget.name))
                                            }
                                            className={`${scheduleType === 'weekly' ? 'active' : ''}`}>
                                            Week
                                        </button>
                                        <button
                                            name='monthly'
                                            onClick={e =>
                                                dispatch(setScheduleType(e.target.name || e.currentTarget.name))
                                            }
                                            className={`${scheduleType === 'monthly' ? 'active' : ''}`}>
                                            Month
                                        </button>
                                    </SwxButtonGroup>
                                </div>
                            )}
                        </Stack>
                    ) : null}
                    {currentStep === 'overview' ? (
                        <StyledDateDetailsContainer>
                            <StyledTodayButton onClick={() => dispatch(setInitialTimeValue())}>Today</StyledTodayButton>
                            <StyledDateWrapper>
                                <span>{getDateDetails()}</span>
                            </StyledDateWrapper>
                            <SwxCalenderInput
                                onChange={handleDateCalenderChange}
                                range={scheduleType === 'list' && true}
                                rangeHover={scheduleType === 'list' && true}
                            />
                        </StyledDateDetailsContainer>
                    ) : null}
                </Stack>
                <SwxTabs tabs={adminScheduleTabs} currentStep={currentStep} />
            </Stack>
            {children}
        </>
    );
}
