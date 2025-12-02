'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
import Navigation from './components/Navigation'
import './styles.css'

// Optimize Google Fonts - self-hosted and non-render-blocking
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
})

// Dynamically import heavy components to reduce initial bundle size
const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true,
})
const ContactSection = dynamic(() => import('./components/ContactSection'), {
  ssr: true,
})
const ReviewsSection = dynamic(() => import('./components/ReviewsSection'), {
  ssr: true,
})
const GoogleAnalytics = dynamic(() => import('./components/GoogleAnalytics'), {
  ssr: false,
})
const AnalyticsProvider = dynamic(() => import('./components/AnalyticsProvider'), {
  ssr: false,
})

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  // Function to determine active page based on pathname
  const getActivePage = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/gallery') return 'gallery'
    if (pathname === '/contact') return 'contact'
    if (pathname === '/services' || pathname.startsWith('/manufacturers/')) return 'services'
    return 'home' // default fallback
  }

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

  // Check if current page should exclude certain sections
  const shouldExcludeSections =
    pathname === '/privacy-policy' ||
    pathname === '/terms-and-conditions' ||
    pathname.startsWith('/manufacturers/') ||
    pathname === '/gallery' ||
    pathname === '/contact' ||
    pathname === '/book-now'

  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <GoogleAnalytics />
        <AnalyticsProvider />
        <Navigation activePage={getActivePage()} />
        <main>{children}</main>
        {!shouldExcludeSections && <ReviewsSection />}
        {!shouldExcludeSections && <ContactSection />}
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
