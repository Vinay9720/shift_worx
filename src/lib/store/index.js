import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import ModalReducer from './slices/modal-slice';
import addEmployeeStepsReducer from './slices/add-employee-steps-slice';

const rootReducer = combineReducers({
    modal: ModalReducer,
    addEmployeeSteps: addEmployeeStepsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
