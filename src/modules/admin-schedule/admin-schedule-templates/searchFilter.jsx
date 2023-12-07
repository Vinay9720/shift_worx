'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import // useDispatch,
'react-redux';
// import { debounce } from 'lodash';

import { SwxInput, SwxMultiSelect } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
// import {
//     setSearch,
//     setStatus,
// } from '@/lib/store/slices/filter/scheduleFilterSlice';

import CreateTemplate from './create-template';
import { styles } from './admin-schedule-templates.styles';

function SearchFilter() {
    const searchInputRef = useRef(null);
    // const dispatch = useDispatch();

    // const onSearch = e => {
    //     const setParams = () => {
    //         dispatch(setSearch(e.target.value));
    //     };
    //     debounce(setParams, 1000)();
    // };

    return (
        <Stack direction='row' sx={styles.mainContainer}>
            <Stack direction='row' sx={styles.subContainer}>
                <SwxInput
                    placeholderColor='lightGray'
                    type='text'
                    sx={styles.inputField}
                    ref={searchInputRef}
                    // onChange={onSearch}
                    padding='0.75rem 0.85rem'
                    placeholder='Search Template Name...'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <Stack sx={styles.filtersContainer}>
                    <Stack sx={styles.statusSelectField}>
                        <SwxMultiSelect
                            insideLabel='Publish Status'
                            style={{ width: '100%' }}
                            value={['All']}
                            options={['All']}
                            padding='12px 12px'
                            marginleft={120}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <CreateTemplate />
        </Stack>
    );
}

export default SearchFilter;
