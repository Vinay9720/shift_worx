'use client';

import { Stack } from '@mui/material';

import { usePagination } from '@/hooks/common';
import { createNumberArray } from '@/lib/util';

import { SwxSelect, SwxButton, SwxTypography } from '../../components';

export default function SwxPagination({ itemsPerPageOptions, paginationName, ...rest }) {
    const { currentPage, totalPages, setItemsPerPage, previousPage, nextPage, goToPage } =
        usePagination(paginationName);

    return (
        <Stack direction='row' justifyContent='space-between' {...rest}>
            <Stack direction='row' spacing={2}>
                <SwxSelect disableClearable options={itemsPerPageOptions} onChange={value => setItemsPerPage(value)} />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
                <SwxButton
                    size='small'
                    onClick={previousPage}
                    padding='16px 10px'
                    variant='outlined'
                    themecolor='lightGray'
                    weight='semiBold'>
                    {'<'}
                </SwxButton>
                <SwxTypography>{currentPage}</SwxTypography>
                <SwxButton
                    size='small'
                    onClick={nextPage}
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
                    onChange={value => goToPage(value)}
                />
            </Stack>
        </Stack>
    );
}
