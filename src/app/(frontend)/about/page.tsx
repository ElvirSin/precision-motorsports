import React from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function AboutPage() {
  return (
    <div className="homepage">
      <Navigation activePage="about" />

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
          <h3 className="hero-subtitle">OUR STORY & COMMITMENT</h3>
          <h2 className="hero-title">PASSION DRIVEN. PRECISION DELIVERED.</h2>
        </div>
      </section>

      {/* About Section */}
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
          </div>
          <div className="right-column">
            <h2 className="section-title">ABOUT PRECISION MOTORSPORTS</h2>

            <div className="content-block">
              <div className="block-icon">🏆</div>
              <div className="block-content">
                <h3>OUR HERITAGE</h3>
                <p>
                  Founded with a passion for automotive excellence, Precision Motorsports has been
                  serving the European and exotic vehicle community for over a decade. We started as
                  a small team of dedicated enthusiasts and have grown into a premier service center
                  trusted by collectors and daily drivers alike.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">👥</div>
              <div className="block-content">
                <h3>OUR TEAM</h3>
                <p>
                  Our certified technicians bring decades of combined experience working with BMW,
                  Mercedes-Benz, Audi, Porsche, Ferrari, Lamborghini, and other prestigious marques.
                  Each team member is factory-trained and continuously updated on the latest
                  technologies and service procedures.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎯</div>
              <div className="block-content">
                <h3>OUR COMMITMENT</h3>
                <p>
                  We believe that every vehicle deserves the highest level of care and attention.
                  Our commitment extends beyond repairs and maintenance - we're dedicated to
                  preserving the driving experience and ensuring your investment is protected for
                  years to come.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🔧</div>
              <div className="block-content">
                <h3>FACILITIES & EQUIPMENT</h3>
                <p>
                  Our state-of-the-art facility is equipped with the latest diagnostic tools,
                  specialized equipment, and genuine parts. We maintain a clean, organized workspace
                  that reflects our attention to detail and professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
