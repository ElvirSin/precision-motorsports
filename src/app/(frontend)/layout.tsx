'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import './styles.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const [isExpanded, setIsExpanded] = useState(false)

  // Close expanded buttons when user interacts with page
  useEffect(() => {
    const handleInteraction = () => {
      if (isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [isExpanded])

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  const handleCallClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.location.href = 'tel:+12483818200'
  }

  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Will navigate to booking page
  }

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <div className="floating-inquire-container">
          {isExpanded ? (
            <div className="floating-buttons-expanded">
              <button className="floating-call-button" onClick={handleCallClick}>
                📞 (248) 381-8200
              </button>
              <Link href="/book-appointment">
                <button className="floating-book-button-expanded" onClick={handleBookClick}>
                  📅 Book Appointment
                </button>
              </Link>
            </div>
          ) : (
            <button className="floating-inquire-button" onClick={handleButtonClick}>
              Inquire Now
            </button>
          )}
        </div>
      </body>
    </html>
  )
}
