import Footer from '@/components/footer'
import NavigationBar from '@/components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
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
      <body className={inter.className} style={{ minHeight: '100vh' }}>
        <NavigationBar />
        {children}
        {/* <BootstrapClient /> */}
        <Footer />
        <Toaster richColors position='top-right'/>
      </body>
    </html>
  )
}
