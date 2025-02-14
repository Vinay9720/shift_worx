'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

// import { useReadNotes } from '@/hooks/admin-note/useReadNotes';
import { Icon } from '@/lib/common/icons';
import { SwxDatePicker, SwxInput, SwxSelect, SwxButton } from '@/lib/common/components';
import {
    setSearch,
    setType,
    setStatus,
    setStartDate,
    setEndDate,
    clearFilters,
} from '@/lib/store/slices/filter/notesFilterSlice';

import { styles } from './admin-notes.styles';

const noteTypeOptions = [
    { label: 'Commendation', value: '7' },
    { label: 'Disciplinary', value: '8' },
    { label: 'Human Resources', value: '9' },
    { label: 'Message Sent', value: '11' },
    { label: 'Tardiness', value: '12' },
];

const statusOptions = ['Active', 'Inactive'];

function SearchFilter({ style, addNote }) {
    const { filterApplied, status, startDate, endDate } = useSelector(state => state.notersFilter);
    // const { mutate: readNotes } = useReadNotes();
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };

    const onTypeChange = typeObj => {
        dispatch(setType(typeObj.value));
    };

    const clearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    };

    return (
        <Stack direction='row' sx={styles.mainContainer} style={{ ...style, marginTop: '3.5rem' }}>
            <Stack direction='row' sx={styles.subContainer}>
                <Stack sx={styles.inputField}>
                    <SwxInput
                        type='text'
                        style={{ width: '100%' }}
                        padding='0.75rem 0.85rem'
                        onChange={onSearch}
                        ref={searchInputRef}
                        placeholder='Search note'
                        startIcon={
                            <Icon
                                styles={{ fill: '#838A91' }}
                                name='search'
                                aria-hidden='true'
                                height={24}
                                width={24}
                            />
                        }
                    />
                </Stack>
                <Stack sx={styles.filtersContainer}>
                    <Stack sx={styles.selectField}>
                        <SwxSelect
                            onChange={onTypeChange}
                            options={noteTypeOptions}
                            placeholder='Type'
                            disableClearable
                            style={{ width: '100%' }}
                            padding='3px 6px'
                        />
                    </Stack>
                    <Stack sx={styles.selectField}>
                        <SwxSelect
                            placeholder='Status'
                            options={statusOptions}
                            disableClearable
                            value={status}
                            onChange={value => dispatch(setStatus(value))}
                            style={{ width: '100%' }}
                            padding='3px 6px'
                        />
                    </Stack>
                </Stack>
                <Stack sx={styles.datesContainer}>
                    <Stack sx={styles.datesSubContainer}>
                        <SwxDatePicker
                            value={startDate}
                            width='100%'
                            padding='0.64rem 0.85rem'
                            placeholder='From'
                            onChange={date => {
                                dispatch(setStartDate(date));
                            }}
                        />
                    </Stack>
                    <Stack sx={styles.datesSubContainer}>
                        <SwxDatePicker
                            value={endDate}
                            width='100%'
                            padding='0.64rem 0.85rem'
                            placeholder='To'
                            onChange={date => {
                                dispatch(setEndDate(date));
                            }}
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
            </Stack>
            {addNote && addNote}
            {/* <SwxButton
                onClick={readNotes}
                startIcon={<Icon width={24} height={24} name='check' styles={{ fill: '#1F6FA9' }} />}
                size='medium'
                variant='text'
                weight='semiBold'>
                Mark All as Read
            </SwxButton> */}
        </Stack>
    );
}

export default SearchFilter;
