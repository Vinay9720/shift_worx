'use client';

import { IconButton, Avatar, Stack } from '@mui/material';
import { isEmpty } from 'lodash';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxPopupMenu, SwxTypography } from '@/lib/common/components';

import {
    UsersContainer,
    styles,
    ViewByUsersContainer,
    WeekDaysContainer,
    StyledWeekDaysContainer,
    StyledRootContainer,
    ShowMoreButtonWrapper,
    StyledShowMoreButton,
    StyledFlexContainer,
    StyledSessionContainer,
    StyledIconContainer,
} from './schedule-templates.styles';
import { DynamicPromptModal, SwxModal } from '@/lib/common/layout';
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
                    {/* <Badge
                        kind='certPink'
                        styles={{ padding: '0px 2px', color: 'white', height: 'fit-content' }}
                        text={cert || 'RN'}
                    /> */}
                    <Badge kind='certPink' styles='px-[1px] text-white h-fit' text={cert || 'RN'} />
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
                              <div style={styles.mainDiv} key={i}>
                                  <div className='row-span-2'>
                                      <Avatar sx={{ width: 50, height: 50, bgcolor: '#1F6FA9' }}>{`${
                                          emp.name.split('')[0].toUpperCase() || ''
                                      }`}</Avatar>
                                  </div>
                                  <div>
                                      <div className='items-center justify-space-evenly col-span-1  font-semibold text-default text-newBlackColor'>
                                          {`${emp.name.slice(0, 7)} ${emp.name.slice(7, 8).toUpperCase()}`}
                                      </div>
                                      <div className='flex flex-row '>
                                          <div className='flex items-center justify-center mr-2'>
                                              <Icon
                                                  styles={{ fill: '#838A91' }}
                                                  name='clock'
                                                  aria-hidden='true'
                                                  height={16}
                                                  width={16}
                                              />
                                          </div>
                                          <div className='flex items-center justify-center mr-2 text-sm font-medium text-newLightGray'>
                                              {emp.start_time || '08:00hrs'}
                                          </div>
                                          <div className='flex items-center justify-center mt-2 mr-2 gray_dot' />
                                          <div className='flex items-center justify-center mr-2'>
                                              <Icon
                                                  styles={{ fill: '#838A91' }}
                                                  name='calender'
                                                  aria-hidden='true'
                                                  height={16}
                                                  width={16}
                                              />
                                          </div>
                                          <div className='flex items-center justify-center mr-2 text-sm font-medium text-newLightGray'>
                                              {emp.schedule_count || 1}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
            <div style={{ overflowX: 'auto' }}>
                <UsersContainer>
                    {weekdays.map((weekDay, index) => (
                        <WeekDaysContainer key={index}>
                            <div style={{ display: 'flex' }}>
                                <div className='flex items-center'>
                                    <p className='font-medium text-semi text-newBlackColor'>{weekDay}</p>
                                </div>
                            </div>
                            <div className='flex-col text-sm font-normal text-darkGray'>
                                <div className='flex flex-row mt-2'>
                                    <div className='flex items-center justify-center mr-1'>
                                        <Icon
                                            styles={{ fill: '#838A91' }}
                                            name='clock'
                                            aria-hidden='true'
                                            height={16}
                                            width={16}
                                        />
                                    </div>
                                    <div className='flex items-center justify-center mr-1 text-sm font-normal text-iconText'>
                                        0:00
                                    </div>
                                    <div className='flex items-center justify-center mt-2 mr-1 gray_dot' />
                                    <div className='flex items-center justify-center mr-1'>
                                        <Icon
                                            styles={{ fill: '#838A91' }}
                                            name='calender'
                                            aria-hidden='true'
                                            height={16}
                                            width={16}
                                        />
                                    </div>
                                    <div className='flex items-center justify-center mr-1 text-sm font-normal text-iconText'>
                                        0
                                    </div>
                                    <div className='flex items-center justify-center mt-2 mr-1 gray_dot' />
                                    <div className='flex items-center justify-center mr-1'>
                                        <Icon
                                            styles={{ fill: '#838A91' }}
                                            name='user'
                                            aria-hidden='true'
                                            height={16}
                                            width={16}
                                        />
                                    </div>
                                    <div className='flex items-center justify-center mr-1 text-sm font-normal text-iconText'>
                                        0
                                    </div>
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
                                        <div
                                            className='flex items-center justify-center min-w-[205px] py-3 border-l border-t border-borderGray text-darkGray text-sm font-medium flex-col gap-2 min-h-[96px]'
                                            key={index}>
                                            <div key={index}>
                                                {Object.entries(emp.shifts).map(([day, shifts]) => {
                                                    if (day === weekDay) {
                                                        const duplicateShifts = [...shifts];
                                                        return duplicateShifts.slice(0, 1).map((shift, key) => {
                                                            return (
                                                                <div key={key}>
                                                                    <div
                                                                        className='flex text-light'
                                                                        style={{ width: '200px', height: '90px' }}>
                                                                        {/* <Badge
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
                                                                            styles='p-1 w-full'
                                                                        /> */}
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
                                        </div>
                                    );
                                })}
                            </StyledWeekDaysContainer>
                        );
                    })
                ) : (
                    <div
                        className='flex flex-row p-3 bg-white border border-b-0 border-r-0 text-default text-darkGray border-borderGray'
                        style={{ width: '1435px' }}>
                        No schedules to display.
                    </div>
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
