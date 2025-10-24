'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import ReviewsSection from './components/ReviewsSection'
import GoogleAnalytics from './components/GoogleAnalytics'
import AnalyticsProvider from './components/AnalyticsProvider'
import './styles.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const [isExpanded, setIsExpanded] = useState(false)

  // Close expanded buttons when user interacts with page (but not with floating buttons)
  useEffect(() => {
    const handleInteraction = (e: Event) => {
      // Check if the click/touch is within the floating button container
      const floatingContainer = document.querySelector('.floating-inquire-container')
      if (floatingContainer && floatingContainer.contains(e.target as Node)) {
        return // Don't close if clicking within floating buttons
      }

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

  const handleButtonClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleCallClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
    window.location.href = 'tel:+12483818200'
  }

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <AnalyticsProvider />
        <main>{children}</main>
        <ReviewsSection />
        <ContactSection />
        <Footer />
        <div className="floating-inquire-container">
          {isExpanded ? (
            <div className="floating-buttons-expanded">
              <button
                className="floating-call-button"
                onClick={handleCallClick}
                onTouchEnd={handleCallClick}
              >
                📞 (248) 381-8200
              </button>
              <Link href="/book-now">
                <button
                  className="floating-book-button-expanded"
                  onClick={() => setIsExpanded(false)}
                >
                  📅 Book Appointment
                </button>
              </Link>
            </div>
          ) : (
            <button
              className="floating-inquire-button"
              onClick={handleButtonClick}
              onTouchEnd={handleButtonClick}
            >
              Inquire Now
            </button>
          )}
        </div>
      </body>
    </html>
  )
}
