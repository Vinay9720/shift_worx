import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import ModalReducer from './slices/modal-slice';
import addEmployeeModuleReducer from './slices/add-employee-module';
import paginationSlice from './slices/paginationSlice';

const rootReducer = combineReducers({
    modal: ModalReducer,
    addEmployeeModule: addEmployeeModuleReducer,
    pagination: paginationSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
