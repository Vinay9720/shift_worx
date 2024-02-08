/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Popover, Box } from '@mui/material';

function SwxPopover({ content, buttonElement }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', alignSelf: 'center', textAlign: 'center' }} onClick={handleClick}>
                <div style={{ background: 'none', border: 'none', display: 'inline-block' }} onClick={handleClick}>
                    {buttonElement || 'menu'}
                </div>
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>
                {content}
            </Popover>
        </>
    );
}

export default SwxPopover;
