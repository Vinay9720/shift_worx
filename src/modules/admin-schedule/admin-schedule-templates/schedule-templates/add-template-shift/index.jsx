'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';

import { styles } from './add-template-shift.styles';
import TemplateShiftForm from './TemplateShiftForm';

export default function AddShift() {
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='medium'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addTemplateShiftModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                sx={styles.addShiftButton}
                weight='semiBold'>
                Add Shift
            </SwxButton>
            <SwxModal modalName='addTemplateShiftModal'>
                <TemplateShiftForm modalName='addTemplateShiftModal' />
            </SwxModal>
        </div>
    );
}
