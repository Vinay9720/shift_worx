'use client';

import { useState } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { SwxButton, Hr, Icon } from '@/components/common';
// import { FormSubmitButton, Form } from '@/components/form-components';
import { getS3Url } from '@/lib/utils';
import { fetchEmployees } from '@/redux/actions/thunks/employees';

import {
    HeadingsContainer,
    StyledText,
    FooterContainer,
    CertificationsWrapper,
    CertificationsContainer,
    CertificationContainer,
    CertificationUpperSection,
    CertificationUpperRightSection,
    CertificationLowerSection,
    CertificationLowerLeftSection,
    StyledInlineText,
    CertificationLowerRightSection,
} from './AddEmployee.styles';
import AddCerfification from './AddCertifications';

function AddEmployeeStep3({ setIsModalOpen, setCurrentStep }) {
    const dispatch = useDispatch();
    const { certificates } = useSelector(state => state.employees);
    const [isCertificationPopUp, setIsCertificationPopUp] = useState(false);

    const onSubmit = () => {
        dispatch(fetchEmployees({ itemsPerPage: 10, currentPage: 1, searchParams: '' })).then(res => {
            if (res.payload) {
                setIsModalOpen(false);
                setCurrentStep(1);
            }
        });
    };
    return (
        <>
            <HeadingsContainer>
                <StyledText color='swxBlack' size='semiLarge' weight='bold'>
                    Certifications
                </StyledText>
                <StyledText color='lightGray' size='small' weight='thin'>
                    Select certifications and specialities
                </StyledText>
            </HeadingsContainer>
            {!isCertificationPopUp ? (
                <>
                    <CertificationsWrapper>
                        <StyledText
                            style={{ marginBottom: '12px', marginTop: '24px' }}
                            color='swxSlightlyBlack'
                            size='semiMedium'
                            weight='semiBold'>
                            Licenses
                        </StyledText>
                        <CertificationsContainer>
                            {!isEmpty(certificates) &&
                                certificates.map((certification, index) => {
                                    return (
                                        <CertificationContainer key={index}>
                                            <CertificationUpperSection>
                                                <StyledText color='darkestGray' size='semiMedium' weight='bold'>
                                                    Registered Nurse ({certification.name || ''})
                                                </StyledText>
                                                <CertificationUpperRightSection>
                                                    <a href={getS3Url(certification.file_upload_key)}>
                                                        <SwxButton
                                                            startIcon={
                                                                <Icon
                                                                    width={17}
                                                                    height={12}
                                                                    name='eye'
                                                                    className='fill-newBrand'
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
                                                        <StyledText color='darkestGray' size='small' weight='bold'>
                                                            Effective Date:{'  '}
                                                        </StyledText>
                                                        <StyledInlineText
                                                            color='darkestGray'
                                                            size='smallest'
                                                            weight='extraThin'>
                                                            {certification.effective_date}
                                                        </StyledInlineText>
                                                    </div>
                                                    <div className='flex items-baseline'>
                                                        <StyledText color='darkestGray' size='small' weight='bold'>
                                                            Expiration Date:{'  '}
                                                        </StyledText>
                                                        <StyledInlineText
                                                            color='darkestGray'
                                                            size='smallest'
                                                            weight='extraThin'>
                                                            {certification.expiration_date}
                                                        </StyledInlineText>
                                                    </div>
                                                </CertificationLowerLeftSection>
                                                <CertificationLowerRightSection>
                                                    <>
                                                        <StyledText color='darkestGray' size='small' weight='bold'>
                                                            Jurisdiction: {certification.jurisdiction}
                                                        </StyledText>
                                                    </>
                                                    <div className='flex items-baseline'>
                                                        <StyledText color='darkestGray' size='small' weight='bold'>
                                                            Specialties:{'   '}
                                                        </StyledText>
                                                        <StyledInlineText
                                                            color='darkestGray'
                                                            style={{ marginLeft: '2px' }}
                                                            size='smallest'
                                                            weight='extraThin'>
                                                            {(certification.speciality || []).join(', ')}
                                                        </StyledInlineText>
                                                    </div>
                                                </CertificationLowerRightSection>
                                            </CertificationLowerSection>
                                        </CertificationContainer>
                                    );
                                })}
                        </CertificationsContainer>
                        <SwxButton
                            onClick={() => setIsCertificationPopUp(true)}
                            startIcon={<Icon width={17} height={12} name='addition' className='fill-newBrand' />}
                            size='medium'
                            variant='text'
                            weight='semiBold'>
                            Add more
                        </SwxButton>
                    </CertificationsWrapper>
                    {/* <Hr /> */}
                    {/* <CertificationsWrapper>
                        <StyledText
                            style={{ marginBottom: '12px', marginTop: '12px' }}
                            color='swxSlightlyBlack'
                            size='semiMedium'
                            weight='semiBold'>
                            Certifications
                        </StyledText>
                        <CertificationsContainer>
                            <CertificationContainer>
                                <CertificationUpperSection>
                                    <StyledText color='darkestGray' size='semiMedium' weight='bold'>
                                        Registered Nurse (RN)
                                    </StyledText>
                                    <CertificationUpperRightSection>
                                        <SwxButton
                                            startIcon={
                                                <Icon width={17} height={12} name='eye' className='fill-newBrand' />
                                            }
                                            variant='text'
                                            size='small'
                                            weight='bold'>
                                            View Document
                                        </SwxButton>
                                        <SwxButton
                                            startIcon={
                                                <Icon width={15} height={16} name='edit' className='fill-newBrand' />
                                            }
                                            variant='text'
                                            size='small'
                                            weight='bold'>
                                            Edit
                                        </SwxButton>
                                    </CertificationUpperRightSection>
                                </CertificationUpperSection>
                                <CertificationLowerSection>
                                    <CertificationLowerLeftSection>
                                        <div className='flex items-baseline'>
                                            <StyledText color='darkestGray' size='small' weight='bold'>
                                                Effective Date:{'  '}
                                            </StyledText>
                                            <StyledInlineText color='darkestGray' size='smallest' weight='extraThin'>
                                                06/1/2011
                                            </StyledInlineText>
                                        </div>
                                        <div className='flex items-baseline'>
                                            <StyledText color='darkestGray' size='small' weight='bold'>
                                                Expiration Date:{'  '}
                                            </StyledText>
                                            <StyledInlineText color='darkestGray' size='smallest' weight='extraThin'>
                                                06/1/2023
                                            </StyledInlineText>
                                        </div>
                                    </CertificationLowerLeftSection>
                                    <CertificationLowerRightSection>
                                        <>
                                            <StyledText color='darkestGray' size='small' weight='bold'>
                                                Jurisdiction: Fl
                                            </StyledText>
                                        </>
                                        <div className='flex items-baseline'>
                                            <StyledText color='darkestGray' size='small' weight='bold'>
                                                Specialties:{'  '}
                                            </StyledText>
                                            <StyledInlineText color='darkestGray' size='smallest' weight='extraThin'>
                                                Skilled Nursing, Geriatrics, Hospice
                                            </StyledInlineText>
                                        </div>
                                    </CertificationLowerRightSection>
                                </CertificationLowerSection>
                            </CertificationContainer>
                        </CertificationsContainer>
                        <SwxButton
                            startIcon={<Icon width={17} height={12} name='addition' className='fill-newBrand' />}
                            size='medium'
                            variant='text'
                            weight='semiBold'>
                            Add more
                        </SwxButton>
                    </CertificationsWrapper> */}
                </>
            ) : (
                <AddCerfification setIsCertificationPopUp={setIsCertificationPopUp} />
            )}
            <Hr />
            <FooterContainer>
                <SwxButton onClick={() => setIsModalOpen(false)} variant='text'>
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
