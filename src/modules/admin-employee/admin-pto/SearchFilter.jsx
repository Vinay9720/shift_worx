'use client';

import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { SwxInput, SwxSelect, SwxMultiSelect, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { setSearch, setStatus, setRoles, clearFilters } from '@/lib/store/slices/filter/ptoFilterSlice';

import { styles } from './admin-pto.styles';

const statusOptions = ['Approved', 'Declined', 'Pending'];

function SearchFilter({ actionButton: ActionButton, style }) {
    const { roles, filterApplied, status } = useSelector(state => state.ptoFilter);
    const dispatch = useDispatch();

    const onRoleChange = event => {
        dispatch(setRoles(event.target.value));
    };

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };

    return (
        <Stack direction='row' sx={styles.mainContainer} style={{ ...style }}>
            <Stack direction='row' sx={styles.subContainer}>
                <SwxInput
                    placeholderColor='lightGray'
                    type='text'
                    sx={styles.inputField}
                    onChange={onSearch}
                    padding='0.75rem 0.85rem'
                    placeholder='Search name, email, phone...'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <Stack sx={styles.filtersContainer}>
                    <Stack sx={styles.statusSelectField}>
                        <SwxSelect
                            onChange={value => dispatch(setStatus(value))}
                            options={statusOptions}
                            style={{ width: '100%' }}
                            placeholder='Status'
                            value={status}
                            placeholderColor='#838A91'
                            padding='3px 6px'
                        />
                    </Stack>
                    <Stack sx={styles.multiSelect}>
                        <SwxMultiSelect
                            insideLabel='Roles'
                            multiple
                            style={{ width: '100%' }}
                            options={['RN', 'LPN', 'CNA']}
                            value={roles}
                            padding='12px 6px'
                            onChange={onRoleChange}
                        />
                    </Stack>
                    {filterApplied && (
                        <SwxButton
                            // endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                            size='semiMedium'
                            weight='thin'
                            onClick={() => dispatch(clearFilters())}
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
