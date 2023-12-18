'use client';

import { useMemo } from 'react';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useDeleteNote, useNotes, useReadNote, useUpdateNote } from '@/hooks/admin-note';
import { openEditNoteForm, setnoteToBeUpdated } from '@/lib/store/slices/admin-notes-module';
import { openModal } from '@/lib/store/slices/modal-slice';
import { WidgetCard, NoteCard, SwxPagination, SwxModal } from '@/lib/common/layout';
import { SwxLoader } from '@/lib/common/components';

import { WidgetCardsContainer } from './admin-notes.styles';
import SearchFilter from './SearchFilter';
import { Icon } from '@/lib/common/icons';

import NoteForm from '../add-note/noteForm';

export default function AdminNotes({ employeeNotes, addNote }) {
    const dispatch = useDispatch();
    const { data: notesData, isLoading } = useNotes({ employeeNotes });
    const { mutate: updateNote } = useUpdateNote();
    const { mutate: deleteNote } = useDeleteNote();
    const { mutate: readNote } = useReadNote();
    const { noteToBeUpdated } = useSelector(state => state.adminNotesModule);
    const menuOptions = ({ note }) => {
        const formattedNote = {
            ...note,
            note_type_id: [JSON.stringify(note.note_type.id)],
        };

        const options = [
            {
                label: 'Edit',
                action: () => {
                    dispatch(openEditNoteForm());
                    dispatch(openModal({ modalName: 'editNoteModal' }));
                    dispatch(setnoteToBeUpdated(formattedNote));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete',
                action: () => {
                    deleteNote(note.id);
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];

        if (!note.read) {
            options.push({
                label: 'Mark as read',
                action: () => {
                    readNote(note.id);
                },
                icon: <Icon width={14} height={14} name='check' styles={{ fill: '#838A91' }} />,
            });
        }

        return options;
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
            {!employeeNotes && (
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
            )}
            <SearchFilter addNote={addNote} />
            <div style={{ display: 'flex', flex: 1, marginTop: '1.5rem' }}>
                {!isLoading ? (
                    <Stack direction='column' spacing={3} style={{ width: '100%' }}>
                        <SwxModal modalName='editNoteModal'>
                            <NoteForm
                                modalName='editNoteModal'
                                defaultValues={noteToBeUpdated}
                                title='Edit Note'
                                action={updateNote}
                            />
                        </SwxModal>
                        {notesData.notes.map((note, index) => {
                            return (
                                <>
                                    <NoteCard
                                        key={index}
                                        note={note}
                                        actions={
                                            !employeeNotes
                                                ? menuOptions({
                                                      note,
                                                  })
                                                : null
                                        }
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
