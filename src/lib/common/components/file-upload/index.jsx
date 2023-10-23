import { Stack } from '@mui/material';

import { StyledBorderContainer, StyledBorderContainerSecondary } from './file-upload.styles';

import SwxTypography from '../typography';
import { SwxButton } from '..';
import { Icon } from '../../icons';

const SwxFileUpload = ({ file, uploadFile, kind }) => {
    if (kind === 'primary') {
        return (
            <>
                <SwxTypography
                    style={{ paddingLeft: '24px' }}
                    color='swxSlightlyBlack'
                    size='smallOdd'
                    weight='semiBold'>
                    Upload File
                </SwxTypography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ padding: '0px 24px' }}>
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
                        <StyledBorderContainer>{file ? file.name : 'No File Chosen'}</StyledBorderContainer>
                    </>
                </Stack>
            </>
        );
    }

    if (kind === 'secondary') {
        return (
            <>
                <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                    Upload File
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
                            <SwxTypography color='lightGray' size='semiMedium' weight='thin'>
                                {file ? file.name : 'No File Chosen'}
                            </SwxTypography>
                            <SwxTypography color='lightGray' size='smallest' weight='semiBold'>
                                JPG, PNG mas 10MB
                            </SwxTypography>
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
