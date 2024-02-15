'use client';

import { Icon } from '@/lib/common/icons';
import { SwxButton } from '@/lib/common/components';

import { styles } from './create-template.styles';
import { useRouter } from 'next/navigation';

export default function CreateTemplate() {
    const router = useRouter();
    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    router.push('/admin/schedule/create-template/new');
                }}
                padding='10px 16px'
                variant='contained'
                sx={styles.createTemplateButton}
                weight='semiBold'>
                Create A Template
            </SwxButton>
        </div>
    );
}
