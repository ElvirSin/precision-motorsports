import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import './styles.css'

export default function HomePage() {
  return (
    <div className="homepage">
      <Navigation activePage="home" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/hero-bg.jpg"
            alt="BMW M Power Engine"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="hero-content">
          <h3 className="hero-subtitle">EUROPEAN AND EXOTIC AUTOMOTIVE SPECIALISTS</h3>
          <h2 className="hero-title">PREMIUM SERVICE. BEYOND EXPECTATIONS.</h2>
          <Link href="/services" className="cta-button">
            BROWSE SERVICES
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="left-column">
            <div className="car-image">
              <Image
                src="/maserati-mc20.jpg"
                alt="Maserati MC20"
                width={800}
                height={400}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <Link href="/about" className="learn-more-button">
              LEARN MORE ABOUT US
            </Link>
          </div>
          <div className="right-column">
            <h2 className="section-title">PRECISION MOTORSPORTS</h2>

            <div className="content-block">
              <div className="block-icon">📈</div>
              <div className="block-content">
                <h3>INTRODUCTION</h3>
                <p>
                  Welcome to Precision Motorsports, your premier alternative to dealerships for
                  European and exotic vehicles. We pride ourselves on delivering exceptional service
                  with meticulous attention to detail, ensuring your vehicle receives the care it
                  deserves.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">⚙️</div>
              <div className="block-content">
                <h3>OUR MISSION</h3>
                <p>
                  At Precision Motorsports, our mission is to provide unparalleled automotive
                  services that exceed expectations. We aim to create an exclusive haven for
                  automotive enthusiasts, offering comprehensive solutions under one roof while
                  fostering a community built on trust, excellence, and passion for fine
                  automobiles.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🕐</div>
              <div className="block-content">
                <h3>PREMIUM SERVICE & REPAIR</h3>
                <p>
                  We offer a comprehensive suite of services tailored for European & exotic
                  vehicles. Our expert team is dedicated to providing exceptional quality and
                  personalized solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Logos Section */}
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

      {/* Vendor Partners Section */}
      <section className="vendor-partners-section">
        <div className="vendor-partners-container">
          <div className="vendor-partners-header">
            <h2 className="vendor-partners-title">OVER 150+ TRUSTED VENDORS</h2>
            <h3 className="vendor-partners-subtitle">TO FUEL YOUR PERFORMANCE</h3>
            <p className="vendor-partners-description">
              Precision Motorsports partners with a vast network of leading brands to bring you
              top-quality parts and services for every performance need.
            </p>
          </div>

          <div className="vendor-logos-container">
            {/* First row - moving right to left */}
            <div className="vendor-row vendor-row-1">
              <div className="vendor-logos-track">
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
                {/* Duplicate logos for seamless loop */}
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
              </div>
            </div>

            {/* Second row - moving left to right */}
            <div className="vendor-row vendor-row-2">
              <div className="vendor-logos-track vendor-logos-track-reverse">
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
                {/* Duplicate logos for seamless loop */}
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
              </div>
            </div>

            {/* Third row - moving right to left */}
            <div className="vendor-row vendor-row-3">
              <div className="vendor-logos-track">
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
                {/* Duplicate logos for seamless loop */}
                <div className="vendor-logo">
                  <img src="/vendors/air-lift.svg" alt="Air Lift Performance" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/brembo.svg" alt="Brembo" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/szt-tuning.svg" alt="SZT Stage 4 Tuning" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bmc.svg" alt="BMC Air Filter" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/clutch-masters.svg" alt="Clutch Masters" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/corsa.svg" alt="Corsa Performance Exhausts" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/borgwarner.svg" alt="BorgWarner Turbo Systems" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/chemical-guys.svg" alt="Chemical Guys" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/gfb.svg" alt="GFB Go Fast Bits" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bosch.svg" alt="Bosch" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/aeromotive.svg" alt="Aeromotive" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/airaid.svg" alt="Airaid" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/bbs.svg" alt="BBS" />
                </div>
                <div className="vendor-logo">
                  <img src="/vendors/mvforged.svg" alt="MVFORGED" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
