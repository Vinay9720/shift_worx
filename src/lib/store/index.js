import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import ModalReducer from './slices/modal-slice';
import addEmployeeModuleReducer from './slices/add-employee-module';
import paginationSlice from './slices/paginationSlice';
import editEmployeeModuleReducer from './slices/edit-employee-module';
import adminNotesModuleReducer from './slices/admin-notes-module';
import {
    notesFilterReducer,
    employeesFilterReducer,
    ptoFilterSlice,
    scheduleFilterReducer,
    expirationsFilterReducer,
    scheduleTemplateFilterReducer,
} from './slices/filter';
import adminScheduleReducer from './slices/admin-schedule-module';
import applicationReducer from './slices/application';
import tabSlice from './slices/tabs-slice';
import adminScheduleTemplatesReducer from './slices/admin-schedule-templates-module';

const rootReducer = combineReducers({
    application: applicationReducer,
    modals: ModalReducer,
    addEmployeeModule: addEmployeeModuleReducer,
    pagination: paginationSlice,
    editEmployeeModule: editEmployeeModuleReducer,
    adminNotesModule: adminNotesModuleReducer,
    notersFilter: notesFilterReducer,
    employeesFilter: employeesFilterReducer,
    ptoFilter: ptoFilterSlice,
    expirationsFilter: expirationsFilterReducer,
    scheduleFilter: scheduleFilterReducer,
    adminScheduleModule: adminScheduleReducer,
    adminScheduleTemplatesModule: adminScheduleTemplatesReducer,
    tabs: tabSlice,
    scheduleTemplateFilter: scheduleTemplateFilterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
