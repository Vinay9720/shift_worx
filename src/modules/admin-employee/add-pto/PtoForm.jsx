'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';
import moment from 'moment';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { restrictEmptyArray } from '@/lib/validators';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import {
    DatePickerField,
    FileUploadField,
    Form,
    FormSubmitButton,
    InputField,
    ListBoxField,
    SelectField,
    TimePickerField,
} from '@/lib/common/form-components';

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
} from './add-pto.styles';

export default function PtoForm({ modalName, requestType, action: addPto, employee }) {
    const [formattedData, setFormattedData] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        if (employee && Object.keys(formattedData).length === 0) {
            const startDate = employee.start_time;
            const endDate = employee.end_time;
            const startTime = employee.start_time;
            const endTime = employee.end_time;
            const formattedStartTime = moment(startTime).format('hh:mma');
            const formattedEndTime = moment(endTime).format('hh:mma');
            const formattedStartDate = moment(startDate).format('DD-MM-YYYY');
            const formattedEndDate = moment(endDate).format('DD-MM-YYYY');
            const formattedEmployee = {
                employee: employee.name || 'Admin4 User',
                description: employee.description,
                time_start: formattedStartTime,
                time_end: formattedEndTime,
                start_date: formattedStartDate,
                end_date: formattedEndDate,
                request_type: [employee.request_type],
            };
            setFormattedData(formattedEmployee);
        }
    }, [employee, formattedData]);

    const employeeOptions = ['Tyler White', 'John Doe', 'Jason', 'Arthur Curry', 'Tyler'];
    const requestTypeOptions = [
        { label: 'Sick Leave', value: 'sick_leave' },
        { label: 'Vacation', value: 'vacation' },
        { label: 'Jury Duty', value: 'jury_duty' },
        { label: 'Parental Leave', value: 'parental_leave' },
        { label: 'Bereavement Leave', value: 'bereavement_leave' },
        { label: 'Holiday', value: 'holiday' },
        { label: 'Other', value: 'other' },
        { label: 'Personal', value: 'personal' },
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
        padding: '0px',
        radius: '5px',
        required: true,
    };
    const requestTypeProps = {
        label: 'Request Type',
        placeholder: 'Request Type',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: requestTypeOptions,
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
    const fileUploadProps = {
        label: 'Upload file',
        // required: true,
        kind: 'secondary',
    };
    return (
        <ModalContainer>
            <HeaderContainer>
                <TitleContainer>
                    <StyledTitle>{requestType || 'Edit'} PTO Request</StyledTitle>
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
                <Form
                    defaultValues={formattedData}
                    onSubmit={ptoData => {
                        addPto(ptoData);
                    }}>
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
                                <ListBoxField name='request_type' SWXInputProps={requestTypeProps} maxHeight='188px' />
                            </div>
                            <Stack sx={styles.datePickerStackStyles}>
                                <DatePickerField name='start_date' SWXInputProps={startDateProps} />
                                <DatePickerField name='end_date' SWXInputProps={endDateProps} />
                            </Stack>
                            <Stack sx={styles.timePickerStackStyles}>
                                <Stack sx={styles.timePicker}>
                                    <TimePickerField name='time_start' SWXInputProps={startTimeProps} />
                                </Stack>
                                <Stack sx={styles.timePicker}>
                                    <TimePickerField name='time_end' SWXInputProps={endTimeProps} />
                                </Stack>
                            </Stack>
                            <Stack direction={{ xs: 'column', sm: 'row' }}>
                                <InputField name='description' SWXInputProps={noteDescriptionProps} />
                            </Stack>
                        </Stack>
                        <StyledBorderContainer>
                            <FileUploadField name='file_name' SWXInputProps={fileUploadProps} />
                        </StyledBorderContainer>
                    </StyledWrapperContainer>
                    <Stack
                        spacing={3}
                        justifyContent='flex-end'
                        direction='row'
                        style={{ margin: '17px 30px 9px 0px' }}>
                        <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' />
                    </Stack>
                </Form>
            </BodyContainer>
        </ModalContainer>
    );
}
