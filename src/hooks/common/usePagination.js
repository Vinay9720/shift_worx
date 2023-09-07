'use client';

import { useDispatch, useSelector } from 'react-redux';

import {
    handleNext,
    handlePrevious,
    setCurrentPage,
    setItemsPerPage as setItemsOnPage,
    setPagination as setPaginationState,
    clearPagination as clearPaginationState,
} from '@/lib/store/slices/paginationSlice';

const initialState = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 10,
    totalPages: 1,
    isNext: false,
    isPrevious: false,
};

export const usePagination = paginationName => {
    const dispatch = useDispatch();

    const pagination = useSelector(state => state.pagination[paginationName] || initialState);

    const nextPage = () => {
        dispatch(handleNext({ paginationName }));
    };

    const previousPage = () => {
        dispatch(handlePrevious({ paginationName }));
    };

    const goToPage = page => {
        dispatch(setCurrentPage({ paginationName, currentPage: page }));
    };

    const setItemsPerPage = itemsPerPage => {
        dispatch(setItemsOnPage({ paginationName, itemsPerPage }));
    };

    const setPagination = ({ currentPage, itemsPerPage, totalItems }) => {
        dispatch(
            setPaginationState({
                paginationName,
                currentPage,
                itemsPerPage,
                totalItems,
            })
        );
    };

    const clearPagination = () => {
        dispatch(clearPaginationState({ paginationName }));
    };

    return {
        currentPage: pagination.currentPage,
        itemsPerPage: pagination.itemsPerPage,
        totalItems: pagination.totalItems,
        totalPages: pagination.totalPages,
        isNext: pagination.isNext,
        isPrevious: pagination.isPrevious,
        nextPage,
        previousPage,
        goToPage,
        setItemsPerPage,
        setPagination,
        clearPagination,
    };
};
