'use client';

import { Stack } from '@mui/material';
import { isEmpty } from 'lodash';

import { SwxButton, SwxTypography, SwxSelect, SwxInput } from '../common/components';
import { Icon } from '../common/icons';
import { NoteCard } from '../common/layout';
import AddNote from '../add-note';

function EditEmployeeStep4({ employeeData }) {
    return (
        <>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={2}>
                    <SwxInput
                        type='text'
                        style={{ width: '20rem' }}
                        padding='1rem 0.85rem'
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
                    <SwxSelect style={{ width: '10rem' }} />
                    <SwxButton
                        endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                        size='semiMedium'
                        weight='thin'
                        themecolor='swxBlack'
                        variant='text'>
                        Clear all
                    </SwxButton>
                </Stack>
                <AddNote employeeId={employeeData.id} />
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
