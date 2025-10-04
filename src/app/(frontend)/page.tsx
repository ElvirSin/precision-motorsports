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
            <span className="button-icon">⚙️</span>
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
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
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
    </div>
  )
}
