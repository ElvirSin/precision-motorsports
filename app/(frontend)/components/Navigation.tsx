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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

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

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  const manufacturers = [
    { name: 'Aston Martin', slug: 'aston-martin', icon: '/manufacturers/astonmartin.webp' },
    { name: 'Audi', slug: 'audi', icon: '/manufacturers/audi.webp' },
    { name: 'Bentley', slug: 'bentley', icon: '/manufacturers/bentley.webp' },
    { name: 'BMW', slug: 'bmw', icon: '/manufacturers/bmw.webp' },
    { name: 'Ferrari', slug: 'ferrari', icon: '/manufacturers/ferrari.webp' },
    { name: 'Lamborghini', slug: 'lamborghini', icon: '/manufacturers/lamborghini.webp' },
    { name: 'Maserati', slug: 'maserati', icon: '/manufacturers/maserati.webp' },
    { name: 'McLaren', slug: 'mclaren', icon: '/manufacturers/mclaren.webp' },
    { name: 'Mercedes-Benz', slug: 'mercedes', icon: '/manufacturers/mercedes.webp' },
    { name: 'Mini', slug: 'mini', icon: '/manufacturers/mini.webp' },
    { name: 'Porsche', slug: 'porsche', icon: '/manufacturers/porsche.webp' },
    { name: 'Range Rover', slug: 'range-rover', icon: '/manufacturers/rangerover.webp' },
    { name: 'Rolls-Royce', slug: 'rolls-royce', icon: '/manufacturers/rollsroyce.webp' },
    { name: 'Volkswagen', slug: 'volkswagen', icon: '/manufacturers/vw.webp' },
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
