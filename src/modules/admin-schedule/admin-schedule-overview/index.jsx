import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WidgetCard } from '@/lib/common/layout';
import { WidgetCardsContainer } from '@/modules/admin-employee/admin-notes/admin-notes.styles';
import { useSchedule } from '@/hooks/admin-schedule';
import { SwxLoader } from '@/lib/common/components';

import SearchFilter from './SearchFilter';
import DayWiseSchedule from './day-wise-schedule';
import WeekWiseSchedule from './week-wise-schedule';
import MonthWiseSchedule from './month-wise-schedule';
import ScheduleList from './schedule-list';

export default function AdminScheduleOverView() {
    const { scheduleType } = useSelector(state => state.adminScheduleModule);
    const { data: scheduleData, isLoading: scheduleLoading } = useSchedule();
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
            <SearchFilter />
            <div style={{ marginBottom: '2rem' }}>
                {!scheduleLoading ? (
                    scheduleType === 'daily' ? (
                        <DayWiseSchedule scheduleData={scheduleData} />
                    ) : scheduleType === 'weekly' ? (
                        <WeekWiseSchedule scheduleData={scheduleData} />
                    ) : scheduleType === 'monthly' ? (
                        <MonthWiseSchedule scheduleData={scheduleData} />
                    ) : scheduleType === 'list' ? (
                        <ScheduleList scheduleData={scheduleData} />
                    ) : null
                ) : (
                    <SwxLoader loading={scheduleLoading} />
                )}
            </div>
        </>
    );
}
