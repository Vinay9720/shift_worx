'use client';

import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { restrictEmptyArray } from '@/lib/validators';
import { useFileUpload } from '@/hooks/common';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { ListBoxField, InputField, Form, FormSubmitButton } from '@/lib/common/form-components';

import { ModalContainer, HeaderContainer, StyledBorderContainer } from './add-note.styles';

const noteTypeOptions = [
    { label: 'Commendation', value: '7' },
    { label: 'Disciplinary', value: '8' },
    { label: 'Human Resources', value: '9' },
    { label: 'Message Sent', value: '11' },
    { label: 'Tardiness', value: '12' },
];

export default function NoteForm({ employee, modalName, action: addNote }) {
    const { mutate: upload } = useFileUpload();
    const dispatch = useDispatch();

    const noteTypeProps = {
        label: 'Select type',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: noteTypeOptions,
        required: true,
    };

    const noteDescriptionProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Your Note
            </SwxTypography>
        ),
        placeholder: 'Write your note',
        required: 'Enter your note',
        multiline: true,
        padding: '0px',
        rows: 4,
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold'>
                    Add Note
                </SwxTypography>
            </HeaderContainer>
            <Form onSubmit={noteData => addNote({ noteData, employee })}>
                <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='thin'>
                            Note Type
                        </SwxTypography>
                        <ListBoxField name='note_type_id' SWXInputProps={noteTypeProps} />
                    </div>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <InputField name='description' SWXInputProps={noteDescriptionProps} />
                    </Stack>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='thin'>
                            Upload File
                        </SwxTypography>
                        <StyledBorderContainer>
                            <Stack
                                sx={{
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    padding: '12px 16px',
                                }}
                                direction='row'>
                                <Stack direction='column'>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='thin'>
                                        No file choosen
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='semiBold'>
                                        JPG, PNG mas 10MB
                                    </SwxTypography>
                                </Stack>
                                <SwxButton
                                    size='small'
                                    padding='6px 24px'
                                    component='label'
                                    startIcon={
                                        <Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />
                                    }
                                    variant='outlined'
                                    weight='bold'>
                                    Choose File
                                    <input type='file' onChange={upload} hidden />
                                </SwxButton>
                            </Stack>
                        </StyledBorderContainer>
                    </div>
                    <Stack spacing={3} justifyContent='flex-end' direction='row' style={{ marginBottom: '24px' }}>
                        <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
