import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anvesh — GenAI Cultural Travel Platform',
  description:
    'Discover the living culture of any destination with AI-powered heritage storytelling, curated itineraries, and authentic local experiences.',
  keywords: ['cultural travel', 'AI travel', 'heritage tourism', 'India travel', 'GenAI'],
  authors: [{ name: 'Anvesh' }],
  openGraph: {
    title: 'Anvesh — GenAI Cultural Travel Platform',
    description: 'Discover the soul of a place — story by story.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
