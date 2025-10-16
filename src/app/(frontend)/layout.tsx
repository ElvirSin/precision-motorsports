import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Precision Motorsports - European and Exotic Automotive Specialists',
  title: 'Precision Motorsports',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <button className="floating-book-button">Book Appointment</button>
      </body>
    </html>
  )
}
