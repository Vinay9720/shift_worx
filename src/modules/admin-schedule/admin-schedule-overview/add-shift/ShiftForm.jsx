'use client';

import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { DatePickerField, SelectField, Form, FormSubmitButton, TimePickerField } from '@/lib/common/form-components';

import { ModalContainer, HeaderContainer, EllipseContainer, CloseContainer } from './add-shift.styles';

const roleOptions = ['RN', 'LPN', 'CNA'];
const specialityOptions = ['speciality1', 'speciality2', 'speciality3'];
const employeeOptions = ['option1', 'options2', 'option3'];

export default function ShiftForm({ modalName, action: addShift }) {
    const dispatch = useDispatch();

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Date
            </SwxTypography>
        ),
        multiple: true,
        width: '100%',
        required: true,
        range: false,
    };

    const roleProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Role
            </SwxTypography>
        ),
        options: roleOptions,
        placeholder: 'Role',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const specialityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Speciality
            </SwxTypography>
        ),
        options: specialityOptions,
        placeholder: 'Speciality',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const employeeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Employee
            </SwxTypography>
        ),
        options: employeeOptions,
        placeholder: 'State',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const employee2Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Employee 2
            </SwxTypography>
        ),
        options: employeeOptions,
        placeholder: 'State',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const timeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='thin'>
                Time
            </SwxTypography>
        ),
        placeholder: 'time',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold'>
                    Add Shift
                </SwxTypography>
                <EllipseContainer>
                    <CloseContainer>
                        <Icon name='ellipse' fill='#F7F8F8' height={30} width={30} />
                    </CloseContainer>
                    <Stack sx={{ position: 'absolute' }}>
                        <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                    </Stack>
                </EllipseContainer>
            </HeaderContainer>
            <Form onSubmit={shfitData => addShift({ shfitData })}>
                <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                    <Stack direction='row' spacing={2}>
                        <DatePickerField name='date' SWXInputProps={dateProps} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <SelectField name='role' SWXInputProps={roleProps} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <SelectField name='speciality' SWXInputProps={specialityProps} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <SelectField name='employee' SWXInputProps={employeeProps} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <SelectField name='employee_2' SWXInputProps={employee2Props} />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <TimePickerField name='time' SWXInputProps={timeProps} />
                    </Stack>
                    <Stack spacing={3} justifyContent='flex-end' direction='row' style={{ marginBottom: '24px' }}>
                        <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
