/* eslint-disable prefer-destructuring */

'use client';

import { useState } from 'react';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { statesWithkeys } from '@/lib/constants';
import { restrictEmptyArray } from '@/lib/validators';
import { useAddEmployee } from '@/hooks/admin-employee';
// import { uploadFileToS3 } from '@/hooks/common/useFileUpload';
import { useCertificateOptions } from '@/hooks/certificate';
import { useSpecialityOptions } from '@/hooks/speciality';
import { closeAddCertificateForm } from '@/lib/store/slices/add-employee-module';
import { useFileUpload } from '@/hooks/common';
import { Form, InputField, DatePickerField, ListBoxField, FormSubmitButton } from '@/lib/common/form-components';
import { SwxTypography, SwxButton, SwxLoader } from '@/lib/common/components';

import { StyledBorderContainer } from './add-certificate.styles';

function AddCerfification({ defaultValues, employeeId }) {
    const { mutate: upload } = useFileUpload();
    const [file, setFile] = useState(null);
    const [isImageUploading, setIsImageUploading] = useState(null);
    const dispatch = useDispatch();

    const { mutate: addEmployee } = useAddEmployee();
    const { data: certificationOptions, isLoading: isCertificateOptionsLoading } = useCertificateOptions();
    const { data: specialityOptions, isLoading: isSpecialityOptionsLoading } = useSpecialityOptions();

    const certificationProps = {
        label: 'Select type',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: certificationOptions,
        required: true,
    };

    const effectiveDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                Effective Date
            </SwxTypography>
        ),
        multiple: false,
        range: false,
        required: true,
        width: '100%',
        padding: '10px 12px',
    };

    const expirationDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                Expiration Date
            </SwxTypography>
        ),
        multiple: false,
        range: false,
        required: true,
        width: '100%',
        padding: '10px 12px',
    };

    const specilityProps = {
        label: 'speciality',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        required: true,
        options: specialityOptions,
        multiple: true,
    };

    const jurisdictionProps = {
        label: 'Select jurisdiction',
        options: statesWithkeys,
        required: true,
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        maxHeight: '100px',
    };

    const certificateNumberProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                License Number
            </SwxTypography>
        ),
        padding: '12px 12px',
        placeholder: 'XXXXX',
        required: true,
        style: { gap: '3px' },
        type: 'number',
    };

    const uploadFile = async event => {
        const fileToBeUploaded = event.target.files[0];
        setFile(fileToBeUploaded);
        setIsImageUploading(true);
        upload(fileToBeUploaded);
    };

    if (isCertificateOptionsLoading || isSpecialityOptionsLoading) {
        return <SwxLoader loading={isCertificateOptionsLoading || isSpecialityOptionsLoading} />;
    }

    return (
        <Stack direction='column' spacing={3} style={{ padding: '82px 117px 6px 117px' }}>
            <Form onSubmit={formValues => addEmployee(formValues, employeeId)} defaultValues={defaultValues}>
                <Stack direction='column' spacing={3} style={{ width: '100%' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                                Certificate/License Type
                            </SwxTypography>
                            <ListBoxField name='certificate_id' SWXInputProps={certificationProps} />
                        </div>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                                Specialties
                            </SwxTypography>
                            <ListBoxField name='speciality' SWXInputProps={specilityProps} />
                        </div>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                                Jurisdiction
                            </SwxTypography>
                            <ListBoxField name='jurisdiction' SWXInputProps={jurisdictionProps} />
                        </div>
                        <InputField name='cert_license_number' SWXInputProps={certificateNumberProps} />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        <DatePickerField name='effective_date' SWXInputProps={effectiveDateProps} />
                        <DatePickerField name='expiration_date' SWXInputProps={expirationDateProps} />
                    </Stack>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                        <SwxTypography
                            style={{ paddingLeft: '24px' }}
                            color='swxSlightlyBlack'
                            size='smallOdd'
                            weight='semiBold'>
                            Upload File
                        </SwxTypography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                            {isImageUploading ? (
                                <p>Loading...</p>
                            ) : (
                                <>
                                    <SwxButton
                                        size='small'
                                        padding='6px 24px'
                                        component='label'
                                        radius='large'
                                        variant='contained'
                                        weight='bold'>
                                        Choose File
                                        <input type='file' onChange={uploadFile} hidden />
                                    </SwxButton>
                                    <StyledBorderContainer>{file ? file.name : 'No File Chosen'}</StyledBorderContainer>
                                </>
                            )}
                        </Stack>
                    </div>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ padding: '0px 24px' }}
                        style={{ justifyContent: 'flex-end' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <SwxButton
                                size='small'
                                onClick={() => dispatch(closeAddCertificateForm())}
                                padding='6px 24px'
                                radius='large'
                                variant='outlined'
                                weight='bold'>
                                Cancel
                            </SwxButton>
                            <FormSubmitButton
                                size='small'
                                padding='6px 24px'
                                radius='large'
                                variant='contained'
                                buttonName='Save'
                                weight='bold'
                            />
                        </div>
                    </Stack>
                </Stack>
            </Form>
        </Stack>
    );
}

export default AddCerfification;
