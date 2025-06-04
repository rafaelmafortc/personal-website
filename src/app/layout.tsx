import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from '@/provider/theme-provider';
import './globals.css';

export const metadata: Metadata = {
    title: 'Rafael Mafort Coimbra',
    description: 'powered by Rafael Mafort Coimbra',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'pt-BR';

    return (
        <html lang={lang} suppressHydrationWarning>
            <head>
                <link
                    rel="icon"
                    href="/profile-photo.svg"
                    type="image/x-icon"
                />
            </head>
            <body>
                <NextIntlClientProvider locale={lang}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
