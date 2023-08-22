'use client';

import { ThemeProvider } from 'styled-components';

import { white } from '@/styles/theme';

export function StyledThemeProvider({ children }) {
    return <ThemeProvider theme={white}>{children}</ThemeProvider>;
}
