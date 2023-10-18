'use client';

import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { Form, FormSubmitButton, InputField, ListBoxField } from '@/lib/common/form-components';

import {
    ModalContainer,
    HeaderContainer,
    BodyContainer,
    StyledTitle,
    TitleContainer,
    CloseContainer,
    EllipseContainer,
    StyledBorderContainer,
} from './ptoMessage.styles';

export default function PtoMessageForm({ modalName }) {
    const dispatch = useDispatch();
    const noteTypeOptions = [
        { label: 'Send Notification', value: '1' },
        { label: 'Send Text Message', value: '2' },
        { label: 'Send Email', value: '3' },
    ];
    const noteTypeProps = {
        label: 'Message Type',
        placeholder: 'Message Type',
        options: noteTypeOptions,
        required: true,
    };
    const noteDescriptionProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Message
            </SwxTypography>
        ),
        placeholder: 'Write your Message',
        required: 'Write your Message',
        multiline: true,
        padding: '0px',
        rows: 4,
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <TitleContainer>
                    <StyledTitle>Send Message</StyledTitle>
                </TitleContainer>
                <EllipseContainer onClick={() => dispatch(closeModal({ modalName }))}>
                    <CloseContainer>
                        <Icon name='ellipse' fill='#F7F8F8' height={30} width={30} />
                    </CloseContainer>
                    <Stack sx={{ position: 'absolute' }}>
                        <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                    </Stack>
                </EllipseContainer>
            </HeaderContainer>
            <BodyContainer>
                <Form onSubmit={data => console.log(data)}>
                    <Stack direction='column' spacing={2} sx={{ padding: '24px 24px 0px 24px' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                width: '100%',
                            }}>
                            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                                Message Type
                            </SwxTypography>
                            <ListBoxField name='note_type_id' SWXInputProps={noteTypeProps} maxHeight='188px' />
                        </div>
                        <Stack direction={{ xs: 'column', sm: 'row' }}>
                            <InputField name='description' SWXInputProps={noteDescriptionProps} />
                        </Stack>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
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
                                        <input type='file' hidden />
                                    </SwxButton>
                                </Stack>
                            </StyledBorderContainer>
                        </div>
                        <Stack
                            spacing={3}
                            justifyContent='flex-end'
                            direction='row'
                            style={{ marginBottom: '24px', marginTop: '47px' }}>
                            <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
                                Cancel
                            </SwxButton>
                            <FormSubmitButton variant='contained' buttonName='Submit' />
                        </Stack>
                    </Stack>
                </Form>
            </BodyContainer>
        </ModalContainer>
    );
}
