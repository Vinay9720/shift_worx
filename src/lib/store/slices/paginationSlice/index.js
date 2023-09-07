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
        handleNext: (state, action) => {
            const { paginationName } = action.payload;
            const pagination = state[paginationName];
            const totalPages = Math.ceil(pagination.totalItems / pagination.itemsPerPage);

            state[paginationName] = {
                ...pagination,
                currentPage: parseInt(pagination.currentPage, 10) + 1,
                isPrevious: true,
                isNext: parseInt(pagination.currentPage, 10) < totalPages,
            };
        },
        handlePrevious: (state, action) => {
            const { paginationName } = action.payload;
            const pagination = state[paginationName];

            state[paginationName] = {
                ...pagination,
                currentPage: parseInt(pagination.currentPage, 10) - 1,
                isNext: true,
                isPrevious: parseInt(pagination.currentPage, 10) > 1,
            };
        },
        setCurrentPage: (state, action) => {
            const { paginationName, currentPage } = action.payload;
            state[paginationName].currentPage = currentPage;
        },
        setItemsPerPage: (state, action) => {
            const { paginationName, itemsPerPage } = action.payload;
            state[paginationName].itemsPerPage = itemsPerPage;
            state[paginationName].currentPage = 1;
        },
        setPagination: (state, action) => {
            const { paginationName, currentPage, itemsPerPage, totalItems } = action.payload;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            state[paginationName] = {
                ...state[paginationName],
                currentPage: parseInt(currentPage, 10),
                itemsPerPage: parseInt(itemsPerPage, 10),
                totalItems: parseInt(totalItems, 10),
                totalPages: parseInt(totalPages, 10),
                isPrevious: parseInt(currentPage, 10) > 1,
                isNext: parseInt(currentPage, 10) < totalPages,
            };
        },
        clearPagination: (state, action) => {
            const { paginationName } = action.payload;
            state[paginationName] = { ...initialState };
        },
    },
});

export const { handleNext, handlePrevious, setCurrentPage, setItemsPerPage, setPagination, clearPagination } =
    paginationSlice.actions;
export default paginationSlice.reducer;
