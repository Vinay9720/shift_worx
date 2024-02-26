/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable radix */

'use client';

import moment from 'moment';
import { Avatar, IconButton, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxChip, SwxPopupMenu, SwxTypography } from '@/lib/common/components';

import {
    UsersContainer,
    ViewByUsersContainer,
    WeekDaysContainer,
    StyledWeekDaysContainer,
    StyledRootContainer,
    ShowMoreButtonWrapper,
    StyledShowMoreButton,
    StyledNoScheduleContainer,
    StyledDot,
    StyledNumberContainer,
    StyledIconContainer,
    StyledSubWeekDayContainer,
    StyledDayContainer,
    StyledCurrentWeekDay,
    StyledCurrentDayButton,
    StyledNameContainer,
    StyledFlexContainer,
    StyledSessionContainer,
    StyledGridWeekDayContainer,
    StyledMainDiv,
    StyledRightCtn,
} from './week-wise-schedule.styles';
import ShiftForm from '../add-shift/ShiftForm';
import { SwxModal, DynamicPromptModal, OpenShifts } from '@/lib/common/layout';
import { openModal } from '@/lib/store/slices/modal-slice';
import {
    clearState,
    setCurrentTimeValue,
    setScheduleType,
    setShiftData,
} from '@/lib/store/slices/admin-schedule-module';
import { useState } from 'react';
import { useEditShift, useDeleteShift } from '@/hooks/admin-schedule';
import { sortedShiftsByName } from '@/lib/util';
import { certificateBackground } from '@/lib/util/dynamicChipColor';

