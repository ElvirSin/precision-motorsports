'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationProps {
  activePage: string
}

export default function Navigation({ activePage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      // Lock body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      // Restore scroll position (extract number from "-123px" format)
      if (scrollY) {
        const savedScrollY = Math.abs(parseInt(scrollY.replace('px', ''), 10))
        window.scrollTo(0, savedScrollY)
      }
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        const savedScrollY = Math.abs(parseInt(scrollY.replace('px', ''), 10))
        window.scrollTo(0, savedScrollY)
      }
    }
  }, [isMobileMenuOpen])

  const manufacturers = [
    { name: 'Aston Martin', slug: 'aston-martin', icon: '/manufacturers/astonmartin.webp' },
    { name: 'Audi', slug: 'audi', icon: '/manufacturers/audi.webp' },
    { name: 'Bentley', slug: 'bentley', icon: '/manufacturers/bentley.webp' },
    { name: 'BMW', slug: 'bmw', icon: '/manufacturers/bmw.webp' },
    { name: 'Ferrari', slug: 'ferrari', icon: '/manufacturers/ferrari.webp' },
    { name: 'Jaguar', slug: 'jaguar', icon: '/manufacturers/jaguar.png' },
    { name: 'Lamborghini', slug: 'lamborghini', icon: '/manufacturers/lamborghini.webp' },
    { name: 'Maserati', slug: 'maserati', icon: '/manufacturers/maserati.webp' },
    { name: 'McLaren', slug: 'mclaren', icon: '/manufacturers/mclaren.webp' },
    { name: 'Mercedes-Benz', slug: 'mercedes', icon: '/manufacturers/mercedes.webp' },
    { name: 'Mini', slug: 'mini', icon: '/manufacturers/mini.webp' },
    { name: 'Porsche', slug: 'porsche', icon: '/manufacturers/porsche.webp' },
    { name: 'Range Rover', slug: 'range-rover', icon: '/manufacturers/rangerover.webp' },
    { name: 'Rolls-Royce', slug: 'rolls-royce', icon: '/manufacturers/rollsroyce.webp' },
    { name: 'Volkswagen', slug: 'volkswagen', icon: '/manufacturers/vw.webp' },
    { name: 'Other', slug: 'other', icon: '/logo.jpg' },
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Precision Motorsports"
              width={200}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navigation desktop-nav">
          <Link href="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>
            HOME
          </Link>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`nav-link nav-button ${activePage === 'services' ? 'active' : ''}`}
              onClick={closeServicesDropdown}
            >
              SERVICES
            </Link>
            <div className={`dropdown-menu ${isServicesDropdownOpen ? 'active' : ''}`}>
              <Link
                href="/services"
                className="dropdown-link dropdown-main"
                onClick={closeServicesDropdown}
              >
                <span className="dropdown-icon">⚙️</span>
                All Services
              </Link>
              <div className="dropdown-divider"></div>
              <div className="dropdown-section">
                <div className="dropdown-section-title">Manufacturer Services</div>
                {manufacturers.map((manufacturer) => (
                  <Link
                    key={manufacturer.slug}
                    href={`/manufacturers/${manufacturer.slug}`}
                    className="dropdown-link dropdown-manufacturer"
                    onClick={closeServicesDropdown}
                  >
                    <Image
                      src={manufacturer.icon}
                      alt={manufacturer.name}
                      width={20}
                      height={20}
                      className="dropdown-manufacturer-icon"
                    />
                    {manufacturer.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className={`nav-link ${activePage === 'about' ? 'active' : ''}`}>
            ABOUT US
          </Link>
          <Link href="/gallery" className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}>
            GALLERY
          </Link>
          <span
            className="nav-link"
            style={{
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>STORE</span>
            <span style={{ fontSize: '0.5em', color: 'red', lineHeight: '1' }}>(coming soon)</span>
          </span>
          <Link href="/contact" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link
          href="/"
          className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          HOME
        </Link>

        {/* Mobile Services Section */}
        <div className="mobile-services-section">
          <button
            className={`nav-link mobile-services-toggle ${
              activePage === 'services' ? 'active' : ''
            }`}
            onClick={toggleMobileServices}
          >
            SERVICES
            <span className={`mobile-arrow ${isMobileServicesOpen ? 'active' : ''}`}>▼</span>
          </button>
          <div className={`mobile-services-menu ${isMobileServicesOpen ? 'active' : ''}`}>
            <Link href="/services" className="mobile-services-link" onClick={closeMobileMenu}>
              <span className="mobile-icon">⚙️</span>
              All Services
            </Link>
            <div className="mobile-services-divider"></div>
            <div className="mobile-services-title">Manufacturer Services</div>
            {manufacturers.map((manufacturer) => (
              <Link
                key={manufacturer.slug}
                href={`/manufacturers/${manufacturer.slug}`}
                className="mobile-services-link"
                onClick={closeMobileMenu}
              >
                <Image
                  src={manufacturer.icon}
                  alt={manufacturer.name}
                  width={20}
                  height={20}
                  className="mobile-manufacturer-icon"
                />
                {manufacturer.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          ABOUT US
        </Link>
        <Link
          href="/gallery"
          className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          GALLERY
        </Link>
        <span
          className="nav-link"
          style={{
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <span>STORE</span>
          <span style={{ fontSize: '0.5em', color: 'red', lineHeight: '1' }}>(coming soon)</span>
        </span>
        <Link
          href="/contact"
          className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          CONTACT US
        </Link>
      </nav>
    </header>
  )
}
