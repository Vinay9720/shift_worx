'use client';

import { useMemo } from 'react';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useDeleteNote, useNotes, useReadNote, useUpdateNote } from '@/hooks/admin-note';
import { openEditNoteForm, setnoteToBeUpdated } from '@/lib/store/slices/admin-notes-module';
import { openModal } from '@/lib/store/slices/modal-slice';
import { WidgetCard, NoteCard, SwxPagination, SwxModal } from '@/lib/common/layout';
import { SwxLoader } from '@/lib/common/components';

import { WidgetCardsContainer } from './admin-notes.styles';
import SearchFilter from './SearchFilter';

import NoteForm from '../add-note/noteForm';

export default function AdminNotes() {
    const { data: notesData, isLoading } = useNotes();
    const dispatch = useDispatch();
    const { mutate: updateNote } = useUpdateNote();
    const { mutate: deleteNote } = useDeleteNote();
    const { mutate: readNote } = useReadNote();
    const menuOptions = ({ note }) => {
        return [
            {
                label: 'Edit',
                action: () => {
                    dispatch(openEditNoteForm());
                    dispatch(openModal({ modalName: 'editNoteModal' }));
                    dispatch(setnoteToBeUpdated(note));
                },
            },
            {
                label: 'Delete',
                action: () => {
                    deleteNote(note.id);
                },
            },
            {
                label: 'Mark as read',
                action: () => {
                    readNote(note.id);
                },
            },
        ];
    };
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
            <div style={{ display: 'flex', flex: 1, marginTop: '1.5rem' }}>
                {!isLoading ? (
                    <Stack direction='column' spacing={3} style={{ width: '100%' }}>
                        <SwxModal modalName='editNoteModal'>
                            <NoteForm modalName='editNoteModal' action={updateNote} />
                        </SwxModal>
                        {notesData.notes.map((note, index) => {
                            return (
                                <>
                                    <NoteCard
                                        key={index}
                                        note={note}
                                        actions={menuOptions({
                                            note,
                                        })}
                                    />
                                </>
                            );
                        })}
                    </Stack>
                ) : (
                    <div style={{ display: 'flex', flex: 1, height: '500px' }}>
                        <SwxLoader loading={isLoading} />
                    </div>
                )}
            </div>
            <SwxPagination
                paginationName='adminNotesPagination'
                itemsPerPageOptions={['5', '10', '15']}
                style={{ margin: '20px 0px' }}
            />
        </>
    );
}
