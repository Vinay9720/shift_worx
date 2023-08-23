'use client';

import { StyledButton } from './button.styles';

function SwxButton({ startIcon, size, padding, radius, variant, endIcon, children, themeColor, styles, ...rest }) {
    return (
        <StyledButton
            style={{ ...styles }}
            padding={padding}
            size={size}
            radius={radius}
            themeColor={themeColor}
            {...rest}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}>
            {children}
        </StyledButton>
    );
}

export default SwxButton;
