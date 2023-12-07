/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable radix */

'use client';

import moment from 'moment';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxPopupMenu } from '@/lib/common/components';

import {
    UsersContainer,
    styles,
    ViewByUsersContainer,
    WeekDaysContainer,
    StyledWeekDaysContainer,
    StyledRootContainer,
    ShowMoreButtonWrapper,
    StyledShowMoreButton,
} from './week-wise-schedule.styles';
import ShiftForm from '../add-shift/ShiftForm';
import { SwxModal } from '@/lib/common/layout';
import { openModal } from '@/lib/store/slices/modal-slice';

export default function WeekWiseSchedule({ scheduleData }) {
    const dispatch = useDispatch();
    const { currentTimeValue } = useSelector(state => state.adminScheduleModule);
    const getCurrentWeekdays = () => {
        const weekdaysWithDates = [];

        for (let i = 1; i <= 7; i++) {
            const currentDate = moment(currentTimeValue, 'ddd, MMM D').isoWeekday(i);
            const weekday = currentDate.format('dddd');
            const date = currentDate.format('DD-MM-YYYY');

            weekdaysWithDates.push({ weekday, date });
        }

        return weekdaysWithDates;
    };

    const menuOptions = () => {
        return [
            {
                label: 'Edit',
                action: () => {
                    dispatch(openModal({ modalName: 'editShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete',
                action: () => null,
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const weekdays = getCurrentWeekdays();

    const getScheduleBanner = (start, end, floor, session, cert) => {
        return (
            <div className='columns'>
                <div className='flex gap-2'>
                    <Badge kind='certPink' styles='px-[2px] text-white h-fit' text={cert || 'RN'} />
                    <div className='text-sm font-bold text-black'>
                        <div className='flex'>
                            <div className='text-sm font-semibold'>
                                {start} {`>`} {end}{' '}
                            </div>
                        </div>
                        <div className='text-sm font-semibold text-newLightGray'>{floor}</div>
                    </div>
                </div>
                <div className='flex justify-between mt-2'>
                    <div className='py-[4px] px-2 w-fit flex text-sm font-semibold bg-white rounded'>
                        <div className='flex self-center mr-1'>
                            <Icon
                                styles={{ fill: '#1DB304' }}
                                name='activity-status'
                                aria-hidden='true'
                                height={15}
                                width={12}
                            />
                        </div>
                        <div className='text-newBlackColor text-[12px]'>{session}</div>
                    </div>
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
                        options={menuOptions()}
                    />
                </div>
            </div>
        );
    };

    return (
        <StyledRootContainer>
            <div style={{ minWidth: '256px' }}>
                <ViewByUsersContainer>View by Users</ViewByUsersContainer>
                {!isEmpty(scheduleData.records)
                    ? scheduleData.records.map((emp, i) => {
                          return (
                              <div style={styles.mainDiv} key={i}>
                                  <div className='row-span-2'>
                                      <img
                                          src='https://picsum.photos/200'
                                          className='border border-gray-300 rounded-full '
                                          style={{ width: `50x`, height: `50px` }}
                                      />
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
                        <WeekDaysContainer
                            isCurrentDate={parseInt(weekDay.date.split('-')[0]) === new Date().getDate()}
                            key={index}>
                            <div style={{ display: 'flex' }}>
                                <div className='mr-3 font-medium text-semi text-newBlackColor'>
                                    {parseInt(weekDay.date.split('-')[0]) === new Date().getDate() ? (
                                        <button className='text-white rounded-full bg-newBorderBlue w-7 h-7 hover:bg-black-500'>
                                            {weekDay.date.split('-')[0]}
                                        </button>
                                    ) : (
                                        <>
                                            <button className='font-medium bg-white rounded-full w-7 h-7 text-semi'>
                                                {weekDay.date.split('-')[0]}
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className='flex items-center'>
                                    <p className='font-medium text-semi text-newBlackColor'>{weekDay.weekday}</p>
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
                {!isEmpty(scheduleData.records) ? (
                    scheduleData.records.map((emp, i) => {
                        return (
                            <StyledWeekDaysContainer key={i}>
                                {weekdays.map((weekDay, index) => {
                                    return (
                                        <div
                                            className={`flex items-center ${
                                                parseInt(weekDay.date.split('-')[0]) === new Date().getDate() &&
                                                'bg-newLighterGray'
                                            } justify-center min-w-[205px] py-3 border-l border-t border-borderGray text-darkGray text-sm font-medium flex-col gap-2 min-h-[96px]`}
                                            key={index}>
                                            <div key={index}>
                                                {Object.entries(emp.shifts).map(([date, shifts]) => {
                                                    if (
                                                        moment(date, 'MM-DD-YYYY').format('DD-MM-YYYY') === weekDay.date
                                                    ) {
                                                        const duplicateShifts = [...shifts];
                                                        return duplicateShifts.slice(0, 1).map((shift, key) => (
                                                            <div key={key}>
                                                                <div
                                                                    className='flex text-light'
                                                                    style={{ width: '200px', height: '90px' }}>
                                                                    <Badge
                                                                        text={getScheduleBanner(
                                                                            shift.start_time,
                                                                            shift.end_time,
                                                                            shift.floor || 'First Floor',
                                                                            shift.session_type || 'Morning',
                                                                            shift.cert || 'RN'
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
                                                        ));
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
            <SwxModal modalName='editShiftModal'>
                <ShiftForm
                    modalName='editShiftModal'
                    edit='Edit'
                    // action={addShift}
                />
            </SwxModal>
        </StyledRootContainer>
    );
}
