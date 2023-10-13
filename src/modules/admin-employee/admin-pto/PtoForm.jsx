'use client';

// import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal, openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';
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
// import { useEmployees } from '@/hooks/admin-employee';

import {
    ModalContainer,
    HeaderContainer,
    BodyContainer,
    StyledTitle,
    TitleContainer,
    CloseContainer,
    EllipseContainer,
    StyledBorderContainer,
} from './admin-pto.styles';

export default function AddRequest() {
    const { mutate: upload } = useFileUpload();
    const dispatch = useDispatch();
    // const { isOpen } = useSelector(state => state.modal);
    // const { currentStep } = useSelector(state => state.addEmployeeModule);

    // const { data: employeesData, isSuccess } = useEmployees();

    // const employees = useMemo(() => {
    //     if (isSuccess) {
    //         return (employeesData.employees || []).map(employee => {
    //             return { name: employee.user.first_name, id: employee.user.id };
    //         });
    //     }
    //     return [];
    // }, [employeesData]);

    const employeeOptions = [
        'Leave Open',
        'None',
        'Tyler',
        // ...employees.map(employee => {
        //     return { label: employee.name, value: employee.id, avatar: true, groupBy: 'Select Employee' };
        // }),
    ];
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
    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Date(s)
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
    };
    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={14} height={14} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='medium'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addPtoModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Request
            </SwxButton>
            <SwxModal modalName='addPtoModal'>
                <ModalContainer>
                    <HeaderContainer>
                        <TitleContainer>
                            <StyledTitle>Add PTO Request</StyledTitle>
                        </TitleContainer>
                        <EllipseContainer onClick={() => dispatch(closeModal({ modalName: 'addPtoModal' }))}>
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
                            <Stack padding='31px 151px 30px 32px' sx={{ borderBottom: '2px solid #E6E8E9' }}>
                                <Stack paddingRight='96px'>
                                    <Stack direction='row' spacing={2}>
                                        <SelectField name='employee' SWXInputProps={employeeProps} />
                                    </Stack>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                            width: '100%',
                                        }}>
                                        <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                                            Request Type
                                        </SwxTypography>
                                        <ListBoxField
                                            name='note_type_id'
                                            SWXInputProps={noteTypeProps}
                                            maxHeight='188px'
                                        />
                                    </div>
                                    <Stack direction='row' spacing={2}>
                                        <DatePickerField name='date' SWXInputProps={dateProps} />
                                    </Stack>
                                    <Stack direction='row' spacing={3}>
                                        <Stack direction='row' spacing={2} sx={{ width: '238px' }}>
                                            <TimePickerField name='start_time' SWXInputProps={startTimeProps} />
                                        </Stack>
                                        <Stack direction='row' spacing={2} sx={{ width: '238px' }}>
                                            <TimePickerField name='end_time' SWXInputProps={endTimeProps} />
                                        </Stack>
                                    </Stack>
                                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                                        <InputField name='description' SWXInputProps={noteDescriptionProps} />
                                    </Stack>
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
                                                    <Icon
                                                        width={17}
                                                        height={12}
                                                        name='addition'
                                                        styles={{ fill: '#1F6FA9' }}
                                                    />
                                                }
                                                variant='outlined'
                                                weight='bold'>
                                                Choose File
                                                <input type='file' onChange={upload} hidden />
                                            </SwxButton>
                                        </Stack>
                                    </StyledBorderContainer>
                                </div>
                            </Stack>
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
            </SwxModal>
        </div>
    );
}
