'use client';

import { CircularProgress } from '@mui/material';
import { StyledButton } from './Button.styles';

function SwxButton({
    startIcon,
    size,
    padding,
    radius,
    variant,
    endIcon,
    children,
    themecolor,
    styles,
    loading,
    ...rest
}) {
    return (
        <StyledButton
            disabled={loading}
            style={{ ...styles }}
            padding={padding}
            size={size}
            radius={radius}
            themecolor={themecolor}
            {...rest}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}>
            {loading ? <CircularProgress color='primary' variant='indeterminate' /> : children}
        </StyledButton>
    );
}

export default SwxButton;
