'use client';

import { SwxMultiSelect, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { Stack } from '@mui/material';

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
