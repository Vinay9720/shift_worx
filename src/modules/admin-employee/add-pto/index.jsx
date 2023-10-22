'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';

import PtoForm from './PtoForm';

export default function AddRequest() {
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={14} height={14} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='medium'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addPtoModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Request
            </SwxButton>
            <SwxModal modalName='addPtoModal'>
                <PtoForm modalName='addPtoModal' requestType='Add' />
            </SwxModal>
        </div>
    );
}
