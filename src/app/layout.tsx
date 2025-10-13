import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://axionventures.com.au'),
  title: {
    default: 'Axion Ventures — AI-Native Venture Studio in Australia',
    template: '%s — Axion Ventures'
  },
  description: 'Axion Ventures is an AI-native venture studio building scalable, ethical startups. Explore our ventures, approach, and collaboration model.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://axionventures.com.au/',
    siteName: 'Axion Ventures',
    title: 'Axion Ventures — AI-Native Venture Studio in Australia',
    description: 'Building ventures that scale. Ethically. Intelligently. Together.',
    images: [{ url: '/og-cover.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axion Ventures — AI-Native Venture Studio in Australia',
    description: 'Building ventures that scale. Ethically. Intelligently. Together.',
    images: ['/og-cover.jpg']
  },
  robots: { index: true, follow: true }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Axion Ventures",
        "url": "https://axionventures.com.au/",
        "logo": "https://axionventures.com.au/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/axion-ventures-au",
          "https://x.com/axionventuresau",
          "https://github.com/axionventures"
        ],
        "founder": { "@type": "Person", "name": "Ethan Cornwill" }
      },
      {
        "@type": "WebSite",
        "url": "https://axionventures.com.au/",
        "name": "Axion Ventures",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://axionventures.com.au/search?q={query}",
          "query-input": "required name=query"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://axionventures.com.au/" },
          { "@type": "ListItem", "position": 2, "name": "Ventures", "item": "https://axionventures.com.au/ventures" },
          { "@type": "ListItem", "position": 3, "name": "Approach", "item": "https://axionventures.com.au/approach" },
          { "@type": "ListItem", "position": 4, "name": "About", "item": "https://axionventures.com.au/about" }
        ]
      }
    ]
  };
  
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
        <meta name="theme-color" content="#0b0f1a" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
