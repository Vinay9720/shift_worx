'use client';

import { SwxMultiSelect, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setTemplateType } from '@/lib/store/slices/admin-schedule-templates-module';

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
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={() => null}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Shift
            </SwxButton>
        </Stack>
    );
}

export default Filter;
