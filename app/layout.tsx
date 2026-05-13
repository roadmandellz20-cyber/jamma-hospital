import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Jamma Speciality Hospital',
  description: 'World-class speciality healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-body pt-16 md:pt-[72px]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
