'use client';

import { Stack, CircularProgress } from '@mui/material';
import { useEffect } from 'react';

import {
    CertificationContainer,
    CertificationUpperSection,
    CertificationUpperRightSection,
    CertificationLowerLeftSection,
    CertificationLowerSection,
    CertificationLowerRightSection,
} from './certification-card.styles';

import { SwxTypography, SwxButton } from '../../components';
import { Icon } from '../../icons';
import { useUploadedFile } from '@/hooks/common';

export default function CertificationCard({ certification }) {
    const {
        mutate: getFile,
        isLoading: gettingFile,
        data: uploadedFile,
        isSuccess: gettingFileSuccess,
    } = useUploadedFile();

    useEffect(() => {
        if (gettingFileSuccess) {
            window.open(uploadedFile.uploadedUrl, '_blank');
        }
    }, [gettingFileSuccess]);

    return (
        <CertificationContainer>
            <CertificationUpperSection>
                <SwxTypography color='darkestGray' size='semiMedium' weight='bold'>
                    {certification.certificate
                        ? certification.certificate.abbreviation || ''
                        : certification.name || ''}
                </SwxTypography>
                <CertificationUpperRightSection>
                    {!gettingFile ? (
                        <SwxButton
                            startIcon={<Icon width={17} height={12} name='eye' styles={{ fill: '#1F6FA9' }} />}
                            onClick={() => getFile({ uploadedFileKey: certification.file_upload_key, action: 'get' })}
                            variant='text'
                            size='small'
                            label='link'
                            weight='bold'>
                            View Document
                        </SwxButton>
                    ) : (
                        <CircularProgress
                            style={{ width: '25px', height: '25px', marginLeft: '24px' }}
                            color='primary'
                        />
                    )}
                    {/* <SwxButton
                        startIcon={<Icon width={15} height={16} name='edit' styles={{ fill: '#1F6FA9' }} />}
                        variant='text'
                        size='small'
                        onClick={onEdit}
                        weight='bold'>
                        Edit
                    </SwxButton> */}
                </CertificationUpperRightSection>
            </CertificationUpperSection>
            <CertificationLowerSection>
                <CertificationLowerLeftSection>
                    <div className='flex items-baseline'>
                        <Stack direction='row' spacing={0.5} alignItems='center'>
                            <SwxTypography color='darkestGray' size='small' weight='bold'>
                                Effective Date:
                            </SwxTypography>
                            <SwxTypography color='darkestGray' size='smallest' weight='extraThin'>
                                {certification.effective_date}
                            </SwxTypography>
                        </Stack>
                    </div>
                    <div className='flex items-baseline'>
                        <Stack direction='row' spacing={0.5} alignItems='center'>
                            <SwxTypography color='darkestGray' size='small' weight='bold'>
                                Expiration Date:{'  '}
                            </SwxTypography>
                            <SwxTypography variant='body1' color='darkestGray' size='smallest' weight='extraThin'>
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
                            <SwxTypography color='darkestGray' size='small' weight='bold'>
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
}
