'use client';

import { Stack } from '@mui/material';
import { useState } from 'react';
import { isEmpty, debounce } from 'lodash';

import { SwxButton, SwxTypography, SwxSelect, SwxInput, SwxDatePicker } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import { NoteCard } from '@/lib/common/layout';

import AddNote from '../add-note';

function EditEmployeeStep4({ employeeData }) {
    const [value, setValue] = useState('1');
    const onSearch = e => {
        const setParams = () => {
            console.log(e.target.value);
        };
        debounce(setParams, 1000)();
    };

    const onTypeChange = type => {
        console.log('type', type);
    };
    return (
        <>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={2} style={{ width: '80%' }}>
                    <SwxInput
                        type='text'
                        style={{ width: '17rem' }}
                        padding='0.75rem 0.85rem'
                        onChange={onSearch}
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
                    <SwxSelect
                        onChange={onTypeChange}
                        options={[1, 2, 3, 4]}
                        placeholder='Type'
                        style={{ width: '7rem' }}
                        padding='3px 6px'
                    />
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
                <AddNote employee={employeeData} />
            </Stack>
            <Stack direction='column' spacing={5} sx={{ mt: 7.5 }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Note(s)
                </SwxTypography>
                {!isEmpty(employeeData.notes) ? (
                    employeeData.notes.map((note, index) => {
                        return <NoteCard key={index} note={note} />;
                    })
                ) : (
                    <SwxTypography color='swxBlack' size='small' weight='semiBold'>
                        No data found.
                    </SwxTypography>
                )}
            </Stack>
        </>
    );
}

export default EditEmployeeStep4;
