'use client';

import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { openModal, closeModal } from '@/lib/store/slices/modal-slice';
import { restrictEmptyArray } from '@/lib/validators';
import { useFileUpload } from '@/hooks';

import { ModalContainer, HeaderContainer } from './add-note.styles';

import { Icon } from '../common/icons';
import { SwxButton, SwxTypography } from '../common/components';
import { SwxModal } from '../common/layout';
import { ListBoxField, InputField, Form, FormSubmitButton } from '../common/form-components';

const noteTypeOptions = [
    { label: 'Commendation', value: 'Commendation' },
    { label: 'Disciplinary', value: 'Disciplinary' },
    { label: 'Human Resources', value: 'Human Resources' },
    { label: 'Message Sent', value: 'Message Sent' },
    { label: 'Tardiness', value: 'Tardiness' },
];

export default function AddNote() {
    const { mutate: upload, isImageLoading } = useFileUpload();
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
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addNoteModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add New
            </SwxButton>
            <SwxModal modalName='addNoteModal'>
                <ModalContainer>
                    <HeaderContainer>
                        <SwxTypography color='swxBlack' size='large' weight='bold'>
                            Add Note
                        </SwxTypography>
                    </HeaderContainer>
                    <Form>
                        <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                                <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='thin'>
                                    Note Type
                                </SwxTypography>
                                <ListBoxField name='note_type' SWXInputProps={noteTypeProps} />
                            </div>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <InputField name='first_name' SWXInputProps={noteDescriptionProps} />
                            </Stack>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                                <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='thin'>
                                    Upload File
                                </SwxTypography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    {isImageLoading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <>
                                            {/* <StyledBorderContainer>{file ? file.name : 'No File Chosen'}</StyledBorderContainer> */}
                                            <SwxButton
                                                size='small'
                                                padding='6px 24px'
                                                component='label'
                                                radius='large'
                                                variant='contained'
                                                weight='bold'>
                                                Choose File
                                                <input type='file' onChange={upload} hidden />
                                            </SwxButton>
                                        </>
                                    )}
                                </Stack>
                            </div>
                            <Stack
                                spacing={3}
                                justifyContent='flex-end'
                                direction='row'
                                style={{ marginBottom: '24px' }}>
                                <SwxButton
                                    onClick={() => dispatch(closeModal({ modalName: 'addNoteModal' }))}
                                    variant='text'>
                                    Cancel
                                </SwxButton>
                                <FormSubmitButton variant='contained' buttonName='Submit' />
                            </Stack>
                        </Stack>
                    </Form>
                </ModalContainer>
            </SwxModal>
        </div>
    );
}
