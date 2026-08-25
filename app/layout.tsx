import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ERN CAR CARE | Aracınıza Dair Her Şey',
  description: 'ERN CAR CARE — Kağıthane’de PPF kaplama, cam filmi, pasta cila, detaylı araç temizliği, boyasız göçük düzeltme ve ücretsiz vale hizmeti.',
  icons: {
    icon: '/favicon-ern-car-care.png',
    shortcut: '/favicon-ern-car-care.png',
    apple: '/favicon-ern-car-care.png',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f8f8' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/ethnocentric" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
