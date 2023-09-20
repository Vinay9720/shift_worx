'use client';

import React, { useState, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';

import { ToastContext } from '@/hooks/common/useToast';

const SuccessAlert = styled(Alert)`
    background-color: black !important;
    color: white !important;
`;

const ErrorAlert = styled(Alert)`
    background-color: black !important;
    color: white !important;
`;

export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('info');

    const showToast = useCallback((msg, sev = 'info') => {
        setMessage(msg);
        setSeverity(sev);
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                {severity === 'success' ? (
                    <SuccessAlert severity={severity} onClose={handleClose}>
                        {message}
                    </SuccessAlert>
                ) : (
                    <ErrorAlert severity={severity} onClose={handleClose}>
                        {message}
                    </ErrorAlert>
                )}
            </Snackbar>
        </ToastContext.Provider>
    );
};
