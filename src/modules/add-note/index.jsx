'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { useAddNote } from '@/hooks/admin-note';

import NoteForm from './noteForm';

import { Icon } from '../common/icons';
import { SwxButton } from '../common/components';
import { SwxModal } from '../common/layout';

export default function AddNote({ employee }) {
    const { mutate: addNote } = useAddNote();
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add New
            </SwxButton>
            <SwxModal modalName='addNoteModal'>
                <NoteForm modalName='addNoteModal' action={addNote} employee={employee} />
            </SwxModal>
        </div>
    );
}
