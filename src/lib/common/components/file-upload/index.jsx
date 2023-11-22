import { Stack, CircularProgress, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';

import { useFileUpload, useUploadedFile, useDeleteFile } from '@/hooks/common';

import { StyledBorderContainer, StyledBorderContainerSecondary } from './file-upload.styles';

import SwxTypography from '../typography';
import { SwxButton } from '..';
import { Icon } from '../../icons';

const SwxFileUpload = ({ onChange, kind, label, fileKey }) => {
    const { mutate: upload, data: fileData, isSuccess, isLoading } = useFileUpload();
    const {
        mutate: getFile,
        data: uploadedFile,
        isSuccess: gettingFileSuccess,
        isLoading: gettingFile,
    } = useUploadedFile();

    const { mutate: deleteFile, data: deleteData, isSuccess: isDeleted, isLoading: isDeleting } = useDeleteFile();

    const [fileToBeUploaded, setFileToBeUploaded] = useState('');
    const uploadFile = async event => {
        const file = event.target.files[0];
        setFileToBeUploaded(file);
        upload({ file, action: 'upload' });
    };

    useEffect(() => {
        if (isSuccess) {
            onChange(fileData.key);
        }

        if (gettingFileSuccess) {
            window.open(uploadedFile.uploadedUrl, '_blank');
        }
    }, [fileData, isSuccess, gettingFileSuccess]);

    useEffect(() => {
        if (isDeleted && deleteData.status === 'success') {
            onChange(null);
        }
    }, [isDeleted]);

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
                {!fileKey ? (
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
                        {!isLoading && !fileKey ? (
                            <>
                                <SwxButton
                                    sx={{ width: '160px' }}
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
                ) : !(gettingFile || isDeleting) ? (
                    <Stack spacing={1.5} sx={{ padding: '0px 24px' }} direction='row' alignItems='center'>
                        <SwxTypography
                            onClick={() => getFile({ uploadedFileKey: fileKey, action: 'get' })}
                            style={{ cursor: 'pointer' }}
                            color='darkBlue'
                            size='smallOdd'
                            weight='thin'>
                            {fileKey}
                        </SwxTypography>
                        <IconButton onClick={() => deleteFile({ uploadedFileKey: fileKey, action: 'delete' })}>
                            <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                        </IconButton>
                    </Stack>
                ) : (
                    <CircularProgress style={{ width: '25px', height: '25px', marginLeft: '24px' }} color='primary' />
                )}
            </>
        );
    }

    if (kind === 'secondary') {
        return (
            <>
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                    {label}
                </SwxTypography>
                {!fileKey ? (
                    <StyledBorderContainerSecondary>
                        <Stack
                            sx={{
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: '12px 16px',
                            }}
                            direction='row'>
                            <Stack direction='column'>
                                {!isLoading && !fileKey ? (
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
                ) : (
                    <Stack spacing={1.5} sx={{ padding: '0px 24px' }} direction='row' alignItems='center'>
                        <SwxTypography color='swxSlightlyBlack' size='small' weight='thin'>
                            {fileKey}
                        </SwxTypography>
                        <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                    </Stack>
                )}
            </>
        );
    }
};

export default SwxFileUpload;
