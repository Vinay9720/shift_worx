'use client';

import { Stack } from '@mui/material';

import { usePagination } from '@/hooks/common';
import { createNumberArray } from '@/lib/util';

import { SwxSelect, SwxButton, SwxTypography } from '../../components';
import { Icon } from '../../icons';
import { styles } from './pagination.styles';

export default function SwxPagination({ itemsPerPageOptions, paginationName, ...rest }) {
    const { currentPage, totalPages, itemsPerPage, setItemsPerPage, previousPage, nextPage, goToPage } =
        usePagination(paginationName);

    return (
        <Stack {...rest} sx={styles.mainContainer}>
            <Stack direction='row' spacing={2} alignItems='center' sx={styles.responsivePreviousNextButtons}>
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
                <SwxTypography className='Manrope'>{currentPage}</SwxTypography>
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
            <Stack sx={styles.subPaginationContainer}>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <SwxSelect
                        disableClearable
                        options={itemsPerPageOptions}
                        onChange={value => setItemsPerPage(value)}
                        value={itemsPerPage.toString()}
                        width='79px'
                        padding='0px'
                        borderRight='lightGray'
                    />
                    <SwxTypography sx={styles.text} className='Manrope'>
                        Entries per page
                    </SwxTypography>
                </Stack>
                <Stack sx={styles.previousNextButtons}>
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
                        <SwxTypography className='Manrope'>{currentPage}</SwxTypography>
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
                </Stack>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <SwxTypography sx={styles.text} className='Manrope'>
                        Page
                    </SwxTypography>
                    <SwxSelect
                        disableClearable
                        options={createNumberArray(totalPages)}
                        onChange={value => goToPage(value)}
                        value={currentPage.toString()}
                        width='79px'
                        padding='0px'
                        borderRight='lightGray'
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
