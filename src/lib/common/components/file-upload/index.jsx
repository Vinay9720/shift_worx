import { Stack, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';

import { useFileUpload } from '@/hooks/common';

import { StyledBorderContainer, StyledBorderContainerSecondary } from './file-upload.styles';

import SwxTypography from '../typography';
import { SwxButton } from '..';
import { Icon } from '../../icons';

const SwxFileUpload = ({ onChange, kind, label }) => {
    const { mutate: upload, data: fileData, isSuccess, isLoading } = useFileUpload();
    const [fileToBeUploaded, setFileToBeUploaded] = useState('');
    const uploadFile = async event => {
        const file = event.target.files[0];
        setFileToBeUploaded(file);
        upload(file);
    };

    useEffect(() => {
        if (isSuccess) {
            onChange(fileData.key);
        }
    }, [fileData, isSuccess]);

    if (kind === 'primary') {
        return (
            <>
                <SwxTypography
                    style={{ paddingLeft: '24px' }}
                    color='swxSlightlyBlack'
                    size='smallOdd'
                    weight='semiBold'>
                    {label}
                </SwxTypography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                    {!isLoading ? (
                        <>
                            <SwxButton
                                size='small'
                                padding='6px 24px'
                                component='label'
                                radius='large'
                                variant='contained'
                                weight='bold'>
                                Choose File
                                <input type='file' onChange={uploadFile} hidden />
                            </SwxButton>
                            <StyledBorderContainer>
                                {fileToBeUploaded ? fileToBeUploaded.name : 'No File Chosen'}
                            </StyledBorderContainer>
                        </>
                    ) : (
                        <CircularProgress color='primary' />
                    )}
                </Stack>
            </>
        );
    }

    if (kind === 'secondary') {
        return (
            <>
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                    {label}
                </SwxTypography>
                <StyledBorderContainerSecondary>
                    <Stack
                        sx={{
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '12px 16px',
                        }}
                        direction='row'>
                        <Stack direction='column'>
                            {!isLoading ? (
                                <>
                                    <SwxTypography color='lightGray' size='semiMedium' weight='thin'>
                                        {fileToBeUploaded ? fileToBeUploaded.name : 'No File Chosen'}
                                    </SwxTypography>
                                    <SwxTypography color='lightGray' size='smallest' weight='semiBold'>
                                        JPG, PNG mas 10MB
                                    </SwxTypography>
                                </>
                            ) : (
                                <CircularProgress color='primary' />
                            )}
                        </Stack>
                        <SwxButton
                            size='small'
                            padding='6px 24px'
                            component='label'
                            startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                            variant='outlined'
                            weight='bold'>
                            Choose File
                            <input type='file' onChange={uploadFile} hidden />
                        </SwxButton>
                    </Stack>
                </StyledBorderContainerSecondary>
            </>
        );
    }
};

export default SwxFileUpload;
