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
                    <ToastProvider>
                        <StoreProvider>
                            <QueryProvider>
                                <StyledComponentsRegistry>
                                    <StyledThemeProvider>{children}</StyledThemeProvider>
                                </StyledComponentsRegistry>
                            </QueryProvider>
                        </StoreProvider>
                    </ToastProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
