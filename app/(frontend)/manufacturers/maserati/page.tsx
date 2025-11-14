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

export default function MaseratiPage() {
  const [openService, setOpenService] = useState<string | null>(null)

  const handleServiceClick = (serviceType: string) => {
    setOpenService(serviceType)
  }

  const handleCloseModal = () => {
    setOpenService(null)
  }

  const carImage = '/manufacturers/car-images/maserati.png'
  const carAlt = 'Maserati'

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="manufacturer-hero">
        <div className="manufacturer-hero-container">
          <div className="hero-content">
            <h1 className="hero-title">MASERATI SERVICE BY INDEPENDENT EXOTIC CAR EXPERTS</h1>
            <p className="hero-tagline">Proprietary diagnostics. Quiet luxury. Reliable care.</p>
            <p className="hero-description">
              Your Maserati deserves more than a generic repair shop. We're one of the few
              independents equipped with proprietary Maserati diagnostic tools, giving us
              dealer-level insight without dealer-level prices. We address known issues like cooling
              system failures, suspension wear, and electrical glitches with expertise and
              discretion. From Ghibli to MC20, we offer everything from preventative maintenance to
              tasteful cosmetic upgrades and restorations, all delivered with craftsmanship that
              matches the brand's refined luxury.
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
              src="/manufacturers/car-images/maserati.png"
              alt="Maserati"
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
