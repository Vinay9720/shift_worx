import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WidgetCard } from '@/lib/common/layout';
import { WidgetCardsContainer } from '@/modules/admin-employee/admin-notes/admin-notes.styles';
import { SwxLoader } from '@/lib/common/components';

import SearchFilter from './SearchFilter';
import ScheduleList from './schedule-list';

const scheduleData = [
    {
        id: 1,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 2,
        date: 'Jan 4, 2023',
        certificate: 'LPN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 3,
        date: 'Jan 4, 2023',
        certificate: 'CNA',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 4,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 5,
        date: 'Jan 4, 2023',
        certificate: 'CNA',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 6,
        date: 'Jan 4, 2023',
        certificate: 'CNA',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 7,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 8,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 9,
        date: 'Jan 4, 2023',
        certificate: 'LPN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 10,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 11,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 12,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 13,
        date: 'Jan 4, 2023',
        certificate: 'LPN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
    {
        id: 14,
        date: 'Jan 4, 2023',
        certificate: 'RN',
        station: 'TCU',
        time: '05:00 AM > 05:00 PM',
        shift_id: '#40594',
        hours: '08hrs',
    },
];

export default function EmployeeScheduleOverView() {
    const { scheduleType } = useSelector(state => state.adminScheduleModule);
    const scheduleLoading = true;
    const cardsData = useMemo(
        () => [
            {
                title: 'Total shifts',
                iconName: 'people-group',
                totalCount: 120,
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Scheduled Employees',
                iconName: 'calender-check',
                totalCount: 35,
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Open Shifts',
                iconName: 'calender-todo',
                totalCount: 40,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );

    return (
        <>
            <WidgetCardsContainer style={{ marginTop: '1rem' }}>
                {cardsData.map((card, index) => {
                    return (
                        <WidgetCard
                            key={index}
                            title={card.title}
                            iconName={card.iconName}
                            totalCount={card.totalCount}
                            percentage={card.percentage}
                            badgeArrow={card.badgeArrow}
                        />
                    );
                })}
            </WidgetCardsContainer>
            <SearchFilter scheduleType={scheduleType} />
            <div style={{ marginBottom: '2rem' }}>
                {scheduleLoading ? (
                    scheduleType === 'daily' ? (
                        <div>Daily view</div>
                    ) : scheduleType === 'weekly' ? (
                        <div>Weekly view</div>
                    ) : scheduleType === 'monthly' ? (
                        <div>Monthly view</div>
                    ) : scheduleType === 'list' ? (
                        <ScheduleList scheduleData={scheduleData} isLoading={scheduleLoading} />
                    ) : null
                ) : (
                    <SwxLoader loading={scheduleLoading} />
                )}
            </div>
        </>
    );
}
