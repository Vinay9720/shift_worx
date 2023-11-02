'use client';

import { Stack } from '@mui/material';

import { getS3Url } from '@/lib/util';

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

export default function CertificationCard({ certification, onEdit }) {
    return (
        <CertificationContainer>
            <CertificationUpperSection>
                <SwxTypography color='darkestGray' size='semiMedium' weight='bold'>
                    {certification.certificate.abbreviation || ''}
                </SwxTypography>
                <CertificationUpperRightSection>
                    <a href={getS3Url(certification.file_upload_key)}>
                        <SwxButton
                            startIcon={<Icon width={17} height={12} name='eye' styles={{ fill: '#1F6FA9' }} />}
                            variant='text'
                            size='small'
                            label='link'
                            weight='bold'>
                            View Document
                        </SwxButton>
                    </a>
                    <SwxButton
                        startIcon={<Icon width={15} height={16} name='edit' styles={{ fill: '#1F6FA9' }} />}
                        variant='text'
                        size='small'
                        onClick={onEdit}
                        weight='bold'>
                        Edit
                    </SwxButton>
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
