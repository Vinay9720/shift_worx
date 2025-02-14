'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
// import { useFileUpload } from '@/hooks/common';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { InputField, Form, FormSubmitButton, FormSwitch } from '@/lib/common/form-components';
import {
    ActionButtonContainer,
    CloseContainer,
    EllipseContainer,
    HeaderContainer,
    ModalContainer,
    ShiftDataContainer,
} from './save-schedule-template.styles';

export default function SaveScheduleTemplateForm({ modalName, action, title, isEditing, loading, onCancel }) {
    const dispatch = useDispatch();
    const { templateDetails, scheduleTemplateModalData } = useSelector(state => state.adminScheduleTemplatesModule);
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
        multiline: true,
        padding: '0px',
        rows: 4,
        required: 'Description required',
    };

    const assginedProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Ignore Assignees
            </SwxTypography>
        ),
        required: false,
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold' className='Manrope'>
                    {title || 'Save Schedule Template'}
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
            <Form
                onSubmit={shiftData => action({ shiftData, savingTemplate: !isEditing })}
                defaultValues={scheduleTemplateModalData}>
                <ShiftDataContainer>
                    {/* <SwxTypography>Save shift schedule for the week of Jan 1 to Jan 7</SwxTypography> */}
                    <SwxTypography>Total Shifts: {templateDetails.total_shifts || 0}</SwxTypography>
                    <SwxTypography>Total Hours: {templateDetails.total_hours || 0}</SwxTypography>
                </ShiftDataContainer>
                <Stack direction='column' spacing={2} sx={{ padding: '10px 34px 0px 14px' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='template_name' SWXInputProps={templateProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='description' SWXInputProps={noteDescriptionProps} />
                    </Stack>
                    <Stack direction='row'>
                        <FormSwitch name='assigned' SWXInputProps={assginedProps} />
                    </Stack>
                    <ActionButtonContainer>
                        <SwxButton
                            onClick={() => {
                                dispatch(closeModal({ modalName }));
                                if (onCancel) {
                                    onCancel();
                                }
                            }}
                            variant='text'
                            size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Save' loading={loading} />
                    </ActionButtonContainer>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
