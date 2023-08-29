import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import ModalReducer from './slices/modal-slice';
import addEmployeeStepsReducer from './slices/add-employee-steps-slice';
import paginationSlice from './slices/paginationSlice';

const rootReducer = combineReducers({
    modal: ModalReducer,
    addEmployeeSteps: addEmployeeStepsReducer,
    pagination: paginationSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
