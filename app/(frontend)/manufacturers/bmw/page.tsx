import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import '../../styles.css'

export default function BMWPage() {
  return (
    <div className="homepage">
      <Navigation activePage="manufacturers" />

      {/* Hero Section */}
      <section className="manufacturer-hero">
        <div className="manufacturer-hero-container">
          <div className="hero-content">
            <h1 className="hero-title">BMW SERVICE BY INDEPENDENT EXOTIC CAR EXPERTS</h1>
            <p className="hero-tagline">Proprietary diagnostics. Quiet luxury. Reliable care.</p>
            <p className="hero-description">
              Your BMW deserves more than a generic repair shop. We're one of the few independents
              equipped with proprietary BMW diagnostic tools, giving us dealer-level insight without
              dealer-level prices. We address known issues like cooling system failures, suspension
              wear, and electrical glitches with expertise and discretion. From 3 Series to M8, we
              offer everything from preventative maintenance to tasteful cosmetic upgrades and
              restorations, all delivered with craftsmanship that matches the brand's refined
              luxury.
            </p>
            <Link href="/book-now">
              <button className="inquire-button">
                INQUIRE NOW
                <span className="button-arrow">→</span>
              </button>
            </Link>
          </div>
          <div className="hero-image">
            <Image
              src="/manufacturers/car-images/bmw.png"
              alt="BMW"
              width={600}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Service Descriptions */}
      <section className="service-descriptions">
        <div className="service-descriptions-container">
          <div className="description-block">
            <h3>TAILORED EUROPEAN EXPERTISE</h3>
            <p>
              Delivering precision diagnostics and service tailored to each make and model — from
              BMW to Bentley — with manufacturer-level tools and expertise.
            </p>
          </div>
          <div className="description-block">
            <h3>UNMATCHED ATTENTION TO DETAIL</h3>
            <p>
              Every repair is executed with care, craftsmanship, and a meticulous eye — because
              luxury vehicles deserve nothing less than perfection.
            </p>
          </div>
          <div className="description-block">
            <h3>TRANSPARENT, CLIENT-FOCUSED SERVICE</h3>
            <p>
              We keep you informed at every step, offering honest recommendations and a personalized
              experience tailored to your vehicle and goals.
            </p>
          </div>
          <div className="description-block">
            <h3>RELIABLE MAINTENANCE. LASTING PERFORMANCE</h3>
            <p>
              From routine service to complex repairs, we ensure long-term performance, reliability,
              and value for every vehicle we maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Service Options Grid */}
      <section className="service-options">
        <div className="service-options-container">
          <div className="service-options-grid">
            <button className="service-option">
              <div className="service-icon">⚡</div>
              <h4>PERFORMANCE</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">🔧</div>
              <h4>SERVICE</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">⚙️</div>
              <h4>REPAIR</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">🎨</div>
              <h4>RESTORATION</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">✨</div>
              <h4>COSMETICS</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">🔊</div>
              <h4>AUDIO</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">⚫</div>
              <h4>WHEELS</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option">
              <div className="service-icon">💨</div>
              <h4>AERODYNAMICS</h4>
              <p>VIEW SERVICES</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
