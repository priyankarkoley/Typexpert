import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Typexpert - Type Faster',
  description: 'A webapp to help you in learn touchtyping & type faster. Practise typing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar />{children}</body>
    </html>
  )
}
