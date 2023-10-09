'use client';

import React from 'react';
import { CircularProgress } from '@mui/material';

import { Overlay } from './loader.styles';

const SwxLoader = ({ loading }) => {
    return (
        loading && (
            <Overlay>
                <CircularProgress color='primary' />
            </Overlay>
        )
    );
};

export default SwxLoader;
