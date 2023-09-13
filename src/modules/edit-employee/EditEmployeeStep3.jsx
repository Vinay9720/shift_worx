'use client';

import { isEmpty } from 'lodash';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
    openAddCertificateForm,
    openEditCertificateForm,
    setCertificateToBeEdited,
} from '@/lib/store/slices/edit-employee-module';

import { CertificationCard } from '../common/layout';
import { SwxTypography, SwxButton } from '../common/components';
import { Icon } from '../common/icons';
import AddCerfification from '../add-certificate';

function EditEmployeeStep3({ employeeData, footer }) {
    const { addingCertificate, editingCertificate, certificateToBeEdited } = useSelector(
        state => state.editEmployeeModule
    );
    const { certificates } = employeeData;
    const dispatch = useDispatch();

    return (
        <div>
            <Stack direction='column'>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Certifications
                </SwxTypography>
            </Stack>
            {!(addingCertificate || editingCertificate) ? (
                <Stack direction='column'>
                    <SwxTypography
                        style={{ marginBottom: '12px', marginTop: '24px' }}
                        color='swxSlightlyBlack'
                        size='semiMedium'
                        weight='semiBold'>
                        Licenses
                    </SwxTypography>
                    <Stack direction='column' spacing={1.5}>
                        {!isEmpty(certificates) &&
                            certificates.map((certification, index) => {
                                return (
                                    <CertificationCard
                                        onEdit={() => {
                                            dispatch(openEditCertificateForm());
                                            dispatch(setCertificateToBeEdited(certification));
                                        }}
                                        key={index}
                                        certification={certification}
                                    />
                                );
                            })}
                        <SwxButton
                            onClick={() => dispatch(openAddCertificateForm())}
                            startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                            size='medium'
                            variant='text'
                            weight='semiBold'>
                            Add more
                        </SwxButton>
                    </Stack>
                </Stack>
            ) : (
                <AddCerfification employeeId={employeeData.id} defaultValues={certificateToBeEdited} />
            )}
            {footer}
        </div>
    );
}

export default EditEmployeeStep3;
