'use client';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

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
    FooterContainer,
} from './add-pto.styles';
import { useEmployees } from '@/hooks/admin-employee';
import { getRequestTypeByValue } from '@/lib/util';

export default function PtoForm({ modalName, requestType, action: addPto, employee, loading, onCancel }) {
    const { data: employeesData, isSuccess } = useEmployees(true);
    const [formattedData, setFormattedData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        if (employee && Object.keys(formattedData).length === 0) {
            const formattedEmployee = {
                nurse_id: employee.name || 'Admin4 User',
                description: employee.description,
                time_start: employee.time_start,
                time_end: employee.time_end,
                start_date: employee.date_start,
                end_date: employee.date_end,
                request_type: [getRequestTypeByValue(employee.request_type)],
            };
            setFormattedData(formattedEmployee);
        }
    }, [employee, formattedData]);

    const employees = useMemo(() => {
        if (isSuccess) {
            return (employeesData.employees || []).map(user => {
                return { name: user.user.first_name, id: user.user.profileable_id };
            });
        }
        return [];
    }, [employeesData]);

    const employeeOptions = [
        ...employees.map(user => {
            return { label: user.name, value: user.id, avatar: true, groupBy: 'Select Employee' };
        }),
    ];
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Employee
            </SwxTypography>
        ),
        spacing: 0.1,
        options: employeeOptions,
        placeholder: 'Employee Name',
        width: '100%',
        padding: '1px',
        radius: '5px',
        required: true,
    };
    const requestTypeProps = {
        placeholder: 'Request Type',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: requestTypeOptions,
        required: true,
        padding: '1px',
        radius: '5px',
    };
    const startDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
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
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
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
                <EllipseContainer
                    onClick={() => {
                        dispatch(closeModal({ modalName }));
                        if (!requestType) onCancel();
                    }}>
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
                        addPto({ ...ptoData, nurse_id: ptoData.nurse_id.value });
                    }}>
                    <StyledWrapperContainer>
                        <Stack spacing={3} sx={styles.stack1}>
                            <Stack direction='row'>
                                <SelectField name='nurse_id' SWXInputProps={employeeProps} />
                            </Stack>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}>
                                <SwxTypography
                                    color='swxSlightlyBlack'
                                    size='semiMedium'
                                    weight='semiBold'
                                    className='Manrope'>
                                    Request Type
                                </SwxTypography>
                                <SelectField name='request_type' SWXInputProps={requestTypeProps} />
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
                    <FooterContainer>
                        <SwxButton
                            onClick={() => {
                                dispatch(closeModal({ modalName }));
                                if (!requestType) onCancel();
                            }}
                            variant='text'
                            size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' loading={loading} />
                    </FooterContainer>
                </Form>
            </BodyContainer>
        </ModalContainer>
    );
}
