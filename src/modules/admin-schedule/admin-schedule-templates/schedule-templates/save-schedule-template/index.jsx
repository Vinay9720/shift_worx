'use client';

import { useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxModal } from '@/lib/common/layout';

import { IconButton } from '@mui/material';
import SaveScheduleTemplateForm from './save-schedule-templateForm';
import { clearState } from '@/lib/store/slices/admin-schedule-templates-module';

export default function SaveScheduleTemplate({ scheduleType, hideButton, action, loading, onCancel }) {
    const dispatch = useDispatch();

    return (
        <div className='flex items-center mt-0'>
            {(scheduleType === 'weekly' || scheduleType === 'monthly') && !hideButton ? (
                <IconButton
                    onClick={() => {
                        dispatch(clearState());
                        dispatch(openModal({ modalName: 'saveScheduleTemplateModal' }));
                    }}>
                    <Icon width={35} height={35} name='save-schedule-template' />
                </IconButton>
            ) : null}
            <SwxModal modalName='saveScheduleTemplateModal' onCancel={() => dispatch(clearState())}>
                <SaveScheduleTemplateForm
                    modalName='saveScheduleTemplateModal'
                    action={action}
                    loading={loading}
                    onCancel={onCancel}
                />
            </SwxModal>
        </div>
    );
}
