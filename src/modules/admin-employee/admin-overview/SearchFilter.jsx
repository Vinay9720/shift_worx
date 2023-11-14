'use client';

import { useRef, useEffect } from 'react';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { SwxInput, SwxSelect, SwxMultiSelect, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { setSearch, setStatus, setRoles, clearFilters } from '@/lib/store/slices/filter/employeesFilterSlice';

import { styles } from './admin-overview.styles';

const statusOptions = ['Active', 'Inactive'];

function SearchFilter({ actionButton: ActionButton, style }) {
    const { roles, filterApplied, status } = useSelector(state => state.employeesFilter);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearFilters());
        };
    }, []);

    const onRoleChange = event => {
        dispatch(setRoles(event.target.value));
    };

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };

    const clearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    };

    return (
        <Stack direction='row' sx={styles.mainContainer} style={{ ...style }}>
            <Stack direction='row' sx={styles.subContainer}>
                <SwxInput
                    placeholderColor='lightGray'
                    type='text'
                    sx={styles.inputField}
                    onChange={onSearch}
                    ref={searchInputRef}
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
                        value={status}
                        placeholderColor='#838A91'
                        sx={styles.statusSelectField}
                        padding='3px 6px'
                    />
                    <SwxMultiSelect
                        insideLabel='Roles'
                        multiple
                        style={{ width: '126px' }}
                        options={['RN', 'LPN', 'CNA']}
                        value={roles}
                        padding='12px 12px'
                        onChange={onRoleChange}
                    />
                    {filterApplied && (
                        <SwxButton
                            // endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
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
            {ActionButton && <ActionButton />}
        </Stack>
    );
}

export default SearchFilter;
