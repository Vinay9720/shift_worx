'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { Form, FormSubmitButton, InputField, DatePickerField, FormSwitch } from '@/lib/common/form-components';
import {
    CloseContainer,
    EllipseContainer,
    HeaderContainer,
    ModalContainer,
    StyledShiftDataContainer,
    styles,
} from './publish-schedule-template.styles';
import { today } from '@/lib/util';

export default function PublishScheduleTemplateForm({ modalName, action, loading }) {
    const { templateTobePublished } = useSelector(state => state.adminScheduleTemplatesModule);
    const dispatch = useDispatch();
    const TemplateNameProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Template Name
            </SwxTypography>
        ),
        placeholder: 'Enter Name',
        required: 'Template Name required',
    };
    const descriptionProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Description
            </SwxTypography>
        ),
        placeholder: 'Add Description',
        required: 'Description required',
        multiline: true,
        padding: '0px',
        rows: 4,
    };

    // const weekProps = {
    //     label: (
    //         <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
    //             Week
    //         </SwxTypography>
    //     ),
    //     options: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Every Week'],
    //     placeholder: '',
    //     width: '100%',
    //     required: true,
    //     padding: '8px 8px',
    // };

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Date
            </SwxTypography>
        ),
        width: '100%',
        required: true,
        range: false,
        minDate: today(),
    };

    const assginedProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Publish All Shifts As Unassigned
            </SwxTypography>
        ),
        required: false,
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold' className='Manrope'>
                    Publish Schedule Template
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
            <Form onSubmit={templateData => action({ templateData })} defaultValues={templateTobePublished}>
                <StyledShiftDataContainer>
                    <Stack>
                        <SwxTypography color='lightGray' size='small' weight='extraThin' className='Manrope'>
                            Total Shift
                        </SwxTypography>
                        <SwxTypography color='swxSlightlyBlack' size='semiLarge' weight='bold' className='Manrope'>
                            {templateTobePublished.total_shifts || 0}
                        </SwxTypography>
                    </Stack>
                    <Stack>
                        <SwxTypography color='lightGray' size='small' weight='extraThin' className='Manrope'>
                            Total Hours
                        </SwxTypography>
                        <SwxTypography color='swxSlightlyBlack' size='semiLarge' weight='bold' className='Manrope'>
                            {templateTobePublished.scheduled_hours || 0}
                        </SwxTypography>
                    </Stack>
                    <Stack>
                        <SwxTypography color='lightGray' size='small' weight='extraThin' className='Manrope'>
                            Publish Schedule Template
                        </SwxTypography>
                        <SwxTypography color='swxSlightlyBlack' size='semiLarge' weight='bold' className='Manrope'>
                            1
                        </SwxTypography>
                    </Stack>
                </StyledShiftDataContainer>
                <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='name' SWXInputProps={TemplateNameProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='description' SWXInputProps={descriptionProps} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <DatePickerField name='start_date' SWXInputProps={dateProps} />
                    </Stack>
                    {/* <Stack direction='row'>
                        <SelectField name='week' SWXInputProps={weekProps} />
                    </Stack> */}
                    <Stack direction='row'>
                        <FormSwitch name='assigned' SWXInputProps={assginedProps} />
                    </Stack>
                    <Stack sx={styles.actionButtons} style={{ marginBottom: '24px', marginTop: '30px' }}>
                        <SwxButton
                            onClick={() => dispatch(closeModal({ modalName: 'publishScheduleTemplateModal' }))}
                            variant='text'
                            size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Apply' loading={loading} />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
