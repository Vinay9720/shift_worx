'use client';

import { Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import { useReadNotes } from '@/hooks/admin-note/useReadNotes';
import { setSearch } from '@/lib/store/slices/filter/notesFilterSlice';

import { Icon } from '../common/icons';
import { SwxDatePicker, SwxInput, SwxSelect, SwxButton } from '../common/components';

function SearchFilter({ style }) {
    const [value, setValue] = useState('1');
    const { mutate: readNotes } = useReadNotes();
    const dispatch = useDispatch();

    const onSearch = e => {
        const setParams = () => {
            dispatch(setSearch(e.target.value));
        };
        debounce(setParams, 1000)();
    };

    return (
        <Stack direction='row' justifyContent='space-between' style={{ ...style, marginTop: '3.5rem' }}>
            <Stack direction='row' spacing={2} style={{ width: '80%' }}>
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
                <SwxSelect placeholder='Type' style={{ width: '6rem' }} padding='3px 6px' />
                <SwxSelect placeholder='Status' style={{ width: '7rem' }} padding='3px 6px' />
                <SwxDatePicker
                    value={value}
                    width='15%'
                    padding='0.75rem 0.85rem'
                    placeholder='From'
                    onChange={e => {
                        console.log(e.target.value);
                        setValue(e.target.value);
                    }}
                />
                <SwxDatePicker
                    value={value}
                    width='15%'
                    padding='0.75rem 0.85rem'
                    placeholder='To'
                    onChange={e => {
                        console.log(e.target.value);
                        setValue(e.target.value);
                    }}
                />
                <SwxButton
                    endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                    size='semiMedium'
                    weight='thin'
                    themecolor='swxBlack'
                    variant='text'>
                    Clear all
                </SwxButton>
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
