'use client';

import { Divider, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAddEmployee } from '@/hooks/admin-employee';
import { closeModal } from '@/lib/store/slices/modal-slice';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { Form, InputField, DatePickerField, FormSubmitButton } from '@/lib/common/form-components';

import { FooterContainer, styles } from './add-employee.styles';
import { today } from '@/lib/util';

function AddEmployeeStep2() {
    const dispatch = useDispatch();
    const { mutate: addEmployee, isLoading } = useAddEmployee();

    const ssnProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                SSN#
            </SwxTypography>
        ),
        placeholder: 'xxx-xx-xxxx',
        type: 'number',
        required: 'Enter ssn',
    };

    const driverLicenseProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Driver&apos;s License #
            </SwxTypography>
        ),
        placeholder: '',
        type: 'text',
        required: 'Enter driver license number',
    };

    const driverLicenseIssueProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Driver&apos;s License Issue date
            </SwxTypography>
        ),
        required: true,
        maxDate: today(),
        width: '100%',
    };

    const driverLicenseExpireProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Driver&apos;s License Expiration Date
            </SwxTypography>
        ),
        required: true,
        minDate: today(),
        width: '100%',
    };

    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold' className='Manrope'>
                    Personal Documents
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin' className='Manrope'>
                    Upload employee personal documents
                </SwxTypography>
            </Stack>
            <Form onSubmit={employeeData => addEmployee({ employeeData })} styles='flex flex-col gap-y-5'>
                <Stack direction='column' spacing={3} sx={{ marginTop: '24px' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='ssn' SWXInputProps={ssnProps} />
                    </Stack>
                    <Divider orientation='horizontal' flexItem />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <InputField name='dl_number' SWXInputProps={driverLicenseProps} />
                    </Stack>
                    <Stack sx={styles.driverLicenseContainer}>
                        <DatePickerField name='dl_issue_date' SWXInputProps={driverLicenseIssueProps} />
                        <DatePickerField name='dl_expiration_date' SWXInputProps={driverLicenseExpireProps} />
                    </Stack>
                </Stack>
                <FooterContainer>
                    <SwxButton
                        onClick={() => dispatch(closeModal({ modalName: 'addEmployeeModal' }))}
                        variant='text'
                        size='medium'>
                        Cancel
                    </SwxButton>
                    <FormSubmitButton variant='contained' buttonName='Next' loading={isLoading} />
                </FooterContainer>
            </Form>
        </>
    );
}

export default AddEmployeeStep2;
