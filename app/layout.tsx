import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Empower through blockchain, on YARLabs',
  description: 'Build transparent, tamper-proof solutions on blockchain with YARLabs. Enterprise-grade Web3 infrastructure for modern organizations.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/yarc.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/yarc.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/yarc.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/yarc.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
