'use client';

import { SwxButton } from '@/lib/common/components';
import { FooterContainer } from './schedule-templates.styles';
import { useDispatch } from 'react-redux';
import { openModal } from '@/lib/store/slices/modal-slice';
import SaveScheduleTemplate from '../save-schedule-template';
import { useParams } from 'next/navigation';
import { useAddTemplateShift } from '@/hooks/admin-schedule-templates/useAddTemplateShift';
import UpdateScheduleTemplate from '../update-schedule-template';

function ActionButtons({ editingTemplate }) {
    const dispatch = useDispatch();
    const { mutate: saveTemplate } = useAddTemplateShift();
    const { templateId } = useParams();
    return (
        <>
            <SaveScheduleTemplate hideButton action={saveTemplate} />
            <UpdateScheduleTemplate />
            <FooterContainer>
                <SwxButton onClick={() => null} variant='text' size='medium'>
                    Cancel
                </SwxButton>
                <SwxButton
                    onClick={e => {
                        e.preventDefault();
                        if (editingTemplate) {
                            dispatch(openModal({ modalName: 'updateScheduleTemplateModal' }));
                        } else {
                            dispatch(openModal({ modalName: 'saveScheduleTemplateModal' }));
                        }
                    }}
                    disabled={templateId === 'new'}
                    variant='contained'>
                    {editingTemplate ? 'Update' : 'Save'}
                </SwxButton>
            </FooterContainer>
        </>
    );
}

export default ActionButtons;
