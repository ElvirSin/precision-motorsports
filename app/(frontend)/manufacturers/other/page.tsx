'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaTachometerAlt,
  FaWrench,
  FaCog,
  FaPaintBrush,
  FaStar,
  FaVolumeUp,
  FaCircle,
  FaWind,
} from 'react-icons/fa'
import ServiceModal from '../../components/ServiceModal'
import { serviceDataMap } from '../../lib/serviceData'
import '../../styles.css'

export default function OtherPage() {
  const [openService, setOpenService] = useState<string | null>(null)

  const handleServiceClick = (serviceType: string) => {
    setOpenService(serviceType)
  }

  const handleCloseModal = () => {
    setOpenService(null)
  }

  const carImage = '/logo.jpg'
  const carAlt = 'Other Brands'

  return (
    <div className="homepage">
      {/* Hero Section - Unique Design */}
      <section className="manufacturer-hero">
        <div className="manufacturer-hero-container">
          <div className="hero-content" style={{ width: '100%', maxWidth: '100%' }}>
            <h1 className="hero-title">EXPERT SERVICE FOR ALL OTHER BRANDS</h1>
            <p className="hero-tagline">
              Universal expertise. Uncompromising quality. Every vehicle.
            </p>
            <p className="hero-description">
              Your vehicle doesn't need to be on our featured list to receive world-class service.
              Whether you drive a Lexus, Land Rover, Tesla, Genesis, or any other premium or exotic
              brand, our team brings the same level of expertise, precision, and care to every
              vehicle. We work with a diverse range of manufacturers, utilizing advanced diagnostic
              equipment and specialized knowledge to ensure your car receives the attention it
              deserves. From routine maintenance to complex repairs, performance upgrades to
              complete restorations, we treat every vehicle with the respect and craftsmanship it
              demands.
            </p>
            <Link href="/book-now">
              <button className="inquire-button">
                INQUIRE NOW
                <span className="button-arrow">→</span>
              </button>
            </Link>
          </div>
          <div
            className="hero-image"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              padding: '40px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                width: '100%',
                maxWidth: '500px',
              }}
            >
              {['Lexus', 'Tesla', 'Genesis', 'Land Rover', 'Alfa Romeo'].map((brand, idx) => (
                <div
                  key={idx}
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(20, 228, 255, 0.1) 100%)',
                    border: '1px solid rgba(74, 158, 255, 0.3)',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {brand}
                </div>
              ))}
            </div>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px',
                textAlign: 'center',
                marginTop: '10px',
                fontStyle: 'italic',
              }}
            >
              And many more...
            </p>
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
            <button className="service-option" onClick={() => handleServiceClick('PERFORMANCE')}>
              <div className="service-icon">
                <FaTachometerAlt />
              </div>
              <h4>PERFORMANCE</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('SERVICE')}>
              <div className="service-icon">
                <FaWrench />
              </div>
              <h4>SERVICE</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('REPAIR')}>
              <div className="service-icon">
                <FaCog />
              </div>
              <h4>REPAIR</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('RESTORATION')}>
              <div className="service-icon">
                <FaPaintBrush />
              </div>
              <h4>RESTORATION</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('COSMETICS')}>
              <div className="service-icon">
                <FaStar />
              </div>
              <h4>COSMETICS</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('AUDIO')}>
              <div className="service-icon">
                <FaVolumeUp />
              </div>
              <h4>AUDIO</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('WHEELS')}>
              <div className="service-icon">
                <FaCircle />
              </div>
              <h4>WHEELS</h4>
              <p>VIEW SERVICES</p>
            </button>
            <button className="service-option" onClick={() => handleServiceClick('AERODYNAMICS')}>
              <div className="service-icon">
                <FaWind />
              </div>
              <h4>AERODYNAMICS</h4>
              <p>VIEW SERVICES</p>
            </button>
          </div>
        </div>
      </section>

      {openService && serviceDataMap[openService] && (
        <ServiceModal
          isOpen={true}
          onClose={handleCloseModal}
          serviceType={openService}
          serviceTitle={serviceDataMap[openService].title}
          serviceDescription={serviceDataMap[openService].description}
          carImage={carImage}
          carAlt={carAlt}
          serviceExamples={serviceDataMap[openService].examples}
        />
      )}
    </div>
  )
}
