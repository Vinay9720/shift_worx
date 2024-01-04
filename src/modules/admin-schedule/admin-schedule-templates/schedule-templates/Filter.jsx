'use client';

import { SwxMultiSelect } from '@/lib/common/components';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setTemplateType } from '@/lib/store/slices/admin-schedule-templates-module';
import AddShift from './add-template-shift';

function Filter() {
    const dispatch = useDispatch();
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' sx={{ width: '270px' }}>
                <SwxMultiSelect
                    insideLabel='Template Type'
                    style={{ width: '100%' }}
                    value={templateType}
                    onChange={event => dispatch(setTemplateType(event.target.value))}
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
