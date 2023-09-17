'use client';

import { Stack } from '@mui/material';
import { debounce } from 'lodash';

import { Icon } from '@/lib/common/icons';
import { SwxInput, SwxSelect, SwxButton } from '@/lib/common/components';

const noteTypeOptions = [
    { label: 'Commendation', value: '7' },
    { label: 'Disciplinary', value: '8' },
    { label: 'Human Resources', value: '9' },
    { label: 'Message Sent', value: '11' },
    { label: 'Tardiness', value: '12' },
];

function SearchFilter({ style }) {
    const onSearch = e => {
        const setParams = () => {
            console.log(e.target.value);
        };
        debounce(setParams, 1000)();
    };

    const onTypeChange = type => {
        console.log(type);
    };

    return (
        <Stack direction='row' justifyContent='space-between' style={{ ...style, marginTop: '3.5rem' }}>
            <Stack direction='row' spacing={2} style={{ width: '80%' }}>
                <SwxInput
                    type='text'
                    style={{ width: '20rem' }}
                    padding='0.75rem 0.85rem'
                    onChange={onSearch}
                    placeholder='Search name, email, phone...'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <SwxSelect
                    onChange={onTypeChange}
                    options={noteTypeOptions}
                    placeholder='Type'
                    style={{ width: '7rem' }}
                    padding='3px 6px'
                />
                <SwxSelect placeholder='Status' style={{ width: '7rem' }} padding='3px 6px' />
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
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    console.log(e.target.value);
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Shift
            </SwxButton>
        </Stack>
    );
}

export default SearchFilter;
