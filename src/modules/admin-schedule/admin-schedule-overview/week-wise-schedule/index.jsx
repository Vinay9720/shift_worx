/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable radix */

'use client';

import moment from 'moment';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import Badge from '@/lib/common/layout/daily-schedule-banner';
import { Icon } from '@/lib/common/icons';
import { SwxPopupMenu } from '@/lib/common/components';

export default function WeekWiseSchedule({ scheduleData }) {
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
                action: () => null,
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
                <div className='flex justify-between mt-4'>
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
        <>
            <div>
                <div className='flex flex-row bg-white border border-borderGray'>
                    <div className='flex items-center justify-center w-[20%] border border-b-0 border-borderGray text-newBlackColor text-default font-medium'>
                        View by Users
                    </div>
                    {weekdays.map((weekDay, index) => (
                        <div
                            className={`flex flex-col items-center border-b-0 py-2 ${
                                parseInt(weekDay.date.split('-')[0]) === new Date().getDate() &&
                                'bg-gray-700 bg-opacity-5'
                            } w-[15%] border border-borderGray text-darkGray font-medium`}
                            key={index}>
                            <div className='flex'>
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
                                            styles={{ fill: '#ffffff' }}
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
                        </div>
                    ))}
                </div>
                {!isEmpty(scheduleData.records) ? (
                    scheduleData.records.map((emp, i) => {
                        return (
                            <div key={i} className='flex flex-row bg-white border border-b-0 border-borderGray'>
                                <div className='flex justify-center items-center w-[20%] py-4 bg-white text-lightGray border border-r-borderGray'>
                                    <div className='grid grid-flow-col grid-rows-1 gap-2 '>
                                        <div className='row-span-2'>
                                            <img
                                                src='https://picsum.photos/200'
                                                className='border border-gray-300 rounded-full '
                                                style={{ width: `50x`, height: `50px` }}
                                            />
                                        </div>
                                        <div className='items-center justify-center col-span-1 font-semibold text-default text-newBlackColor'>
                                            {emp.name}
                                        </div>
                                        <div className='flex flex-row -mt-4'>
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
                                {weekdays.map((weekDay, index) => {
                                    return (
                                        <div
                                            className={`flex items-center ${
                                                parseInt(weekDay.date.split('-')[0]) === new Date().getDate() &&
                                                'bg-newLighterGray'
                                            } justify-center w-[15%] py-3 border border-borderGray text-darkGray text-sm font-medium flex-col gap-2 min-h-[180px]`}
                                            key={index}>
                                            {Object.entries(emp.shifts).map(([date, shifts]) => {
                                                if (moment(date, 'MM-DD-YY').format('DD-MM-YYYY') === weekDay.date) {
                                                    return shifts.map((shift, key) => (
                                                        <div key={key} className='flex text-light'>
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
                                                    ));
                                                }
                                                return null;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })
                ) : (
                    <div className='flex flex-row justify-center p-3 bg-white border border-b-0 text-default text-darkGray border-borderGray'>
                        No schedules to display.
                    </div>
                )}
            </div>
        </>
    );
}
