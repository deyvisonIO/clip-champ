import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

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
        <div className="px-60 bg-neutral-900 h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
