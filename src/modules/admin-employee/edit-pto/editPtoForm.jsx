'use client';

// import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import {
    DatePickerField,
    Form,
    FormSubmitButton,
    InputField,
    ListBoxField,
    SelectField,
    TimePickerField,
} from '@/lib/common/form-components';
import { useFileUpload } from '@/hooks/common';

import {
    ModalContainer,
    HeaderContainer,
    BodyContainer,
    StyledTitle,
    TitleContainer,
    CloseContainer,
    EllipseContainer,
    StyledBorderContainer,
    StyledWrapperContainer,
    styles,
} from './editPtoForm.styles';

export default function EditPtoForm({ modalName }) {
    const { mutate: upload } = useFileUpload();
    const dispatch = useDispatch();

    const employeeOptions = ['Jack Sparrow', 'John Wick', 'Jason Statham', 'John Momoa', 'Tyler'];
    const noteTypeOptions = [
        { label: 'Sick Leave', value: '1' },
        { label: 'Vacation', value: '2' },
        { label: 'Jury Duty', value: '3' },
        { label: 'Parental Leave', value: '4' },
        { label: 'Bereavement Leave', value: '5' },
        { label: 'Holiday', value: '6' },
        { label: 'Other', value: '7' },
        { label: 'Personal', value: '8' },
    ];

    const employeeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Employee
            </SwxTypography>
        ),
        spacing: 0.1,
        options: employeeOptions,
        placeholder: 'Employee Name',
        width: '100%',
        required: true,
        padding: '0px',
        radius: '5px',
    };
    const noteTypeProps = {
        label: 'Request Type',
        placeholder: 'Request Type',
        // validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: noteTypeOptions,
        required: true,
    };
    const startDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Start Date
            </SwxTypography>
        ),
        // multiple: true,
        width: '100%',
        required: true,
        range: false,
        padding: '14.5px 16px',
    };
    const endDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                End Date
            </SwxTypography>
        ),
        // multiple: true,
        width: '100%',
        required: true,
        range: false,
        padding: '14.5px 16px',
    };
    const startTimeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Time Start
            </SwxTypography>
        ),
        placeholder: 'time',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const endTimeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Time End
            </SwxTypography>
        ),
        placeholder: 'time',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };
    const noteDescriptionProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Description
            </SwxTypography>
        ),
        placeholder: 'Description',
        required: 'Write your Description',
        multiline: true,
        padding: '0px',
        rows: 4,
        style: { gap: '1px' },
    };
    return (
        <ModalContainer>
            <HeaderContainer>
                <TitleContainer>
                    <StyledTitle>Edit PTO Request</StyledTitle>
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
                    <StyledWrapperContainer>
                        <Stack spacing={3} sx={styles.stack1}>
                            <Stack direction='row'>
                                <SelectField name='employee' SWXInputProps={employeeProps} />
                            </Stack>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}>
                                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                                    Request Type
                                </SwxTypography>
                                <ListBoxField name='note_type_id' SWXInputProps={noteTypeProps} maxHeight='188px' />
                            </div>
                            <Stack sx={styles.datePickerStackStyles}>
                                <DatePickerField name='start_date' SWXInputProps={startDateProps} />
                                <DatePickerField name='end_date' SWXInputProps={endDateProps} />
                            </Stack>
                            <Stack sx={styles.timePickerStackStyles}>
                                <Stack sx={styles.timePicker}>
                                    <TimePickerField name='start_time' SWXInputProps={startTimeProps} />
                                </Stack>
                                <Stack sx={styles.timePicker}>
                                    <TimePickerField name='end_time' SWXInputProps={endTimeProps} />
                                </Stack>
                            </Stack>
                            <Stack direction={{ xs: 'column', sm: 'row' }}>
                                <InputField name='description' SWXInputProps={noteDescriptionProps} />
                            </Stack>
                        </Stack>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: '24px',
                            }}>
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
                                        <input type='file' onChange={upload} hidden />
                                    </SwxButton>
                                </Stack>
                            </StyledBorderContainer>
                        </div>
                    </StyledWrapperContainer>
                    <Stack
                        spacing={3}
                        justifyContent='flex-end'
                        direction='row'
                        style={{ margin: '17px 30px 9px 0px' }}>
                        <SwxButton
                            onClick={() => dispatch(closeModal({ modalName: 'addPtoModal' }))}
                            variant='text'
                            size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' />
                    </Stack>
                </Form>
            </BodyContainer>
        </ModalContainer>
    );
}
