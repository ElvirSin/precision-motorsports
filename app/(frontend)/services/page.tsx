'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles.css'

// Mapping car images to manufacturer logos
const carData = [
  {
    car: '/manufacturers/car-images/aston-martin.webp',
    logo: '/manufacturers/astonmartin.webp',
    name: 'Aston Martin',
    slug: 'aston-martin',
  },
  {
    car: '/manufacturers/car-images/audi.webp',
    logo: '/manufacturers/audi.webp',
    name: 'Audi',
    slug: 'audi',
  },
  {
    car: '/manufacturers/car-images/bentley.webp',
    logo: '/manufacturers/bentley.webp',
    name: 'Bentley',
    slug: 'bentley',
  },
  {
    car: '/manufacturers/car-images/bmw.webp',
    logo: '/manufacturers/bmw.webp',
    name: 'BMW',
    slug: 'bmw',
  },
  {
    car: '/manufacturers/car-images/ferrari.webp',
    logo: '/manufacturers/ferrari.webp',
    name: 'Ferrari',
    slug: 'ferrari',
  },
  {
    car: '/manufacturers/car-images/lamborghini.webp',
    logo: '/manufacturers/lamborghini.webp',
    name: 'Lamborghini',
    slug: 'lamborghini',
  },
  {
    car: '/manufacturers/car-images/maserati.webp',
    logo: '/manufacturers/maserati.webp',
    name: 'Maserati',
    slug: 'maserati',
  },
  {
    car: '/manufacturers/car-images/mclaren.webp',
    logo: '/manufacturers/mclaren.webp',
    name: 'McLaren',
    slug: 'mclaren',
  },
  {
    car: '/manufacturers/car-images/mercedes.webp',
    logo: '/manufacturers/mercedes.webp',
    name: 'Mercedes-Benz',
    slug: 'mercedes',
  },
  {
    car: '/manufacturers/car-images/porsche.webp',
    logo: '/manufacturers/porsche.webp',
    name: 'Porsche',
    slug: 'porsche',
  },
  {
    car: '/manufacturers/car-images/range-rover.webp',
    logo: '/manufacturers/rangerover.webp',
    name: 'Range Rover',
    slug: 'range-rover',
  },
  {
    car: '/manufacturers/car-images/rollsroye.webp',
    logo: '/manufacturers/rollsroyce.webp',
    name: 'Rolls-Royce',
    slug: 'rolls-royce',
  },
  {
    car: '/manufacturers/car-images/jaguar.webp',
    logo: '/manufacturers/jaguar.webp',
    name: 'Jaguar',
    slug: 'jaguar',
  },
  {
    car: '/manufacturers/car-images/mini.webp',
    logo: '/manufacturers/mini.webp',
    name: 'Mini',
    slug: 'mini',
  },
  {
    car: '/manufacturers/car-images/vw.webp',
    logo: '/manufacturers/vw.webp',
    name: 'Volkswagen',
    slug: 'volkswagen',
  },
]

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getPreviousIndex = (index: number) => {
    return index === 0 ? carData.length - 1 : index - 1
  }

  const getNextIndex = (index: number) => {
    return index === carData.length - 1 ? 0 : index + 1
  }

  const goToPrevious = () => {
    setCurrentIndex(getPreviousIndex(currentIndex))
  }

  const goToNext = () => {
    setCurrentIndex(getNextIndex(currentIndex))
  }

  const previousIndex = getPreviousIndex(currentIndex)

  const nextIndex = getNextIndex(currentIndex)

  return (
    <div className="homepage">
      {/* First Section - Hero Section */}
      <section className="hero services-hero" style={{ backgroundColor: '#000' }}>
        <div className="hero-content services-hero-content">
          <h3 className="hero-subtitle">TAILORED SERVICES FOR EUROPEAN & EXOTIC VEHICLES</h3>
          <h2 className="hero-title">
            YOUR DEDICATED TEAM FOR MAINTENANCE, REPAIR AND PERFORMANCE UPGRADES
          </h2>
        </div>

        {/* Carousel */}
        <div className="services-carousel-container">
          <button
            className="carousel-nav-button carousel-nav-left"
            onClick={goToPrevious}
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="carousel-wrapper">
            {/* Left (Previous) */}
            <Link
              href={`/manufacturers/${carData[previousIndex].slug}`}
              className="carousel-item carousel-item-side"
            >
              <div className="carousel-item-car">
                <Image
                  src={carData[previousIndex].car}
                  alt={carData[previousIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Center (Current) */}
            <Link
              href={`/manufacturers/${carData[currentIndex].slug}`}
              className="carousel-item carousel-item-center"
            >
              <div className="carousel-item-car">
                <Image
                  src={carData[currentIndex].car}
                  alt={carData[currentIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Right (Next) */}
            <Link
              href={`/manufacturers/${carData[nextIndex].slug}`}
              className="carousel-item carousel-item-side"
            >
              <div className="carousel-item-car">
                <Image
                  src={carData[nextIndex].car}
                  alt={carData[nextIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>

          <button
            className="carousel-nav-button carousel-nav-right"
            onClick={goToNext}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Second Section - Manufacturers Section (100% identical to main page) */}
      <section className="manufacturers-section">
        <div className="manufacturers-container">
          <div className="manufacturers-grid">
            <Link href="/manufacturers/aston-martin" className="manufacturer-item">
              <Image
                src="/manufacturers/astonmartin.webp"
                alt="Aston Martin"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/audi" className="manufacturer-item">
              <Image
                src="/manufacturers/audi.webp"
                alt="Audi"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/bentley" className="manufacturer-item">
              <Image
                src="/manufacturers/bentley.webp"
                alt="Bentley"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/bmw" className="manufacturer-item">
              <Image
                src="/manufacturers/bmw.webp"
                alt="BMW"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/ferrari" className="manufacturer-item">
              <Image
                src="/manufacturers/ferrari.webp"
                alt="Ferrari"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/lamborghini" className="manufacturer-item">
              <Image
                src="/manufacturers/lamborghini.webp"
                alt="Lamborghini"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/maserati" className="manufacturer-item">
              <Image
                src="/manufacturers/maserati.webp"
                alt="Maserati"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/mclaren" className="manufacturer-item">
              <Image
                src="/manufacturers/mclaren.webp"
                alt="McLaren"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/mercedes" className="manufacturer-item">
              <Image
                src="/manufacturers/mercedes.webp"
                alt="Mercedes-Benz"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/mini" className="manufacturer-item">
              <Image
                src="/manufacturers/mini.webp"
                alt="Mini"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/porsche" className="manufacturer-item">
              <Image
                src="/manufacturers/porsche.webp"
                alt="Porsche"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/range-rover" className="manufacturer-item">
              <Image
                src="/manufacturers/rangerover.webp"
                alt="Range Rover"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/rolls-royce" className="manufacturer-item">
              <Image
                src="/manufacturers/rollsroyce.webp"
                alt="Rolls-Royce"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/volkswagen" className="manufacturer-item">
              <Image
                src="/manufacturers/vw.webp"
                alt="Volkswagen"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/jaguar" className="manufacturer-item">
              <Image
                src="/manufacturers/jaguar.webp"
                alt="Jaguar"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/manufacturers/other" className="manufacturer-item">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                }}
              >
                OTHER
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Third Section - Services Section */}
      <section className="services-detail-section">
        <div className="services-detail-container">
          <div className="services-detail-grid">
            {/* Maintenance Box */}
            <div className="service-detail-box">
              <div className="service-detail-image">
                <Image
                  src="/services/maintenance.webp"
                  alt="Maintenance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="service-detail-title">MAINTENANCE</h3>
              <p className="service-detail-description">
                ROUTINE CARE FOR PEAK PERFORMANCE AND LONGEVITY.
              </p>
              <ul className="service-detail-list">
                <li>OIL CHANGES</li>
                <li>FLUID CHECKS AND REPLACEMENTS</li>
                <li>BRAKE INSPECTION & REPLACEMENT</li>
                <li>DRIVETRAIN</li>
                <li>PREVENTIVE MAINTENANCE</li>
                <li>MILEAGE SERVICE</li>
                <li>SUSPENSION & STEERING ALIGNMENTS</li>
                <li>BRAKE SYSTEM INSPECTION & MAINTENANCE</li>
                <li>TIRE ROTATION & BALANCING</li>
                <li>...AND MUCH MORE!</li>
              </ul>
              <p className="service-detail-conclusion">
                Keep your vehicle running at its best with our comprehensive maintenance solutions
                tailored to every need.
              </p>
            </div>

            {/* Repair / Service Box */}
            <div className="service-detail-box">
              <div className="service-detail-image">
                <Image
                  src="/services/repair.webp"
                  alt="Repair / Service"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="service-detail-title">REPAIR / SERVICE</h3>
              <p className="service-detail-description">
                EXPERT DIAGNOSTICS AND QUALITY REPAIRS FOR EVERY VEHICLE NEED.
              </p>
              <ul className="service-detail-list">
                <li>ENGINE REPAIR</li>
                <li>DRIVETRAIN REPAIR</li>
                <li>BRAKE SYSTEM REPAIR</li>
                <li>SUSPENSION & STEERING ADJUSTMENTS</li>
                <li>TIRE & WHEEL REPAIR</li>
                <li>...AND MUCH MORE!</li>
              </ul>
              <p className="service-detail-conclusion">
                From minor fixes to major overhauls, we've got every aspect of your vehicle covered.
              </p>
            </div>

            {/* Performance Box */}
            <div className="service-detail-box">
              <div className="service-detail-image">
                <Image
                  src="/services/performance.webp"
                  alt="Performance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="service-detail-title">PERFORMANCE</h3>
              <p className="service-detail-description">
                PERFORMANCE UPGRADE TAILORED FOR DRIVING ENTHUSIASTS.
              </p>
              <ul className="service-detail-list">
                <li>ECU / TCU TUNING</li>
                <li>EXHAUST SYSTEM INSTALLATION</li>
                <li>TURBOCHARGER & SUPERCHARGER INSTALLS</li>
                <li>CUSTOM BUILDS & PROJECTS</li>
                <li>TRACK PREPARATION</li>
                <li>DYNO TESTING</li>
                <li>TURBOCHARGER & SUPERCHARGER SYSTEMS</li>
                <li>EXHAUST SYSTEMS</li>
                <li>TAILORED PERFORMANCE BUILDS</li>
                <li>...AND MUCH MORE!</li>
              </ul>
              <p className="service-detail-conclusion">
                Unleash your vehicle's potential with our comprehensive range of services designed
                for driving enthusiasts.
              </p>
            </div>

            {/* Concierge Box */}
            <div className="service-detail-box">
              <div className="service-detail-image">
                <Image
                  src="/services/concierge.webp"
                  alt="Concierge"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="service-detail-title">CONCIERGE</h3>
              <p className="service-detail-description">
                Automotive concierge services provide a wide range of personalized, high-end, and
                convenience-driven services designed to make vehicle ownership easier, more
                enjoyable, and less time-consuming.
              </p>
              <ul className="service-detail-list">
                <li>GLOVE SERVICE</li>
                <li>VEHICLE MAINTENANCE / REPAIR COORDINATION</li>
                <li>VEHICLE PICKUP & DELIVERY</li>
                <li>DETAILING & CLEANING SERVICE</li>
                <li>RACING SERVICES / TRACK SUPPORT</li>
                <li>...AND MUCH MORE!</li>
              </ul>
              <p className="service-detail-conclusion">
                Enjoy a seamless, stress-free ownership experience with our personalized services
                tailored to meet your every need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
