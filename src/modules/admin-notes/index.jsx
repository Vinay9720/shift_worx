'use client';

import { useMemo } from 'react';
import { Stack } from '@mui/material';

import { useNotes } from '@/hooks/admin-note';

import { WidgetCardsContainer } from './admin-notes.styles';

import { SearchFilter, WidgetCard, NoteCard } from '../common/layout';
import SwxPagination from '../common/layout/pagination';

export default function Page() {
    const { data: notesData, isLoading } = useNotes();
    const cardsData = useMemo(
        () => [
            {
                title: 'Total Notes',
                iconName: 'people-group',
                totalCount: 30,
                percentage: '80%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Unread',
                iconName: 'calender-check',
                totalCount: 35,
                percentage: '40%',
                badgeArrow: 'up-arrow',
            },
            {
                title: 'Read',
                iconName: 'calender-todo',
                totalCount: 40,
                percentage: '89%',
                badgeArrow: 'down-arrow',
            },
        ],
        []
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
            <SearchFilter searchPlaceholder='Search name, email, phone...' style={{ marginTop: '3.5rem' }} />
            <div style={{ display: 'flex', flex: 1, marginTop: '1.5rem' }}>
                <Stack direction='column' spacing={3} style={{ width: '100%' }}>
                    {notesData.notes.map((note, index) => {
                        return <NoteCard key={index} note={note} />;
                    })}
                </Stack>
            </div>
            <SwxPagination
                paginationName='adminNotesPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ marginBottom: '20px' }}
            />
        </>
    );
}
