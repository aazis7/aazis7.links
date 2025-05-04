import type { Metadata } from 'next';
import {
    SITE_BASE_URL,
    SITE_TITLE,
    SITE_DESCRIPTION,
    SITE_FAVICON,
    SITE_APPLE_ICON,
    SITE_OG_IMAGE,
} from '@/lib/constants';
import { Public_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from '@/components/ui/toaster';

const publicSans = Public_Sans({
    variable: '--font-public-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_BASE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_TITLE}`,
    },
    description: SITE_DESCRIPTION,
    icons: {
        icon: SITE_FAVICON,
        apple: SITE_APPLE_ICON,
    },
    openGraph: {
        images: SITE_OG_IMAGE,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: SITE_BASE_URL,
        siteName: SITE_TITLE,
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: SITE_TITLE,
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content="aazis's links"
                />
            </head>
            <body className={`${publicSans.variable} antialiased`}>
                {children}
                <Analytics mode="production" />
                <SpeedInsights />
                <Toaster />
            </body>
        </html>
    );
}
