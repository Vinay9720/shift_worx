import { useMemo } from 'react';

import { WidgetCard } from '@/lib/common/layout';
import { WidgetCardsContainer } from '@/modules/admin-employee/admin-notes/admin-notes.styles';

import SearchFilter from './SearchFilter';

export default function AdminScheduleOverView() {
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
        </>
    );
}
