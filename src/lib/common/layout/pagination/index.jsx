'use client';

import { Stack } from '@mui/material';

import { usePagination } from '@/hooks/common';
import { createNumberArray } from '@/lib/util';

import { SwxSelect, SwxButton, SwxTypography } from '../../components';
import { Icon } from '../../icons';

export default function SwxPagination({ itemsPerPageOptions, paginationName, ...rest }) {
    const { currentPage, totalPages, setItemsPerPage, previousPage, nextPage, goToPage } =
        usePagination(paginationName);

    return (
        <Stack direction='row' justifyContent='space-between' {...rest} sx={{ height: '40px' }}>
            <Stack direction='row' spacing={2} alignItems='center'>
                <SwxSelect
                    disableClearable
                    options={itemsPerPageOptions}
                    onChange={value => setItemsPerPage(value)}
                    width='79px'
                    padding='0px'
                    borderRight='lightGray'
                />
                <SwxTypography>Entries per page</SwxTypography>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
                <SwxButton
                    size='small'
                    onClick={previousPage}
                    padding='0px'
                    styles={{ height: '40px', minWidth: '40px' }}
                    variant='outlined'
                    themecolor='lighterGray'
                    weight='semiBold'>
                    <Icon styles={{ fill: '#838A91' }} name='left-arrow' height={14} width={14} />
                </SwxButton>
                <SwxTypography>{currentPage}</SwxTypography>
                <SwxButton
                    size='small'
                    onClick={nextPage}
                    padding='0px'
                    styles={{ height: '40px', minWidth: '40px' }}
                    themecolor='lighterGray'
                    variant='outlined'
                    weight='semiBold'>
                    <Icon styles={{ fill: '#838A91' }} name='right-arrow' height={14} width={14} />
                </SwxButton>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
                <SwxTypography>Page</SwxTypography>
                <SwxSelect
                    disableClearable
                    options={createNumberArray(totalPages)}
                    onChange={value => goToPage(value)}
                    width='79px'
                    padding='0px'
                    borderRight='lightGray'
                />
            </Stack>
        </Stack>
    );
}
