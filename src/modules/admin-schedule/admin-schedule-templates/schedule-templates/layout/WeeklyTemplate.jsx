'use client';

import { IconButton, Avatar, Stack } from '@mui/material';
import { isEmpty } from 'lodash';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxChip, SwxPopupMenu, SwxTypography, SwxPopover } from '@/lib/common/components';

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
    StyledMoreShiftsContainer,
    StyledRightCtn,
} from './schedule-templates.styles';
import { DynamicPromptModal, OpenShifts, SwxModal } from '@/lib/common/layout';
import { useDispatch } from 'react-redux';
import { openModal } from '@/lib/store/slices/modal-slice';
import {
    setTemplateShiftTobeDeleted,
    setTemplateShiftTobeEdited,
} from '@/lib/store/slices/admin-schedule-templates-module';
import { useDeleteTemplateShift } from '@/hooks/admin-schedule-templates/useDeleteTemplateShift';
import { useEditTemplateShift } from '@/hooks/admin-schedule-templates/useEditTemplateShift';
import TemplateShiftForm from '../add-template-shift/TemplateShiftForm';
import { useMemo } from 'react';
import { certificateBackground } from '@/lib/util/dynamicChipColor';

export default function WeeklyTemplate({ templateShifts }) {
    const dispatch = useDispatch();
    const { mutate: deleteShift, isLoading: deleteLoadingState } = useDeleteTemplateShift();
    const { mutate: updateShift, isLoading } = useEditTemplateShift();
    const sortedShifts = useMemo(() => {
        if (templateShifts) {
            return templateShifts.reduce((acc, cur) => {
                const dat = cur.name ? [...acc, cur] : [cur, ...acc];
                return dat;
            }, []);
        }
        return [];
    }, [templateShifts]);
    const menuOptions = shiftData => {
        return [
            {
                label: 'Edit Shift',
                action: () => {
                    dispatch(setTemplateShiftTobeEdited(shiftData));
                    dispatch(openModal({ modalName: 'editTemplateShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
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

    const renderShift = (shift, emp, key) => {
        return (
            <div style={{ width: '200px', height: '90px' }} key={key}>
                <Badge
                    text={getScheduleBanner(
                        shift.start_time,
                        shift.end_time,
                        shift.location || 'First Floor',
                        shift.session_type || 'Morning',
                        shift.certificate.abbreviation || 'RN',
                        shift.id,
                        shift.facility,
                        emp.name,
                        shift.speciality,
                        shift.day,
                        shift.certificate.id,
                        shift.nurse_id
                    )}
                    kind={
                        shift.certificate.abbreviation === 'RN'
                            ? 'scheduleOrange'
                            : shift.certificate.abbreviation === 'LPN'
                            ? 'scheduleCyan'
                            : shift.certificate.abbreviation === 'CNA'
                            ? 'scheduleMistyRose'
                            : 'scheduleOrange'
                    }
                    styles={{
                        width: '100%',
                        padding: '8px',
                        backgroundColor: !emp.name ? '#E9E9EC' : null,
                    }}
                />
            </div>
        );
    };

    // eslint-disable-next-line no-unused-vars
    const getScheduleBanner = (
        start,
        end,
        floor,
        session,
        cert,
        shiftId,
        facility,
        empName,
        speciality,
        day,
        certId,
        nurseId
    ) => {
        const shiftData = {
            employee: empName,
            facility_id: facility,
            id: shiftId,
            certificate_ids: certId,
            speciality_ids: speciality,
            station: floor,
            start_time: start,
            end_time: end,
            role: cert,
            day,
            template_type: 'weekly',
            nurseId,
        };
        return (
            <Stack direction='column'>
                <Stack direction='row' spacing={0.7}>
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
                {!isEmpty(sortedShifts)
                    ? sortedShifts.map((emp, i) => {
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
                                                  {emp.nurse_shift_summary.total_schedule_hours || '08:00hrs'}
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
                                              <StyledNumberContainer>
                                                  {emp.nurse_shift_summary.total_number_of_shifts || 1}
                                              </StyledNumberContainer>
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
                    {weekdays.map((weekDay, index) => {
                        return (
                            <WeekDaysContainer key={index}>
                                <Stack direction='row'>
                                    <StyledDayContainer>
                                        <SwxTypography
                                            size='semiLarge'
                                            color='swxBlack'
                                            weight='thin'
                                            className='Manrope'>
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
                        );
                    })}
                </UsersContainer>
                {!isEmpty(sortedShifts) ? (
                    sortedShifts.map((emp, i) => {
                        return (
                            <StyledWeekDaysContainer key={i}>
                                {weekdays.map((weekDay, index) => {
                                    return (
                                        <StyledGridWeekDayContainer
                                            day={weekDay === 'Saturday'}
                                            employeeName={emp.name}
                                            key={index}>
                                            <div key={index}>
                                                {emp.shifts &&
                                                    Object.entries(emp.shifts).map(([day, shifts]) => {
                                                        if (day === weekDay) {
                                                            const duplicateShifts = [...shifts];
                                                            const remainingShifts = duplicateShifts.slice(1);
                                                            return duplicateShifts.slice(0, 1).map((shift, key) => {
                                                                return (
                                                                    <div
                                                                        key={key}
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                        }}>
                                                                        {renderShift(shift, emp)}
                                                                        {shifts.length > 1 && (
                                                                            <SwxPopover
                                                                                buttonElement={
                                                                                    <ShowMoreButtonWrapper>
                                                                                        <StyledShowMoreButton>
                                                                                            {`View ${
                                                                                                shifts.slice(1, 4)
                                                                                                    .length
                                                                                            } `}
                                                                                            More&nbsp;
                                                                                        </StyledShowMoreButton>
                                                                                    </ShowMoreButtonWrapper>
                                                                                }
                                                                                content={
                                                                                    <StyledMoreShiftsContainer>
                                                                                        {remainingShifts.map(
                                                                                            (shft, shiftKey) => {
                                                                                                return renderShift(
                                                                                                    shft,
                                                                                                    emp,
                                                                                                    shiftKey
                                                                                                );
                                                                                            }
                                                                                        )}
                                                                                    </StyledMoreShiftsContainer>
                                                                                }
                                                                            />
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
            </StyledRightCtn>
            <DynamicPromptModal
                loading={deleteLoadingState}
                modalName='deleteTemplateShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift()}
            />
            <SwxModal modalName='editTemplateShiftModal' onCancel={() => dispatch(setTemplateShiftTobeEdited(null))}>
                <TemplateShiftForm
                    modalName='editTemplateShiftModal'
                    onCancel={() => dispatch(setTemplateShiftTobeEdited(null))}
                    title='Edit'
                    loading={isLoading}
                    action={updateShift}
                />
            </SwxModal>
        </StyledRootContainer>
    );
}
