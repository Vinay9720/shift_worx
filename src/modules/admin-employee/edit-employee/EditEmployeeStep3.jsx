'use client';

import { isEmpty } from 'lodash';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
    openAddCertificateForm,
    closeAddCertificateForm,
    openEditCertificateForm,
    closeEditCertificateForm,
    setCertificateToBeEdited,
} from '@/lib/store/slices/edit-employee-module';
import { CertificationCard } from '@/lib/common/layout';
import { SwxTypography, SwxButton } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';

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
                                const formattedCertification = { ...certification };
                                formattedCertification.jurisdiction = [formattedCertification.jurisdiction];
                                return (
                                    <CertificationCard
                                        onEdit={() => {
                                            dispatch(openEditCertificateForm());
                                            dispatch(setCertificateToBeEdited(formattedCertification));
                                        }}
                                        key={index}
                                        certification={certification}
                                    />
                                );
                            })}
                        <div style={{ display: 'flex' }}>
                            <SwxButton
                                onClick={() => dispatch(openAddCertificateForm())}
                                style={{ justifySelft: 'left' }}
                                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                                size='medium'
                                variant='text'
                                weight='semiBold'>
                                Add more
                            </SwxButton>
                        </div>
                    </Stack>
                </Stack>
            ) : (
                <AddCerfification
                    employeeId={employeeData.id}
                    defaultValues={certificateToBeEdited}
                    onCancel={() =>
                        dispatch(addingCertificate ? closeAddCertificateForm() : closeEditCertificateForm())
                    }
                />
            )}
            {footer}
        </div>
    );
}

export default EditEmployeeStep3;
