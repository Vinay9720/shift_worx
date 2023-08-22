'use client';

import { StyledButton } from './Button.styles';

function SwxButton({ startIcon, size, padding, radius, variant, endIcon, children, styles, ...props }) {
    return (
        <StyledButton
            style={{ ...styles }}
            padding={padding}
            size={size}
            radius={radius}
            {...props}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}>
            {children}
        </StyledButton>
    );
}

export default SwxButton;
