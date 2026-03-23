import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Predicate — Managed AI. Real Results.',
  description:
    'Predicate is an AI services company. We deploy managed AI agents, build purpose-built AI products, and integrate intelligence into your workflows — without the setup, the maintenance, or the headaches.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
