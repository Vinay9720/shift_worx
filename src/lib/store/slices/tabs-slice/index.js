import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTab: '',
};

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setCurrentTab: (state, action) => {
            const { tabsName, currentTab } = action.payload;
            state[tabsName].currentTab = currentTab;
        },
        clearTabs: (state, action) => {
            const { tabsName } = action.payload;
            state[tabsName] = { ...initialState };
        },
        setTabs: (state, action) => {
            const { tabsName, currentTab } = action.payload;
            state[tabsName] = {
                ...state[tabsName],
                currentTab,
            };
        },
    },
});

export const { setCurrentTab, clearTabs, setTabs } = tabSlice.actions;
export default tabSlice.reducer;
