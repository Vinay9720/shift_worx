import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import ModalReducer from './slices/modal-slice';
import addEmployeeModuleReducer from './slices/add-employee-module';
import paginationSlice from './slices/paginationSlice';
import editEmployeeModuleReducer from './slices/edit-employee-module';
import adminNotesModuleReducer from './slices/admin-notes-module';

const rootReducer = combineReducers({
    modals: ModalReducer,
    addEmployeeModule: addEmployeeModuleReducer,
    pagination: paginationSlice,
    editEmployeeModule: editEmployeeModuleReducer,
    adminNotesModule: adminNotesModuleReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
