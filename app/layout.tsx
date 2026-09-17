import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const now = localFont({
  src: [
    { path: '../public/fonts/Now-Light.woff', weight: '300', style: 'normal' },
    { path: '../public/fonts/Now-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Now-Medium.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/Now-Bold.woff', weight: '700', style: 'normal' },
    { path: '../public/fonts/Now-Black.woff', weight: '900', style: 'normal' },
  ],
  variable: '--font-now',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Seriate Innovations — The Autoformulator for Semi Solid Formulations',
  description:
    'Accelerating and Unbottlenecking DoE for your Complex Semi Solid Formulations with The Autoformulator. On demand rapid preparation and DoE of formulations.',
  generator: 'v0.app',
  icons: {
    icon: '/seriate-icon.png',
    apple: '/seriate-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${now.variable} bg-white`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
