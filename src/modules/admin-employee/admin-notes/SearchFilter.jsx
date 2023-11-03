'use client';

import { Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { useReadNotes } from '@/hooks/admin-note/useReadNotes';
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

function SearchFilter({ style }) {
    const { filterApplied, type, status, startDate, endDate } = useSelector(state => state.notersFilter);
    const { mutate: readNotes } = useReadNotes();
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
            <Stack direction='row' sx={styles.subContainer} style={{ width: '80%' }}>
                <SwxInput
                    type='text'
                    style={{ width: '17rem' }}
                    padding='0.75rem 0.85rem'
                    onChange={onSearch}
                    placeholder='Search note'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <Stack sx={styles.filtersContainer}>
                    <SwxSelect
                        onChange={onTypeChange}
                        options={noteTypeOptions}
                        placeholder='Type'
                        disableClearable
                        value={type}
                        style={{ width: '7rem' }}
                        padding='3px 6px'
                    />
                    <SwxSelect
                        placeholder='Status'
                        options={statusOptions}
                        disableClearable
                        value={status}
                        onChange={value => dispatch(setStatus(value))}
                        style={{ width: '7rem' }}
                        padding='3px 6px'
                    />
                </Stack>
                <Stack sx={styles.datesContainer}>
                    <Stack sx={styles.datesSubContainer}>
                        <SwxDatePicker
                            value={startDate}
                            width='100%'
                            padding='0.75rem 0.85rem'
                            placeholder='From'
                            onChange={date => {
                                setStartDate(date);
                            }}
                        />
                    </Stack>
                    <Stack sx={styles.datesSubContainer}>
                        <SwxDatePicker
                            value={endDate}
                            width='100%'
                            padding='0.75rem 0.85rem'
                            placeholder='To'
                            onChange={date => {
                                setEndDate(date);
                            }}
                        />
                    </Stack>
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
            <SwxButton
                onClick={readNotes}
                startIcon={<Icon width={24} height={24} name='check' styles={{ fill: '#1F6FA9' }} />}
                size='medium'
                variant='text'
                weight='semiBold'>
                Mark All as Read
            </SwxButton>
        </Stack>
    );
}

export default SearchFilter;
