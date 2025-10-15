'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationProps {
  activePage: string
}

export default function Navigation({ activePage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false)
  }

  const manufacturers = [
    { name: 'Aston Martin', slug: 'aston-martin' },
    { name: 'Audi', slug: 'audi' },
    { name: 'Bentley', slug: 'bentley' },
    { name: 'BMW', slug: 'bmw' },
    { name: 'Ferrari', slug: 'ferrari' },
    { name: 'Lamborghini', slug: 'lamborghini' },
    { name: 'Maserati', slug: 'maserati' },
    { name: 'McLaren', slug: 'mclaren' },
    { name: 'Mercedes-Benz', slug: 'mercedes' },
    { name: 'Mini', slug: 'mini' },
    { name: 'Porsche', slug: 'porsche' },
    { name: 'Range Rover', slug: 'range-rover' },
    { name: 'Rolls-Royce', slug: 'rolls-royce' },
    { name: 'Volkswagen', slug: 'volkswagen' },
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
            <button
              className={`nav-link nav-button ${activePage === 'services' ? 'active' : ''}`}
              onClick={toggleServicesDropdown}
            >
              SERVICES
            </button>
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
                    <span className="dropdown-icon">🚗</span>
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
          <Link href="/contact" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>
            CONTACT US
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="header-icons desktop-icons">
          <span className="icon">📞</span>
          <span className="icon">🔍</span>
        </div>

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
        <Link
          href="/services"
          className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          SERVICES
        </Link>
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
        <Link
          href="/contact"
          className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          CONTACT US
        </Link>
        <div className="mobile-icons">
          <span className="icon">📞</span>
          <span className="icon">🔍</span>
        </div>
      </nav>
    </header>
  )
}
