import React, { ReactNode } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import './globals.css'
import { Expletus_Sans } from 'next/font/google'

const expletus = Expletus_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Joshua Sendzul | Frontend Developer',
  description: 'Portfolio of Joshua Sendzul, a frontend developer specializing in React, Next.js, and Web3 technologies.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={expletus.className}>
      <body className="m-h-screen font-sans overflow-x-hidden bg-slate-50">
        <AuroraBackground>
          {children}
        </AuroraBackground>
      </body>
    </html>
  )
}