'use client';

import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Stack } from '@mui/material';
import { useQueryClient } from 'react-query';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { openAddCertificateForm, setCurrentStep } from '@/lib/store/slices/add-employee-module';
import { useToast } from '@/hooks/common';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { CertificationCard } from '@/lib/common/layout';

import { FooterContainer, CertificationsWrapper, CertificationsContainer } from './add-employee.styles';

import AddCerfification from '../add-certificate';

function AddEmployeeStep3() {
    const dispatch = useDispatch();
    const showToast = useToast();
    const queryClient = useQueryClient();
    const { addingCertificate, certificates } = useSelector(state => state.addEmployeeModule);

    const onSubmit = () => {
        queryClient.invalidateQueries('admin-employees');
        dispatch(closeModal({ modalName: 'addEmployeeModal' }));
        dispatch(setCurrentStep(1));
        showToast('Employees added successfully', 'success');
    };
    return (
        <>
            <Stack direction='column' spacing={1} sx={{ padding: '0px 24px' }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold' className='Manrope'>
                    Certifications
                </SwxTypography>
                <SwxTypography color='lightGray' size='small' weight='thin' className='Manrope'>
                    Select certifications and specialities
                </SwxTypography>
            </Stack>
            {!addingCertificate ? (
                <>
                    <CertificationsWrapper>
                        <SwxTypography
                            style={{ marginBottom: '12px', marginTop: '24px' }}
                            color='swxSlightlyBlack'
                            size='semiMedium'
                            weight='semiBold'
                            className='Manrope'>
                            Licenses
                        </SwxTypography>
                        <CertificationsContainer>
                            {!isEmpty(certificates) &&
                                certificates.map((certification, index) => {
                                    return <CertificationCard key={index} certification={certification} />;
                                })}
                        </CertificationsContainer>
                        <SwxButton
                            onClick={() => dispatch(openAddCertificateForm())}
                            startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                            size='medium'
                            variant='text'
                            weight='semiBold'>
                            Add more
                        </SwxButton>
                    </CertificationsWrapper>
                </>
            ) : (
                <AddCerfification />
            )}
            <Divider orientation='vertical' flexItem sx={{ borderBottom: '1px solid #E6E8E9' }} />
            <FooterContainer>
                <SwxButton
                    onClick={() => dispatch(closeModal({ modalName: 'addEmployeeModal' }))}
                    variant='text'
                    size='medium'>
                    Cancel
                </SwxButton>
                <SwxButton disabled={isEmpty(certificates)} onClick={onSubmit} variant='contained'>
                    Submit
                </SwxButton>
            </FooterContainer>
        </>
    );
}

export default AddEmployeeStep3;
