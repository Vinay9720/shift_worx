import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 10,
    totalPages: 1,
    isNext: false,
    isPrevious: false,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        handleNext: state => {
            const totalPages = Math.ceil(state.totalItems / state.itemsPerPage);
            state.currentPage = parseInt(state.currentPage, 10) + 1;
            state.isPrevious = true;
            state.isNext = state.currentPage < totalPages;
        },
        handlePrevious: state => {
            state.currentPage = parseInt(state.currentPage, 10) - 1;
            state.isNext = true;
            state.isPrevious = state.currentPage > 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
            state.currentPage = 1;
        },
        setPagination: (state, action) => {
            const { payload } = action;
            const totalPages = Math.ceil(payload.totalItems / payload.itemsPerPage);
            state.currentPage = payload.currentPage;
            state.itemsPerPage = payload.itemsPerPage;
            state.totalItems = payload.totalItems;
            state.totalPages = totalPages;
            state.isPrevious = payload.currentPage > 1;
            state.isNext = payload.currentPage < totalPages;
        },
        clearPagination: state => {
            state.currentPage = 1;
            state.itemsPerPage = 10;
            state.totalItems = 10;
            state.isPrevious = false;
            state.isNext = false;
        },
    },
});

export const { handleNext, handlePrevious, setCurrentPage, setItemsPerPage, setPagination, clearPagination } =
    paginationSlice.actions;
export default paginationSlice.reducer;
