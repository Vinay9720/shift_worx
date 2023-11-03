'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { SwxInput, SwxSelect, SwxMultiSelect, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { setSearch, setStatus, setRoles, clearFilters } from '@/lib/store/slices/filter/scheduleFilterSlice';

import AddShift from './add-shift';
import { styles } from './admin-schedule-overview.styles';

const statusOptions = ['Active', 'Inactive'];

function SearchFilter() {
    const { roles, filterApplied, status } = useSelector(state => state.scheduleFilter);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

    const onRoleChange = event => {
        dispatch(setRoles(event.target.value));
    };

    const clearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    };

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };

    return (
        <Stack direction='row' sx={styles.mainContainer}>
            <Stack direction='row' sx={styles.subContainer}>
                <SwxInput
                    placeholderColor='lightGray'
                    type='text'
                    style={{ width: '20rem' }}
                    ref={searchInputRef}
                    onChange={onSearch}
                    padding='0.75rem 0.85rem'
                    placeholder='Search name, email, phone...'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <Stack sx={styles.filtersContainer}>
                    <SwxSelect
                        onChange={value => dispatch(setStatus(value))}
                        options={statusOptions}
                        placeholder='Status'
                        placeholderColor='#838A91'
                        value={status}
                        style={{ width: '10rem' }}
                        padding='3px 6px'
                    />
                    <SwxMultiSelect
                        insideLabel='Roles'
                        multiple
                        style={{ width: '8rem' }}
                        options={['RN', 'LPN', 'CNA']}
                        value={roles}
                        padding='12px 16px'
                        onChange={onRoleChange}
                    />
                </Stack>
                {filterApplied && (
                    <SwxButton
                        endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                        size='semiMedium'
                        weight='thin'
                        onClick={() => {
                            dispatch(clearFilters());
                            clearSearch();
                        }}
                        themecolor='swxBlack'
                        variant='text'>
                        Clear all
                    </SwxButton>
                )}
            </Stack>
            <AddShift />
        </Stack>
    );
}

export default SearchFilter;
