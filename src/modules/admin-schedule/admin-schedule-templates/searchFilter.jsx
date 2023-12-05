'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import {
    // useDispatch,
    useSelector,
} from 'react-redux';
// import { debounce } from 'lodash';

import { SwxInput, SwxSelect } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
// import {
//     setSearch,
//     setStatus,
// } from '@/lib/store/slices/filter/scheduleFilterSlice';

import CreateTemplate from './add-shift-template';
import { styles } from './admin-schedule-templates.styles';

const statusOptions = ['All'];

function SearchFilter() {
    const { status } = useSelector(state => state.scheduleFilter);
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
                        <SwxSelect
                            // onChange={value => dispatch(setStatus(value))}
                            options={statusOptions}
                            placeholder='Publish Status'
                            placeholderColor='#838A91'
                            value={status}
                            style={{ width: '100%' }}
                            padding='3px 6px'
                        />
                    </Stack>
                </Stack>
            </Stack>
            <CreateTemplate />
        </Stack>
    );
}

export default SearchFilter;
