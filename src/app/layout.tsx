import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitch Champ',
  description: 'Find all of yours twitch clips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <div className="px-60 pt-5 bg-neutral-900 h-max min-h-screen pb-2">
            <Suspense fallback="Loading...">
              {children}
            </Suspense>
          </div>
      </body>
    </html>
  )
}
