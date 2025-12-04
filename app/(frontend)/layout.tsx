import React from 'react'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ClientLayoutWrapper from './components/ClientLayoutWrapper'
import './styles.css'

// Optimize Google Fonts - self-hosted and non-render-blocking
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
})

// Default metadata - can be overridden by child pages
export const metadata: Metadata = {
  title: {
    default: 'European & Exotic Car Service | Precision Motorsports',
    template: '%s | Precision Motorsports',
  },
  description:
    'Precision Motorsports offers expert service for European, exotic, and classic vehicles. Your top dealership alternative in Farmington Hills, MI.',
  keywords:
    'Precision Motorsports specializes in expert maintenance and repair for BMW, Mercedes-Benz, Audi, Porsche, and other European, exotic, and classic vehicles. Experience dealership-quality service with personalized care in Farmington Hills, MI.',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
