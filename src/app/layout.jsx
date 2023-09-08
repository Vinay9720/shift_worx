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

export const metadata = {
    title: 'Shiftworx',
    description: '',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <title>Shiftworx</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </head>
            <body className={appFont.className} suppressHydrationWarning>
                <SessionProvider>
                    <StyledComponentsRegistry>
                        <StyledThemeProvider>
                            <ToastProvider>
                                <StoreProvider>
                                    <QueryProvider>{children}</QueryProvider>
                                </StoreProvider>
                            </ToastProvider>
                        </StyledThemeProvider>
                    </StyledComponentsRegistry>
                </SessionProvider>
            </body>
        </html>
    );
}
