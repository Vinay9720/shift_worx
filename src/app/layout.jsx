'use client';

import './globals.css';
import { Manrope } from 'next/font/google';

import {
    SessionProvider,
    StyledComponentsRegistry,
    StyledThemeProvider,
    QueryProvider,
    StoreProvider,
    ToastProvider,
} from '@/lib/providers';

const appFont = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <title>Shiftworx</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </head>
            <body className={appFont.className} suppressHydrationWarning>
                <StyledThemeProvider>
                    <StyledComponentsRegistry>
                        <SessionProvider>
                            <ToastProvider>
                                <StoreProvider>
                                    <QueryProvider>{children}</QueryProvider>
                                </StoreProvider>
                            </ToastProvider>
                        </SessionProvider>
                    </StyledComponentsRegistry>
                </StyledThemeProvider>
            </body>
        </html>
    );
}
