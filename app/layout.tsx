import Footer from '@/components/footer/page'
import NavigationBar from '@/components/navbar/page'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
// import { BootstrapClient } from '@/components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clean Blog',
  description: 'A Clean Blog Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        {/* <BootstrapClient /> */}
        <Footer />
      </body>
    </html>
  )
}
