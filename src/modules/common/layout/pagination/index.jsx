'use client';

import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
    setItemsPerPage,
    clearPagination,
    handlePrevious,
    handleNext,
    setCurrentPage,
} from '@/lib/store/slices/paginationSlice';
import { createNumberArray } from '@/lib/util';

import { SwxSelect, SwxButton, SwxTypography } from '../../components';

export default function SwxPagination({ itemsPerPageOptions, ...rest }) {
    const dispatch = useDispatch();
    const { currentPage, totalPages } = useSelector(state => state.pagination);

    useEffect(() => {
        return () => dispatch(clearPagination());
    }, []);

    return (
        <Stack direction='row' justifyContent='space-between' {...rest}>
            <Stack direction='row' spacing={2}>
                <SwxSelect
                    disableClearable
                    options={itemsPerPageOptions}
                    onChange={value => dispatch(setItemsPerPage(value))}
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
                <SwxButton
                    size='small'
                    onClick={() => {
                        dispatch(handlePrevious());
                    }}
                    padding='16px 10px'
                    variant='outlined'
                    themecolor='lightGray'
                    weight='semiBold'>
                    {'<'}
                </SwxButton>
                <SwxTypography>{currentPage}</SwxTypography>
                <SwxButton
                    size='small'
                    onClick={() => {
                        dispatch(handleNext());
                    }}
                    padding='16px 10px'
                    themecolor='lightGray'
                    variant='outlined'
                    weight='semiBold'>
                    {'>'}
                </SwxButton>
            </Stack>
            <Stack direction='row' spacing={2}>
                <SwxSelect
                    disableClearable
                    options={createNumberArray(totalPages)}
                    onChange={value => dispatch(setCurrentPage(value))}
                />
            </Stack>
        </Stack>
    );
}
