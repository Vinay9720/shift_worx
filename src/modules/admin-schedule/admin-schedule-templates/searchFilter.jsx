'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import { debounce } from 'lodash';

import { SwxButton, SwxInput, SwxMultiSelect } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';

import CreateTemplate from './create-template';
import { styles } from './admin-schedule-templates.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setRoles, setSearch, clearFilters } from '@/lib/store/slices/filter/ScheduleTemplateFilterSlice';

function SearchFilter() {
    const { roles, filterApplied } = useSelector(state => state.scheduleTemplateFilter);

    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };
    const onPublishStatusChange = event => {
        dispatch(setRoles(event.target.value));
    };
    const clearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    };

    return (
        <Stack direction='row' sx={styles.mainContainer}>
            <Stack direction='row' sx={styles.subContainer}>
                <SwxInput
                    placeholderColor='lightGray'
                    type='text'
                    sx={styles.inputField}
                    ref={searchInputRef}
                    onChange={onSearch}
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
                            value={roles}
                            options={['All', 'Published', 'Not Published']}
                            padding='12px 12px'
                            marginleft={120}
                            onChange={onPublishStatusChange}
                        />
                    </Stack>
                    {filterApplied && (
                        <SwxButton
                            size='semiMedium'
                            weight='thin'
                            onClick={() => {
                                dispatch(clearFilters());
                                clearSearch();
                            }}
                            themecolor='swxBlack'
                            sx={styles.clearAllButton}
                            variant='text'>
                            <span>Clear all</span>
                            <Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />
                        </SwxButton>
                    )}
                </Stack>
            </Stack>
            <CreateTemplate />
        </Stack>
    );
}

export default SearchFilter;
