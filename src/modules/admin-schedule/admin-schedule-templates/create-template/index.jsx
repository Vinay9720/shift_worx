'use client';

import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';

import { styles } from './create-template.styles';
import { useRouter } from 'next/navigation';
import { setLoading } from '@/lib/store/slices/loading-slice';
import { useDispatch } from 'react-redux';

export default function CreateTemplate() {
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    dispatch(setLoading(true));
                    router.push('/admin/schedule/create-template/new');
                    dispatch(setLoading(false));
                }}
                padding='10px 16px'
                variant='contained'
                sx={styles.addShiftButton}
                weight='semiBold'>
                Create A Template
            </SwxButton>
        </div>
    );
}
