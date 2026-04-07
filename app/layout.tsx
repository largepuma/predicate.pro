import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Predicate - Privacy-first AI access',
  description:
    'Predicate builds privacy-first AI access and inference tools for Chinese-speaking creators, users, and developers.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
