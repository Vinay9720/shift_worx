'use client';

import { isEmpty } from 'lodash';
import { Stack } from '@mui/material';

import { CertificationCard } from '../common/layout';
import { SwxTypography, SwxButton } from '../common/components';

function EditEmployeeStep3() {
    const certificates = [
        {
            file_upload_key: 'afda',
            effective_date: '12/02/2023',
            expiration_date: '25/03/2023',
            jurisdiction: 'AL',
            speciality: ['1', '2'],
        },
    ];
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
            {/* <FooterContainer> */}
            <SwxButton variant='contained' size='small' padding='6px 24px' radius='large' weight='bold'>
                Save
            </SwxButton>
            {/* {numberedStep !== 1 && ( */}
            <SwxButton
                size='small'
                // onClick={() => handleNavigationClick(numberedStep - 1)}
                padding='6px 24px'
                radius='large'
                // disabled={numberedStep === 1 && true}
                variant='outlined'
                weight='bold'>
                {'< '}Previous
            </SwxButton>
            {/* // )} */}
            {/* {numberedStep !== 3 && ( */}
            <SwxButton
                size='small'
                // onClick={() => handleNavigationClick(numberedStep + 1)}
                padding='6px 24px'
                radius='large'
                // disabled={numberedStep === 3 && true}
                variant='outlined'
                weight='bold'>
                Next{' >'}
            </SwxButton>
            {/* )} */}
            {/* </FooterContainer> */}
        </div>
    );
}

export default EditEmployeeStep3;
