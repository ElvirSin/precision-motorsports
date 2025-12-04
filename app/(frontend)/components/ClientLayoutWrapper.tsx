'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import Navigation from './Navigation'

// Dynamically import heavy components to reduce initial bundle size
const Footer = dynamic(() => import('./Footer'), {
  ssr: true,
})
const ContactSection = dynamic(() => import('./ContactSection'), {
  ssr: true,
})
const ReviewsSection = dynamic(() => import('./ReviewsSection'), {
  ssr: true,
})
const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), {
  ssr: false,
})
const AnalyticsProvider = dynamic(() => import('./AnalyticsProvider'), {
  ssr: false,
})

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
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

  // Add preconnect hints for critical third-party domains early (estimated 620ms LCP savings)
  useEffect(() => {
    // Check if links already exist to avoid duplicates
    const existingPreconnects = document.querySelectorAll('link[rel="preconnect"]')
    const hasVercelStorage = Array.from(existingPreconnects).some(
      (link) =>
        link.getAttribute('href') === 'https://e5vpmxtis8psh5vx.public.blob.vercel-storage.com',
    )
    const hasGoogle = Array.from(existingPreconnects).some(
      (link) => link.getAttribute('href') === 'https://www.google.com',
    )

    // Preconnect to Vercel Blob Storage (for promotion images and media) - 320ms savings
    if (!hasVercelStorage) {
      const vercelStorageLink = document.createElement('link')
      vercelStorageLink.rel = 'preconnect'
      vercelStorageLink.href = 'https://e5vpmxtis8psh5vx.public.blob.vercel-storage.com'
      vercelStorageLink.crossOrigin = 'anonymous'
      document.head.insertBefore(vercelStorageLink, document.head.firstChild)

      // Also add dns-prefetch as fallback
      const vercelStorageDNS = document.createElement('link')
      vercelStorageDNS.rel = 'dns-prefetch'
      vercelStorageDNS.href = 'https://e5vpmxtis8psh5vx.public.blob.vercel-storage.com'
      document.head.insertBefore(vercelStorageDNS, document.head.firstChild)
    }

    // Preconnect to Google (for analytics) - 300ms savings
    if (!hasGoogle) {
      const googleLink = document.createElement('link')
      googleLink.rel = 'preconnect'
      googleLink.href = 'https://www.google.com'
      googleLink.crossOrigin = 'anonymous'
      document.head.insertBefore(googleLink, document.head.firstChild)

      const googleDNS = document.createElement('link')
      googleDNS.rel = 'dns-prefetch'
      googleDNS.href = 'https://www.google.com'
      document.head.insertBefore(googleDNS, document.head.firstChild)
    }
  }, [])

  return (
    <>
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
    </>
  )
}
