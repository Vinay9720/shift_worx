'use client';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export function QueryProvider({ children }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
