/* eslint-disable prefer-destructuring */

'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { Form, InputField, DatePickerField, ListBoxField } from '@/components/form-components';
import { ContainedLoader, SwxButton } from '@/components/common';
import { showToast, uploadFileToS3 } from '@/lib/utils';
import { statesWithkeys } from '@/constants';
import { addEmployee } from '@/redux/actions/thunks/employees';
import { restrictEmptyArray } from '@/lib/validators';
import { fetchCertificationOptions } from '@/redux/actions/thunks/certification/fetchCertificationOptions';
import { fetchFacilityOptions } from '@/redux/actions/thunks/facility/fetchFacilityOptions';
import { addEmployeeCertificates } from '@/redux/slices/certification';

import { StyledBorderContainer } from './add-certificate.styles';

import { SwxTypography } from '../common/components';

function AddCerfification({ setIsCertificationPopUp, defaultValues, updateCertificate }) {
    const dispatch = useDispatch();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const { employee } = useSelector(state => state.employees);
    const [file, setFile] = useState(null);
    const [formValues, setFormValues] = useState(null);
    const [S3FileKey, setS3FileKey] = useState(null);
    const [isImageUploading, setIsImageUploading] = useState(false);
    const { certificationOptions } = useSelector(state => state.certificate);
    const { facilityOptions } = useSelector(state => state.facility);

    useEffect(() => {
        dispatch(fetchCertificationOptions());
        dispatch(fetchFacilityOptions());
    }, []);

    const certificationObject =
        certificationOptions &&
        certificationOptions.reduce((acc, certificate) => {
            acc[certificate.id] = certificate.abbreviation;
            return acc;
        }, {});

    const specialtiesObject =
        facilityOptions &&
        facilityOptions.reduce((acc, specialty) => {
            acc[specialty.id] = specialty.name;
            return acc;
        }, {});

    const certificationProps = {
        label: 'Select type',
        selectedOptions,
        setSelectedOptions,
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        options: certificationObject,
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
        padding: '10px 12px',
    };

    const specilityProps = {
        label: 'speciality',
        selectedOptions,
        setSelectedOptions,
        validate: value => restrictEmptyArray(value, 'field can not be empty'),
        required: true,
        options: specialtiesObject,
        multiple: true,
    };

    const jurisdictionProps = {
        label: 'Select jurisdiction',
        selectedOptions,
        setSelectedOptions,
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
        type: 'number',
    };

    const uploadFile = async event => {
        setFile(event.target.files[0]);
        setIsImageUploading(true);
        try {
            const S3Data = await uploadFileToS3(event);
            setS3FileKey(S3Data.key);
        } catch (error) {
            showToast('error', 'Please try again');
        } finally {
            setIsImageUploading(false);
        }
    };

    const saveCertificate = () => {
        const profileableAttributes = {
            profileable_attributes: {
                facility_id: 1,
            },
            profileable_type: 'Nurse',
        };
        const certificationDetails = {
            nurse_certificate: {
                ...formValues,
                file_upload_key: S3FileKey,
            },
        };

        certificationDetails.nurse_certificate.certificate_id = formValues.certificate_id[0];
        certificationDetails.nurse_certificate.jurisdiction = formValues.jurisdiction[0];

        dispatch(
            addEmployee({
                employee: {
                    user: { ...profileableAttributes },
                    step: 'certificates',
                    ...certificationDetails,
                    facility_user_id: employee.id,
                },
            })
        ).then(res => {
            if (res.payload && res.payload.certificates) {
                dispatch(addEmployeeCertificates(res.payload.certificates));
            } else {
                showToast('error', 'Please try again later.');
            }
        });
    };

    const onFormStateChange = values => {
        setFormValues(values);
    };

    const onSave = event => {
        event.preventDefault();
        const certificationDetails = {
            nurse_certificate: {
                ...formValues,
                file_upload_key: S3FileKey,
            },
        };
        certificationDetails.nurse_certificate.certificate_id = formValues.certificate_id[0];
        certificationDetails.nurse_certificate.jurisdiction = formValues.jurisdiction[0];
        if (updateCertificate) {
            updateCertificate(certificationDetails);
        } else {
            saveCertificate();
        }
    };

    return (
        <Stack direction='column' spacing={3} style={{ padding: '52px 140px 13px 160px' }}>
            <Form styles='flex flex-col gap-y-5' defaultValues={defaultValues} onFormStateChange={onFormStateChange}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                            Certificate/License Type
                        </SwxTypography>
                        <ListBoxField name='certificate_id' SWXInputProps={certificationProps} />
                    </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                        <SwxTypography color='swxSlightlyBlack' size='smallOdd' weight='semiBold'>
                            Specialties
                        </SwxTypography>
                        <ListBoxField name='speciality' SWXInputProps={specilityProps} />
                    </div>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                    <SwxTypography
                        style={{ paddingLeft: '24px' }}
                        color='swxSlightlyBlack'
                        size='smallOdd'
                        weight='semiBold'>
                        Upload File
                    </SwxTypography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        {isImageUploading ? (
                            <ContainedLoader />
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
                            onClick={() => setIsCertificationPopUp(false)}
                            padding='6px 24px'
                            radius='large'
                            variant='outlined'
                            weight='bold'>
                            Cancel
                        </SwxButton>
                        <SwxButton
                            size='small'
                            onClick={onSave}
                            padding='6px 24px'
                            radius='large'
                            variant='contained'
                            weight='bold'>
                            Save
                        </SwxButton>
                    </div>
                </Stack>
            </Form>
        </Stack>
    );
}

export default AddCerfification;
