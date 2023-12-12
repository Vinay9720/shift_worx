'use client';

import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
// import { useFileUpload } from '@/hooks/common';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxMultiSelect, SwxTypography } from '@/lib/common/components';
import { InputField, Form, FormSubmitButton } from '@/lib/common/form-components';
import { CloseContainer, EllipseContainer, HeaderContainer, ModalContainer } from './save-schedule-template.styles';

export default function SaveScheduleTemplateForm({ modalName }) {
    const dispatch = useDispatch();
    const templateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Name
            </SwxTypography>
        ),
        placeholder: 'Template Name',
        required: 'Template Name required',
    };
    const noteDescriptionProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Description
            </SwxTypography>
        ),
        placeholder: 'Description',
        required: 'Description required',
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold' className='Manrope'>
                    Save Schedule Template
                </SwxTypography>
                <EllipseContainer onClick={() => dispatch(closeModal({ modalName }))}>
                    <CloseContainer>
                        <Icon name='ellipse' fill='#F7F8F8' height={30} width={30} />
                    </CloseContainer>
                    <Stack sx={{ position: 'absolute' }}>
                        <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                    </Stack>
                </EllipseContainer>
            </HeaderContainer>
            <Form>
                <Stack sx={{ padding: '10px 150px 21px 16px', backgroundColor: '#F6FAFD' }}>
                    <SwxTypography>Save shift schedule for the week of Jan 1 to Jan 7</SwxTypography>
                    <SwxTypography>Total Shifts: 32</SwxTypography>
                    <SwxTypography>Total Hours: 500</SwxTypography>
                </Stack>
                <Stack direction='column' spacing={2} sx={{ padding: '10px 34px 0px 14px' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='template_name' SWXInputProps={templateProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='description' SWXInputProps={noteDescriptionProps} />
                    </Stack>
                    <Stack direction='column' spacing={0.5}>
                        <SwxTypography color='swxBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                            Ignore Assignees
                        </SwxTypography>
                        <SwxMultiSelect
                            insideLabel='Shifts will be  saved as unassigned'
                            style={{ width: '100%' }}
                            value={['Yes']}
                            options={['Yes', 'No']}
                            padding='16px 12px'
                            marginleft={280}
                        />
                    </Stack>
                    <Stack
                        spacing={3}
                        justifyContent='flex-end'
                        direction='row'
                        style={{ marginBottom: '24px', marginTop: '47px' }}>
                        <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Save' />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
