import type { Metadata } from 'next';

import { ThemeProvider } from '@/provider/theme-provider';
import './globals.css';

export const metadata: Metadata = {
    title: 'Rafael Mafort Coimbra',
    description: 'powered by Rafael Mafort Coimbra',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="icon"
                    href="/profile-photo.svg"
                    type="image/x-icon"
                />
            </head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
