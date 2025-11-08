'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles.css'

interface CarData {
  name: string
  carImage: string
  logoImage: string
  url: string
}

const cars: CarData[] = [
  {
    name: 'Aston Martin',
    carImage: '/manufacturers/car-images/aston-martin.png',
    logoImage: '/manufacturers/astonmartin.webp',
    url: '/manufacturers/aston-martin',
  },
  {
    name: 'Audi',
    carImage: '/manufacturers/car-images/audi.png',
    logoImage: '/manufacturers/audi.webp',
    url: '/manufacturers/audi',
  },
  {
    name: 'Bentley',
    carImage: '/manufacturers/car-images/bentley.png',
    logoImage: '/manufacturers/bentley.webp',
    url: '/manufacturers/bentley',
  },
  {
    name: 'BMW',
    carImage: '/manufacturers/car-images/bmw.png',
    logoImage: '/manufacturers/bmw.webp',
    url: '/manufacturers/bmw',
  },
  {
    name: 'Ferrari',
    carImage: '/manufacturers/car-images/ferrari.png',
    logoImage: '/manufacturers/ferrari.webp',
    url: '/manufacturers/ferrari',
  },
  {
    name: 'Lamborghini',
    carImage: '/manufacturers/car-images/lamborghini.png',
    logoImage: '/manufacturers/lamborghini.webp',
    url: '/manufacturers/lamborghini',
  },
  {
    name: 'Maserati',
    carImage: '/manufacturers/car-images/maserati.png',
    logoImage: '/manufacturers/maserati.webp',
    url: '/manufacturers/maserati',
  },
  {
    name: 'McLaren',
    carImage: '/manufacturers/car-images/mclaren.png',
    logoImage: '/manufacturers/mclaren.webp',
    url: '/manufacturers/mclaren',
  },
  {
    name: 'Mercedes',
    carImage: '/manufacturers/car-images/mercedes.png',
    logoImage: '/manufacturers/mercedes.webp',
    url: '/manufacturers/mercedes',
  },
  {
    name: 'Mini',
    carImage: '/manufacturers/car-images/mini.png',
    logoImage: '/manufacturers/mini.webp',
    url: '/manufacturers/mini',
  },
  {
    name: 'Porsche',
    carImage: '/manufacturers/car-images/porsche.png',
    logoImage: '/manufacturers/porsche.webp',
    url: '/manufacturers/porsche',
  },
  {
    name: 'Range Rover',
    carImage: '/manufacturers/car-images/range-rover.png',
    logoImage: '/manufacturers/rangerover.webp',
    url: '/manufacturers/range-rover',
  },
  {
    name: 'Rolls-Royce',
    carImage: '/manufacturers/car-images/rollsroye.png',
    logoImage: '/manufacturers/rollsroyce.webp',
    url: '/manufacturers/rolls-royce',
  },
  {
    name: 'Volkswagen',
    carImage: '/manufacturers/car-images/vw.webp',
    logoImage: '/manufacturers/vw.webp',
    url: '/manufacturers/volkswagen',
  },
]

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
  }

  // Get visible cars (show 3-5 cars at once, with center one active)
  const getVisibleCars = () => {
    const visible = []
    // Show 5 cars: 2 before, current, 2 after
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + cars.length) % cars.length
      let positionClass = ''
      if (i === -2) positionClass = 'position-prev2'
      else if (i === -1) positionClass = 'position-prev1'
      else if (i === 0) positionClass = 'position-center'
      else if (i === 1) positionClass = 'position-next1'
      else if (i === 2) positionClass = 'position-next2'
      visible.push({ ...cars[index], position: i, positionClass })
    }
    return visible
  }

  return (
    <div className="homepage">
      {/* First Section - Hero Section with Car Carousel */}
      <section className="hero services-hero" style={{ backgroundColor: '#000' }}>
        <div className="hero-content services-hero-content">
          <h3 className="hero-subtitle">TAILORED SERVICES FOR EUROPEAN & EXOTIC VEHICLES</h3>
          <h2 className="hero-title">
            YOUR DEDICATED TEAM FOR MAINTENANCE, REPAIR AND PERFORMANCE UPGRADES
          </h2>
        </div>

        <div className="services-carousel-container">
          <button
            className="services-carousel-arrow services-carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Previous car"
          >
            ‹
          </button>

          <div className="services-carousel">
            {getVisibleCars().map((car, idx) => (
              <Link
                key={`${car.name}-${idx}`}
                href={car.url}
                className={`services-car-item ${car.positionClass} ${
                  car.position === 0 ? 'active' : ''
                }`}
              >
                <div className="services-car-logo-background">
                  <Image
                    src={car.logoImage}
                    alt={`${car.name} logo`}
                    fill
                    style={{ objectFit: 'contain', opacity: 0.15 }}
                  />
                </div>
                <div className="services-car-image">
                  <Image
                    src={car.carImage}
                    alt={car.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={car.position === 0}
                  />
                </div>
              </Link>
            ))}
          </div>

          <button
            className="services-carousel-arrow services-carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next car"
          >
            ›
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
