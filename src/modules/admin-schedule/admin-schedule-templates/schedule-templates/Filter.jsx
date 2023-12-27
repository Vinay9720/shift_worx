'use client';

import { SwxMultiSelect } from '@/lib/common/components';
import { Stack } from '@mui/material';
import AddShift from './add-template-shift';

function Filter() {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' sx={{ width: '270px' }}>
                <SwxMultiSelect
                    insideLabel='Template Type'
                    style={{ width: '100%' }}
                    value={['Weekly']}
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
