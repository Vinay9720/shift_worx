import { useMemo } from 'react';

import { WidgetCardsContainer } from './admin-overview.styles';

import { SearchFilter, WidgetCard } from '../common/layout';

export default function AdminOverview() {
    const cardsData = useMemo(
        () => [
            {
                title: 'Total Employees',
                iconName: 'people-group',
                totalCount: 12,
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
                title: 'Expirations',
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
            <WidgetCardsContainer>
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
