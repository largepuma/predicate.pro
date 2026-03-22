import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Predicate — Your Bridge to the World of AI',
  description:
    'Predicate is an AI service provider and OpenClaw managed hosting specialist. We deploy and manage powerful AI agents so you can imagine more, create more, and solve more — without the technical setup.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
