'use client';

import { useState } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { Divider, Stack } from '@mui/material';

import { getS3Url } from '@/lib/util';
import { closeModal } from '@/lib/store/slices/modal-slice';

import {
    FooterContainer,
    CertificationsWrapper,
    CertificationsContainer,
    CertificationContainer,
    CertificationUpperSection,
    CertificationUpperRightSection,
    CertificationLowerSection,
    CertificationLowerLeftSection,
    CertificationLowerRightSection,
} from './add-employee.styles';

import { Icon } from '../common/icons';
import { SwxButton, SwxTypography } from '../common/components';

function AddEmployeeStep3() {
    const dispatch = useDispatch();
    const [isCertificationPopUp, setIsCertificationPopUp] = useState(false);
    const certificates = [
        {
            name: 'RN',
            file_upload_key: '4543',
            effective_date: '23/2/2023',
            expiration_date: '23/2/2023',
            jurisdiction: 'AL',
            speciality: ['one', 'two', 'three'],
        },
    ];

    const onSubmit = () => {
        console.log('step3 sumit');
    };
    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Certifications
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin'>
                    Select certifications and specialities
                </SwxTypography>
            </Stack>
            {!isCertificationPopUp ? (
                <>
                    <CertificationsWrapper>
                        <SwxTypography
                            style={{ marginBottom: '12px', marginTop: '24px' }}
                            color='swxSlightlyBlack'
                            size='semiMedium'
                            weight='semiBold'>
                            Licenses
                        </SwxTypography>
                        <CertificationsContainer>
                            {!isEmpty(certificates) &&
                                certificates.map((certification, index) => {
                                    return (
                                        <CertificationContainer key={index}>
                                            <CertificationUpperSection>
                                                <SwxTypography color='darkestGray' size='semiMedium' weight='bold'>
                                                    Registered Nurse ({certification.name || ''})
                                                </SwxTypography>
                                                <CertificationUpperRightSection>
                                                    <a href={getS3Url(certification.file_upload_key)}>
                                                        <SwxButton
                                                            startIcon={
                                                                <Icon
                                                                    width={17}
                                                                    height={12}
                                                                    name='eye'
                                                                    styles={{ fill: '#1F6FA9' }}
                                                                />
                                                            }
                                                            variant='text'
                                                            size='small'
                                                            label='link'
                                                            weight='bold'>
                                                            View Document
                                                        </SwxButton>
                                                    </a>
                                                    {/* <SwxButton
                                                        startIcon={
                                                            <Icon
                                                                width={15}
                                                                height={16}
                                                                name='edit'
                                                                className='fill-newBrand'
                                                            />
                                                        }
                                                        variant='text'
                                                        size='small'
                                                        weight='bold'>
                                                        Edit
                                                    </SwxButton> */}
                                                </CertificationUpperRightSection>
                                            </CertificationUpperSection>
                                            <CertificationLowerSection>
                                                <CertificationLowerLeftSection>
                                                    <div className='flex items-baseline'>
                                                        <Stack direction='row' spacing={0.5} alignItems='center'>
                                                            <SwxTypography
                                                                color='darkestGray'
                                                                size='small'
                                                                weight='bold'>
                                                                Effective Date:
                                                            </SwxTypography>
                                                            <SwxTypography
                                                                color='darkestGray'
                                                                size='smallest'
                                                                weight='extraThin'>
                                                                {certification.effective_date}
                                                            </SwxTypography>
                                                        </Stack>
                                                    </div>
                                                    <div className='flex items-baseline'>
                                                        <Stack direction='row' spacing={0.5} alignItems='center'>
                                                            <SwxTypography
                                                                color='darkestGray'
                                                                size='small'
                                                                weight='bold'>
                                                                Expiration Date:{'  '}
                                                            </SwxTypography>
                                                            <SwxTypography
                                                                variant='body1'
                                                                color='darkestGray'
                                                                size='smallest'
                                                                weight='extraThin'>
                                                                {certification.expiration_date}
                                                            </SwxTypography>
                                                        </Stack>
                                                    </div>
                                                </CertificationLowerLeftSection>
                                                <CertificationLowerRightSection>
                                                    <>
                                                        <SwxTypography color='darkestGray' size='small' weight='bold'>
                                                            Jurisdiction: {certification.jurisdiction}
                                                        </SwxTypography>
                                                    </>
                                                    <div className='flex items-baseline'>
                                                        <Stack direction='row' spacing={0.5} alignItems='center'>
                                                            <SwxTypography
                                                                color='darkestGray'
                                                                size='small'
                                                                weight='bold'>
                                                                Specialties:{'   '}
                                                            </SwxTypography>
                                                            <SwxTypography
                                                                variant='body1'
                                                                color='darkestGray'
                                                                style={{ marginLeft: '2px' }}
                                                                size='smallest'
                                                                weight='extraThin'>
                                                                {(certification.speciality || []).join(', ')}
                                                            </SwxTypography>
                                                        </Stack>
                                                    </div>
                                                </CertificationLowerRightSection>
                                            </CertificationLowerSection>
                                        </CertificationContainer>
                                    );
                                })}
                        </CertificationsContainer>
                        <SwxButton
                            onClick={() => setIsCertificationPopUp(true)}
                            startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                            size='medium'
                            variant='text'
                            weight='semiBold'>
                            Add more
                        </SwxButton>
                    </CertificationsWrapper>
                </>
            ) : (
                // <AddCerfification setIsCertificationPopUp={setIsCertificationPopUp} />
                <div>certification add</div>
            )}
            <Divider orientation='vertical' flexItem />
            <FooterContainer>
                <SwxButton onClick={() => dispatch(closeModal())} variant='text'>
                    Cancel
                </SwxButton>
                <SwxButton onClick={onSubmit} variant='contained'>
                    Submit
                </SwxButton>
            </FooterContainer>
        </>
    );
}

export default AddEmployeeStep3;
