'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { useAddNote } from '@/hooks/admin-note';
import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';

import NoteForm from './noteForm';
// import { styles } from './add-note.styles';

export default function AddNote({ employee, sx, hideButton }) {
    const { mutate: addNote } = useAddNote();
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            {!hideButton && (
                <SwxButton
                    sx={sx}
                    startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                    size='small'
                    onClick={e => {
                        e.preventDefault();
                        dispatch(openModal({ modalName: 'addNoteModal' }));
                    }}
                    padding='10px 16px'
                    variant='contained'
                    // sx={styles.addNoteButton}
                    weight='semiBold'>
                    Add New
                </SwxButton>
            )}
            <SwxModal modalName='addNoteModal'>
                <NoteForm modalName='addNoteModal' action={addNote} employee={employee} />
            </SwxModal>
        </div>
    );
}
