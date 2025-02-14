/* eslint-disable prefer-destructuring */

'use client';

import { CircularProgress, Stack } from '@mui/material';

import { statesWithkeys } from '@/lib/constants';
import { restrictEmptyArray } from '@/lib/validators';
import { useCertificateOptions } from '@/hooks/certificate';
import { useSpecialityOptions } from '@/hooks/speciality';
import {
    Form,
    InputField,
    DatePickerField,
    FormSubmitButton,
    FileUploadField,
    SelectField,
} from '@/lib/common/form-components';
import { SwxTypography, SwxButton } from '@/lib/common/components';
import { today } from '@/lib/util';
import { StyledLoaderContainer } from './add-certificate.styles';

function CertificateForm({ defaultValues, onSubmit, onCancel, loading }) {
    const { data: certificationOptions, isLoading: isCertificateOptionsLoading } = useCertificateOptions();
    const { data: specialityOptions, isLoading: isSpecialityOptionsLoading } = useSpecialityOptions();
    const certificationProps = {
        placeholder: 'Select type',
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: certificationOptions,
        required: true,
        padding: '3px',
    };

    const effectiveDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold' className='Manrope'>
                Effective Date
            </SwxTypography>
        ),
        multiple: false,
        range: false,
        required: true,
        maxDate: today(),
        width: '100%',
        padding: '10px 12px',
    };

    const expirationDateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold' className='Manrope'>
                Expiration Date
            </SwxTypography>
        ),
        multiple: false,
        range: false,
        required: true,
        minDate: today(),
        width: '100%',
        padding: '10px 12px',
    };

    const specialityProps = {
        options: specialityOptions,
        placeholder: 'Speciality',
        width: '100%',
        required: true,
        padding: '3px',
    };

    const jurisdictionProps = {
        placeholder: 'Select jurisdiction',
        options: statesWithkeys,
        required: true,
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        maxHeight: '100px',
        padding: '3px',
    };

    const fileUploadProps = {
        label: 'File upload',
        required: true,
        kind: 'primary',
    };

    const certificateNumberProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                License Number
            </SwxTypography>
        ),
        padding: '12px 12px',
        placeholder: '',
        required: true,
        style: { gap: '3px' },
        type: 'text',
    };

    if (isCertificateOptionsLoading || isSpecialityOptionsLoading) {
        return (
            <StyledLoaderContainer>
                <center>
                    <CircularProgress loading={isCertificateOptionsLoading || isSpecialityOptionsLoading} />
                </center>
            </StyledLoaderContainer>
        );
    }

    return (
        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
            <Stack direction='column' spacing={3} style={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold' className='Manrope'>
                            Certificate/License Type
                        </SwxTypography>
                        <SelectField name='certificate_id' SWXInputProps={certificationProps} />
                    </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold' className='Manrope'>
                            Specialties
                        </SwxTypography>
                        <SelectField name='speciality_ids' SWXInputProps={specialityProps} />
                    </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold' className='Manrope'>
                            Jurisdiction
                        </SwxTypography>
                        <SelectField name='jurisdiction' SWXInputProps={jurisdictionProps} />
                    </div>
                    <InputField name='cert_license_number' SWXInputProps={certificateNumberProps} />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <DatePickerField name='effective_date' SWXInputProps={effectiveDateProps} />
                    <DatePickerField name='expiration_date' SWXInputProps={expirationDateProps} />
                </Stack>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    <FileUploadField name='file_upload_key' SWXInputProps={fileUploadProps} />
                </div>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ padding: '0px 24px' }}
                    style={{ justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <SwxButton
                            size='small'
                            onClick={() => onCancel()}
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
                            loading={loading}
                        />
                    </div>
                </Stack>
            </Stack>
        </Form>
    );
}

export default CertificateForm;
