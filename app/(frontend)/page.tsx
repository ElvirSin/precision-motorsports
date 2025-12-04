import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import VendorLogo from './components/VendorLogo'
import ScrollArrow from './components/ScrollArrow'
import './styles.css'

// Dynamically import heavy components
const CyclingHero = dynamic(() => import('./components/CyclingHero'), {
  ssr: true,
})
const PromotionWrapper = dynamic(() => import('./components/PromotionWrapper'), {
  ssr: true,
})

export default function HomePage() {
  return (
    <div className="homepage">
      <PromotionWrapper />
      {/* Hero Section */}
      <section className="hero">
        <CyclingHero />
        <div className="hero-content">
          <h3 className="hero-subtitle">EUROPEAN AND EXOTIC AUTOMOTIVE SPECIALISTS</h3>
          <h2 className="hero-title">
            PREMIUM SERVICE.
            <br />
            BEYOND EXPECTATIONS.
          </h2>
          <Link href="/services" className="cta-button">
            BROWSE SERVICES
          </Link>
          <div className="hero-scroll-arrow-wrapper">
            <ScrollArrow />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">PRECISION MOTORSPORTS</h2>

          <div className="content-grid">
            <div className="left-column">
              <div className="car-image">
                <Image
                  src="/home-page/maserati.jpg"
                  alt="Maserati MC20"
                  width={800}
                  height={400}
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <Link href="/about" className="learn-more-button">
                LEARN MORE ABOUT US
              </Link>
            </div>
            <div className="right-column">
              <div className="content-block">
                <div className="block-content">
                  <h3>INTRODUCTION</h3>
                  <p>
                    Welcome to Precision Motorsports, your premier alternative to dealerships for
                    European and exotic vehicles. We pride ourselves on delivering exceptional
                    service with meticulous attention to detail, ensuring your vehicle receives the
                    care it deserves.
                  </p>
                </div>
              </div>

              <div className="content-block">
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
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/audi" className="manufacturer-item">
              <Image
                src="/manufacturers/audi.webp"
                alt="Audi"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/bentley" className="manufacturer-item">
              <Image
                src="/manufacturers/bentley.webp"
                alt="Bentley"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/bmw" className="manufacturer-item">
              <Image
                src="/manufacturers/bmw.webp"
                alt="BMW"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/ferrari" className="manufacturer-item">
              <Image
                src="/manufacturers/ferrari.webp"
                alt="Ferrari"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/lamborghini" className="manufacturer-item">
              <Image
                src="/manufacturers/lamborghini.webp"
                alt="Lamborghini"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/maserati" className="manufacturer-item">
              <Image
                src="/manufacturers/maserati.webp"
                alt="Maserati"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/mclaren" className="manufacturer-item">
              <Image
                src="/manufacturers/mclaren.webp"
                alt="McLaren"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/mercedes" className="manufacturer-item">
              <Image
                src="/manufacturers/mercedes.webp"
                alt="Mercedes-Benz"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/mini" className="manufacturer-item">
              <Image
                src="/manufacturers/mini.webp"
                alt="Mini"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/porsche" className="manufacturer-item">
              <Image
                src="/manufacturers/porsche.webp"
                alt="Porsche"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/range-rover" className="manufacturer-item">
              <Image
                src="/manufacturers/rangerover.webp"
                alt="Range Rover"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/rolls-royce" className="manufacturer-item">
              <Image
                src="/manufacturers/rollsroyce.webp"
                alt="Rolls-Royce"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/volkswagen" className="manufacturer-item">
              <Image
                src="/manufacturers/vw.webp"
                alt="Volkswagen"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </Link>
            <Link href="/manufacturers/jaguar" className="manufacturer-item">
              <Image
                src="/manufacturers/jaguar.webp"
                alt="Jaguar"
                width={120}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
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
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
                {/* Duplicate logos for seamless loop */}
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
              </div>
            </div>

            {/* Second row - moving left to right */}
            <div className="vendor-row vendor-row-2">
              <div className="vendor-logos-track vendor-logos-track-reverse">
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
                {/* Duplicate logos for seamless loop */}
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
              </div>
            </div>

            {/* Third row - moving right to left */}
            <div className="vendor-row vendor-row-3">
              <div className="vendor-logos-track">
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
                {/* Duplicate logos for seamless loop */}
                <VendorLogo src="/vendors/akrapovic.png" alt="Akrapovic" />
                <VendorLogo src="/vendors/ams.png" alt="AMS Performance" />
                <VendorLogo src="/vendors/bilstein.png" alt="Bilstein" />
                <VendorLogo src="/vendors/bmwairfilter.png" alt="BMW Air Filter" />
                <VendorLogo src="/vendors/brixton.png" alt="Brixton Forged" />
                <VendorLogo src="/vendors/csf.png" alt="CSF" />
                <VendorLogo src="/vendors/hre.png" alt="HRE Wheels" />
                <VendorLogo src="/vendors/agencypower.png" alt="Agency Power" />
                <VendorLogo src="/vendors/chemical-guys.png" alt="Chemical Guys" />
                <VendorLogo src="/vendors/bosch.png" alt="Bosch" />
                <VendorLogo src="/vendors/borgwagner.png" alt="BorgWarner Turbo Systems" />
                <VendorLogo src="/vendors/air-lift.png" alt="Air Lift Performance" />
                <VendorLogo src="/vendors/aeromotive.png" alt="Aeromotive" />
                <VendorLogo src="/vendors/airaid.png" alt="Airaid" />
                <VendorLogo src="/vendors/bbs.png" alt="BBS" />
                <VendorLogo src="/vendors/mvforged.png" alt="MVFORGED" />
                <VendorLogo src="/vendors/clutch-masters.png" alt="Clutch Masters" />
                <VendorLogo src="/vendors/brembo.png" alt="Brembo" />
                <VendorLogo src="/vendors/s4t.png" alt="S4T Tuning" />
                <VendorLogo src="/vendors/bmc.png" alt="BMC Air Filter" />
                <VendorLogo src="/vendors/corsa.png" alt="Corsa Performance Exhausts" />
                <VendorLogo src="/vendors/gfb.png" alt="GFB Go Fast Bits" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
