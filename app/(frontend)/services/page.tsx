'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles.css'

// Mapping car images to manufacturer logos
const carData = [
  {
    car: '/manufacturers/car-images/aston-martin.png',
    logo: '/manufacturers/astonmartin.webp',
    name: 'Aston Martin',
  },
  { car: '/manufacturers/car-images/audi.png', logo: '/manufacturers/audi.webp', name: 'Audi' },
  {
    car: '/manufacturers/car-images/bentley.png',
    logo: '/manufacturers/bentley.webp',
    name: 'Bentley',
  },
  { car: '/manufacturers/car-images/bmw.png', logo: '/manufacturers/bmw.webp', name: 'BMW' },
  {
    car: '/manufacturers/car-images/ferrari.png',
    logo: '/manufacturers/ferrari.webp',
    name: 'Ferrari',
  },
  {
    car: '/manufacturers/car-images/lamborghini.png',
    logo: '/manufacturers/lamborghini.webp',
    name: 'Lamborghini',
  },
  {
    car: '/manufacturers/car-images/maserati.png',
    logo: '/manufacturers/maserati.webp',
    name: 'Maserati',
  },
  {
    car: '/manufacturers/car-images/mclaren.png',
    logo: '/manufacturers/mclaren.webp',
    name: 'McLaren',
  },
  {
    car: '/manufacturers/car-images/mercedes.png',
    logo: '/manufacturers/mercedes.webp',
    name: 'Mercedes-Benz',
  },
  {
    car: '/manufacturers/car-images/porsche.png',
    logo: '/manufacturers/porsche.webp',
    name: 'Porsche',
  },
  {
    car: '/manufacturers/car-images/range-rover.png',
    logo: '/manufacturers/rangerover.webp',
    name: 'Range Rover',
  },
  {
    car: '/manufacturers/car-images/rollsroye.png',
    logo: '/manufacturers/rollsroyce.webp',
    name: 'Rolls-Royce',
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
            <div className="carousel-item carousel-item-side">
              <div className="carousel-item-background">
                <Image
                  src={carData[previousIndex].logo}
                  alt={carData[previousIndex].name}
                  fill
                  style={{ objectFit: 'contain', opacity: 0.1 }}
                />
              </div>
              <div className="carousel-item-car">
                <Image
                  src={carData[previousIndex].car}
                  alt={carData[previousIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Center (Current) */}
            <div className="carousel-item carousel-item-center">
              <div className="carousel-item-background">
                <Image
                  src={carData[currentIndex].logo}
                  alt={carData[currentIndex].name}
                  fill
                  style={{ objectFit: 'contain', opacity: 0.15 }}
                />
              </div>
              <div className="carousel-item-car">
                <Image
                  src={carData[currentIndex].car}
                  alt={carData[currentIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right (Next) */}
            <div className="carousel-item carousel-item-side">
              <div className="carousel-item-background">
                <Image
                  src={carData[nextIndex].logo}
                  alt={carData[nextIndex].name}
                  fill
                  style={{ objectFit: 'contain', opacity: 0.1 }}
                />
              </div>
              <div className="carousel-item-car">
                <Image
                  src={carData[nextIndex].car}
                  alt={carData[nextIndex].name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* Third Section - Empty placeholder for now */}
      <section className="content-section">{/* Content will be added later */}</section>
    </div>
  )
}
