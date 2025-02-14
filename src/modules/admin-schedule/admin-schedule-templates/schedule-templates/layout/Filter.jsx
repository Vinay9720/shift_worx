'use client';

import { useState } from 'react';
import { SwxMultiSelect } from '@/lib/common/components';
import { useSelector, useDispatch } from 'react-redux';
import { setTemplateType } from '@/lib/store/slices/admin-schedule-templates-module';
import AddShift from '../add-template-shift';
import { closeModal, openModal } from '@/lib/store/slices/modal-slice';
import { DynamicPromptModal } from '@/lib/common/layout';
import { useParams, useRouter } from 'next/navigation';
import { StyledSelectContainer, TemplateFilterContainer } from './schedule-templates.styles';

function Filter({ editingTemplate }) {
    const dispatch = useDispatch();
    const { templateId } = useParams();

    const router = useRouter();
    const [selectedTemplateType, setSelecteTemplateType] = useState(null);
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);

    const handleTemplateTypeChange = event => {
        const template = event.target.value;
        if (templateId === 'new') {
            dispatch(setTemplateType(template));
        } else {
            setSelecteTemplateType(template);
            dispatch(openModal({ modalName: 'confirmScheduleTypeChange' }));
        }
    };

    return (
        <TemplateFilterContainer>
            <DynamicPromptModal
                modalName='confirmScheduleTypeChange'
                title='Are you sure?'
                iconName='alert'
                description='Current template will be saved as a draft template.'
                onConfirm={() => {
                    dispatch(setTemplateType(selectedTemplateType));
                    dispatch(closeModal({ modalName: 'confirmScheduleTypeChange' }));
                    router.push('/admin/schedule/create-template/new');
                }}
            />
            <StyledSelectContainer>
                <SwxMultiSelect
                    insideLabel='Template Type'
                    style={{ width: '100%' }}
                    value={templateType}
                    disabled={!!editingTemplate}
                    onChange={handleTemplateTypeChange}
                    options={['Weekly', 'Monthly']}
                    padding='12px 12px'
                    marginleft={120}
                />
            </StyledSelectContainer>
            <AddShift />
        </TemplateFilterContainer>
    );
}

export default Filter;
