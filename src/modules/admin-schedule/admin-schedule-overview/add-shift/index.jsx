'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';
import { useAddShift } from '@/hooks/admin-schedule';

import ShiftForm from './ShiftForm';
import { AddShiftContainer, styles } from './add-shift.styles';

export default function AddShift() {
    const { mutate: addShift, isLoading } = useAddShift();
    const dispatch = useDispatch();

    return (
        <AddShiftContainer>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='medium'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addShiftModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                sx={styles.addShiftButton}
                weight='semiBold'>
                Add Shift
            </SwxButton>
            <SwxModal modalName='addShiftModal'>
                <ShiftForm modalName='addShiftModal' action={addShift} loading={isLoading} />
            </SwxModal>
        </AddShiftContainer>
    );
}
