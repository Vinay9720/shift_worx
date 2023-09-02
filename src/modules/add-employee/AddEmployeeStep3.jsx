'use client';

import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Stack } from '@mui/material';
import { useQueryClient } from 'react-query';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { openAddCertificateForm } from '@/lib/store/slices/add-employee-module';

import { FooterContainer, CertificationsWrapper, CertificationsContainer } from './add-employee.styles';

import { Icon } from '../common/icons';
import { SwxButton, SwxTypography } from '../common/components';
import AddCerfification from '../add-certificate';
import { CertificationCard } from '../common/layout';

function AddEmployeeStep3() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { addingCertificate, certificates } = useSelector(state => state.addEmployeeModule);

    const onSubmit = () => {
        queryClient.invalidateQueries('admin-employees');
        dispatch(closeModal({ modalName: 'addEmployeeModal' }));
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
            {!addingCertificate ? (
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
            <Divider orientation='vertical' flexItem />
            <FooterContainer>
                <SwxButton onClick={() => dispatch(closeModal({ modalName: 'addEmployeeModal' }))} variant='text'>
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
