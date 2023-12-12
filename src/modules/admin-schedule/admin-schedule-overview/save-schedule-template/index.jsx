'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxModal } from '@/lib/common/layout';
// import { useAddShift } from '@/hooks/admin-schedule';

import { IconButton } from '@mui/material';
import SaveScheduleTemplateForm from './save-schedule-templateForm';

export default function AddSaveScheduleTemplate({ scheduleType }) {
    // const { mutate: addShift } = useAddShift();
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            {scheduleType === 'weekly' || scheduleType === 'monthly' ? (
                <IconButton
                    onClick={() => {
                        dispatch(openModal({ modalName: 'saveScheduleTemplateModal' }));
                    }}>
                    <Icon width={35} height={35} name='save-schedule-template' />
                </IconButton>
            ) : null}
            <SwxModal modalName='saveScheduleTemplateModal'>
                <SaveScheduleTemplateForm
                    modalName='saveScheduleTemplateModal'
                    // action={addShift}
                />
            </SwxModal>
        </div>
    );
}
