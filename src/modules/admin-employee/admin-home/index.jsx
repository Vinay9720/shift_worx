import { useMemo } from 'react';
import AdminHomeLayout from '@/lib/common/layout/admin-layouts/AdminHomeLayout';
import { WidgetCardsContainer } from './admin-home.styles';
import { WidgetCard } from '@/lib/common/layout';
import TimeOffRequestsWidget from './TimeOffRequestsWidget';
import UnfilledShiftsWidget from './UnfilledShiftsWidget';
import EmployeeExpirationsWidget from './EmployeeExpirationsWidget';
import ActivityWidget from './ActivityWidget';
import EmployeeEventssWidget from './EmployeeEventsWidget';

export default function AdminHome() {
    const cardsData = useMemo(
        () => [
            {
                title: 'Employee Utilization',
                iconName: 'calender-check',
                totalCount: '35.3%',
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Expirations',
                iconName: 'calender-todo',
                totalCount: 14,
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Unfilled Shifts',
                iconName: 'calender-todo',
                totalCount: 23,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );
    const renderWidgetCards = () => {
        return (
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
        );
    };
    return (
        <AdminHomeLayout
            title='Home'
            cards={renderWidgetCards()}
            timeOffRequestWidget={<TimeOffRequestsWidget />}
            unfilledShiftsWidget={<UnfilledShiftsWidget />}
            emplyeeExpirationsWidget={<EmployeeExpirationsWidget />}
            activityWidget={<ActivityWidget />}
            emplyeeEventsWidget={<EmployeeEventssWidget />}
        />
    );
}