export default function WeekWiseSchedule({ scheduleData }) {
    const dispatch = useDispatch();
    const { mutate: deleteShift, isLoading: loadingState } = useDeleteShift();
    const [employeeId, setEmployeeId] = useState(null);
    const { mutate: updateShift, isLoading } = useEditShift();
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const getCurrentWeekdays = () => {
        const weekdaysWithDates = [];

        for (let i = 1; i <= 7; i++) {
            const currentDate = moment(currentTimeValue, 'ddd, MMM D, YYYY').isoWeekday(i);
            const weekday = currentDate.format('dddd');
            const date = currentDate.format('DD-MM-YYYY');
            weekdaysWithDates.push({ weekday, date });
        }
        return weekdaysWithDates;
    };
    const sortedShiftsByDate = sortedShiftsByName(scheduleData.records);

    const menuOptions = employeeShiftData => {
        return [
            {
                label: 'Edit Shift',
                action: async () => {
                    dispatch(setShiftData(employeeShiftData));
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: () => {
                    dispatch(openModal({ modalName: 'deleteShiftModal' }));
                    setEmployeeId(employeeShiftData.shift_id);
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const weekdays = getCurrentWeekdays();

    const getScheduleBanner = (
        start,
        end,
        floor,
        session,
        cert,
        id,
        shiftId,
        specialities,
        facility,
        startDate,
        certId,
        empName,
        nurseId
    ) => {
        const employeeShiftData = {
            employee: empName,
            id,
            facility_id: facility,
            shift_id: shiftId,
            certificate_ids: certId,
            speciality_ids: specialities,
            station: floor,
            start_date: startDate,
            start_time: start,
            end_time: end,
            role: cert,
            nurseId,
        };
        return (
            <Stack direction='column'>
                <Stack direction='row' spacing={0.5}>
                    <SwxChip label={cert} color='white' background={certificateBackground(cert)} size='smallest' />
                    <div>
                        <Stack direction='row'>
                            <SwxTypography color='swxBlack' weight='semiBold' size='small' className='Manrope'>
                                {start} {`>`} {end}{' '}
                            </SwxTypography>
                        </Stack>
                        <SwxTypography color='lightGray' weight='semiBold' size='small' className='Manrope'>
                            {floor}
                        </SwxTypography>
                    </div>
                </Stack>
                <StyledFlexContainer>
                    <StyledSessionContainer>
                        <StyledIconContainer>
                            <Icon
                                styles={{ fill: '#1DB304' }}
                                name='activity-status'
                                aria-hidden='true'
                                height={12}
                                width={12}
                            />
                        </StyledIconContainer>
                        <SwxTypography color='swxBlack' weight='semiBold' size='smallest' className='Manrope'>
                            {session}
                        </SwxTypography>
                    </StyledSessionContainer>
                    <SwxPopupMenu
                        buttonElement={
                            <IconButton>
                                <Icon
                                    styles={{ fill: '#838A91' }}
                                    name='vertical-menu'
                                    aria-hidden='true'
                                    height={10}
                                    width={4}
                                />
                            </IconButton>
                        }
                        options={menuOptions(employeeShiftData)}
                    />
                </StyledFlexContainer>
            </Stack>
        );
    };

    const handleShowMoreButton = date => {
        dispatch(setScheduleType('daily'));
        dispatch(setCurrentTimeValue(moment(date, 'MM-DD-YYYY').format('ddd, MMM D, YYYY')));
    };

    return (
        <StyledRootContainer>
            <div style={{ minWidth: '256px' }}>
                <ViewByUsersContainer>View by Users</ViewByUsersContainer>
                {!isEmpty(scheduleData.records)
                    ? sortedShiftsByDate.map((emp, i) => {
                          return (
                              <StyledMainDiv employeeName={emp.name} key={i}>
                                  {emp.name ? (
                                      <Avatar sx={{ width: 42, height: 42, bgcolor: '#1F6FA9' }}>{`${emp.name
                                          .split('')[0]
                                          .toUpperCase()}`}</Avatar>
                                  ) : null}
                                  <div>
                                      {emp.name ? (
                                          <StyledNameContainer>{`${emp.name.split(' ')[0]} ${emp.name
                                              .split(' ')
                                              .pop()
                                              .charAt(0)
                                              .toUpperCase()}`}</StyledNameContainer>
                                      ) : (
                                          <OpenShifts modalName='editShiftModal' />
                                      )}
                                      {emp.name ? (
                                          <Stack direction='row'>
                                              <StyledIconContainer>
                                                  <Icon
                                                      styles={{ fill: '#838A91' }}
                                                      name='clock'
                                                      aria-hidden='true'
                                                      height={16}
                                                      width={16}
                                                  />
                                              </StyledIconContainer>
                                              <StyledNumberContainer>
                                                  {emp.start_time || '08:00hrs'}
                                              </StyledNumberContainer>
                                              <StyledDot />
                                              <StyledIconContainer>
                                                  <Icon
                                                      styles={{ fill: '#838A91' }}
                                                      name='calender'
                                                      aria-hidden='true'
                                                      height={16}
                                                      width={16}
                                                  />
                                              </StyledIconContainer>
                                              <StyledNumberContainer>{emp.schedule_count || 1}</StyledNumberContainer>
                                          </Stack>
                                      ) : null}
                                  </div>
                              </StyledMainDiv>
                          );
                      })
                    : null}
            </div>
            <StyledRightCtn>
                <UsersContainer>
                    {weekdays.map((weekDay, index) => (
                        <WeekDaysContainer
                            isCurrentDate={parseInt(weekDay.date.split('-')[0]) === new Date().getDate()}
                            key={index}>
                            <Stack direction='row'>
                                <StyledCurrentWeekDay>
                                    {parseInt(weekDay.date.split('-')[0]) === new Date().getDate() ? (
                                        <StyledCurrentDayButton>{weekDay.date.split('-')[0]}</StyledCurrentDayButton>
                                    ) : (
                                        <>
                                            <p>{weekDay.date.split('-')[0]}</p>
                                        </>
                                    )}
                                </StyledCurrentWeekDay>
                                <StyledDayContainer>
                                    <SwxTypography size='semiLarge' color='swxBlack' weight='thin' className='Manrope'>
                                        {weekDay.weekday}
                                    </SwxTypography>
                                </StyledDayContainer>
                            </Stack>
                            <StyledSubWeekDayContainer>
                                <StyledIconContainer>
                                    <Icon
                                        styles={{ fill: '#838A91' }}
                                        name='clock'
                                        aria-hidden='true'
                                        height={16}
                                        width={16}
                                    />
                                </StyledIconContainer>
                                <StyledNumberContainer>0:00</StyledNumberContainer>
                                <StyledDot />
                                <StyledIconContainer>
                                    <Icon
                                        styles={{ fill: '#838A91' }}
                                        name='calender'
                                        aria-hidden='true'
                                        height={16}
                                        width={16}
                                    />
                                </StyledIconContainer>
                                <StyledNumberContainer>0</StyledNumberContainer>
                                <StyledDot />
                                <StyledIconContainer>
                                    <Icon
                                        styles={{ fill: '#838A91' }}
                                        name='user'
                                        aria-hidden='true'
                                        height={16}
                                        width={16}
                                    />
                                </StyledIconContainer>
                                <StyledNumberContainer>0</StyledNumberContainer>
                            </StyledSubWeekDayContainer>
                        </WeekDaysContainer>
                    ))}
                </UsersContainer>
                {!isEmpty(scheduleData.records) ? (
                    sortedShiftsByDate.map((emp, i) => {
                        return (
                            <StyledWeekDaysContainer key={i}>
                                {weekdays.map((weekDay, index) => {
                                    return (
                                        <StyledGridWeekDayContainer
                                            weekDays={weekDay}
                                            key={index}
                                            day={weekDay.weekday === 'Sunday'}
                                            employeeName={emp.name}>
                                            <div key={index}>
                                                {Object.entries(emp.shifts).map(([date, shifts]) => {
                                                    if (
                                                        moment(date, 'MM-DD-YYYY').format('DD-MM-YYYY') === weekDay.date
                                                    ) {
                                                        const duplicateShifts = [...shifts];
                                                        return duplicateShifts.slice(0, 1).map((shift, key) => (
                                                            <div key={key}>
                                                                <div style={{ width: '200px', height: '90px' }}>
                                                                    <Badge
                                                                        text={getScheduleBanner(
                                                                            shift.start_time,
                                                                            shift.end_time,
                                                                            shift.station || 'First Floor',
                                                                            shift.session_type || 'Morning',
                                                                            shift.certificate.abbreviation || 'RN',
                                                                            shift.id,
                                                                            shift.shift_id,
                                                                            shift.specialities,
                                                                            shift.facility,
                                                                            shift.start_date,
                                                                            shift.certificate.id,
                                                                            emp.name,
                                                                            shift.nurse_Id
                                                                        )}
                                                                        kind={
                                                                            shift.certificate.abbreviation === 'RN'
                                                                                ? 'scheduleOrange'
                                                                                : shift.certificate.abbreviation ===
                                                                                  'LPN'
                                                                                ? 'scheduleCyan'
                                                                                : shift.certificate.abbreviation ===
                                                                                  'CNA'
                                                                                ? 'scheduleMistyRose'
                                                                                : 'scheduleOrange'
                                                                        }
                                                                        styles={{
                                                                            width: '100%',
                                                                            padding: '8px',
                                                                            backgroundColor: !emp.name
                                                                                ? '#E9E9EC'
                                                                                : null,
                                                                        }}
                                                                    />
                                                                </div>
                                                                {shifts.length > 1 && (
                                                                    <ShowMoreButtonWrapper>
                                                                        <StyledShowMoreButton
                                                                            onClick={() => handleShowMoreButton(date)}>
                                                                            {`View ${shifts.slice(1, 4).length} `}
                                                                            More&nbsp;
                                                                        </StyledShowMoreButton>
                                                                    </ShowMoreButtonWrapper>
                                                                )}
                                                            </div>
                                                        ));
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        </StyledGridWeekDayContainer>
                                    );
                                })}
                            </StyledWeekDaysContainer>
                        );
                    })
                ) : (
                    <StyledNoScheduleContainer>No schedules to display.</StyledNoScheduleContainer>
                )}
            </StyledRightCtn>
            <DynamicPromptModal
                loading={loadingState}
                modalName='deleteShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift(employeeId)}
            />
            <SwxModal modalName='editShiftModal' onCancel={() => dispatch(clearState())}>
                <ShiftForm
                    modalName='editShiftModal'
                    title='Edit'
                    action={updateShift}
                    loading={isLoading}
                    onCancel={() => dispatch(clearState())}
                />
            </SwxModal>
        </StyledRootContainer>
    );
}
