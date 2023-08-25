'use client';

import { Provider } from 'react-redux';

import { store } from '../store';

export function StoreProvider({ children }) {
    console.log('store======>', store.getState());
    return <Provider store={store}>{children}</Provider>;
}
