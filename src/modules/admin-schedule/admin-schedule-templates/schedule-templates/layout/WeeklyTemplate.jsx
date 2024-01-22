'use client';

import { IconButton, Avatar, Stack } from '@mui/material';
import { isEmpty } from 'lodash';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxPopupMenu, SwxTypography } from '@/lib/common/components';

import {
    UsersContainer,
    ViewByUsersContainer,
    WeekDaysContainer,
    StyledWeekDaysContainer,
    StyledRootContainer,
    ShowMoreButtonWrapper,
    StyledShowMoreButton,
    StyledFlexContainer,
    StyledSessionContainer,
    StyledIconContainer,
    StyledNameContainer,
    StyledNumberContainer,
    StyledDot,
    StyledMainDiv,
    StyledDayContainer,
    StyledNoScheduleContainer,
    StyledGridWeekDayContainer,
} from './schedule-templates.styles';
import { DynamicPromptModal, OpenShifts, SwxModal } from '@/lib/common/layout';
import { useDispatch } from 'react-redux';
import { openModal } from '@/lib/store/slices/modal-slice';
import { setTemplateShiftTobeDeleted } from '@/lib/store/slices/admin-schedule-templates-module';
import { useDeleteTemplateShift } from '@/hooks/admin-schedule-templates/useDeleteTemplateShift';
import { useEditTemplateShift } from '@/hooks/admin-schedule-templates/useEditTemplateShift';
import TemplateShiftForm from '../add-template-shift/TemplateShiftForm';
import { useState } from 'react';

export default function WeeklyTemplate({ templateShifts }) {
    const [employeeShiftId, setEmployeeShiftId] = useState();
    const dispatch = useDispatch();
    const { mutate: deleteShift } = useDeleteTemplateShift();
    const { mutate: updateShift } = useEditTemplateShift(employeeShiftId && employeeShiftId);

    const menuOptions = shiftData => {
        return [
            {
                label: 'Edit',
                action: () => {
                    setEmployeeShiftId(shiftData.shift_id);
                    dispatch(openModal({ modalName: 'editTemplateShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete',
                action: () => {
                    dispatch(setTemplateShiftTobeDeleted(shiftData));
                    dispatch(openModal({ modalName: 'deleteTemplateShiftModal' }));
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // eslint-disable-next-line no-unused-vars
    const getScheduleBanner = (start, end, floor, session, cert, shiftId, facility, empName) => {
        const shiftData = {
            employee: empName || 'Nurse',
            // id,
            facility_id: facility,
            shift_id: shiftId,
            // certificate_ids: certId,
            // speciality_ids: specialities,
            station: floor,
            start_time: start,
            end_time: end,
            role: cert,
        };
        return (
            <Stack direction='column'>
                <Stack direction='row' spacing={1}>
                    <Badge
                        kind='certPink'
                        styles={{ padding: '0px 2px', color: 'white', height: 'fit-content' }}
                        text={cert || 'RN'}
                    />
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
                        options={menuOptions(shiftData)}
                    />
                </StyledFlexContainer>
            </Stack>
        );
    };

    return (
        <StyledRootContainer>
            <div style={{ minWidth: '256px' }}>
                <ViewByUsersContainer>View by Users</ViewByUsersContainer>
                {!isEmpty(templateShifts)
                    ? templateShifts.map((emp, i) => {
                          return (
                              <StyledMainDiv key={i} employeeName={emp.name}>
                                  {emp.name ? (
                                      <Avatar sx={{ width: 42, height: 42, bgcolor: '#1F6FA9' }}>{`${emp.name
                                          .split('')[0]
                                          .toUpperCase()}`}</Avatar>
                                  ) : null}
                                  <div>
                                      {emp.name ? (
                                          <StyledNameContainer>
                                              {`${emp.name.slice(0, 7)} ${emp.name.slice(7, 8).toUpperCase()}`}
                                          </StyledNameContainer>
                                      ) : (
                                          <OpenShifts modalName='editTemplateShiftModal' />
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
            <div style={{ overflowX: 'auto' }}>
                <UsersContainer>
                    {weekdays.map((weekDay, index) => (
                        <WeekDaysContainer key={index}>
                            <Stack direction='row'>
                                <StyledDayContainer>
                                    <SwxTypography size='semiLarge' color='swxBlack' weight='thin' className='Manrope'>
                                        {weekDay}
                                    </SwxTypography>
                                </StyledDayContainer>
                            </Stack>
                            <div className='flex-col text-sm font-normal text-darkGray'>
                                <div className='flex flex-row mt-2'>
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
                                </div>
                            </div>
                        </WeekDaysContainer>
                    ))}
                </UsersContainer>
                {!isEmpty(templateShifts) ? (
                    templateShifts.map((emp, i) => {
                        return (
                            <StyledWeekDaysContainer key={i}>
                                {weekdays.map((weekDay, index) => {
                                    return (
                                        <StyledGridWeekDayContainer
                                            day={weekDay === 'Saturday'}
                                            employeeName={emp.name}
                                            key={index}>
                                            <div key={index}>
                                                {Object.entries(emp.shifts).map(([day, shifts]) => {
                                                    if (day === weekDay) {
                                                        const duplicateShifts = [...shifts];
                                                        return duplicateShifts.slice(0, 1).map((shift, key) => {
                                                            return (
                                                                <div key={key}>
                                                                    <div style={{ width: '200px', height: '90px' }}>
                                                                        <Badge
                                                                            text={getScheduleBanner(
                                                                                shift.start_time,
                                                                                shift.end_time,
                                                                                shift.floor || 'First Floor',
                                                                                shift.session_type || 'Morning',
                                                                                shift.cert || 'RN',
                                                                                shift.id,
                                                                                shift.facility,
                                                                                emp.name
                                                                            )}
                                                                            kind={
                                                                                shift.title === 'RN'
                                                                                    ? 'scheduleOrange'
                                                                                    : shift.title === 'LPN'
                                                                                    ? 'scheduleCyan'
                                                                                    : shift.title === 'CNA'
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
                                                                            // onClick={() => showShiftsPopup(day.date)}
                                                                            >
                                                                                {`View ${shifts.slice(1, 4).length} `}
                                                                                More&nbsp;
                                                                            </StyledShowMoreButton>
                                                                        </ShowMoreButtonWrapper>
                                                                    )}
                                                                </div>
                                                            );
                                                        });
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
            </div>
            <DynamicPromptModal
                modalName='deleteTemplateShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift()}
            />
            <SwxModal modalName='editTemplateShiftModal'>
                <TemplateShiftForm
                    modalName='editTemplateShiftModal'
                    title='Edit'
                    // employeeShiftData={shiftData}
                    action={updateShift}
                />
            </SwxModal>
        </StyledRootContainer>
    );
}
