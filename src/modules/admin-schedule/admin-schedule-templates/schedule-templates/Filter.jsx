'use client';

import { useState } from 'react';
import { SwxMultiSelect } from '@/lib/common/components';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setTemplateType } from '@/lib/store/slices/admin-schedule-templates-module';
import AddShift from './add-template-shift';
import { openModal } from '@/lib/store/slices/modal-slice';
import { DynamicPromptModal } from '@/lib/common/layout';
import { useParams } from 'next/navigation';
// import { useRouter } from 'next/router';

function Filter() {
    const dispatch = useDispatch();
    const { templateId } = useParams();
    // const router = useRouter();
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
        <Stack direction='row' justifyContent='space-between'>
            <DynamicPromptModal
                modalName='confirmScheduleTypeChange'
                entityName='type'
                iconName='approve-check'
                actionName='Yes'
                onConfirm={() => {
                    dispatch(setTemplateType(selectedTemplateType));
                    // router.push('/admin/schedule/create-template/new');
                }}
            />
            <Stack direction='row' sx={{ width: '270px' }}>
                <SwxMultiSelect
                    insideLabel='Template Type'
                    style={{ width: '100%' }}
                    value={templateType}
                    onChange={handleTemplateTypeChange}
                    options={['Weekly', 'Monthly']}
                    padding='12px 12px'
                    marginleft={120}
                />
            </Stack>
            <AddShift />
        </Stack>
    );
}

export default Filter;
