'use client';

import { isEmpty } from 'lodash';
import { Stack } from '@mui/material';

import { CertificationCard } from '../common/layout';
import { SwxTypography } from '../common/components';

function EditEmployeeStep3({ employeeData, footer }) {
    const { certificates } = employeeData;

    return (
        <div>
            <Stack direction='column'>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Certifications
                </SwxTypography>
            </Stack>
            {!isEmpty(certificates) ? (
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
                                return <CertificationCard key={index} certification={certification} />;
                            })}
                    </Stack>
                    {/* <SwxButton
                        onClick={() => setIsCertificationPopUp(true)}
                        startIcon={<Icon width={17} height={12} name='addition' className='fill-newBrand' />}
                        size='medium'
                        variant='text'
                        weight='semiBold'>
                        Add more
                    </SwxButton> */}
                </Stack>
            ) : (
                // <AddCerfification updateCertificate={onSave} setIsCertificationPopUp={setIsCertificationPopUp} />
                <div>Add certificate</div>
            )}
            {footer}
        </div>
    );
}

export default EditEmployeeStep3;
